import { Resend } from "resend";
import { env } from "@/lib/env";
import type { ContactSubmission } from "./schema";
import { buildContactEmailHtml } from "./templates";

export async function sendContactNotification(submission: ContactSubmission) {
  if (!env.resendApiKey) {
    throw new Error("Missing environment variable: RESEND_API_KEY");
  }

  const resend = new Resend(env.resendApiKey);

  await resend.emails.send({
    from: env.contactFromEmail,
    to: [env.contactToEmail],
    replyTo: submission.email,
    subject: `New inquiry from ${submission.name} - ${submission.company || "Independent"}`,
    html: buildContactEmailHtml(submission),
  });
}

