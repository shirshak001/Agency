export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/contact',
          '/pricing',
          '/faq',
          '/terms',
          '/blog',
          '/blog/*'
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
