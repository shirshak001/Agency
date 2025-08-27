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
            className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-secondary block text-2xl md:text-3xl lg:text-4xl mb-2"></span>
            3bit <span className="text-gradient-studio">Studio</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
             <strong>Premium Web Development & Digital Solutions</strong> <br/>
            
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={() => window.location.href = '/contact'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12  py-4 bg-gradient-blue-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 gradient-shift"
            >
              Get Started
            </motion.button>
            
            <motion.button
              onClick={()=>{ window.location.href = '#projects'; }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-[13px] border-2 border-accent-1 text-accent-1 font-semibold rounded-lg hover:bg-gradient-purple-blue hover:text-white hover:border-transparent transition-all duration-300"
            >
              View Our Work
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {[
            { value: '22', label: 'Projects Completed' },
            { value: '15', label: 'Happy Clients' },
            { value: '24/7', label: 'Hours Support' },
            { value: '99', label: '% Success Rate' },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl md:text-4xl font-bold text-gradient mb-2">
                <CountUp to={parseInt(stat.value)} duration={5} />+
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSimple;