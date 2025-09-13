'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCloud, FaRobot, FaShieldAlt, FaServer, FaCode, FaChartLine, FaDatabase, FaCogs, FaGlobe, FaLaptop, FaUsers, FaTrophy, FaCheckCircle, FaStar, FaRocket } from 'react-icons/fa';
import { SiAmazon, SiGoogle, SiDocker, SiKubernetes, SiTerraform } from 'react-icons/si';

const ITSolutionsPage = () => {
  const itServices = [
    {
      icon: <FaCloud className="text-4xl text-blue-400" />,
      title: "Cloud Computing Services",
      description: "Comprehensive cloud solutions including migration, optimization, and management across AWS, Azure, and Google Cloud.",
      features: ["Cloud Migration", "Cloud Architecture", "DevOps Integration", "Cost Optimization"],
      price: "Starting ₹2,99,999"
    },
    {
      icon: <FaRobot className="text-4xl text-purple-400" />,
      title: "AI & Machine Learning Solutions",
      description: "Advanced AI/ML solutions for business automation, predictive analytics, and intelligent decision-making.",
      features: ["Custom AI Models", "Data Analytics", "Process Automation", "Predictive Analytics"],
      price: "Starting ₹4,99,999"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-red-400" />,
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions to protect your business from cyber threats and ensure compliance.",
      features: ["Security Audits", "Threat Detection", "Compliance Management", "Security Training"],
      price: "Starting ₹1,99,999"
    },
    {
      icon: <FaServer className="text-4xl text-green-400" />,
      title: "IT Infrastructure Services",
      description: "Design, implementation, and management of robust IT infrastructure for scalable business operations.",
      features: ["Infrastructure Design", "Server Management", "Network Setup", "Monitoring & Support"],
      price: "Starting ₹3,49,999"
    },
    {
      icon: <FaCode className="text-4xl text-cyan-400" />,
      title: "Custom Software Development",
      description: "Tailored software solutions to address specific business requirements and operational challenges.",
      features: ["Enterprise Software", "API Development", "System Integration", "Legacy Modernization"],
      price: "Starting ₹5,99,999"
    },
    {
      icon: <FaChartLine className="text-4xl text-orange-400" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize business processes and enhance productivity.",
      features: ["Process Automation", "Digital Strategy", "Technology Adoption", "Change Management"],
      price: "Starting ₹7,99,999"
    }
  ];

  const technologies = [
    { name: "AWS", icon: <SiAmazon className="text-orange-400" />, category: "Cloud Platform" },
    { name: "Microsoft Azure", icon: <FaCloud className="text-blue-400" />, category: "Cloud Platform" },
    { name: "Google Cloud", icon: <SiGoogle className="text-red-400" />, category: "Cloud Platform" },
    { name: "Docker", icon: <SiDocker className="text-blue-500" />, category: "Containerization" },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" />, category: "Orchestration" },
    { name: "Terraform", icon: <SiTerraform className="text-purple-500" />, category: "Infrastructure" }
  ];

  const industries = [
    "Healthcare & Life Sciences",
    "Financial Services & Banking",
    "Manufacturing & Industry 4.0",
    "Retail & E-commerce",
    "Education & EdTech",
    "Government & Public Sector",
    "Logistics & Supply Chain",
    "Real Estate & Construction",
    "Energy & Utilities",
    "Media & Entertainment",
    "Agriculture & FoodTech",
    "Automotive & Transportation"
  ];

  const itCapabilities = [
    "Cloud Migration & Optimization",
    "DevOps & CI/CD Implementation",
    "Microservices Architecture",
    "API Development & Integration",
    "Data Analytics & Business Intelligence",
    "Artificial Intelligence & Machine Learning",
    "Blockchain Development",
    "IoT Solutions & Implementation",
    "Cybersecurity & Compliance",
    "System Integration",
    "Legacy System Modernization",
    "IT Consulting & Strategy"
  ];

  const stats = [
    { number: "500+", label: "IT Projects Delivered" },
    { number: "99.9%", label: "System Uptime" },
    { number: "24/7", label: "IT Support" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]">
      {/* Navigation */}
      <motion.div 
        className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border-b border-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/services"
              className="group flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-lg group-hover:-translate-x-1 transition-transform duration-300">←</span>
              <span className="text-sm font-medium">Back to Services</span>
            </Link>
            
            <Link
              href="/"
              className="group flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-sm font-medium">Home</span>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              IT Solutions Company
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Leading <strong className="text-white">IT Solutions Company</strong> providing enterprise technology services, digital transformation, cloud computing, and custom software development to drive business growth.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Get Free IT Consultation
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 bg-black/20 backdrop-blur-md border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all duration-300"
            >
              View IT Solutions Packages
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* IT Services */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our IT Solutions & Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions to transform your business operations and drive digital innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-black/30 transition-all duration-300 group"
              >
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <div className="mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 mb-2">
                      <FaCheckCircle className="text-green-400 text-sm" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-purple-400 font-semibold text-lg mb-4">
                  {service.price}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  Get Quote
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technologies */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="py-20 bg-black/10"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies and platforms for delivering robust IT solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center hover:bg-black/30 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Industries We Serve */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized IT solutions across diverse industries and business sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.4 }}
                className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center hover:bg-black/30 transition-all duration-300 group"
              >
                <h3 className="text-white font-medium group-hover:text-purple-400 transition-colors">
                  {industry}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* IT Capabilities */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="py-20 bg-black/10"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our IT Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology capabilities to address all your business IT needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {itCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * index, duration: 0.4 }}
                className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-black/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-400 text-lg" />
                  <span className="text-white font-medium group-hover:text-purple-400 transition-colors">
                    {capability}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose 3Bit Studio for IT Solutions?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaTrophy className="text-4xl text-yellow-400" />,
                title: "Award-Winning IT Company",
                description: "Recognized leader in IT solutions with multiple industry awards and certifications from major technology partners."
              },
              {
                icon: <FaUsers className="text-4xl text-blue-400" />,
                title: "Expert IT Professionals",
                description: "Certified IT professionals with deep expertise in cloud computing, cybersecurity, and digital transformation."
              },
              {
                icon: <FaRocket className="text-4xl text-purple-400" />,
                title: "Rapid Implementation",
                description: "Fast and efficient implementation of IT solutions with minimal disruption to your business operations."
              },
              {
                icon: <FaShieldAlt className="text-4xl text-green-400" />,
                title: "Enterprise Security",
                description: "Robust security measures and compliance standards to protect your business data and operations."
              },
              {
                icon: <FaStar className="text-4xl text-orange-400" />,
                title: "24/7 IT Support",
                description: "Round-the-clock monitoring and support to ensure your IT systems run smoothly at all times."
              },
              {
                icon: <FaCheckCircle className="text-4xl text-cyan-400" />,
                title: "Proven Track Record",
                description: "500+ successful IT projects delivered for enterprises, startups, and Fortune 500 companies."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-black/30 transition-all duration-300 group text-center"
              >
                <div className="mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md border border-white/10 rounded-2xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Business with IT Solutions
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to modernize your IT infrastructure and accelerate digital transformation? Let&apos;s discuss your technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Get Free IT Assessment
              </Link>
              <Link
                href="/pricing"
                className="px-10 py-4 bg-black/20 backdrop-blur-md border border-white/10 rounded-xl text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                View IT Solutions Packages
              </Link>
            </div>
          </div>
          
          {/* Internal Linking Section */}
          <div className="text-center mt-16 p-8 bg-gray-800/50 rounded-2xl border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-4 text-white">Mobile-First Solutions</h3>
            <p className="text-gray-300 mb-6">
              Ready to build powerful mobile applications for your business? 
              Discover our specialized mobile app development services.
            </p>
            <Link 
              href="/services/mobile-app-development"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Explore App Development Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ITSolutionsPage;
