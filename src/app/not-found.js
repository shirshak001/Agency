'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import GlareButton from '@/components/ui/GlareButton';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#1a1f36] to-primary"></div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-1/10 rounded-full blur-3xl"
        />
      </div>

      <div className="text-center z-10 relative max-w-2xl mx-auto px-4">
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-gradient-to-r from-accent-1 to-accent-2 bg-clip-text">
            404
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            The page you&apos;re looking for seems to have vanished into the digital void.
          </p>
          <p className="text-gray-400">
            Don&apos;t worry, even the best designers sometimes take wrong turns!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/">
            <GlareButton variant="primary" size="lg">
              Back to Home
            </GlareButton>
          </Link>

          <Link href="/#contact">
            <GlareButton variant="secondary" size="lg">
              Contact Us
            </GlareButton>
          </Link>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 text-6xl opacity-20"
        >
          
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-20 -left-20 text-6xl opacity-20"
        >
          
        </motion.div>
      </div>
    </div>
  );
}
