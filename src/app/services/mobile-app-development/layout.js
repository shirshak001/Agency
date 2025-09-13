import { Metadata } from 'next';

export const metadata = {
  title: "App Development Agency | Mobile App Development Services | 3Bit Studio",
  description: "🏆 Leading App Development Agency in India ⭐ Expert Mobile App Development Services: iOS, Android, React Native, Flutter. 500+ Apps Built ✅ Fortune 500 Clients ✅ Free Quote",
  keywords: [
    "app development agency",
    "mobile app development",
    "iOS app development",
    "Android app development",
    "React Native development",
    "Flutter app development",
    "app development services",
    "mobile app agency",
    "custom app development",
    "cross-platform development",
    "native app development",
    "hybrid app development",
    "app development company",
    "mobile application development",
    "enterprise app development",
    "business app development",
    "startup app development",
    "e-commerce app development",
    "fintech app development",
    "healthcare app development",
    "educational app development",
    "gaming app development"
  ],
  openGraph: {
    title: "App Development Agency | Mobile App Development Services | 3Bit Studio",
    description: "🏆 Leading App Development Agency in India ⭐ Expert Mobile App Development Services: iOS, Android, React Native, Flutter. 500+ Apps Built ✅ Fortune 500 Clients",
    type: "website",
    url: "https://www.3bitstudio.com/services/mobile-app-development",
    siteName: "3Bit Studio - App Development Agency",
    images: [
      {
        url: "/images/mobile-app-development-og.jpg",
        width: 1200,
        height: 630,
        alt: "3Bit Studio - Leading App Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "App Development Agency | Mobile App Development Services | 3Bit Studio",
    description: "🏆 Leading App Development Agency in India ⭐ Expert Mobile App Development Services: iOS, Android, React Native, Flutter. 500+ Apps Built",
    images: ["/images/mobile-app-development-og.jpg"],
  },
  alternates: {
    canonical: "/services/mobile-app-development",
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
};

export default function MobileAppDevelopmentLayout({ children }) {
  const appDevelopmentStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.3bitstudio.com/services/mobile-app-development/#service",
        "name": "Mobile App Development Services",
        "description": "Professional mobile app development services including iOS, Android, React Native, and Flutter development by leading app development agency 3Bit Studio.",
        "provider": {
          "@type": "Organization",
          "@id": "https://www.3bitstudio.com/#organization",
          "name": "3Bit Studio",
          "url": "https://www.3bitstudio.com"
        },
        "serviceType": "Mobile App Development",
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "hasOfferingCatalog": {
          "@type": "OfferingCatalog",
          "name": "App Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "iOS App Development",
                "description": "Native iOS app development using Swift and Objective-C"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Android App Development",
                "description": "Native Android app development using Kotlin and Java"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "React Native Development",
                "description": "Cross-platform mobile app development using React Native"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Flutter Development", 
                "description": "Cross-platform mobile app development using Flutter"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "200",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.3bitstudio.com/services/mobile-app-development/#webpage",
        "url": "https://www.3bitstudio.com/services/mobile-app-development",
        "name": "Mobile App Development Services | 3Bit Studio",
        "description": "Professional mobile app development services including iOS, Android, React Native, and Flutter development. Leading app development agency with 500+ successful projects.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.3bitstudio.com/#website"
        },
        "about": {
          "@id": "https://www.3bitstudio.com/services/mobile-app-development/#service"
        },
        "mainEntity": {
          "@id": "https://www.3bitstudio.com/services/mobile-app-development/#service"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.3bitstudio.com/services/mobile-app-development/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What mobile app development services do you offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer comprehensive mobile app development services including native iOS development, native Android development, cross-platform development with React Native and Flutter, hybrid app development, and progressive web apps (PWAs)."
            }
          },
          {
            "@type": "Question", 
            "name": "How much does mobile app development cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mobile app development costs vary based on complexity, features, and platform. Simple apps start from ₹1,50,000, medium complexity apps from ₹3,00,000, and complex enterprise apps from ₹5,00,000+. We provide detailed quotes after understanding your requirements."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to develop a mobile app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Development timelines depend on app complexity. Simple apps take 2-3 months, medium complexity apps take 4-6 months, and complex apps take 6-12 months. We provide detailed project timelines during planning phase."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide app store submission and maintenance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we handle complete app store submission for both Google Play Store and Apple App Store. We also provide ongoing maintenance, updates, bug fixes, and feature enhancements to keep your app running smoothly."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appDevelopmentStructuredData)
        }}
      />
      {children}
    </>
  );
}
