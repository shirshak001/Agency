import Script from 'next/script';

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "3Bit Studio",
    "alternateName": "3BitStudio",
    "description": "Leading App Development Agency and IT Solutions Company in India specializing in mobile app development, custom software, digital transformation, and enterprise technology services.",
    "url": "https://www.3bitstudio.com",
    "logo": "https://www.3bitstudio.com/logo.png",
    "image": "https://www.3bitstudio.com/og-image.jpg",
    "foundingDate": "2019",
    "founders": [
      {
        "@type": "Person",
        "name": "3Bit Studio Team"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Hindi"],
      "areaServed": "Worldwide"
    },
    "sameAs": [
      "https://www.linkedin.com/company/3bitstudio",
      "https://twitter.com/3bitstudio",
      "https://www.facebook.com/3bitstudio",
      "https://www.instagram.com/3bitstudio"
    ],
    "services": [
      "Mobile App Development",
      "IT Solutions",
      "Custom Software Development",
      "Digital Transformation",
      "Cloud Computing",
      "AI & Machine Learning",
      "Web Development",
      "UI/UX Design"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "knowsAbout": [
      "App Development",
      "IT Solutions",
      "Mobile Application Development",
      "Enterprise Software",
      "Digital Transformation",
      "Cloud Computing",
      "Artificial Intelligence",
      "Machine Learning",
      "DevOps",
      "Cybersecurity"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Solutions and App Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Custom mobile app development for iOS, Android, and cross-platform solutions"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "IT Solutions",
            "description": "Comprehensive IT solutions including cloud computing, digital transformation, and enterprise software"
          }
        }
      ]
    }
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.3bitstudio.com",
    "name": "3Bit Studio - App Development Agency & IT Solutions",
    "description": "Top-rated app development agency and IT solutions company providing mobile app development, custom software, digital transformation, and enterprise technology services.",
    "url": "https://www.3bitstudio.com",
    "telephone": "+91-9876543210",
    "email": "contact@3bitstudio.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6139",
      "longitude": "77.2090"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "currenciesAccepted": "INR, USD, EUR",
    "paymentAccepted": "Credit Card, Bank Transfer, PayPal",
    "priceRange": "₹₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Satisfied Client"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excellent app development agency with outstanding IT solutions. Highly recommended for mobile app development and digital transformation projects."
      }
    ]
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const ServiceSchema = ({ service }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "3Bit Studio",
      "url": "https://www.3bitstudio.com"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.name,
      "itemListElement": service.features?.map(feature => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        }
      })) || []
    }
  };

  return (
    <Script
      id={`service-schema-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const FAQPageSchema = ({ faqs }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
