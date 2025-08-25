export const metadata = {
  title: 'Frequently Asked Questions - Digital Agency FAQ',
  description: 'Get answers to common questions about web development, mobile app development, UI/UX design, pricing, timelines, and our development process.',
  keywords: [
    'web development FAQ',
    'app development questions',
    'digital agency FAQ',
    'development process',
    'project timeline',
    'cost estimation',
    'technical questions'
  ],
  openGraph: {
    title: 'FAQ - Your Digital Development Questions Answered | 3Bit Studio',
    description: 'Find answers to common questions about our web development, mobile app development, and digital services.',
    url: 'https://www.3bitstudio.com/faq',
  },
  twitter: {
    title: 'FAQ - Your Digital Development Questions Answered | 3Bit Studio',
    description: 'Find answers to common questions about our development services and process.',
  },
  alternates: {
    canonical: '/faq',
  },
};

export default function FAQLayout({ children }) {
  return children;
}
