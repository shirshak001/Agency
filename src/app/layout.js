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
    default: "3Bit Studio | Premier Digital Agency - Web Development, Branding & AI Automation",
    template: "%s | 3Bit Studio"
  },
  description:
    "3Bit Studio is a premier digital agency specializing in custom web development, mobile app creation, UI/UX design, branding, AI automation, and digital marketing. Transform your business with our innovative solutions.",
  keywords: [
    "3Bit Studio",
    "digital agency",
    "web development",
    "mobile app development",
    "UI UX design",
    "branding agency",
    "AI automation",
    "React development",
    "Next.js development",
    "cross platform apps",
    "custom software",
    "digital transformation",
    "startup development",
    "enterprise solutions",
    "SEO optimization",
    "digital marketing",
    "graphic design",
    "video editing",
    "social media management",
    "e-commerce development",
    "portfolio website",
    "business automation"
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
    siteName: "3Bit Studio",
    title: "3Bit Studio | Premier Digital Agency - Web Development, Branding & AI Automation",
    description: "Transform your business with custom web development, mobile apps, UI/UX design, branding, and AI automation. Leading digital agency with proven results.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "3Bit Studio - Premier Digital Agency",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "3Bit Studio - Digital Solutions",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@3bitstudio",
    creator: "@3bitstudio",
    title: "3Bit Studio | Premier Digital Agency - Web Development, Branding & AI Automation",
    description: "Transform your business with custom web development, mobile apps, UI/UX design, branding, and AI automation. Leading digital agency with proven results.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "3Bit Studio",
              "alternateName": "3Bit Digital Agency",
              "url": "https://www.3bitstudio.com",
              "logo": "https://www.3bitstudio.com/favicon.svg",
              "image": "https://www.3bitstudio.com/og-image.jpg",
              "description": "Premier digital agency specializing in web development, mobile apps, UI/UX design, branding, and AI automation",
              "foundingDate": "2023",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-XXX-XXX-XXXX",
                "contactType": "customer service",
                "availableLanguage": ["English"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://linkedin.com/company/3bitstudio",
                "https://twitter.com/3bitstudio",
                "https://facebook.com/3bitstudio",
                "https://instagram.com/3bitstudio"
              ],
              "services": [
                "Web Development",
                "Mobile App Development",
                "UI/UX Design",
                "Branding",
                "AI Automation",
                "Digital Marketing",
                "E-commerce Development"
              ],
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Development",
                      "description": "Custom web applications and websites"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mobile App Development",
                      "description": "Cross-platform mobile applications"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "UI/UX Design",
                      "description": "User interface and experience design"
                    }
                  }
                ]
              }
            })
          }}
        />
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
