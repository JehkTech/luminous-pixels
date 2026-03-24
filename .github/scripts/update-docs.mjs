#!/usr/bin/env node
/**
 * update-docs.mjs
 *
 * Reads key source files from the repository and asks OpenAI to produce
 * an up-to-date README.md that accurately reflects the current codebase.
 *
 * Required environment variable:
 *   OPENAI_API_KEY  – A valid OpenAI API key with access to a chat model.
 *
 * Optional environment variable:
 *   OPENAI_MODEL    – Model to use (default: "gpt-4o-mini").
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../../");

// ── helpers ──────────────────────────────────────────────────────────────────

function readFile(relPath) {
  const abs = path.join(ROOT, relPath);
  if (!fs.existsSync(abs)) return null;
  return fs.readFileSync(abs, "utf8");
}

/** Recursively collect all files matching an extension inside a directory. */
async function collectFiles(
  dir,
  exts = [".tsx", ".ts"],
  maxDepth = 4,
  depth = 0
) {
  const results = [];
  if (depth > maxDepth) return results;
  try {
    const entries = await fs.promises.readdir(dir);
    for (const entry of entries) {
      const full = path.join(dir, entry);
      const stat = await fs.promises.stat(full);
      if (stat.isDirectory()) {
        results.push(...(await collectFiles(full, exts, maxDepth, depth + 1)));
      } else if (exts.some((e) => entry.endsWith(e))) {
        results.push(full);
      }
    }
  } catch {
    // directory doesn't exist or isn't readable – skip silently
  }
  return results;
}

/** Truncate a file's content if it is very long to avoid token limits. */
function truncate(content, maxChars = 3000) {
  if (content.length <= maxChars) return content;
  return content.slice(0, maxChars) + "\n... [truncated]";
}

// ── build context ─────────────────────────────────────────────────────────────

const packageJson = readFile("package.json");
const existingReadme = readFile("README.md") ?? "";
const viteConfig = readFile("vite.config.ts");
const attributions = readFile("ATTRIBUTIONS.md");

// Collect source files – pages, layout, top-level components (skip ui primitives)
const srcFiles = (await collectFiles(path.join(ROOT, "src"))).filter((f) => {
  const rel = path.relative(ROOT, f);
  // Skip auto-generated shadcn/ui primitives – they add noise without value
  return !rel.includes("components/ui/");
});

const sourceSnippets = srcFiles
  .map((f) => {
    const rel = path.relative(ROOT, f);
    const content = truncate(fs.readFileSync(f, "utf8"));
    return `### ${rel}\n\`\`\`tsx\n${content}\n\`\`\``;
  })
  .join("\n\n");

const context = `
## package.json
\`\`\`json
${packageJson}
\`\`\`

## vite.config.ts
\`\`\`ts
${viteConfig ?? ""}
\`\`\`

## Source files (non-UI-primitive)
${sourceSnippets}

## Current README.md
\`\`\`markdown
${existingReadme}
\`\`\`
${
  attributions
    ? `\n## ATTRIBUTIONS.md\n\`\`\`markdown\n${attributions}\n\`\`\``
    : ""
}
`.trim();

// ── call OpenAI ───────────────────────────────────────────────────────────────

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  // Emit a visible GitHub Actions warning so the missing secret doesn't go unnoticed,
  // but exit 0 so forks / branches without the secret don't break their CI.
  console.log(
    "::warning::OPENAI_API_KEY is not set — skipping documentation update. " +
      "Add the secret to your repository to enable automatic README regeneration."
  );
  process.exit(0);
}

const model = process.env.OPENAI_MODEL ?? "gpt-4o-mini";

const systemPrompt = `You are a technical writer. Given a React/TypeScript web application's source files, 
produce a comprehensive, well-structured README.md in Markdown format.

The README must include:
1. A concise project title and description
2. A "Tech Stack" section listing the main libraries and tools
3. A "Project Structure" section that maps out the important directories and files
4. A "Pages & Routes" section describing each route and what it renders
5. A "Getting Started" section with commands to install dependencies and run the dev server
6. A "Build" section with the production build command
7. A "Attribution" section if there are third-party attributions to mention

Write clean, professional Markdown. Do NOT include any prose outside the README – output only the Markdown document.`;

const userPrompt = `Here is the project context:\n\n${context}\n\nPlease generate an updated README.md.`;

console.log(`Calling OpenAI model "${model}" to generate documentation…`);

const response = await fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
  body: JSON.stringify({
    model,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
    temperature: 0.3,
  }),
});

if (!response.ok) {
  const body = await response.text();
  console.error(`OpenAI API error ${response.status}: ${body}`);
  process.exit(1);
}

const data = await response.json();
const newReadme = data.choices?.[0]?.message?.content?.trim();

if (!newReadme) {
  console.error("OpenAI returned an empty response. Skipping update.");
  process.exit(1);
}

// ── write README.md ───────────────────────────────────────────────────────────

fs.writeFileSync(path.join(ROOT, "README.md"), newReadme + "\n");
console.log("README.md updated successfully.");
