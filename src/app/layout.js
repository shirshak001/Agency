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
    default: "No.1 Website Development Company| 3Bit Studio - Premium Web Development & Digital Solutions",
    template: "%s | 3Bit Studio - Leading Digital Agency"
  },
  description:
    " No.1 Website Development Company in India ⭐ 3Bit Studio delivers premium web development, mobile apps, UI/UX design & AI automation. 500+ Projects ✅ 24/7 Support ✅ Starting ₹9,999 ✅ Get Free Quote Today!",
  keywords: [
    "No 1 website development company",
    "best web development company India",
    "top website development agency",
    "premium web development services",
    "custom website development",
    "professional web design company",
    "3Bit Studio",
    "website development company near me",
    "affordable web development",
    "React development company",
    "Next.js development services",
    "mobile app development company",
    "UI UX design agency",
    "digital transformation company",
    "web development agency India",
    "custom software development",
    "e-commerce development company",
    "responsive web design",
    "SEO friendly websites",
    "business website development",
    "startup web development",
    "enterprise web solutions",
    "web application development",
    "full stack development company",
    "digital marketing agency",
    "branding and web design",
    "website redesign services",
    "WordPress development",
    "React Native app development",
    "AI automation services",
    "cloud hosting solutions",
    "website maintenance support",
    "24/7 technical support"
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
    siteName: "3Bit Studio - No.1 Website Development Company",
    title: "No.1 Website Development Company | 3Bit Studio - Premium Web Development & Digital Solutions",
    description: " Website Devel🏆 No.1opment Company in India ⭐ 3Bit Studio delivers premium web development, mobile apps, UI/UX design & AI automation. 500+ Projects ✅ 24/7 Support ✅ Starting ₹9,999 ✅ Get Free Quote Today!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "3Bit Studio - No.1 Website Development Company in India",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "3Bit Studio - Premium Digital Solutions",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@3bitstudio",
    creator: "@3bitstudio",
    title: "No.1 Website Development Company | 3Bit Studio - Premium Web Development & Digital Solutions",
    description: "🏆 No.1 Website Development Company in India ⭐ 3Bit Studio delivers premium web development, mobile apps, UI/UX design & AI automation. 500+ Projects ✅ 24/7 Support ✅ Starting ₹9,999",
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
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.3bitstudio.com/#organization",
                  "name": "3Bit Studio",
                  "alternateName": ["3BitStudio", "No.1 Website Development Company"],
                  "url": "https://www.3bitstudio.com",
                  "logo": {
                    "@type": "ImageObject",
                    "@id": "https://www.3bitstudio.com/#logo",
                    "url": "https://www.3bitstudio.com/favicon.svg",
                    "width": 512,
                    "height": 512,
                    "caption": "3Bit Studio Logo"
                  },
                  "image": {
                    "@id": "https://www.3bitstudio.com/#logo"
                  },
                  "description": "No.1 Website Development Company in India providing premium web development, mobile app development, UI/UX design, and AI automation services. 500+ Projects completed with 24/7 support.",
                  "founder": {
                    "@type": "Person",
                    "name": "3Bit Studio Founders"
                  },
                  "foundingDate": "2020",
                  "slogan": "No.1 Website Development Company - Digital Innovation That Drives Results",
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "telephone": "+91-8791167321",
                      "contactType": "customer service",
                      "availableLanguage": ["English", "Hindi"],
                      "areaServed": "IN",
                      "hoursAvailable": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
                        ],
                        "opens": "09:00",
                        "closes": "18:00"
                      }
                    },
                    {
                      "@type": "ContactPoint",
                      "email": "3threebitstudio@gmail.com",
                      "contactType": "customer support",
                      "availableLanguage": ["English", "Hindi"]
                    }
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "IN",
                    "addressRegion": "India"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/3bitstudio",
                    "https://twitter.com/3bitstudio",
                    "https://www.facebook.com/3bitstudio",
                    "https://www.instagram.com/3bitstudio"
                  ],
                  "knowsAbout": [
                    "Website Development",
                    "Mobile App Development", 
                    "UI/UX Design",
                    "Branding",
                    "AI Automation",
                    "Digital Marketing",
                    "E-commerce Development",
                    "React Development",
                    "Next.js Development",
                    "WordPress Development",
                    "SEO Optimization",
                    "Custom Software Development"
                  ],
                  "areaServed": {
                    "@type": "Country",
                    "name": "India"
                  },
                  "serviceType": "Website Development Company",
                  "award": [
                    "No.1 Website Development Company in India",
                    "Top Digital Agency 2024",
                    "Best Web Development Services",
                    "500+ Projects Completed"
                  ],
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "150",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                },
                {
                  "@type": "WebSite", 
                  "@id": "https://www.3bitstudio.com/#website",
                  "url": "https://www.3bitstudio.com",
                  "name": "3Bit Studio - No.1 Website Development Company",
                  "description": "No.1 Website Development Company in India providing premium web development, mobile app development, UI/UX design, and AI automation services.",
                  "publisher": {
                    "@id": "https://www.3bitstudio.com/#organization"
                  },
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://www.3bitstudio.com/?s={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ],
                  "inLanguage": "en-US"
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.3bitstudio.com/#localbusiness", 
                  "name": "3Bit Studio - Website Development Company",
                  "image": "https://www.3bitstudio.com/favicon.svg",
                  "telephone": "+91-8791167321",
                  "email": "3threebitstudio@gmail.com",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "IN",
                    "addressRegion": "India"
                  },
                  "url": "https://www.3bitstudio.com",
                  "priceRange": "₹9,999 - ₹99,999",
                  "currenciesAccepted": "INR, USD",
                  "paymentAccepted": "Credit Card, Debit Card, UPI, Bank Transfer"
                }
              ]
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
