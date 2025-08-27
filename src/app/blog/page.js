'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Best Website Development Company in India - Complete Guide 2024",
      excerpt: "Complete guide to selecting the right web development partner for your business. Learn about pricing, portfolio evaluation, and key questions to ask.",
      image: "/images/blog/web-development-guide.jpg",
      author: "3Bit Studio Team",
      date: "2024-01-15",
      category: "Web Development",
      readTime: "12 min read",
      tags: ["Website Development", "Business Guide", "India"],
      featured: true,
      slug: "how-to-choose-best-website-development-company"
    },
    {
      id: 2,
      title: "SEO Optimization Complete Guide 2024: Rank #1 on Google Search Results",
      excerpt: "Master SEO with our comprehensive guide. Learn proven strategies for on-page, off-page, and technical SEO that actually work in 2024.",
      image: "/images/blog/seo-guide.jpg",
      author: "3Bit Studio SEO Team",
      date: "2024-01-20",
      category: "SEO & Digital Marketing",
      readTime: "15 min read",
      tags: ["SEO", "Digital Marketing", "Google Rankings"],
      featured: true,
      slug: "seo-optimization-complete-guide"
    },
    {
      id: 3,
      title: "Why Choose Indian Web Development Companies? Top 10 Reasons in 2024",
      excerpt: "Discover why Indian web development companies are leading the global market. Learn about cost advantages, technical expertise, and quality standards.",
      image: "/images/blog/indian-web-development.jpg",
      author: "3Bit Studio Team",
      date: "2024-01-25",
      category: "Web Development",
      readTime: "18 min read",
      tags: ["Indian Web Development", "IT Services", "Offshore Development"],
      featured: true,
      slug: "why-choose-indian-web-development-companies"
    },
    {
      id: 4,
      title: "Top 15 Web Development Trends in 2024 That Will Dominate the Industry",
      excerpt: "Stay ahead with the latest web development trends including AI integration, progressive web apps, and responsive design best practices.",
      image: "/images/blog/web-trends-2024.jpg",
      author: "3Bit Studio Tech Team",
      date: "2024-01-25",
      category: "Technology",
      readTime: "10 min read",
      tags: ["Web Trends", "Technology", "2024", "Innovation"],
      featured: false,
      slug: "web-development-trends-2024"
    },
    {
      id: 5,
      title: "Mobile App Development: Native vs Cross-Platform - Complete Comparison 2024",
      excerpt: "Comprehensive comparison of native and cross-platform app development. Learn which approach is best for your business needs and budget.",
      image: "/images/blog/mobile-app-development.jpg",
      author: "3Bit Studio Mobile Team",
      date: "2024-01-22",
      category: "Mobile Development",
      readTime: "12 min read",
      tags: ["Mobile Apps", "React Native", "Development", "Business Strategy"],
      featured: false,
      slug: "native-vs-cross-platform-app-development"
    },
    {
      id: 6,
      title: "UI/UX Design Best Practices 2024: Complete Guide for Better Conversions",
      excerpt: "Learn essential UI/UX design principles that boost conversions. Practical tips for creating user-friendly interfaces that drive business results.",
      image: "/images/blog/ui-ux-guide.jpg",
      author: "3Bit Studio Design Team",
      date: "2024-01-18",
      category: "Design",
      readTime: "11 min read",
      tags: ["UI/UX", "Design", "Conversion", "User Experience"],
      featured: true,
      slug: "ui-ux-design-best-practices-2024"
    },
    {
      id: 7,
      title: "E-commerce Website Development: Complete Guide for Indian Businesses",
      excerpt: "Step-by-step guide to building successful e-commerce websites. Covers payment gateways, security, SEO, and conversion optimization.",
      image: "/images/blog/ecommerce-guide.jpg",
      author: "3Bit Studio E-commerce Team",
      date: "2024-01-16",
      category: "E-commerce",
      readTime: "14 min read",
      tags: ["E-commerce", "Online Store", "Payment Gateway", "Security"],
      featured: false,
      slug: "ecommerce-website-development-guide"
    },
    {
      id: 8,
      title: "Local SEO for Indian Businesses: Dominate Google My Business in 2024",
      excerpt: "Complete local SEO strategy for Indian businesses. Learn how to rank higher in local searches and attract more customers.",
      image: "/images/blog/local-seo-guide.jpg",
      author: "3Bit Studio SEO Team",
      date: "2024-01-14",
      category: "Local SEO",
      readTime: "13 min read",
      tags: ["Local SEO", "Google My Business", "Indian Market", "Local Marketing"],
      featured: false,
      slug: "local-seo-guide-indian-businesses"
    },
    {
      id: 9,
      title: "Website Speed Optimization: Improve Core Web Vitals & Page Load Time",
      excerpt: "Technical guide to website speed optimization. Learn how to improve Core Web Vitals, reduce page load time, and boost SEO rankings.",
      image: "/images/blog/speed-optimization.jpg",
      author: "3Bit Studio Performance Team",
      date: "2024-01-12",
      category: "Performance",
      readTime: "16 min read",
      tags: ["Website Speed", "Core Web Vitals", "Performance", "Technical SEO"],
      featured: true,
      slug: "website-speed-optimization-guide"
    },
    {
      id: 10,
      title: "Digital Marketing Strategy 2024: Complete Guide for Small Businesses",
      excerpt: "Comprehensive digital marketing strategy guide. Learn about social media, content marketing, PPC, and conversion optimization.",
      image: "/images/blog/digital-marketing-strategy.jpg",
      author: "3Bit Studio Marketing Team",
      date: "2024-01-10",
      category: "Digital Marketing",
      readTime: "18 min read",
      tags: ["Digital Marketing", "Strategy", "Small Business", "ROI"],
      featured: false,
      slug: "digital-marketing-strategy-2024"
    },
    {
      id: 11,
      title: "WordPress vs Custom Development: Which is Right for Your Business?",
      excerpt: "Detailed comparison of WordPress and custom development. Pros, cons, costs, and recommendations for different business types.",
      image: "/images/blog/wordpress-vs-custom.jpg",
      author: "3Bit Studio Development Team",
      date: "2024-01-08",
      category: "Web Development",
      readTime: "9 min read",
      tags: ["WordPress", "Custom Development", "CMS", "Business Decision"],
      featured: false,
      slug: "wordpress-vs-custom-development"
    },
    {
      id: 12,
      title: "AI in Web Development: How Machine Learning is Transforming Websites",
      excerpt: "Explore the impact of AI on web development. Learn about chatbots, personalization, automation, and future trends.",
      image: "/images/blog/ai-web-development.jpg",
      author: "3Bit Studio AI Team",
      date: "2024-01-06",
      category: "Artificial Intelligence",
      readTime: "12 min read",
      tags: ["AI", "Machine Learning", "Web Development", "Automation"],
      featured: false,
      slug: "ai-machine-learning-web-development"
    },
    {
      id: 13,
      title: "Website Security Best Practices: Protect Your Business from Cyber Threats",
      excerpt: "Essential website security guide. Learn about SSL certificates, firewalls, malware protection, and compliance requirements.",
      image: "/images/blog/website-security.jpg",
      author: "3Bit Studio Security Team",
      date: "2024-01-04",
      category: "Security",
      readTime: "14 min read",
      tags: ["Website Security", "Cyber Security", "SSL", "Data Protection"],
      featured: false,
      slug: "website-security-best-practices"
    }
  ];

  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]">
      {/* Header */}
      <motion.div 
        className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border-b border-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="group flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-lg group-hover:-translate-x-1 transition-transform duration-300">←</span>
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
            
            <div className="text-center flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
              >
                Blog & Insights
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gray-300 text-lg max-w-2xl mx-auto"
              >
                Latest insights on web development, digital marketing, and business growth
              </motion.p>
            </div>

            <div className="w-[140px]"></div>
          </div>
        </div>
      </motion.div>

      {/* Featured Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="container mx-auto px-6 py-8"
      >
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
              className="px-6 py-3 bg-black/20 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              {category}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-black/30 transition-all duration-300 group cursor-pointer"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 text-white text-sm">
                  {post.readTime}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{new Date(post.date).toLocaleDateString('en-IN')}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  Read More
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Insights
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest web development trends, SEO tips, and business growth strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;
