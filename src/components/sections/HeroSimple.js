'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import CountUp from '@/components/ui/CountUp';
import Link from 'next/link';

const HeroSimple = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="h-screen bg-primary"></div>;
  }

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-dark via-primary to-dark flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-purple-blue rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-blue-purple rounded-full blur-3xl"
        />
        
        {/* Additional gradient orbs for depth */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-glow rounded-full blur-2xl"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-secondary block text-lg md:text-xl lg:text-2xl mb-2 font-medium">#1 App Development Agency India</span>
            3Bit <span className="text-gradient-studio">Studio</span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-200 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Premier <Link href="/services/mobile-app-development" className="text-blue-400 hover:text-blue-300 transition-colors">Mobile App Development</Link> & <Link href="/services/it-solutions" className="text-purple-400 hover:text-purple-300 transition-colors">IT Solutions</Link> Company
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Transform your business with our cutting-edge <Link href="/services/mobile-app-development" className="text-blue-400 hover:text-blue-300 underline">mobile app development</Link>, 
            <Link href="/services/custom-software-development" className="text-purple-400 hover:text-purple-300 underline"> custom software solutions</Link>, and 
            <Link href="/services/digital-transformation" className="text-green-400 hover:text-green-300 underline"> digital transformation services</Link>. 
            We specialize in <strong>iOS app development</strong>, <strong>Android app development</strong>, 
            <strong>React Native</strong>, <strong>Flutter</strong>, and <strong>enterprise IT solutions</strong>. 
            Trusted by <strong>Fortune 500 companies</strong> and <strong>innovative startups</strong> worldwide 
            for delivering exceptional results with <strong>24/7 technical support</strong>.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-8 text-sm md:text-base"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link href="/services/ios-app-development" className="bg-gray-800 hover:bg-blue-600 px-3 py-1 rounded-full text-gray-300 hover:text-white transition-all">iOS Development</Link>
            <Link href="/services/android-app-development" className="bg-gray-800 hover:bg-green-600 px-3 py-1 rounded-full text-gray-300 hover:text-white transition-all">Android Development</Link>
            <Link href="/services/react-native-development" className="bg-gray-800 hover:bg-blue-500 px-3 py-1 rounded-full text-gray-300 hover:text-white transition-all">React Native</Link>
            <Link href="/services/flutter-development" className="bg-gray-800 hover:bg-cyan-500 px-3 py-1 rounded-full text-gray-300 hover:text-white transition-all">Flutter</Link>
            <Link href="/services/web-development" className="bg-gray-800 hover:bg-purple-600 px-3 py-1 rounded-full text-gray-300 hover:text-white transition-all">Web Development</Link>
            <Link href="/services/ui-ux-design" className="bg-gray-800 hover:bg-pink-600 px-3 py-1 rounded-full text-gray-300 hover:text-white transition-all">UI/UX Design</Link>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-gradient-blue-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 gradient-shift"
              >
                Get Free Consultation
              </motion.button>
            </Link>
            
            <Link href="#projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-[13px] border-2 border-accent-1 text-accent-1 font-semibold rounded-lg hover:bg-gradient-purple-blue hover:text-white hover:border-transparent transition-all duration-300"
              >
                View Our Portfolio
              </motion.button>
            </Link>
          </motion.div>

          {/* Additional content for SEO */}
          <motion.div 
            className="mt-12 max-w-4xl mx-auto text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 text-center">Why Choose 3Bit Studio?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">🏆 Industry Expertise</h4>
                <p className="text-sm md:text-base">
                  We are a leading <Link href="/services" className="text-blue-400 hover:underline">app development company</Link> with expertise in 
                  building <strong>scalable mobile applications</strong>, <strong>enterprise software</strong>, and 
                  <strong>cloud-based solutions</strong>. Our team has delivered <strong>1000+ successful projects</strong> 
                  across various industries including fintech, healthcare, e-commerce, and education.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">🚀 Advanced Technologies</h4>
                <p className="text-sm md:text-base">
                  Stay ahead with our expertise in <Link href="/services/ai-ml-development" className="text-purple-400 hover:underline">AI/ML development</Link>, 
                  <strong>blockchain technology</strong>, <strong>IoT solutions</strong>, and <strong>cloud computing</strong>. 
                  We use cutting-edge frameworks like React Native, Flutter, Node.js, Python, and more to 
                  deliver <Link href="/pricing" className="text-green-400 hover:underline">cost-effective solutions</Link>.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Stats with Links */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {[
            { value: '1000', label: 'Projects Completed', link: '#projects' },
            { value: '500', label: 'Happy Clients', link: '/testimonials' },
            { value: '24/7', label: 'Technical Support', link: '/contact' },
            { value: '99', label: '% Success Rate', link: '/about' },
          ].map((stat, index) => (
            <Link href={stat.link} key={index}>
              <motion.div 
                className="text-center cursor-pointer group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl md:text-4xl font-bold text-gradient mb-2 group-hover:text-blue-400 transition-colors">
                  {stat.value === '24/7' ? '24/7' : <><CountUp to={parseInt(stat.value)} duration={5} />+</>}
                </div>
                <div className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSimple;