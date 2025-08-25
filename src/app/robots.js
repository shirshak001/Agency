export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/admin/',
        '/private/',
      ],
    },
    sitemap: 'https://www.3bitstudio.com/sitemap.xml',
    host: 'https://www.3bitstudio.com',
  };
}
