export const metadata = {
  title: 'Contact Us - Get Your Project Started Today',
  description: 'Ready to transform your business? Contact 3Bit Studio for custom web development, mobile apps, UI/UX design, and AI automation. Free consultation available.',
  keywords: [
    'contact 3bit studio',
    'web development consultation',
    'project quote',
    'digital agency contact',
    'free consultation',
    'custom software development',
    'app development inquiry',
    'IT services contact',
    'business digital solutions',
    '3bit studio support',
    'Indian Agencies',
    'Top Indian Agencies',
    'Best Indian Agencies',
    'Indian Digital Agencies',
    'Indian Web Development Agencies',
    'Indian Mobile App Development Agencies',
    'Indian UI/UX Design Agencies',
    'Indian AI Automation Agencies',
    'Indian Branding Agencies',
    'Indian Video Editing Agencies',
    'Startup Agencies in India',
    'Affordable Agencies in India',
    'Creative Agencies in India',
    'Professional Agencies in India', 
  ],
  openGraph: {
    title: 'Contact 3Bit Studio - Start Your Digital Transformation',
    description: 'Get in touch with our expert team for custom web development, mobile apps, and digital solutions. Free consultation available.',
    url: 'https://www.3bitstudio.com/contact',
    siteName: '3Bit Studio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.3bitstudio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact 3Bit Studio - Custom Web & App Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact 3Bit Studio - Start Your Digital Transformation',
    description: 'Get in touch with our expert team for custom web development, mobile apps, and digital solutions.',
    images: ['https://www.3bitstudio.com/og-image.jpg'],
    creator: '@3bitstudio', // replace with your Twitter handle if you have one
  },
  alternates: {
    canonical: 'https://www.3bitstudio.com/contact',
  },
  authors: [{ name: '3Bit Studio Team', url: 'https://www.3bitstudio.com/about' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function ContactLayout({ children }) {
  return children;
}
