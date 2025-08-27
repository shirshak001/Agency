export const metadata = {
  title: 'Best Web Development Company in India 2024 - Top 10 Companies Reviewed',
  description: 'Find the best web development company in India for your business. Compare top companies, services, pricing, and client reviews. Get expert recommendations for 2024.',
  keywords: [
    'best web development company in India',
    'top web development companies India',
    'India web development services',
    'professional web development company',
    'custom web development India',
    'affordable web development India',
    'web development company Mumbai',
    'web development company Delhi',
    'web development company Bangalore',
    'website development services India',
    'top rated web development company',
    'reliable web development company',
    'experienced web developers India',
    'web development agency India',
    'trusted web development partner'
  ],
  openGraph: {
    title: 'Best Web Development Company in India 2024 - Top 10 Companies Reviewed',
    description: 'Find the best web development company in India for your business. Compare top companies, services, pricing, and client reviews.',
    url: 'https://www.3bitstudio.com/blog/best-web-development-company-india',
    type: 'article',
    authors: ['3Bit Studio Team'],
    publishedTime: '2024-01-30T00:00:00.000Z',
    modifiedTime: '2024-01-30T00:00:00.000Z',
    section: 'Web Development',
    tags: ['Best Web Development Company', 'India', 'Top Companies', 'Business Guide'],
    images: [
      {
        url: 'https://www.3bitstudio.com/images/blog/best-web-development-company-india.jpg',
        width: 1200,
        height: 630,
        alt: 'Best Web Development Company in India',
      },
    ],
    locale: 'en_IN',
    siteName: '3BitStudio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Web Development Company in India 2024 - Top 10 Companies',
    description: 'Find the best web development company in India for your business needs.',
    images: ['https://www.3bitstudio.com/images/blog/best-web-development-company-india.jpg'],
    creator: '@3bitstudio',
  },
  alternates: {
    canonical: 'https://www.3bitstudio.com/blog/best-web-development-company-india',
  },
  other: {
    'article:published_time': '2024-01-30T00:00:00Z',
    'article:modified_time': '2024-01-30T00:00:00Z',
    'article:author': '3BitStudio Team',
    'article:section': 'Web Development',
    'article:tag': 'best web development company, India, top companies',
  },
};

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Best Web Development Company in India 2024 - Top 10 Companies Reviewed",
            "description": "Find the best web development company in India for your business. Compare top companies, services, pricing, and client reviews. Get expert recommendations for 2024.",
            "image": "https://www.3bitstudio.com/images/blog/best-web-development-company-india.jpg",
            "author": {
              "@type": "Organization",
              "name": "3BitStudio",
              "url": "https://www.3bitstudio.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "3BitStudio",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.3bitstudio.com/logo.png"
              }
            },
            "datePublished": "2024-01-30T00:00:00Z",
            "dateModified": "2024-01-30T00:00:00Z",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.3bitstudio.com/blog/best-web-development-company-india"
            }
          })
        }}
      />
      {children}
    </>
  );
}
