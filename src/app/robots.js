export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/services/',
          '/services/*',
          '/services/mobile-app-development',
          '/services/it-solutions',
          '/contact',
          '/pricing',
          '/faq',
          '/terms',
          '/blog',
          '/blog/*',
          '/insights',
          '/insights/*'
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/*.json$',
          '/tmp/',
          '/temp/'
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
      }
    ],
    sitemap: 'https://www.3bitstudio.com/sitemap.xml',
    host: 'https://www.3bitstudio.com',
  };
}
