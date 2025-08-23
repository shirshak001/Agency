'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const PricingPage = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 4999,
      yearlyPrice: 49990,
      features: [
        'Custom Website Design',
        'Responsive Development',
        'Basic SEO Optimization',
        '3 Rounds of Revisions',
        'Mobile-First Approach',
        '30 Days Support',
        'Analytics Setup'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 6999,
      yearlyPrice: 69990,
      features: [
        'Everything in Starter',
        'Advanced UI/UX Design',
        'E-commerce Integration',
        'CMS Development',
        'Advanced SEO',
        '5 Rounds of Revisions',
        '90 Days Support',
        'Performance Optimization',
        'Social Media Integration'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      description: 'For large-scale projects and enterprises',
      monthlyPrice: 9999,
      yearlyPrice: 99990,
      features: [
        'Everything in Professional',
        'Custom Web Applications',
        'Machine Learning Integration',
        'Advanced Analytics',
        'Multi-language Support',
        'Unlimited Revisions',
        '1 Year Support',
        'Dedicated Project Manager',
        'Priority Support',
        'Custom Integrations'
      ],
      popular: false,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const addOnServices = [
    { name: 'Branding Package', price: 1999, description: 'Logo design, brand guidelines, business cards' },
    { name: 'Video Production', price: 2499, description: 'Promotional videos, animations, motion graphics' },
    { name: 'Monthly Maintenance', price: 4999, description: 'Content updates, security, backups' },
    { name: 'SEO Boost Package', price: 7999, description: 'Advanced SEO optimization and monitoring' },
    { name: 'Social Media Setup', price: 8999, description: 'Profile creation, content strategy, initial posts' }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]">
      {/* Header */}
      <motion.div 
        className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border-b border-white/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transparent Pricing
          </h1>
          <p className="text-xl text-white/70 max-w-3xl">
            Choose the perfect plan for your project. No hidden fees, no surprises.
          </p>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-12">
        {/* Billing Toggle */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-full p-1 border border-white/10">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                billingPeriod === 'monthly' 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                billingPeriod === 'yearly' 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Yearly <span className="text-green-400 text-sm ml-1">(Save 17%)</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border cursor-pointer transition-all duration-300 ${
                selectedPlan === plan.name 
                  ? 'border-purple-500 ring-2 ring-purple-500/50 shadow-lg shadow-purple-500/20 bg-white/10 transform scale-105' 
                  : plan.popular 
                    ? 'border-purple-500/50 ring-2 ring-purple-500/20' 
                    : 'border-white/10 hover:border-white/20'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedPlan(selectedPlan === plan.name ? null : plan.name)}
            >
              {/* Selection Indicator */}
              {selectedPlan === plan.name && (
                <div className="absolute -top-4 -right-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              )}

              {plan.popular && selectedPlan !== plan.name && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {selectedPlan === plan.name && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Selected
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/60 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">
                    {formatPrice(billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice)}
                  </span>
                  <span className="text-white/60 ml-2">
                    {billingPeriod === 'monthly' ? '/month' : '/year'}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedPlan === plan.name
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-green-500/30'
                    : plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPlan(selectedPlan === plan.name ? null : plan.name);
                }}
              >
                {selectedPlan === plan.name ? 'Selected' : 'Select Plan'}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Selected Plan Summary */}
        {selectedPlan && (
          <motion.div
            className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/50 mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                You've selected the {selectedPlan} Plan
              </h3>
              <p className="text-white/70">
                Ready to get started? Let's discuss your project requirements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              >
                Start Your Project
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <button
                onClick={() => setSelectedPlan(null)}
                className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 border border-white/20 transition-all duration-300"
              >
                Change Selection
              </button>
            </div>
          </motion.div>
        )}

        {/* Add-on Services */}
        <motion.div
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Add-on Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOnServices.map((service, index) => (
              <motion.div
                key={service.name}
                className="bg-white/5 rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-white/60 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-purple-400">
                  {formatPrice(service.price)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">What&apos;s included in the base price?</h3>
              <p className="text-white/70">Each plan includes design, development, testing, and deployment. Specific features vary by plan level.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Can I upgrade or downgrade my plan?</h3>
              <p className="text-white/70">Yes, you can change your plan at any time. We&apos;ll pro-rate the difference for the current billing period.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer custom solutions?</h3>
              <p className="text-white/70">Absolutely! Contact us for custom pricing based on your specific requirements and project scope.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
              <p className="text-white/70">We accept all major credit cards, PayPal, bank transfers, UPI, and digital wallet payments.</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Have questions about our pricing or need a custom solution? Our team is here to help you find the perfect plan for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              Contact Sales
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="#"
              className="inline-flex items-center px-8 py-3 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 border border-white/20 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;