'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaMobile, FaApple, FaAndroid, FaReact, FaCode, FaRocket, FaUsers, FaTrophy, FaCheckCircle, FaStar } from 'react-icons/fa';
import { SiFlutter, SiKotlin, SiSwift, SiReact } from 'react-icons/si';

const MobileAppDevelopmentPage = () => {
  const appServices = [
    {
      icon: <FaApple className="text-4xl text-gray-300" />,
      title: "iOS App Development",
      description: "Native iOS applications using Swift and Objective-C for optimal performance and user experience on Apple devices.",
      features: ["Native iOS Development", "App Store Optimization", "iOS UI/UX Design", "Swift Programming"],
      price: "Starting ₹1,99,999"
    },
    {
      icon: <FaAndroid className="text-4xl text-green-500" />,
      title: "Android App Development", 
      description: "High-performance Android applications using Kotlin and Java for maximum reach across Android devices.",
      features: ["Native Android Development", "Google Play Store Optimization", "Material Design", "Kotlin Programming"],
      price: "Starting ₹1,79,999"
    },
    {
      icon: <SiFlutter className="text-4xl text-blue-400" />,
      title: "Flutter App Development",
      description: "Cross-platform mobile applications using Flutter for faster development and consistent experience.",
      features: ["Cross-Platform Development", "Single Codebase", "Fast Development", "Native Performance"],
      price: "Starting ₹1,49,999"
    },
    {
      icon: <SiReact className="text-4xl text-cyan-400" />,
      title: "React Native Development",
      description: "Cross-platform mobile apps using React Native for efficient development and native-like performance.",
      features: ["Cross-Platform Apps", "React Native Framework", "Code Reusability", "Native Modules"],
      price: "Starting ₹1,39,999"
    },
    {
      icon: <FaCode className="text-4xl text-purple-400" />,
      title: "Hybrid App Development",
      description: "Cost-effective hybrid applications using web technologies for quick deployment across platforms.",
      features: ["Hybrid Development", "Cordova/PhoneGap", "Web Technologies", "Multi-Platform"],
      price: "Starting ₹99,999"
    },
    {
      icon: <FaRocket className="text-4xl text-orange-400" />,
      title: "App Modernization",
      description: "Upgrade and modernize existing mobile applications with latest technologies and improved performance.",
      features: ["Legacy App Migration", "Performance Optimization", "UI/UX Redesign", "Technology Upgrade"],
      price: "Starting ₹79,999"
    }
  ];

  const technologies = [
    { name: "Swift", icon: <SiSwift className="text-orange-500" />, category: "iOS" },
    { name: "Kotlin", icon: <SiKotlin className="text-purple-500" />, category: "Android" },
    { name: "Flutter", icon: <SiFlutter className="text-blue-400" />, category: "Cross-Platform" },
    { name: "React Native", icon: <SiReact className="text-cyan-400" />, category: "Cross-Platform" },
    { name: "Java", icon: <FaCode className="text-red-500" />, category: "Android" },
    { name: "Objective-C", icon: <FaApple className="text-gray-300" />, category: "iOS" }
  ];

  const industries = [
    "E-commerce & Retail",
    "Healthcare & Telemedicine", 
    "Fintech & Banking",
    "Education & E-Learning",
    "Food & Restaurant",
    "Travel & Tourism",
    "Real Estate",
    "Entertainment & Media",
    "Logistics & Transportation",
    "Social Networking",
    "Gaming",
    "Enterprise Solutions"
  ];

  const appFeatures = [
    "Push Notifications",
    "Real-time Messaging",
    "Payment Gateway Integration",
    "Social Media Integration",
    "GPS & Location Services",
    "Camera & Photo Integration",
    "Offline Data Storage",
    "Biometric Authentication",
    "Cloud Synchronization",
    "Analytics Integration",
    "Third-party API Integration",
    "Multi-language Support"
  ];

  const stats = [
    { number: "450+", label: "Apps Developed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "50+", label: "Industries Served" }
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
              Mobile App Development Agency
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Leading <strong className="text-white">App Development Agency</strong> in India. We build powerful iOS, Android, and Cross-Platform mobile applications that drive business growth and user engagement.
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
              Get Free App Consultation
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 bg-black/20 backdrop-blur-md border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all duration-300"
            >
              View App Development Packages
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* App Development Services */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Mobile App Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive app development solutions for all platforms and business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appServices.map((service, index) => (
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
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies for building robust and scalable mobile applications
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
              Specialized app development solutions across diverse industries
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

      {/* App Features */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="py-20 bg-black/10"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced App Features We Integrate
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful features to enhance user experience and app functionality
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {appFeatures.map((feature, index) => (
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
                    {feature}
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
              Why Choose 3Bit Studio for App Development?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaTrophy className="text-4xl text-yellow-400" />,
                title: "Award-Winning Agency",
                description: "Recognized as a leading app development agency with multiple industry awards and certifications."
              },
              {
                icon: <FaUsers className="text-4xl text-blue-400" />,
                title: "Expert Development Team",
                description: "Skilled developers with 5+ years of experience in mobile app development across all platforms."
              },
              {
                icon: <FaRocket className="text-4xl text-purple-400" />,
                title: "Agile Development",
                description: "Fast and efficient development process with regular updates and transparent communication."
              },
              {
                icon: <FaMobile className="text-4xl text-green-400" />,
                title: "Cross-Platform Expertise",
                description: "Expertise in native and cross-platform development for maximum reach and performance."
              },
              {
                icon: <FaStar className="text-4xl text-orange-400" />,
                title: "24/7 Support",
                description: "Round-the-clock support and maintenance to ensure your app runs smoothly at all times."
              },
              {
                icon: <FaCheckCircle className="text-4xl text-cyan-400" />,
                title: "Quality Assurance",
                description: "Rigorous testing and quality assurance processes to deliver bug-free, high-performance apps."
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
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let&apos;s transform your idea into a powerful mobile application that drives business growth and user engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Start Your App Project Today
              </Link>
              <Link
                href="/pricing"
                className="px-10 py-4 bg-black/20 backdrop-blur-md border border-white/10 rounded-xl text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                View Development Packages
              </Link>
            </div>
          </div>
          
          {/* Internal Linking Section */}
          <div className="text-center mt-16 p-8 bg-gray-800/50 rounded-2xl border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-4 text-white">Complete Technology Solutions</h3>
            <p className="text-gray-300 mb-6">
              Looking for comprehensive business technology solutions beyond mobile apps? 
              Explore our complete range of enterprise services.
            </p>
            <Link 
              href="/services/it-solutions"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Explore IT Solutions Services
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

export default MobileAppDevelopmentPage;
