import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: "Luminous Pixels Agency - AI Automation for Service Businesses",
    template: "%s | Luminous Pixels Agency",
  },
  description:
    "We build AI automation systems that eliminate repetitive work and scale your service business - in real estate, healthcare, e-commerce, and finance.",
  keywords: [
    "AI automation",
    "AI consulting",
    "AI workflow design",
    "AI systems architecture",
    "real estate AI",
    "healthcare AI",
    "ecommerce AI",
    "finance AI",
  ],
  authors: [{ name: "Luminous Pixels Agency" }],
  creator: "Luminous Pixels Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luminouspixels.agency",
    siteName: "Luminous Pixels Agency",
    title: "Luminous Pixels Agency - AI Automation for Service Businesses",
    description:
      "We build AI automation systems that eliminate repetitive work and scale your service business.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luminous Pixels Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luminous Pixels Agency - AI Automation",
    description: "AI automation systems for service businesses worldwide.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="bg-[--bg-primary] text-[--text-primary] font-body antialiased">
        {children}
      </body>
    </html>
  );
}

