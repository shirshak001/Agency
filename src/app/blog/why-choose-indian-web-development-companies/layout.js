export const metadata = {
  title: 'Why Choose Indian Web Development Companies? Top 10 Reasons in 2024',
  description: 'Discover why Indian web development companies are leading the global market. Learn about cost advantages, technical expertise, quality standards, and success stories.',
  keywords: [
    'Indian web development companies',
    'India web development services',
    'offshore web development India',
    'best web development companies India',
    'why choose Indian developers',
    'India IT services advantages',
    'cost effective web development',
    'Indian web developers benefits',
    'outsource to India web development',
    'India software development',
    'web development company India',
    'Indian IT industry',
    'quality web development India',
    'experienced Indian developers',
    'India web design services'
  ],
  openGraph: {
    title: 'Why Choose Indian Web Development Companies? Top 10 Reasons in 2024',
    description: 'Discover why Indian web development companies are leading the global market. Learn about cost advantages, technical expertise, and quality standards.',
    url: 'https://www.3bitstudio.com/blog/why-choose-indian-web-development-companies',
    type: 'article',
    authors: ['3Bit Studio Team'],
    publishedTime: '2024-01-25T00:00:00.000Z',
    modifiedTime: '2024-01-25T00:00:00.000Z',
    section: 'Web Development',
    tags: ['Indian Web Development', 'IT Services', 'Offshore Development', 'Business Guide'],
    images: [
      {
        url: 'https://www.3bitstudio.com/images/blog/indian-web-development.jpg',
        width: 1200,
        height: 630,
        alt: 'Why Choose Indian Web Development Companies',
      },
    ],
    locale: 'en_IN',
    siteName: '3BitStudio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Choose Indian Web Development Companies? Top 10 Reasons',
    description: 'Discover the advantages of working with Indian web development companies in 2024.',
    images: ['https://www.3bitstudio.com/images/blog/indian-web-development.jpg'],
    creator: '@3bitstudio',
  },
  alternates: {
    canonical: 'https://www.3bitstudio.com/blog/why-choose-indian-web-development-companies',
  },
  other: {
    'article:published_time': '2024-01-25T00:00:00Z',
    'article:modified_time': '2024-01-25T00:00:00Z',
    'article:author': '3BitStudio Team',
    'article:section': 'Web Development',
    'article:tag': 'Indian web development, IT services, offshore development',
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
            "headline": "Why Choose Indian Web Development Companies? Top 10 Reasons in 2024",
            "description": "Discover why Indian web development companies are leading the global market. Learn about cost advantages, technical expertise, quality standards, and success stories.",
            "image": "https://www.3bitstudio.com/images/blog/indian-web-development.jpg",
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
            "datePublished": "2024-01-25T00:00:00Z",
            "dateModified": "2024-01-25T00:00:00Z",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.3bitstudio.com/blog/why-choose-indian-web-development-companies"
            }
          })
        }}
      />
      {children}
    </>
  );
}
