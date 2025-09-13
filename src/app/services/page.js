import { notFound } from 'next/navigation';
import Link from 'next/link';

export const metadata = {
  title: "App Development Agency & IT Solutions | Best Technology Services India",
  description: "🏆 Top App Development Agency & IT Solutions Company in India ⭐ 500+ Projects ✅ Mobile Apps, Custom Software, Cloud Solutions ✅ Free Consultation ✅ 24/7 Support",
  keywords: [
    "app development agency",
    "IT solutions",
    "technology services",
    "software development company",
    "mobile app development",
    "custom software development",
    "IT consulting services",
    "digital transformation",
    "enterprise solutions",
    "business automation"
  ],
  openGraph: {
    title: "App Development Agency & IT Solutions | Best Technology Services India",
    description: "🏆 Top App Development Agency & IT Solutions Company in India ⭐ 500+ Projects ✅ Mobile Apps, Custom Software, Cloud Solutions",
    type: "website",
    url: "https://www.3bitstudio.com/services",
    images: [
      {
        url: "/images/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "3Bit Studio - App Development Agency & IT Solutions",
      },
    ],
  },
  alternates: {
    canonical: "https://www.3bitstudio.com/services",
  },
};

const services = [
  {
    id: 'mobile-app-development',
    title: 'App Development Agency',
    description: 'Leading mobile app development services including iOS, Android, React Native, and Flutter development. Build powerful, scalable mobile applications.',
    features: ['iOS App Development', 'Android App Development', 'Cross-Platform Apps', 'App Store Optimization'],
    icon: '📱',
    link: '/services/mobile-app-development'
  },
  {
    id: 'it-solutions',
    title: 'IT Solutions Company',
    description: 'Comprehensive IT solutions including cloud computing, digital transformation, custom software development, and enterprise technology services.',
    features: ['Cloud Computing', 'Digital Transformation', 'Custom Software', 'AI Solutions'],
    icon: '💻',
    link: '/services/it-solutions'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.3bitstudio.com/services/#webpage",
            "url": "https://www.3bitstudio.com/services",
            "name": "App Development Agency & IT Solutions Services | 3Bit Studio",
            "description": "Professional app development agency and IT solutions company offering mobile app development, custom software, cloud computing, and digital transformation services.",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://www.3bitstudio.com/#website"
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "Service",
                  "position": 1,
                  "name": "Mobile App Development",
                  "description": "Professional mobile app development services for iOS, Android, and cross-platform applications",
                  "url": "https://www.3bitstudio.com/services/mobile-app-development"
                },
                {
                  "@type": "Service", 
                  "position": 2,
                  "name": "IT Solutions",
                  "description": "Comprehensive IT solutions including cloud computing, digital transformation, and enterprise technology services",
                  "url": "https://www.3bitstudio.com/services/it-solutions"
                }
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.3bitstudio.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://www.3bitstudio.com/services"
                }
              ]
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <nav className="text-sm mb-8">
            <Link href="/" className="text-purple-400 hover:text-purple-300">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-300">Services</span>
          </nav>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            App Development Agency & IT Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            🏆 Leading App Development Agency & IT Solutions Company in India with 500+ successful projects. 
            Expert mobile app development, custom software, and enterprise IT solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-purple-600/20 px-4 py-2 rounded-full border border-purple-500/30">
              ✅ 500+ Projects Completed
            </span>
            <span className="bg-purple-600/20 px-4 py-2 rounded-full border border-purple-500/30">
              ✅ Fortune 500 Clients
            </span>
            <span className="bg-purple-600/20 px-4 py-2 rounded-full border border-purple-500/30">
              ✅ 24/7 Support
            </span>
            <span className="bg-purple-600/20 px-4 py-2 rounded-full border border-purple-500/30">
              ✅ Free Consultation
            </span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="text-6xl mb-6">{service.icon}</div>
                <h2 className="text-3xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3 text-purple-400">Key Services:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={service.link}
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group-hover:scale-105"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Why Choose 3Bit Studio?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            As a leading app development agency and IT solutions company, we deliver exceptional results
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Expertise</h3>
              <p className="text-gray-300">500+ successful projects across various industries with proven track record</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Cutting-Edge Technology</h3>
              <p className="text-gray-300">Latest technologies and frameworks for scalable, future-ready solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock support and maintenance for all your technology needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free consultation for your app development or IT solutions project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/pricing"
              className="border border-purple-500 text-purple-400 px-8 py-4 rounded-xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
