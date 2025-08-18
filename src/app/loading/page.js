'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

// Simple CountUp Component
const SimpleCountUp = ({ to, duration = 2, delay = 0, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const increment = to / (duration * 60); // 60fps
      const counter = setInterval(() => {
        start += increment;
        if (start >= to) {
          setCount(to);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(counter);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [to, duration, delay]);

  return <span>{count}{suffix}</span>;
};

// Simple Animated Button Component
const AnimatedButton = ({ children, className = "" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold overflow-hidden ${className}`}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0"
        whileHover={{ opacity: 0.3 }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    
    // Show stats after 2 seconds
    const statsTimer = setTimeout(() => setShowStats(true), 2000);
    
    // Simulate loading progress with deterministic increments
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 2.5; // Fixed increment
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        // Navigate to home page after loading is complete
        setTimeout(() => {
          router.push('/home');
        }, 1500);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      clearTimeout(statsTimer);
    };
  }, [router]);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Clean Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Simple Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Subtle Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.01, 0.05, 0.01],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.01, 0.03, 0.01],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
        />

        {/* Reduced Floating Particles */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-0.5 h-0.5 bg-white/10 rounded-full"
            animate={{
              y: [0, -80, 0],
              x: [0, 30, -30, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
            style={{
              left: `${30 + i * 20}%`,
              top: `${40 + i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Centered Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-4"
      >
        <motion.div
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-4 md:px-8 py-3 md:py-4 shadow-2xl mx-auto w-fit max-w-fit"
          whileHover={{ scale: 1.02, y: -1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between space-x-4 md:space-x-8">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs md:text-sm"></span>
              </div>
              <span className="text-white font-bold text-sm md:text-base">CreativeSync</span>
            </motion.div>

            {/* Navigation Links - Hidden on small screens */}
            <div className="hidden lg:flex items-center space-x-6">
              {['Home', 'Services', 'Projects', 'Contact'].map((item, index) => (
                <motion.div
                  key={`nav-${item}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, color: '#60A5FA' }}
                  className="text-white/80 hover:text-blue-400 transition-colors cursor-pointer text-sm"
                >
                  {item}
                </motion.div>
              ))}
            </div>

            {/* Get Started Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex-shrink-0"
            >
              <AnimatedButton className="cursor-pointer text-xs md:text-sm px-4 md:px-6 py-2 md:py-3">
                Get Started
              </AnimatedButton>
            </motion.div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Main Content Area */}
      <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
        <div className="text-center max-w-4xl mx-auto px-4 pt-20 pb-8">
          {/* Rotating Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-8 md:mb-12"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-blue-400 flex items-center justify-center shadow-2xl"
              >
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="text-2xl md:text-4xl font-bold text-white"
                >
<<<<<<< HEAD
                
=======
                  
>>>>>>> 3dd42ced74d5a2d257872b891364135004acb6f2
                </motion.span>
              </motion.div>
              
              {/* Pulse Ring */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-2xl border-2 md:border-4 border-blue-500/60"
              />

              {/* Outer Glow Ring */}
              <motion.div
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
              className="absolute inset-0 rounded-2xl border-2 border-purple-500/50"
            />
          </div>
        </motion.div>

        {/* Agency Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-6 md:mb-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-4">
            Creative<span className="text-blue-400">Sync</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-300 mb-1 md:mb-2"
          >
            Crafting Digital Excellence
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="text-gray-400 text-base md:text-lg"
          >
            Design • Development • Innovation
          </motion.p>
        </motion.div>

        {/* Stats Section with CountUp */}
        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12"
          >
            {[
              { label: 'Projects Completed', value: 150, suffix: '+' },
              { label: 'Happy Clients', value: 99, suffix: '%' },
              { label: 'Years Experience', value: 5, suffix: '+' },
              { label: 'Team Members', value: 12, suffix: '' },
            ].map((stat, index) => (
              <motion.div
                key={`stat-${stat.label}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400 mb-1 md:mb-2">
                  <SimpleCountUp 
                    to={stat.value} 
                    duration={2.5}
                    delay={index * 0.3}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Progress Section - Only show if not completed */}
        {!loadingComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto mb-6 md:mb-8"
          >
            <div className="flex justify-between text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
              <span>Loading Experience</span>
              <span className="text-blue-400 font-semibold">{Math.round(progress)}%</span>
            </div>
            
            {/* Progress Bar Container */}
            <div className="w-full bg-gray-800/50 rounded-full h-2 md:h-3 overflow-hidden backdrop-blur-sm border border-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-blue-500 via-purple-600 to-blue-400 rounded-full relative"
              >
                {/* Shimmer Effect */}
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-400 rounded-full blur-sm opacity-50"></div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Loading Dots - Only show if not completed */}
        {!loadingComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.5 }}
            className="flex justify-center space-x-2 md:space-x-3 mb-4 md:mb-6"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`dot-${i}`}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
                className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
              />
            ))}
          </motion.div>
        )}        {/* Loading Text with Dynamic Messages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="mt-3 md:mt-4"
        >
          {!loadingComplete ? (
            <motion.p
              key={Math.floor(progress / 25)} // Change message every 25%
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-gray-400 text-base md:text-lg font-medium"
            >
              {progress < 25 && "Initializing creative workspace..."}
              {progress >= 25 && progress < 50 && "Loading design components..."}
              {progress >= 50 && progress < 75 && "Preparing user experience..."}
              {progress >= 75 && progress < 100 && "Finalizing magical touches..."}
              {progress >= 100 && "Welcome to CreativeSync!"}
            </motion.p>
          ) : (
            /* Welcome Message after loading */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                className="text-4xl md:text-6xl mb-3 md:mb-4"
              >
                ✨
              </motion.div>
              <motion.p
                className="text-blue-400 text-lg md:text-xl font-semibold mb-4 md:mb-6"
              >
                Welcome to CreativeSync!
              </motion.p>
              <motion.p
                className="text-gray-300 text-base md:text-lg mb-6 md:mb-8"
              >
                Ready to create something amazing!
              </motion.p>
            </motion.div>
          )}
        </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
