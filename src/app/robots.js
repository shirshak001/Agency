export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/',
        '/admin/',
        '/_next/',
        '/api/',
      ],
    },
    sitemap: 'https://www.3bitstudio.com/sitemap.xml',
    host: 'https://www.3bitstudio.com',
  };
}
