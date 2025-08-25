'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const TermsPage = () => {
  const sections = [
    {
      id: 1,
      title: "1. Agreement to Terms",
      content: `By accessing and using 3Bit Studio's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.

These Terms and Conditions constitute the entire agreement between you and 3Bit Studio and govern your use of our services, superseding any prior agreements between you and 3Bit Studio.`
    },
    {
      id: 2,
      title: "2. Services Overview",
      content: `3Bit Studio provides comprehensive digital services including:
• Web Development and Design
• Mobile Application Development
• UI/UX Design Services
• Branding and Visual Identity
• Digital Marketing Solutions
• AI/ML Integration
• Consulting and Strategy

All services are provided subject to these terms and any additional agreements specific to your project.`
    },
    {
      id: 3,
      title: "3. Project Scope and Deliverables",
      content: `Project scope, timeline, and deliverables will be clearly defined in a separate Statement of Work (SOW) or project proposal. Any changes to the original scope may result in additional charges and timeline adjustments.

We reserve the right to refuse service to anyone for any reason at any time. All projects require a signed agreement before work commences.`
    },
    {
      id: 4,
      title: "4. Payment Terms",
      content: `Payment terms are as follows:
• 50% deposit required before project commencement
• Remaining 50% due upon project completion
• Payment due within 30 days of invoice date
• Late payments may incur a 1.5% monthly service charge
• Additional work outside original scope will be billed separately

All prices are in USD unless otherwise specified. We accept major credit cards, bank transfers, and other mutually agreed payment methods.`
    },
    {
      id: 5,
      title: "5. Intellectual Property Rights",
      content: `Upon full payment, you will own the final deliverables created specifically for your project. However:
• We retain ownership of any pre-existing intellectual property
• We may use project elements in our portfolio and marketing materials
• Third-party assets (fonts, stock images, plugins) remain property of their respective owners
• Source code and development methodologies remain our intellectual property unless explicitly transferred`
    },
    {
      id: 6,
      title: "6. Client Responsibilities",
      content: `To ensure project success, clients must:
• Provide timely feedback and approvals
• Supply all necessary content, images, and materials
• Respond to communications within 48 hours during active projects
• Provide access to necessary accounts and platforms
• Review and approve designs before development begins

Delays in client response may result in project timeline extensions.`
    },
    {
      id: 7,
      title: "7. Revisions and Changes",
      content: `Our packages include up to 3 rounds of revisions. Additional revisions beyond this limit will be charged at our standard hourly rate of $150/hour.

Major scope changes may require a new project agreement. We'll provide estimates for additional work before proceeding.`
    },
    {
      id: 8,
      title: "8. Warranties and Disclaimers",
      content: `We warrant that our services will be performed in a professional manner. However:
• We cannot guarantee specific business results or outcomes
• Websites and applications are tested but we cannot guarantee 100% bug-free operation
• We provide 30 days of free bug fixes after project completion
• Third-party services and integrations are subject to their own terms and limitations`
    },
    {
      id: 9,
      title: "9. Limitation of Liability",
      content: `Our liability is limited to the amount paid for services. We shall not be liable for:
• Indirect, incidental, or consequential damages
• Loss of profits, data, or business opportunities
• Damages resulting from third-party services or integrations
• Issues arising from client-provided content or materials

This limitation applies regardless of the cause of action or theory of liability.`
    },
    {
      id: 10,
      title: "10. Termination",
      content: `Either party may terminate a project with written notice. In case of termination:
• Client pays for work completed to date
• We retain rights to work performed until payment is received
• Refunds are provided only for work not yet performed
• All materials and access will be transferred upon full payment

We reserve the right to terminate projects immediately for non-payment or breach of terms.`
    },
    {
      id: 11,
      title: "11. Confidentiality",
      content: `We maintain strict confidentiality regarding all client information and project details. We will not disclose:
• Business strategies or proprietary information
• Technical specifications or trade secrets
• Personal or financial information
• Any information marked as confidential

This confidentiality extends to all team members and subcontractors working on your project.`
    },
    {
      id: 12,
      title: "12. Governing Law",
      content: `These terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved through:
• Good faith negotiation
• Mediation if necessary
• Binding arbitration as a last resort

All communications and agreements are in English.`
    },
    {
      id: 13,
      title: "13. Updates to Terms",
      content: `We reserve the right to modify these terms at any time. Updates will be posted on our website with the effective date. Continued use of our services constitutes acceptance of revised terms.

For existing projects, original terms remain in effect unless both parties agree to new terms in writing.`
    }
  ];

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
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
              >
                Terms & Conditions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gray-300 text-lg max-w-2xl mx-auto"
              >
                Please read these terms and conditions carefully before using our services
              </motion.p>
            </div>

            <div className="w-[140px]"></div>
          </div>
        </div>
      </motion.div>

      {/* Last Updated */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="container mx-auto px-6 py-6"
      >
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </motion.div>

      {/* Terms Content */}
      <div className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="mb-8"
            >
              <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-black/30 transition-all duration-300">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold">
                    {section.id}
                  </span>
                  {section.title}
                </h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Questions About Our Terms?
            </h3>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms and Conditions, please don&apos;t hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <span className="relative">Contact Us</span>
              </Link>
              <a
                href="mailto:contact@3bitstudio.com"
                className="px-8 py-4 bg-black/20 backdrop-blur-md border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all duration-300"
              >
                contact@3bitstudio.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;
