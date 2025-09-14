import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import EnhancedSEO from "@/components/seo/EnhancedSEO";

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
    default: "3Bit Studio - #1 App Development Agency | IT Solutions Company India | Mobile App Development Services",
    template: "%s | 3Bit Studio - Leading App Development Agency & IT Solutions Provider"
  },
  description:
    "🏆 #1 App Development Agency & IT Solutions Company in India ⭐ 3Bit Studio: Mobile App Development, Custom Software, AI Solutions, Cloud Services, Digital Transformation. 1000+ Projects ✅ Fortune 500 Clients ✅ 24/7 Support ✅ Free Consultation! Get Quote Now!",
  keywords: [
    // High-volume primary keywords
    "app development agency",
    "mobile app development company",
    "IT solutions provider",
    "app development agency India",
    "best app development company",
    "top app developers",
    "custom software development",
    "digital transformation agency",
    "enterprise IT solutions",
    "business app development",
    
    // Location-based keywords
    "app development company India",
    "mobile app developers India",
    "IT solutions company India",
    "software development company India",
    "app development agency near me",
    "local app developers",
    "India app development services",
    "Delhi app development",
    "Mumbai app development",
    "Bangalore app development",
    
    // Service-specific keywords
    "iOS app development",
    "Android app development",
    "React Native development",
    "Flutter app development",
    "cross-platform app development",
    "native app development",
    "hybrid app development",
    "progressive web app development",
    "app development services",
    "mobile application development",
    
    // Technology keywords
    "React Native developers",
    "Flutter developers",
    "iOS developers",
    "Android developers",
    "full stack developers",
    "UI UX design agency",
    "web development agency",
    "e-commerce app development",
    "fintech app development",
    "healthcare app development",
    "education app development",
    "on-demand app development",
    
    // Industry-specific
    "startup app development",
    "enterprise app solutions",
    "SME app development",
    "B2B app development",
    "B2C app development",
    "SaaS development",
    "marketplace app development",
    "social media app development",
    "dating app development",
    "food delivery app development",
    "taxi booking app development",
    
    // Emerging technologies
    "AI app development",
    "machine learning solutions",
    "blockchain app development",
    "IoT app development",
    "AR VR app development",
    "cloud app development",
    "serverless development",
    "microservices development",
    "API development services",
    "DevOps consulting",
    
    // Business-focused keywords
    "affordable app development",
    "cost-effective IT solutions",
    "app development cost",
    "mobile app development price",
    "app development consultation",
    "app development proposal",
    "app development timeline",
    "app development process",
    "agile app development",
    "dedicated app developers",
    
    // Support and maintenance
    "app maintenance services",
    "app support services",
    "app testing services",
    "app deployment services",
    "app store optimization",
    "app marketing services",
    "24/7 technical support",
    "post-launch support",
    
    // Competitive keywords
    "3Bit Studio",
    "3BitStudio",
    "best IT company India",
    "top software company",
    "award winning app developers",
    "certified app development company",
    "ISO certified IT company",
    "CMMI level company",
    "Google partner agency",
    "Microsoft partner"
  ],
  authors: [{ name: "3Bit Studio", url: "https://www.3bitstudio.com" }],
  creator: "3Bit Studio - Premier App Development Agency",
  publisher: "3Bit Studio IT Solutions Pvt Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.3bitstudio.com"),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en-us',
      'en-IN': '/en-in',
      'hi-IN': '/hi-in'
    }
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
    siteName: "3Bit Studio - #1 App Development Agency & IT Solutions Company India",
    title: "3Bit Studio - #1 App Development Agency | Mobile App Development | IT Solutions India",
    description: "🏆 #1 App Development Agency & IT Solutions Company in India ⭐ 3Bit Studio: Mobile App Development, Custom Software, AI Solutions, Cloud Services, Digital Transformation. 1000+ Projects ✅ Fortune 500 Clients ✅ 24/7 Support ✅ Free Consultation!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "3Bit Studio - #1 App Development Agency & IT Solutions Company India - Mobile App Development Services",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "3Bit Studio - Premium IT Solutions & Mobile App Development Company",
        type: "image/jpeg",
      },
      {
        url: "/3bit-logo.png",
        width: 400,
        height: 400,
        alt: "3Bit Studio Logo - Leading App Development Agency",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@3bitstudio",
    creator: "@3bitstudio",
    title: "3Bit Studio - #1 App Development Agency | Mobile App Development | IT Solutions India",
    description: "🏆 #1 App Development Agency & IT Solutions Company in India ⭐ Mobile App Development, Custom Software, AI Solutions, Cloud Services, Digital Transformation. 1000+ Projects ✅ Fortune 500 Clients ✅ 24/7 Support",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google1b27edb47c7cc2a5",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    bing: "your-bing-verification-code",
  },
  category: "technology",
  classification: "Digital Agency",
  other: {
    "theme-color": "#8B5CF6",
    "color-scheme": "dark light",
    "application-name": "3Bit Studio",
    "apple-mobile-web-app-title": "3Bit Studio",
    "twitter:image:alt": "3Bit Studio - #1 App Development Agency India",
    "twitter:label1": "Services",
    "twitter:data1": "Mobile App Development, IT Solutions",
    "twitter:label2": "Location",
    "twitter:data2": "India",
    "facebook-domain-verification": "your-facebook-verification-code",
    "msapplication-TileColor": "#8B5CF6",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "msapplication-navbutton-color": "#8B5CF6",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "mobile-web-app-capable": "yes",
    "HandheldFriendly": "true",
    "MobileOptimized": "width",
    "referrer": "origin-when-cross-origin",
    "format-detection": "telephone=no",
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "28.6139;77.2090",
    "ICBM": "28.6139, 77.2090",
    "rating": "General",
    "distribution": "Global",
    "coverage": "Worldwide",
    "target": "all",
    "audience": "all",
    "robots": "index,follow,archive,snippet,translate",
    "googlebot": "index,follow,archive,snippet,translate",
    "bingbot": "index,follow,archive,snippet,translate",
    "slurp": "index,follow,archive,snippet,translate",
    "facebookexternalhit": "index,follow",
    "twitterbot": "index,follow",
    "linkedinbot": "index,follow",
    "pinterest": "index,follow",
    "whatsapp": "index,follow",
    "telegram": "index,follow",
    "og:email": "contact@3bitstudio.com",
    "og:phone_number": "+91-9876543210",
    "og:street-address": "India",
    "og:locality": "India",
    "og:region": "India",
    "og:postal-code": "000000",
    "og:country-name": "India",
    "business:contact_data:street_address": "India",
    "business:contact_data:locality": "India",
    "business:contact_data:region": "India",
    "business:contact_data:postal_code": "000000",
    "business:contact_data:country_name": "India",
    "business:contact_data:email": "contact@3bitstudio.com",
    "business:contact_data:phone_number": "+91-9876543210",
    "business:contact_data:website": "https://www.3bitstudio.com",
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
        <EnhancedSEO />
        {children}
      </body>
    </html>
  );
}
