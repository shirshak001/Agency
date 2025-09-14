import Script from 'next/script';

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "Corporation", "TechnologyCompany"],
    "name": "3Bit Studio",
    "legalName": "3Bit Studio IT Solutions Pvt Ltd",
    "alternateName": ["3BitStudio", "3 Bit Studio", "ThreeBit Studio"],
    "description": "#1 App Development Agency and IT Solutions Company in India specializing in mobile app development, custom software development, digital transformation, enterprise technology services, AI solutions, and cloud computing. Serving 1000+ clients worldwide with 24/7 support.",
    "url": "https://www.3bitstudio.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.3bitstudio.com/3bit-logo.png",
      "width": 400,
      "height": 400,
      "caption": "3Bit Studio Logo - Leading App Development Agency"
    },
    "image": {
      "@type": "ImageObject", 
      "url": "https://www.3bitstudio.com/og-image.jpg",
      "width": 1200,
      "height": 630,
      "caption": "3Bit Studio - Premier App Development Agency & IT Solutions Company"
    },
    "foundingDate": "2019",
    "founders": [
      {
        "@type": "Person",
        "name": "3Bit Studio Founding Team",
        "jobTitle": "Founders & Technology Leaders"
      }
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 50,
      "maxValue": 200,
      "unitText": "employees"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India",
      "addressLocality": "India",
      "postalCode": "000000",
      "streetAddress": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6139",
      "longitude": "77.2090"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9876543210",
        "contactType": "Customer Service",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "Worldwide",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      {
        "@type": "ContactPoint",
        "email": "contact@3bitstudio.com",
        "contactType": "Sales",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "Worldwide"
      },
      {
        "@type": "ContactPoint",
        "email": "support@3bitstudio.com", 
        "contactType": "Technical Support",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "Worldwide"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/3bitstudio",
      "https://twitter.com/3bitstudio",
      "https://www.facebook.com/3bitstudio",
      "https://www.instagram.com/3bitstudio",
      "https://github.com/3bitstudio",
      "https://www.youtube.com/c/3bitstudio",
      "https://medium.com/@3bitstudio",
      "https://dev.to/3bitstudio"
    ],
    "slogan": "Transforming Ideas into Digital Reality",
    "brand": {
      "@type": "Brand",
      "name": "3Bit Studio",
      "logo": "https://www.3bitstudio.com/3bit-logo.png"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development",
          "description": "Custom iOS, Android, React Native, and Flutter app development services",
          "serviceType": "Technology Service"
        },
        "areaServed": "Worldwide",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "IT Solutions",
          "description": "Comprehensive IT solutions including cloud computing, digital transformation, and enterprise software",
          "serviceType": "Technology Service"
        },
        "areaServed": "Worldwide",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Software Development", 
          "description": "Bespoke software solutions for enterprises and startups",
          "serviceType": "Technology Service"
        },
        "areaServed": "Worldwide",
        "availability": "https://schema.org/InStock"
      }
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "Country", 
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "Canada"
      },
      {
        "@type": "Country",
        "name": "Australia"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Worldwide"
      }
    ],
    "knowsAbout": [
      "Mobile App Development",
      "iOS Development", 
      "Android Development",
      "React Native Development",
      "Flutter Development",
      "Custom Software Development",
      "IT Solutions",
      "Digital Transformation",
      "Cloud Computing",
      "Artificial Intelligence",
      "Machine Learning",
      "DevOps",
      "Cybersecurity",
      "UI/UX Design",
      "Web Development",
      "E-commerce Solutions",
      "Enterprise Software",
      "API Development",
      "Microservices Architecture",
      "Blockchain Development",
      "IoT Solutions",
      "AR/VR Development"
    ],
    "award": [
      "Top App Development Company",
      "Best IT Solutions Provider", 
      "Excellence in Digital Innovation",
      "Client Choice Award"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Certification",
        "name": "ISO 9001:2015 Certified"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "credentialCategory": "Certification",
        "name": "Google Cloud Partner"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Certification", 
        "name": "Microsoft Partner"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Organization",
          "name": "Fortune 500 Client"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Exceptional app development agency with outstanding IT solutions. 3Bit Studio delivered our mobile app on time and exceeded expectations. Highly recommended for enterprise projects."
      },
      {
        "@type": "Review", 
        "author": {
          "@type": "Person",
          "name": "Tech Startup CEO"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Best app development company we've worked with. Professional team, excellent communication, and top-quality mobile app development services."
      }
    ]
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
    "@type": ["LocalBusiness", "TechnologyCompany", "ProfessionalService"],
    "@id": "https://www.3bitstudio.com",
    "name": "3Bit Studio - App Development Agency & IT Solutions",
    "alternateName": ["3BitStudio", "3 Bit Studio App Development", "ThreeBit Studio"],
    "description": "#1 rated app development agency and IT solutions company providing mobile app development, custom software development, digital transformation, and enterprise technology services in India. Serving 1000+ clients worldwide with 24/7 support.",
    "url": "https://www.3bitstudio.com",
    "telephone": ["+91-9876543210", "+91-1234567890"],
    "email": "contact@3bitstudio.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India",
      "addressLocality": "India",
      "postalCode": "000000",
      "streetAddress": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6139",
      "longitude": "77.2090"
    },
    "openingHours": [
      "Mo-Su 00:00-23:59"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "currenciesAccepted": ["INR", "USD", "EUR", "GBP", "CAD", "AUD"],
    "paymentAccepted": ["Credit Card", "Debit Card", "Bank Transfer", "PayPal", "Wire Transfer", "Online Payment"],
    "priceRange": "₹₹₹",
    "image": [
      {
        "@type": "ImageObject",
        "url": "https://www.3bitstudio.com/og-image.jpg",
        "width": 1200,
        "height": 630,
        "caption": "3Bit Studio Office - App Development Agency"
      },
      {
        "@type": "ImageObject",
        "url": "https://www.3bitstudio.com/3bit-logo.png", 
        "width": 400,
        "height": 400,
        "caption": "3Bit Studio Logo"
      }
    ],
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.3bitstudio.com/3bit-logo.png",
      "width": 400,
      "height": 400
    },
    "sameAs": [
      "https://www.linkedin.com/company/3bitstudio",
      "https://twitter.com/3bitstudio", 
      "https://www.facebook.com/3bitstudio",
      "https://www.instagram.com/3bitstudio",
      "https://github.com/3bitstudio",
      "https://www.youtube.com/c/3bitstudio"
    ],
    "slogan": "Transforming Ideas into Digital Reality",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rajesh Kumar"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Outstanding app development agency with excellent IT solutions. 3Bit Studio developed our mobile app with perfection. Best app developers in India!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person", 
          "name": "Sarah Johnson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Professional app development company with top-notch services. Highly recommended for mobile app development and custom software solutions."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Organization",
          "name": "TechCorp Ltd"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5", 
          "bestRating": "5"
        },
        "reviewBody": "Best IT solutions provider we've worked with. Excellent mobile app development services and outstanding technical support."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "App Development & IT Solutions Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "iOS App Development",
            "description": "Native iOS app development services for iPhone and iPad",
            "provider": {
              "@type": "Organization",
              "name": "3Bit Studio"
            }
          },
          "areaServed": "Worldwide"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Android App Development",
            "description": "Native Android app development services for smartphones and tablets",
            "provider": {
              "@type": "Organization", 
              "name": "3Bit Studio"
            }
          },
          "areaServed": "Worldwide"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "React Native Development",
            "description": "Cross-platform mobile app development using React Native",
            "provider": {
              "@type": "Organization",
              "name": "3Bit Studio"
            }
          },
          "areaServed": "Worldwide"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flutter Development",
            "description": "Cross-platform mobile app development using Flutter",
            "provider": {
              "@type": "Organization",
              "name": "3Bit Studio"
            }
          },
          "areaServed": "Worldwide"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "Bespoke software solutions for businesses and enterprises",
            "provider": {
              "@type": "Organization",
              "name": "3Bit Studio"
            }
          },
          "areaServed": "Worldwide"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IT Consulting Services",
            "description": "Strategic IT consulting and digital transformation services",
            "provider": {
              "@type": "Organization",
              "name": "3Bit Studio"
            }
          },
          "areaServed": "Worldwide"
        }
      ]
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "Canada"
      },
      {
        "@type": "Country",
        "name": "Australia"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Worldwide"
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

// Add new schemas for better SEO
export const BreadcrumbSchema = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "3Bit Studio - App Development Agency & IT Solutions",
    "alternateName": "3BitStudio",
    "url": "https://www.3bitstudio.com",
    "description": "#1 App Development Agency & IT Solutions Company in India - Mobile App Development, Custom Software, Digital Transformation Services",
    "inLanguage": "en-US",
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.3bitstudio.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    ],
    "publisher": {
      "@type": "Organization",
      "name": "3Bit Studio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.3bitstudio.com/3bit-logo.png"
      }
    }
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const SoftwareApplicationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Mobile App Development Services",
    "description": "Professional mobile app development services for iOS, Android, React Native, and Flutter platforms",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": ["iOS", "Android", "Windows", "macOS", "Linux"],
    "provider": {
      "@type": "Organization",
      "name": "3Bit Studio",
      "url": "https://www.3bitstudio.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "Contact for Quote",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2019-01-01"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1000",
      "bestRating": "5"
    }
  };

  return (
    <Script
      id="software-application-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const ProfessionalServiceSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "3Bit Studio - Professional IT Solutions & App Development",
    "description": "Professional IT solutions and app development services including mobile app development, custom software development, digital transformation, and technology consulting",
    "url": "https://www.3bitstudio.com",
    "telephone": "+91-9876543210",
    "email": "contact@3bitstudio.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India",
      "addressLocality": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6139",
      "longitude": "77.2090"
    },
    "serviceType": ["Mobile App Development", "IT Solutions", "Software Development", "Digital Transformation"],
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Professional IT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "category": "Technology Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IT Consulting",
            "category": "Professional Services"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1000",
      "bestRating": "5"
    }
  };

  return (
    <Script
      id="professional-service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const ContactPageSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact 3Bit Studio - App Development Agency",
    "description": "Contact 3Bit Studio for mobile app development, IT solutions, and custom software development services. Get free consultation and quote.",
    "url": "https://www.3bitstudio.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "3Bit Studio",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-9876543210",
          "contactType": "Customer Service",
          "email": "contact@3bitstudio.com",
          "availableLanguage": ["English", "Hindi"]
        },
        {
          "@type": "ContactPoint",
          "email": "support@3bitstudio.com",
          "contactType": "Technical Support",
          "availableLanguage": ["English", "Hindi"]
        }
      ]
    }
  };

  return (
    <Script
      id="contact-page-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
