'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      category: "General",
      question: "What services does CreativeSync offer?",
      answer: "We offer a comprehensive range of digital services including UI/UX Design, Branding, Web Development, Mobile App Development, Machine Learning solutions, Video Editing, and Digital Marketing. Our team specializes in creating end-to-end digital experiences."
    },
    {
      id: 2,
      category: "General",
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while complex web applications or complete branding projects can take 8-16 weeks. We provide detailed timelines during our initial consultation."
    },
    {
      id: 3,
      category: "Pricing",
      question: "How do you price your services?",
      answer: "Our pricing is project-based and depends on several factors including scope, complexity, timeline, and specific requirements. We offer three main packages: Starter ($2,999), Professional ($5,999), and Enterprise ($9,999), with customization available."
    },
    {
      id: 4,
      category: "Pricing",
      question: "Do you offer payment plans?",
      answer: "Yes! We offer flexible payment plans with typically 50% upfront and 50% upon completion. For larger projects, we can arrange milestone-based payments. We accept all major payment methods and can discuss custom arrangements."
    },
    {
      id: 5,
      category: "Process",
      question: "What is your design process?",
      answer: "Our process includes: 1) Discovery & Research, 2) Strategy & Planning, 3) Design & Prototyping, 4) Development & Testing, 5) Launch & Optimization. We maintain close communication throughout and provide regular updates."
    },
    {
      id: 6,
      category: "Process",
      question: "How do you handle revisions?",
      answer: "We include up to 3 rounds of revisions in our standard packages. Additional revisions can be requested at $150/hour. We encourage feedback early and often to ensure the final product exceeds your expectations."
    },
    {
      id: 7,
      category: "Support",
      question: "Do you provide ongoing support?",
      answer: "Yes! We offer post-launch support including bug fixes, minor updates, and technical assistance. We also provide maintenance packages starting at $299/month for ongoing website management and updates."
    },
    {
      id: 8,
      category: "Support",
      question: "What if I need help after the project is complete?",
      answer: "We're here for you! We provide 30 days of free support after project completion. Beyond that, we offer hourly support at $150/hour or monthly retainer packages for ongoing assistance."
    },
    {
      id: 9,
      category: "Technical",
      question: "What technologies do you work with?",
      answer: "We work with modern technologies including React, Next.js, Node.js, Python, TensorFlow, WordPress, Shopify, and more. We choose the best technology stack based on your specific needs and goals."
    },
    {
      id: 10,
      category: "Technical",
      question: "Can you work with my existing website?",
      answer: "Absolutely! We can work with existing websites, whether it's a redesign, adding new features, optimization, or migration to a new platform. We'll assess your current setup and recommend the best approach."
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
              >
                Frequently Asked Questions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-300 mt-4 max-w-2xl mx-auto"
              >
                Find answers to common questions about our services, process, and policies
              </motion.p>
            </div>
            
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-12 justify-center"
          >
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white/10 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full mb-2">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white/60 ml-4"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-300 mb-6">
                Can&apos;t find what you&apos;re looking for? We&apos;re here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium"
                >
                  Contact Us
                </Link>
                <a
                  href="mailto:info@creativesync.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
