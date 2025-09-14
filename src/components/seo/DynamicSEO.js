import { Metadata } from 'next';

// Dynamic SEO for service pages
export function generateServiceSEO(service) {
  const serviceData = {
    'mobile-app-development': {
      title: 'Mobile App Development Company India | iOS Android React Native Flutter | 3Bit Studio',
      description: '🏆 #1 Mobile App Development Company in India ⭐ 3Bit Studio: iOS, Android, React Native, Flutter App Development. 1000+ Apps Built ✅ Fortune 500 Clients ✅ 24/7 Support ✅ Free Consultation!',
      keywords: [
        'mobile app development company',
        'mobile app development India',
        'iOS app development',
        'Android app development',
        'React Native development',
        'Flutter development',
        'cross-platform app development',
        'native app development',
        'mobile app developers',
        'app development services',
        'mobile application development',
        'app development agency'
      ]
    },
    'it-solutions': {
      title: 'IT Solutions Company India | Enterprise IT Services | Cloud Computing | 3Bit Studio',
      description: '🏆 Leading IT Solutions Company in India ⭐ 3Bit Studio: Enterprise IT Services, Cloud Computing, Digital Transformation, IT Consulting. 1000+ Projects ✅ 24/7 Support ✅ Free Consultation!',
      keywords: [
        'IT solutions company',
        'IT solutions India',
        'enterprise IT services',
        'IT consulting services',
        'cloud computing services',
        'digital transformation',
        'IT infrastructure',
        'managed IT services',
        'business IT solutions',
        'technology consulting'
      ]
    },
    'custom-software-development': {
      title: 'Custom Software Development Company India | Bespoke Software Solutions | 3Bit Studio',
      description: '🏆 Premier Custom Software Development Company in India ⭐ 3Bit Studio: Bespoke Software Solutions, Enterprise Applications, SaaS Development. 1000+ Projects ✅ Free Consultation!',
      keywords: [
        'custom software development',
        'bespoke software solutions',
        'enterprise software development',
        'software development company',
        'custom application development',
        'software development services',
        'business software solutions',
        'tailor-made software'
      ]
    },
    'web-development': {
      title: 'Web Development Company India | Website Development Services | 3Bit Studio',
      description: '🏆 Top Web Development Company in India ⭐ 3Bit Studio: Website Development, E-commerce, CMS, Progressive Web Apps. 1000+ Websites Built ✅ Free Consultation!',
      keywords: [
        'web development company',
        'website development India',
        'web development services',
        'website design and development',
        'e-commerce development',
        'CMS development',
        'progressive web apps',
        'responsive web design'
      ]
    },
    'ui-ux-design': {
      title: 'UI UX Design Company India | Mobile App UI Design | Web Design | 3Bit Studio',
      description: '🏆 Leading UI UX Design Company in India ⭐ 3Bit Studio: Mobile App UI Design, Web Design, User Experience Design. Award-Winning Designs ✅ Free Consultation!',
      keywords: [
        'UI UX design company',
        'UI UX design India',
        'mobile app UI design',
        'web UI design',
        'user experience design',
        'user interface design',
        'app design services',
        'digital design agency'
      ]
    }
  };

  const data = serviceData[service] || serviceData['mobile-app-development'];
  
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://www.3bitstudio.com/services/${service}`,
      images: [
        {
          url: `/og-${service}.jpg`,
          width: 1200,
          height: 630,
          alt: data.title
        }
      ]
    },
    twitter: {
      title: data.title,
      description: data.description,
      images: [`/og-${service}.jpg`]
    }
  };
}

// Dynamic SEO for blog posts
export function generateBlogSEO(blogPost) {
  const blogData = {
    'best-web-development-company-india': {
      title: 'Best Web Development Company in India 2024 | Top Website Developers | 3Bit Studio',
      description: 'Discover the best web development company in India. 3Bit Studio offers top-quality website development services with proven results. Get free consultation!',
      keywords: [
        'best web development company India',
        'top web development company',
        'website development company India',
        'web developers India',
        'website design company',
        'web development services'
      ]
    },
    'mobile-app-development-trends-2024': {
      title: 'Mobile App Development Trends 2024 | Latest App Technologies | 3Bit Studio',
      description: 'Explore the latest mobile app development trends for 2024. AI, IoT, 5G, and more. Stay ahead with 3Bit Studio\'s expert insights.',
      keywords: [
        'mobile app development trends 2024',
        'app development trends',
        'mobile app technologies',
        'future of mobile apps',
        'app development innovations'
      ]
    }
  };

  const data = blogData[blogPost] || {
    title: 'App Development Blog | IT Solutions Insights | 3Bit Studio',
    description: 'Read latest insights on app development, IT solutions, and digital transformation from 3Bit Studio experts.',
    keywords: ['app development blog', 'IT solutions blog', 'technology insights']
  };

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://www.3bitstudio.com/blog/${blogPost}`,
      type: 'article',
      images: [
        {
          url: `/blog-og-${blogPost}.jpg`,
          width: 1200,
          height: 630,
          alt: data.title
        }
      ]
    },
    twitter: {
      title: data.title,
      description: data.description,
      images: [`/blog-og-${blogPost}.jpg`]
    }
  };
}

// Location-based SEO
export function generateLocationSEO(location) {
  const locationData = {
    'india': {
      title: 'App Development Company India | Mobile App Development Services | 3Bit Studio',
      description: '🏆 #1 App Development Company in India ⭐ 3Bit Studio: Mobile App Development, IT Solutions, Custom Software. 1000+ Projects ✅ Free Consultation!',
      keywords: [
        'app development company India',
        'mobile app development India',
        'app developers India',
        'IT solutions India',
        'software development India'
      ]
    },
    'delhi': {
      title: 'App Development Company Delhi | Mobile App Developers Delhi | 3Bit Studio',
      description: '🏆 Leading App Development Company in Delhi ⭐ 3Bit Studio: Mobile App Development, IT Solutions. Expert Delhi App Developers ✅ Free Consultation!',
      keywords: [
        'app development company Delhi',
        'mobile app development Delhi',
        'app developers Delhi',
        'IT solutions Delhi',
        'software development Delhi'
      ]
    },
    'mumbai': {
      title: 'App Development Company Mumbai | Mobile App Developers Mumbai | 3Bit Studio',
      description: '🏆 Top App Development Company in Mumbai ⭐ 3Bit Studio: Mobile App Development, IT Solutions. Expert Mumbai App Developers ✅ Free Consultation!',
      keywords: [
        'app development company Mumbai',
        'mobile app development Mumbai',
        'app developers Mumbai',
        'IT solutions Mumbai',
        'software development Mumbai'
      ]
    }
  };

  const data = locationData[location] || locationData['india'];
  
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://www.3bitstudio.com/app-development-${location}`,
      images: [
        {
          url: `/og-location-${location}.jpg`,
          width: 1200,
          height: 630,
          alt: data.title
        }
      ]
    },
    twitter: {
      title: data.title,
      description: data.description,
      images: [`/og-location-${location}.jpg`]
    }
  };
}

export default {
  generateServiceSEO,
  generateBlogSEO,
  generateLocationSEO
};