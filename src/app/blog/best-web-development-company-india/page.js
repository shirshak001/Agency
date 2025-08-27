'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const BestWebDevelopmentCompanyIndiaPage = () => {
  const topCompanies = [
    {
      rank: 1,
      name: "3BitStudio",
      rating: 4.9,
      location: "Mumbai, India",
      specialization: "Custom Web Development, E-commerce, Mobile Apps",
      experience: "8+ Years",
      projects: "500+",
      clients: "150+",
      pricing: "₹50,000 - ₹5,00,000",
      highlights: ["Award-winning designs", "24/7 support", "100% client satisfaction", "Advanced SEO"],
      technologies: ["React", "Node.js", "Python", "AWS", "MongoDB"],
      portfolio: "/portfolio",
      contact: "/contact"
    },
    {
      rank: 2,
      name: "TechMahindra",
      rating: 4.7,
      location: "Pune, India",
      specialization: "Enterprise Solutions, Digital Transformation",
      experience: "30+ Years",
      projects: "2000+",
      clients: "900+",
      pricing: "₹2,00,000 - ₹50,00,000",
      highlights: ["Global presence", "Enterprise expertise", "Large scale projects", "Fortune 500 clients"],
      technologies: ["Java", ".NET", "SAP", "Oracle", "Cloud"],
      portfolio: "#",
      contact: "#"
    },
    {
      rank: 3,
      name: "Infosys",
      rating: 4.6,
      location: "Bangalore, India",
      specialization: "Digital Services, Consulting, Automation",
      experience: "40+ Years",
      projects: "5000+",
      clients: "1500+",
      pricing: "₹5,00,000 - ₹1,00,00,000",
      highlights: ["Global leader", "Innovation labs", "AI/ML expertise", "Digital transformation"],
      technologies: ["AI", "ML", "Blockchain", "IoT", "Cloud"],
      portfolio: "#",
      contact: "#"
    }
  ];

  const evaluationCriteria = [
    {
      title: "Portfolio & Case Studies",
      description: "Review previous work, success stories, and project complexity",
      weight: "25%",
      icon: "📋"
    },
    {
      title: "Technical Expertise",
      description: "Technology stack, certifications, and development methodologies",
      weight: "25%",
      icon: "💻"
    },
    {
      title: "Client Reviews & Testimonials",
      description: "Customer satisfaction, ratings, and long-term partnerships",
      weight: "20%",
      icon: "⭐"
    },
    {
      title: "Communication & Support",
      description: "Response time, English proficiency, and ongoing support",
      weight: "15%",
      icon: "💬"
    },
    {
      title: "Pricing & Value",
      description: "Cost-effectiveness, transparent pricing, and ROI",
      weight: "10%",
      icon: "💰"
    },
    {
      title: "Delivery Timeline",
      description: "Project completion time, milestone management, and reliability",
      weight: "5%",
      icon: "⏱️"
    }
  ];

  const industries = [
    "E-commerce & Retail",
    "Healthcare & Medical",
    "Education & E-learning",
    "Finance & Banking",
    "Real Estate",
    "Travel & Tourism",
    "Manufacturing",
    "Food & Restaurant",
    "Technology & SaaS",
    "Non-profit & NGO"
  ];

  const services = [
    {
      title: "Custom Web Development",
      description: "Tailored solutions built from scratch to meet specific business requirements",
      technologies: ["React", "Angular", "Vue.js", "Node.js", "Python", "PHP"],
      pricing: "₹50,000 - ₹10,00,000"
    },
    {
      title: "E-commerce Development",
      description: "Complete online store solutions with payment integration and inventory management",
      technologies: ["Shopify", "WooCommerce", "Magento", "Custom Solutions"],
      pricing: "₹75,000 - ₹15,00,000"
    },
    {
      title: "CMS Development",
      description: "Content management systems for easy website updates and content control",
      technologies: ["WordPress", "Drupal", "Joomla", "Custom CMS"],
      pricing: "₹30,000 - ₹5,00,000"
    },
    {
      title: "Progressive Web Apps",
      description: "Fast, reliable web applications that work across all devices and platforms",
      technologies: ["PWA", "Service Workers", "Web App Manifest"],
      pricing: "₹1,00,000 - ₹8,00,000"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Best Web Development Company in India 2024
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Find the perfect web development partner for your business. Compare top-rated companies, services, pricing, and client reviews to make an informed decision.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300">🏆 Expert Reviews</span>
              <span className="px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-300">💯 Verified Companies</span>
              <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300">📊 Data-Driven Rankings</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: "1000+", label: "Companies Analyzed", icon: "🔍" },
              { number: "50+", label: "Hours of Research", icon: "⏰" },
              { number: "10000+", label: "Client Reviews", icon: "⭐" },
              { number: "2024", label: "Latest Data", icon: "📅" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-blue-400 mb-1">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Companies Ranking */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Top 10 Web Development Companies in India 🏆
          </motion.h2>
          <div className="space-y-8">
            {topCompanies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xl font-bold">
                        #{company.rank}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-blue-400">{company.name}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-yellow-400">⭐</span>
                          <span className="text-white font-semibold">{company.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-3/4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-300 mb-3">Company Details</h4>
                        <div className="space-y-2 text-gray-400">
                          <p><span className="text-blue-400">📍 Location:</span> {company.location}</p>
                          <p><span className="text-blue-400">🎯 Specialization:</span> {company.specialization}</p>
                          <p><span className="text-blue-400">⏳ Experience:</span> {company.experience}</p>
                          <p><span className="text-blue-400">📋 Projects:</span> {company.projects}</p>
                          <p><span className="text-blue-400">👥 Clients:</span> {company.clients}</p>
                          <p><span className="text-blue-400">💰 Pricing:</span> {company.pricing}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-300 mb-3">Key Highlights</h4>
                        <div className="space-y-2">
                          {company.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <span className="text-green-400">✅</span>
                              <span className="text-gray-300">{highlight}</span>
                            </div>
                          ))}
                        </div>
                        
                        <h4 className="text-lg font-semibold text-gray-300 mb-2 mt-4">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {company.technologies.map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex gap-4 mt-4">
                          {company.rank === 1 ? (
                            <>
                              <Link href={company.portfolio} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-colors">
                                View Portfolio
                              </Link>
                              <Link href={company.contact} className="px-4 py-2 border border-blue-500/50 hover:bg-blue-500/10 rounded-lg text-blue-400 font-semibold transition-colors">
                                Get Quote
                              </Link>
                            </>
                          ) : (
                            <>
                              <button className="px-4 py-2 bg-gray-600 rounded-lg text-gray-300 font-semibold cursor-not-allowed">
                                External Company
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            How We Evaluate Companies 📊
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {evaluationCriteria.map((criteria, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/20"
              >
                <div className="text-4xl mb-4">{criteria.icon}</div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">{criteria.title}</h3>
                <p className="text-gray-300 mb-3">{criteria.description}</p>
                <div className="text-lg font-semibold text-purple-400">Weight: {criteria.weight}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Web Development Services & Pricing 💼
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl border border-gray-700/50"
              >
                <h3 className="text-2xl font-bold text-blue-400 mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <h4 className="text-lg font-semibold text-gray-300 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="text-lg font-semibold text-green-400">
                  Price Range: {service.pricing}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Industries We Serve 🏭
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="p-4 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg text-center border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="text-blue-400 font-semibold">{industry}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Indian Companies */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Why Choose Indian Web Development Companies? 🇮🇳
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cost-Effective Solutions",
                description: "Get high-quality development at 60-70% lower costs compared to US/UK markets",
                icon: "💰"
              },
              {
                title: "Skilled Developers",
                description: "Access to 4+ million IT professionals with expertise in latest technologies",
                icon: "👨‍💻"
              },
              {
                title: "English Proficiency",
                description: "Second-largest English-speaking population ensures clear communication",
                icon: "🗣️"
              },
              {
                title: "Time Zone Advantage",
                description: "24/7 development cycle with overlapping working hours for global clients",
                icon: "🌍"
              },
              {
                title: "Quality Standards",
                description: "ISO certified companies following international quality and security standards",
                icon: "🏆"
              },
              {
                title: "Proven Track Record",
                description: "Serving 80% of Fortune 500 companies with successful project delivery",
                icon: "📈"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-xl border border-green-500/20"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-green-400 mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Step-by-Step Guide to Choose the Right Company 📝
          </motion.h2>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Define Your Requirements",
                description: "Clearly outline your project scope, budget, timeline, and specific features needed."
              },
              {
                step: "02", 
                title: "Research & Shortlist",
                description: "Research companies based on portfolio, reviews, expertise, and industry experience."
              },
              {
                step: "03",
                title: "Evaluate Proposals",
                description: "Compare proposals, pricing, timelines, and technical approaches from shortlisted companies."
              },
              {
                step: "04",
                title: "Check References",
                description: "Contact previous clients, read case studies, and verify the company's claims."
              },
              {
                step: "05",
                title: "Technical Discussion",
                description: "Have detailed technical discussions to assess their expertise and problem-solving approach."
              },
              {
                step: "06",
                title: "Start with Pilot Project",
                description: "Begin with a small project to evaluate their work quality and communication."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-8"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-2xl border border-blue-500/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Web Development Project? 🚀
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free consultation with India&apos;s top-rated web development company. Let&apos;s discuss your project requirements and provide a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
              </Link>
              <Link href="/pricing" className="px-8 py-3 border border-blue-500/50 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300">
                View Our Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-bold text-center mb-12"
          >
            Related Articles 📚
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/blog/how-to-choose-best-website-development-company" className="group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/20 group-hover:border-blue-400/40 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-blue-400 mb-3 group-hover:text-blue-300">
                  How to Choose the Best Website Development Company
                </h3>
                <p className="text-gray-300 text-sm">
                  Complete guide to selecting the right web development partner.
                </p>
              </motion.div>
            </Link>
            <Link href="/blog/why-choose-indian-web-development-companies" className="group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-purple-400 mb-3 group-hover:text-purple-300">
                  Why Choose Indian Web Development Companies?
                </h3>
                <p className="text-gray-300 text-sm">
                  Discover the advantages of working with Indian developers.
                </p>
              </motion.div>
            </Link>
            <Link href="/blog/seo-optimization-complete-guide" className="group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-6 bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-xl border border-green-500/20 group-hover:border-green-400/40 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-green-400 mb-3 group-hover:text-green-300">
                  SEO Optimization Complete Guide 2024
                </h3>
                <p className="text-gray-300 text-sm">
                  Master SEO strategies to rank #1 on Google search results.
                </p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestWebDevelopmentCompanyIndiaPage;
