import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BackToTop from "./components/BackToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "Suraj Vishwakarma | Full Stack Developer",
    template: "%s | Suraj Vishwakarma",
  },

  description:
    "Suraj Vishwakarma is a Professional Full Stack Developer specializing in Next.js, React.js, Node.js, MongoDB, Tailwind CSS and modern web applications.",

  keywords: [
    "Suraj Vishwakarma",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "JavaScript Developer",
    "Web Developer Mumbai",
    "Portfolio Website",
  ],

  authors: [
    {
      name: "Suraj Vishwakarma",
    },
  ],

  creator: "Suraj Vishwakarma",

  openGraph: {
    title: "Suraj Vishwakarma | Full Stack Developer",
    description:
      "Professional Full Stack Developer Portfolio built with Next.js, React, Node.js and MongoDB.",
    url: "https://your-domain.com",
    siteName: "Suraj Vishwakarma Portfolio",
    images: [
      {
        url: "/SURAJ.png",
        width: 1200,
        height: 630,
        alt: "Suraj Vishwakarma",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Suraj Vishwakarma | Full Stack Developer",
    description:
      "Professional Full Stack Developer Portfolio built with Next.js, React, Node.js and MongoDB.",
    images: ["/SURAJ.png"],
  },

  icons: {
    icon: "/SURAJ.png",
    shortcut: "/SURAJ.png",
    apple: "/SURAJ.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />

        <main className="min-h-screen pt-20">
          {children}
        </main>

        <Footer />
         <BackToTop />
      </body>
    </html>
  );
}