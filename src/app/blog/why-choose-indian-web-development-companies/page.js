'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const WhyChooseIndianWebDevelopmentPage = () => {
  const reasons = [
    {
      number: "01",
      title: "Cost-Effective Solutions",
      description: "Get high-quality web development services at 60-70% lower costs compared to US/UK markets without compromising quality.",
      details: "Indian companies offer competitive pricing due to lower operational costs, favorable exchange rates, and government support for IT exports."
    },
    {
      number: "02", 
      title: "World-Class Technical Expertise",
      description: "Access to skilled developers proficient in latest technologies like React, Node.js, Python, AI/ML, and blockchain.",
      details: "India produces over 4 million IT graduates annually and has the largest pool of English-speaking developers globally."
    },
    {
      number: "03",
      title: "Proven Track Record",
      description: "Indian IT industry serves 80% of Fortune 500 companies with successful project delivery and long-term partnerships.",
      details: "Over $194 billion IT services revenue with consistent 7-9% YoY growth demonstrates industry maturity and reliability."
    },
    {
      number: "04",
      title: "24/7 Development Cycle",
      description: "Leverage time zone advantages for round-the-clock development, faster project delivery, and continuous support.",
      details: "While you sleep, your project progresses, effectively doubling your development velocity and reducing time-to-market."
    },
    {
      number: "05",
      title: "English Communication",
      description: "Seamless communication with native or fluent English-speaking project managers and developers.",
      details: "India has the second-largest English-speaking population globally, ensuring clear communication and documentation."
    },
    {
      number: "06",
      title: "Quality & Security Standards",
      description: "Adherence to international quality standards like ISO 27001, CMMI Level 5, and robust data security protocols.",
      details: "Indian companies follow stringent quality processes and security measures, often exceeding client expectations."
    }
  ];

  const technologies = [
    "React.js", "Angular", "Vue.js", "Node.js", "PHP", "Python", "Java", 
    "Laravel", "Django", "Express.js", "MongoDB", "MySQL", "PostgreSQL",
    "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "AI/ML"
  ];

  const industries = [
    { name: "E-commerce", projects: "500+" },
    { name: "Healthcare", projects: "300+" },
    { name: "Finance & Banking", projects: "250+" },
    { name: "Education", projects: "400+" },
    { name: "Real Estate", projects: "200+" },
    { name: "Travel & Tourism", projects: "150+" }
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
              Why Choose Indian Web Development Companies?
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover the top 10 reasons why businesses worldwide trust Indian web development companies for their digital transformation needs in 2024.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300">📊 $194B+ Industry Revenue</span>
              <span className="px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-300">💰 60-70% Cost Savings</span>
              <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300">🌍 80% Fortune 500 Trust</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Statistics */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Indian IT Industry at a Glance 📈
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: "$194B+", label: "Annual IT Revenue", icon: "💰" },
              { metric: "4.5M+", label: "IT Professionals", icon: "👨‍💻" },
              { metric: "80%", label: "Fortune 500 Clients", icon: "🏢" },
              { metric: "7-9%", label: "YoY Growth Rate", icon: "📈" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/20"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.metric}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top 10 Reasons */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Top 10 Reasons to Choose Indian Web Development Companies 🚀
          </motion.h2>
          <div className="space-y-12">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/4">
                    <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {reason.number}
                    </div>
                  </div>
                  <div className="lg:w-3/4">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">
                      {reason.title}
                    </h3>
                    <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                      {reason.description}
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      {reason.details}
                    </p>
                  </div>
                </div>
                {index < reasons.length - 1 && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Technology Expertise 💻
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-lg text-gray-300 text-center mb-12 max-w-4xl mx-auto"
          >
            Indian web development companies excel in cutting-edge technologies and frameworks, ensuring your projects are built with the latest and most efficient solutions.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300 hover:bg-blue-600/30 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Industry Experience 🏭
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/20 text-center"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-2">{industry.name}</h3>
                <p className="text-2xl font-bold text-white">{industry.projects}</p>
                <p className="text-gray-400">Projects Completed</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Global Success Stories 🌟
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-8 bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-xl border border-green-500/20"
            >
              <h3 className="text-2xl font-bold text-green-400 mb-4">E-commerce Giant Success</h3>
              <p className="text-gray-300 mb-4">
                &ldquo;Working with an Indian development team helped us reduce costs by 65% while maintaining top-quality standards. Their expertise in React and Node.js transformed our platform.&rdquo;
              </p>
              <p className="text-green-400 font-semibold">- Fortune 500 E-commerce Company</p>
              <div className="mt-4 flex gap-4">
                <span className="text-sm bg-green-600/20 px-3 py-1 rounded-full text-green-300">65% Cost Reduction</span>
                <span className="text-sm bg-blue-600/20 px-3 py-1 rounded-full text-blue-300">6 Month Delivery</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20"
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Healthcare Platform Revolution</h3>
              <p className="text-gray-300 mb-4">
                &ldquo;The Indian development team delivered a HIPAA-compliant healthcare platform that exceeded our expectations. Their attention to security and quality was outstanding.&rdquo;
              </p>
              <p className="text-purple-400 font-semibold">- Healthcare Technology Startup</p>
              <div className="mt-4 flex gap-4">
                <span className="text-sm bg-purple-600/20 px-3 py-1 rounded-full text-purple-300">HIPAA Compliant</span>
                <span className="text-sm bg-pink-600/20 px-3 py-1 rounded-full text-pink-300">24/7 Support</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Choose the Right Indian Company */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            How to Choose the Right Indian Web Development Company 🎯
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Key Evaluation Criteria:</h3>
              {[
                "✅ Portfolio & Case Studies Review",
                "✅ Technical Expertise Assessment", 
                "✅ Communication & English Proficiency",
                "✅ Security & Compliance Standards",
                "✅ Client Testimonials & References",
                "✅ Project Management Methodology",
                "✅ Post-Launch Support & Maintenance",
                "✅ Transparent Pricing Structure"
              ].map((criteria, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-gray-300"
                >
                  <span className="mr-3">{criteria}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Red Flags to Avoid:</h3>
              {[
                "❌ Unrealistic Low Pricing",
                "❌ Poor Communication Skills",
                "❌ No Portfolio or Case Studies",
                "❌ Lack of Security Measures",
                "❌ No Clear Project Timeline",
                "❌ Hidden Costs or Fees",
                "❌ No Post-Launch Support",
                "❌ Outdated Technology Stack"
              ].map((flag, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-gray-300"
                >
                  <span className="mr-3">{flag}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Trends */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Future of Indian Web Development 🚀
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI & Machine Learning",
                description: "Indian companies are at the forefront of AI integration in web development, offering intelligent solutions.",
                icon: "🤖"
              },
              {
                title: "Blockchain & Web3",
                description: "Leading the Web3 revolution with expertise in blockchain development and decentralized applications.",
                icon: "⛓️"
              },
              {
                title: "IoT & Edge Computing",
                description: "Pioneering IoT solutions and edge computing applications for next-generation web platforms.",
                icon: "📡"
              }
            ].map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/20 text-center"
              >
                <div className="text-4xl mb-4">{trend.icon}</div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">{trend.title}</h3>
                <p className="text-gray-300">{trend.description}</p>
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
              Ready to Experience the Indian Advantage? 🌟
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses worldwide who have transformed their digital presence with Indian web development expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
              </Link>
              <Link href="/pricing" className="px-8 py-3 border border-blue-500/50 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300">
                View Pricing Plans
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/blog/how-to-choose-best-website-development-company" className="group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/20 group-hover:border-blue-400/40 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-3 group-hover:text-blue-300">
                  How to Choose the Best Website Development Company
                </h3>
                <p className="text-gray-300">
                  Complete guide to selecting the right web development partner for your business needs.
                </p>
              </motion.div>
            </Link>
            <Link href="/blog/seo-optimization-complete-guide" className="group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-purple-400 mb-3 group-hover:text-purple-300">
                  SEO Optimization Complete Guide 2024
                </h3>
                <p className="text-gray-300">
                  Master SEO strategies to rank #1 on Google search results with proven techniques.
                </p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseIndianWebDevelopmentPage;
