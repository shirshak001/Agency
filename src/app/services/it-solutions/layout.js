import { Metadata } from 'next';

export const metadata = {
  title: "IT Solutions Company | Enterprise Technology Services | 3Bit Studio",
  description: "🏆 Leading IT Solutions Company in India ⭐ Cloud Computing, Digital Transformation, Custom Software, AI Solutions, DevOps & More. 500+ Projects ✅ Fortune 500 Clients ✅ Free IT Consultation",
  keywords: [
    "IT solutions",
    "IT solutions company",
    "enterprise IT services",
    "digital transformation",
    "cloud computing services",
    "custom software development",
    "IT consulting services",
    "managed IT services",
    "technology solutions",
    "business IT solutions",
    "IT infrastructure services",
    "cloud migration services",
    "DevOps consulting",
    "AI solutions",
    "IT outsourcing",
    "enterprise technology",
    "business automation",
    "system integration",
    "IT support services",
    "cybersecurity solutions",
    "machine learning services",
    "data analytics solutions",
    "API development",
    "microservices architecture",
    "scalable IT solutions"
  ],
  openGraph: {
    title: "IT Solutions Company | Enterprise Technology Services | 3Bit Studio",
    description: "🏆 Leading IT Solutions Company in India ⭐ Cloud Computing, Digital Transformation, Custom Software, AI Solutions, DevOps & More. 500+ Projects ✅ Fortune 500 Clients",
    type: "website",
    url: "https://www.3bitstudio.com/services/it-solutions",
    siteName: "3Bit Studio - IT Solutions Company",
    images: [
      {
        url: "/images/it-solutions-og.jpg",
        width: 1200,
        height: 630,
        alt: "3Bit Studio - Leading IT Solutions Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Solutions Company | Enterprise Technology Services | 3Bit Studio",
    description: "🏆 Leading IT Solutions Company in India ⭐ Cloud Computing, Digital Transformation, Custom Software, AI Solutions, DevOps & More",
    images: ["/images/it-solutions-og.jpg"],
  },
  alternates: {
    canonical: "/services/it-solutions",
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

export default function ITSolutionsLayout({ children }) {
  const itSolutionsStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.3bitstudio.com/services/it-solutions/#service",
        "name": "IT Solutions Services",
        "description": "Comprehensive IT solutions including cloud computing, digital transformation, custom software development, AI solutions, and enterprise technology services by leading IT solutions company 3Bit Studio.",
        "provider": {
          "@type": "Organization",
          "@id": "https://www.3bitstudio.com/#organization",
          "name": "3Bit Studio",
          "url": "https://www.3bitstudio.com"
        },
        "serviceType": "IT Solutions",
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "hasOfferingCatalog": {
          "@type": "OfferingCatalog",
          "name": "IT Solutions Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cloud Computing Services",
                "description": "AWS, Azure, Google Cloud migration and management services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Digital Transformation",
                "description": "End-to-end digital transformation solutions for enterprises"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Software Development",
                "description": "Enterprise-grade custom software development solutions"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI & ML Solutions",
                "description": "Artificial Intelligence and Machine Learning implementation services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "DevOps Consulting",
                "description": "DevOps implementation and CI/CD pipeline setup services"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "180",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.3bitstudio.com/services/it-solutions/#webpage",
        "url": "https://www.3bitstudio.com/services/it-solutions",
        "name": "IT Solutions Services | 3Bit Studio",
        "description": "Comprehensive IT solutions including cloud computing, digital transformation, custom software development, and enterprise technology services. Leading IT solutions company with proven expertise.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.3bitstudio.com/#website"
        },
        "about": {
          "@id": "https://www.3bitstudio.com/services/it-solutions/#service"
        },
        "mainEntity": {
          "@id": "https://www.3bitstudio.com/services/it-solutions/#service"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.3bitstudio.com/services/it-solutions/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What IT solutions do you provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide comprehensive IT solutions including cloud computing services, digital transformation, custom software development, AI & ML solutions, DevOps consulting, cybersecurity services, and enterprise technology solutions."
            }
          },
          {
            "@type": "Question",
            "name": "How can IT solutions help my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our IT solutions help businesses improve efficiency, reduce costs, enhance security, scale operations, automate processes, and stay competitive in the digital marketplace through strategic technology implementation."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide ongoing IT support and maintenance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide 24/7 IT support, system monitoring, regular maintenance, security updates, performance optimization, and continuous improvement of your IT infrastructure and applications."
            }
          },
          {
            "@type": "Question",
            "name": "What industries do you serve for IT solutions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We serve various industries including healthcare, finance, e-commerce, education, manufacturing, startups, and enterprise clients, providing tailored IT solutions based on specific industry requirements and compliance needs."
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
          __html: JSON.stringify(itSolutionsStructuredData)
        }}
      />
      {children}
    </>
  );
}
