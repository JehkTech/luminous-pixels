import type { ContactSubmission } from "./schema";
import escapeHtmlLib from "escape-html";

const escapeHtml = (value: string) => escapeHtmlLib(value);

export function buildContactEmailHtml(submission: ContactSubmission) {
  const safeName = escapeHtml(submission.name);
  const safeEmail = escapeHtml(submission.email);
  const safeCompany = submission.company ? escapeHtml(submission.company) : "";
  const safeIndustry = submission.industry ? escapeHtml(submission.industry) : "";
  const safeMessage = escapeHtml(submission.message).replaceAll("\n", "<br>");

  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0891b2;">New Contact Form Submission</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #71717a; width: 120px;">Name</td><td style="padding: 8px 0;"><strong>${safeName}</strong></td></tr>
        <tr><td style="padding: 8px 0; color: #71717a;">Email</td><td style="padding: 8px 0;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
        ${safeCompany ? `<tr><td style="padding: 8px 0; color: #71717a;">Company</td><td style="padding: 8px 0;">${safeCompany}</td></tr>` : ""}
        ${safeIndustry ? `<tr><td style="padding: 8px 0; color: #71717a;">Industry</td><td style="padding: 8px 0;">${safeIndustry}</td></tr>` : ""}
      </table>
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 1.5rem 0;" />
      <h3 style="color: #18181b;">Message</h3>
      <p style="color: #3f3f46; line-height: 1.7;">${safeMessage}</p>
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 1.5rem 0;" />
      <p style="font-size: 12px; color: #a1a1aa;">Sent from luminouspixels.agency contact form</p>
    </div>
  `;
}

