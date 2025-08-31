'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const InsightsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const insights = [
    {
      id: 1,
      title: "How We Increased Client's Organic Traffic by 450% in 6 Months",
      excerpt: "Complete case study of our SEO strategy that transformed a local business into a digital leader with proven results and actionable insights.",
      category: "Case Study",
      author: "3Bit Studio Team",
      date: "2024-01-25",
      readTime: "8 min read",
      image: "/images/insights/seo-case-study.jpg",
      tags: ["SEO Success", "Organic Traffic", "Case Study", "Digital Growth"],
      featured: true,
      results: {
        traffic: "+450%",
        keywords: "127 Top 10 Rankings",
        revenue: "+280%",
        leads: "+320%"
      }
    },
    {
      id: 2,
      title: "Web Development Trends 2024: What Indian Businesses Need to Know",
      excerpt: "Comprehensive analysis of emerging web development trends and their impact on Indian businesses. Stay ahead with cutting-edge technologies.",
      category: "Industry Insights",
      author: "3Bit Studio Tech Team",
      date: "2024-01-22",
      readTime: "12 min read",
      image: "/images/insights/web-trends-2024.jpg",
      tags: ["Web Development", "Technology Trends", "Business Strategy", "Innovation"],
      featured: false
    },
    {
      id: 3,
      title: "Cost Analysis: In-House vs Agency vs Freelancer for Web Development",
      excerpt: "Detailed financial breakdown and comparison of different approaches to web development. Make informed decisions for your business.",
      category: "Business Strategy",
      author: "3Bit Studio Team",
      date: "2024-01-20",
      readTime: "10 min read",
      image: "/images/insights/cost-analysis.jpg",
      tags: ["Cost Analysis", "Business Decision", "Web Development", "ROI"],
      featured: false
    },
    {
      id: 4,
      title: "Mobile-First Design: Success Story of E-commerce Redesign",
      excerpt: "How we redesigned an e-commerce website with mobile-first approach, resulting in 65% increase in mobile conversions.",
      category: "Case Study",
      author: "3Bit Studio UX Team",
      date: "2024-01-18",
      readTime: "7 min read",
      image: "/images/insights/mobile-first-case-study.jpg",
      tags: ["Mobile Design", "E-commerce", "UX/UI", "Conversion Optimization"],
      featured: true,
      results: {
        mobileConversions: "+65%",
        pageSpeed: "+40%",
        bounceRate: "-35%",
        revenue: "+180%"
      }
    },
    {
      id: 5,
      title: "AI Integration in Website Development: Practical Applications",
      excerpt: "Explore real-world applications of AI in web development, from chatbots to personalization engines, with implementation strategies.",
      category: "Technology",
      author: "3Bit Studio AI Team",
      date: "2024-01-15",
      readTime: "15 min read",
      image: "/images/insights/ai-integration.jpg",
      tags: ["Artificial Intelligence", "Web Development", "Automation", "Innovation"],
      featured: false
    },
    {
      id: 6,
      title: "Local SEO Domination: Restaurant Chain Case Study",
      excerpt: "How we helped a restaurant chain dominate local search results across 15+ locations with strategic local SEO implementation.",
      category: "Case Study",
      author: "3Bit Studio SEO Team",
      date: "2024-01-12",
      readTime: "9 min read",
      image: "/images/insights/local-seo-case-study.jpg",
      tags: ["Local SEO", "Multi-Location", "Restaurant Marketing", "Google My Business"],
      featured: true,
      results: {
        localRankings: "Top 3 in 94% locations",
        callIncrease: "+240%",
        footTraffic: "+160%",
        onlineOrders: "+190%"
      }
    },
    {
      id: 7,
      title: "Website Security: Essential Guide for Indian Businesses",
      excerpt: "Comprehensive security guide covering SSL certificates, firewalls, malware protection, and compliance requirements for Indian businesses.",
      category: "Security",
      author: "3Bit Studio Security Team",
      date: "2024-01-10",
      readTime: "11 min read",
      image: "/images/insights/website-security.jpg",
      tags: ["Website Security", "Cyber Security", "SSL Certificate", "Data Protection"],
      featured: false
    },
    {
      id: 8,
      title: "Performance Optimization: 2.3s to 0.8s Page Load Time",
      excerpt: "Technical deep-dive into how we optimized a high-traffic website, reducing load time by 65% and improving Core Web Vitals.",
      category: "Performance",
      author: "3Bit Studio Performance Team",
      date: "2024-01-08",
      readTime: "13 min read",
      image: "/images/insights/performance-optimization.jpg",
      tags: ["Website Performance", "Page Speed", "Core Web Vitals", "Technical SEO"],
      featured: true,
      results: {
        loadTime: "65% faster",
        coreWebVitals: "100% green",
        bounceRate: "-45%",
        conversions: "+38%"
      }
    }
  ];

  const categories = ['All', 'Case Study', 'Industry Insights', 'Technology', 'Business Strategy', 'Security', 'Performance'];

  const filteredInsights = activeCategory === 'All' 
    ? insights 
    : insights.filter(insight => insight.category === activeCategory);

  const featuredInsights = insights.filter(insight => insight.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]">
      {/* Header */}
      <motion.div 
        className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border-b border-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
            >
              Insights & Case Studies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Real results, proven strategies, and industry insights from India&apos;s leading digital agency. 
              Learn from our 500+ successful projects and expert analysis.
            </motion.p>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-12">
        {/* Featured Case Studies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            🏆 Featured Success Stories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredInsights.slice(0, 4).map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-black/30 transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-medium">
                      {insight.category}
                    </span>
                    <span className="text-gray-400 text-sm">{insight.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {insight.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {insight.excerpt}
                  </p>

                  {insight.results && (
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(insight.results).map(([key, value], resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="text-2xl font-bold text-green-400 mb-1">{value}</div>
                          <div className="text-gray-400 text-sm capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        3B
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">{insight.author}</div>
                        <div className="text-gray-400 text-xs">
                          {new Date(insight.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </div>
                      </div>
                    </div>
                    
                    <Link
                      href={`/insights/${insight.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white text-sm font-medium hover:scale-105 transition-transform duration-300"
                    >
                      Read Case Study
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-black/20 border border-white/10 text-gray-300 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* All Insights Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            📚 All Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-black/30 transition-all duration-300 group hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      insight.category === 'Case Study' ? 'bg-green-600/20 text-green-300' :
                      insight.category === 'Technology' ? 'bg-blue-600/20 text-blue-300' :
                      insight.category === 'Security' ? 'bg-red-600/20 text-red-300' :
                      insight.category === 'Performance' ? 'bg-yellow-600/20 text-yellow-300' :
                      'bg-purple-600/20 text-purple-300'
                    }`}>
                      {insight.category}
                    </span>
                    <span className="text-gray-400 text-xs">{insight.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {insight.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {insight.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {insight.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-black/20 border border-white/10 text-gray-400 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-gray-400 text-xs">
                      {new Date(insight.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </div>
                    
                    <Link
                      href={`/insights/${insight.id}`}
                      className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Newsletter Signup */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              📬 Get Weekly Insights & Case Studies
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join 10,000+ business owners receiving our exclusive insights, case studies, and proven strategies 
              for digital success. No spam, just valuable content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300">
                Subscribe Free
              </button>
            </div>
            <div className="text-gray-400 text-sm mt-3">
              ✅ Weekly insights ✅ Exclusive case studies ✅ Industry trends ✅ Unsubscribe anytime
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-300 mb-6">
              Let&apos;s discuss how we can help your business achieve similar results with our proven strategies and expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Start Your Project
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 bg-black/20 backdrop-blur-md border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all duration-300"
              >
                View Our Packages
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default InsightsPage;
