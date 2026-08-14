import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const causten = localFont({
  src: "./fonts/Causten-Light.otf",
  weight: "300",
  variable: "--font-heading",
  display: "swap",
});

const freight = localFont({
  src: [
    { path: "./fonts/FreightBigPro-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/FreightBigPro-LightItalic.woff2", weight: "300", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mercfund.com"),
  title: {
    default: "Mercury Partners | Permanent Capital for Founder-Owned Businesses",
    template: "%s | Mercury Partners",
  },
  description:
    "Mercury Partners is an investment company with over 25 years of principal investing and CEO experience, acquiring and operating founder-owned businesses across the lower middle market.",
  openGraph: {
    siteName: "Mercury Partners",
    type: "website",
    images: ["/images/mercury-meeting.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${causten.variable} ${freight.variable} ${inter.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
