import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { blogPost } from "./schemas/blog";
import { caseStudy } from "./schemas/caseStudy";

export default defineConfig({
  name: "luminous-pixels",
  title: "Luminous Pixels CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Blog Posts")
              .child(S.documentTypeList("blogPost")),
            S.listItem()
              .title("Case Studies")
              .child(S.documentTypeList("caseStudy")),
          ]),
    }),
  ],
  schema: {
    types: [blogPost, caseStudy],
  },
});

