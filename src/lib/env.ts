const required = (key: string, value: string | undefined) => {
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
};

export const env = {
  resendApiKey: process.env.RESEND_API_KEY,
  contactToEmail: process.env.CONTACT_TO_EMAIL ?? "jehkat505@gmail.com",
  contactFromEmail:
    process.env.CONTACT_FROM_EMAIL ??
    "Luminous Pixels Contact <onboarding@resend.dev>",
  sanityProjectId: required(
    "NEXT_PUBLIC_SANITY_PROJECT_ID",
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  ),
  sanityDataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  sanityApiVersion:
    process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01",
};

