import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "3Bit Studio | Branding, Web Development, UI/UX, App Development & AI Automation",
  description:
    "3Bit Studio is a full-service digital agency offering Branding, UI/UX Design, Web & App Development, Video Editing, Graphic Design, AI Automation, and Social Media Management.",
  keywords:
    "3Bit Studio, branding agency, UI/UX design, web development, app development, cross platform apps, web applications, video editing, graphic design, AI automation, online business management, social media management, creative studio, digital agency",
  authors: [{ name: "3Bit Studio" }],
  robots: "index, follow",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://www.3bitstudio.com",
    title:
      "3Bit Studio | Branding, Web Development, UI/UX, App Development & AI Automation",
    description:
      "A creative agency specializing in Branding, UI/UX, Web & App Development, AI Automation, Video Editing, and Digital Business Management.",
    images: [
      {
        url: "https://www.3bitstudio.com/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "3Bit Studio - Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "3Bit Studio | Branding, Web Development, UI/UX, App Development & AI Automation",
    description:
      "Creative agency for Branding, UI/UX Design, App Development, Video Editing, Graphic Design & AI Automation.",
    images: ["https://www.3bitstudio.com/assets/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
