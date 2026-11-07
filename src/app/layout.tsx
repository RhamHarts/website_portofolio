import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";
import { SiteNav } from "../components/site-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Irham — Portfolio",
  description:
    "Personal portfolio of Muhammad Irham, documenting professional experience, projects, skills, and career journey.",
  openGraph: {
    title: "Muhammad Irham — Portfolio",
    description:
      "Explore my professional experience, projects, skills, and career journey.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
