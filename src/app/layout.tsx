import type { Metadata } from "next";
import { Prata, Jost } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { WhatsAppFab } from "@/components/WhatsAppFab";

// Display: Prata — the high-contrast serif that carries the resort-luxury
// reference. It ships a single weight; its elegance comes from scale and air.
const prata = Prata({
  subsets: ["latin"],
  variable: "--font-prata",
  display: "swap",
  weight: ["400"],
});

// Sans: a geometric with the same wide, calm tracking as "MEDICAL AESTHETICS".
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Aesthetics, Wellness & Beauty in Harare`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "aesthetics Harare",
    "IV drips Harare",
    "facials Harare",
    "body contouring Zimbabwe",
    "laser hair removal Harare",
    "massage Greendale",
    "Zarrow Aesthetics",
  ],
  openGraph: {
    title: `${SITE.name} — Aesthetics, Wellness & Beauty in Harare`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_ZW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${prata.variable} ${jost.variable}`}>
      <body className="min-h-dvh antialiased">
        <ScrollProgress />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-brown-800 focus:px-5 focus:py-3 focus:text-sm focus:text-cream"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
