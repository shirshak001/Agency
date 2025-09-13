import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "App Development Agency | IT Solutions Company | 3Bit Studio - No.1 Digital Transformation Partner",
    template: "%s | 3Bit Studio - Leading App Development Agency & IT Solutions"
  },
  description:
    "🏆 Top App Development Agency & IT Solutions Company in India ⭐ 3Bit Studio: Mobile App Development, Custom Software, AI Solutions, Cloud Services. 500+ Projects ✅ Fortune 500 Clients ✅ 24/7 Support ✅ Free Consultation!",
  keywords: [
    // Primary target keywords
    "app development agency",
    "IT solutions",
    "app development agency India",
    "IT solutions company",
    "mobile app development agency",
    "custom software development company",
    "digital transformation agency",
    "enterprise IT solutions",
    "business app development",
    
    // Secondary keywords
    "No 1 website development company",
    "best app development company India",
    "top IT solutions provider",
    "premium mobile app development",
    "custom app development services",
    "professional software development",
    "3Bit Studio",
    "app development company near me",
    "affordable app development",
    "React Native development company",
    "Flutter app development services",
    "iOS app development agency",
    "Android app development company",
    "cross-platform app development",
    "UI UX design agency",
    "web development agency India",
    "e-commerce app development",
    "fintech app development",
    "healthcare app solutions",
    "AI powered applications",
    "machine learning solutions",
    "blockchain development",
    "cloud migration services",
    "DevOps consulting",
    "API development services",
    "microservices architecture",
    "startup app development",
    "enterprise app solutions",
    "scalable IT infrastructure",
    "digital marketing solutions",
    "IT consulting services",
    "technology partnerships",
    "agile development methodology",
    "24/7 technical support",
    "app maintenance services"
  ],
  authors: [{ name: "3Bit Studio", url: "https://www.3bitstudio.com" }],
  creator: "3Bit Studio",
  publisher: "3Bit Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.3bitstudio.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/favicon.svg",
        sizes: "180x180",
        type: "image/svg+xml",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.svg",
        color: "#8B5CF6",
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.3bitstudio.com",
    siteName: "3Bit Studio - App Development Agency & IT Solutions Company",
    title: "App Development Agency | IT Solutions Company | 3Bit Studio - No.1 Digital Transformation Partner",
    description: "🏆 Top App Development Agency & IT Solutions Company in India ⭐ 3Bit Studio: Mobile App Development, Custom Software, AI Solutions, Cloud Services. 500+ Projects ✅ Fortune 500 Clients ✅ 24/7 Support",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "3Bit Studio - Leading App Development Agency & IT Solutions Company",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "3Bit Studio - Premium IT Solutions & App Development",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@3bitstudio",
    creator: "@3bitstudio",
    title: "App Development Agency | IT Solutions Company | 3Bit Studio - No.1 Digital Transformation Partner",
    description: "🏆 Top App Development Agency & IT Solutions Company in India ⭐ Mobile App Development, Custom Software, AI Solutions, Cloud Services. 500+ Projects ✅ Fortune 500 Clients",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Digital Agency",
  other: {
    "theme-color": "#8B5CF6",
    "color-scheme": "dark light",
    "twitter:image:alt": "3Bit Studio - Premier Digital Agency",
    "facebook-domain-verification": "your-facebook-verification-code",
    "msapplication-TileColor": "#8B5CF6",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
