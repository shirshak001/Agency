'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const FAQSection = () => {
  const quickFAQs = [
    {
      question: "What services do you offer?",
      answer: "We offer UI/UX Design, Branding, Web Development, ML Solutions, and Video Editing."
    },
    {
      question: "How long does a project take?",
      answer: "Project timelines vary from 2-4 weeks for simple websites to 8-16 weeks for complex applications."
    },
    {
      question: "What's your pricing structure?",
      answer: "We offer packages starting from $2,999 with custom solutions available for larger projects."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary to-[#1a1f36]" id="faq">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* <span className="bg-accent-1/20 text-accent-1 px-4 py-1 rounded-full text-sm inline-block mb-4">
              FAQ
            </span> */}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Frequently Asked <span className="text-secondary">Questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-light/80 max-w-2xl mx-auto mb-12"
          >
            Quick answers to common questions. For more detailed information, visit our comprehensive FAQ page.
          </motion.p>
        </div>

        {/* Quick FAQ Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {quickFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-accent-1/30 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-3 text-shadow-lg">
                {faq.question}
              </h3>
              <p className="text-light/70 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-accent-1/10 to-accent-2/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need More Answers?
            </h3>
            <p className="text-light/80 mb-6">
              Explore our comprehensive FAQ page with detailed answers to all your questions about our services, process, and policies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/faq"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-accent-1 to-accent-2 text-white rounded-lg hover:from-accent-1/90 hover:to-accent-2/90 transition-all duration-300 font-medium"
              >
                View All FAQs
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
