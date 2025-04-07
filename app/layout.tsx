import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Turvax - Kilpailutus",
  description: "Kilpailuta turvapalvelut ja löydä paras tarjous.",
  keywords: "turvapalveluiden kilpailutus, turvallisuuspalvelut tarjous, pyydä tarjous, kotiturvapalvelut, turvapalvelut yrityksille, turvallisuuspalvelut, turvapalvelut, turvallisuusratkaisut, turvallisuuspalveluiden kilpailutus, turvallisuuspalveluiden tarjoukset",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
