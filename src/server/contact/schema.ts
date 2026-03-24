import { z } from "zod";

export const contactSubmissionSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  email: z.string().trim().email("Valid email is required").max(320),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  industry: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message is too short").max(5000),
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;

