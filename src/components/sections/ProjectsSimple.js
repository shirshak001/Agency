'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const ProjectsSimple = () => {
  const [isClient, setIsClient] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  

  if (!isClient) {
    return <div className="h-96 bg-primary"></div>;
  }

  const projects = [
    {
      id: 1,
      title: "Soil Health Tracker App",
      description: "A smart solution to monitor and improve soil health for sustainable farming.",
      detailedDescription: "Developed an IoT-enabled soil health tracking app that allows farmers to monitor soil moisture, pH, and nutrient levels in real-time. Integrated AI models provide recommendations for fertilizers, irrigation schedules, and crop rotation, helping increase yield and reduce costs.",
      category: "AgriTech",
      image: "/images/SoilBuddy.webp",
      video: "/videos/soilbuddy.webm",
      tech: ["React Native", "Node.js", "MongoDB", "IoT Sensors", "AI/ML"],
      features: ["Real-time soil monitoring", "AI-based recommendations", "Fertilizer planning", "Irrigation scheduling"],
      duration: "2 months",
      team: "4 developers",
      color: "from-accent-1 to-accent-2"
    },
    {
      id: 2,
      title: "Team Vibhav Website",
      description: "Dynamic website for Team Vibhav with portfolio, events, and team management.",
      detailedDescription: "Designed and developed an official website for Team Vibhav, showcasing projects, achievements, and events. The platform also includes a custom CMS for easy content updates, an event management system, and a responsive design for optimal mobile experience.",
      category: "Web Development",
      image: "/images/vibhav.webp",
      video: "/videos/vibhav.webm",
      tech: ["Next.js", "Tailwind CSS", "Sanity CMS", "Vercel"],
      features: ["Project showcase", "Event management", "Team profiles", "CMS integration"],
      duration: "1 months",
      team: "6 developers",
      color: "from-accent-2 to-secondary"
    },
    {
      id: 3,
      title: "Tender Allocation Website",
      description: "A secure platform for managing government and private tenders with transparency.",
      detailedDescription: "Built a digital tender management system where contractors and organizations can securely apply, track, and manage tenders. Features include role-based authentication, automated bidding workflows, contract management, and document verification.",
      category: "Web Application",
      image: "/images/civicledger.webp",
      video: "/videos/civicledger.webm",
      tech: ["React", "Node.js", "MongoDB", "JWT", "Solidity"],
      features: ["Tender listing & bidding", "Contract management", "Secure document upload", "Admin dashboard"],
      duration: "2 months",
      team: "6 developers",
      color: "from-secondary to-accent-1"
    },
    {
      id: 4,
      title: "Service Provider App (Fixspire)",
      description: "On-demand service marketplace for connecting users with professionals.",
      detailedDescription: "Created a full-featured service provider app where users can book electricians, plumbers, and other professionals on-demand. The system supports real-time booking, in-app chat, secure payments, and provider performance tracking.",
      category: "Mobile & Web App",
      image: "/images/Fixspire.webp",
      video: "/videos/Coolcare1.webm",
      tech: ["React Native", "Firebase", "Stripe", "Google Maps API"],
      features: ["Service booking", "Real-time chat", "Payment integration", "Provider tracking"],
      duration: "2 months",
      team: "8 developers",
      color: "from-accent-1 to-primary"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A sleek personal portfolio to showcase projects, blogs, and achievements.",
      detailedDescription: "Built a high-performance portfolio website with dynamic project sections, blog integration, and smooth animations. Optimized for SEO, responsive design, and easy scalability using headless CMS integration.",
      category: "Personal Website",
      image: "/images/portfolio.webp",
      video: "/videos/portfolio.webm",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Sanity CMS"],
      features: ["Dynamic project showcase", "Blog integration", "SEO optimization", "Responsive design"],
      duration: "1 month",
      team: "1 developer",
      color: "from-primary to-accent-2"
    },
    {
      id: 6,
      title: "E-commerce App (LayerForge)",
      description: "A scalable e-commerce platform with personalized shopping experiences.",
      detailedDescription: "Developed a full-stack e-commerce app with personalized product recommendations, secure payments, and real-time order tracking. Integrated with analytics and admin dashboards for complete business management.",
      category: "E-commerce",
      image: "/images/LayerForge.webp",
      video: "/videos/Layerforge.webm", // Replace with actual video later
      tech: ["React Native", "Firebase", "Stripe", "AI Recommendations"],
      features: ["Personalized shopping", "Secure payments", "Order tracking", "Admin dashboard"],
      duration: "1 month",
      team: "5 developers",
      color: "from-accent-2 to-accent-1"
    }
  ];


  return (
    <section id="projects" className="py-20 bg-gradient-secondary relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-32 -left-32 w-96 h-96 bg-gradient-purple-blue rounded-full opacity-15 blur-3xl animate-pulse" />
        <div className="absolute bottom-32 -right-32 w-96 h-96 bg-gradient-blue-purple rounded-full opacity-15 blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a look at some of our recent work and see how we&apos;ve helped businesses
            achieve their digital goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setHoveredProject(project)}
            >
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 h-full shadow-2xl hover:shadow-purple-500/20 cursor-pointer transform hover:scale-105 relative">

                {/* Suggestion Text Overlay */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 rounded-xl">
                  <div className="text-center p-6">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="mb-4"
                    >
                      <div className="w-16 h-16 bg-gradient-blue-purple rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </motion.div>

                    <motion.h4
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="text-white font-bold text-lg mb-2"
                    >
                      Click to Explore
                    </motion.h4>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className="text-gray-300 text-sm mb-4"
                    >
                      See detailed project info, tech stack & video demo
                    </motion.p>

                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="inline-flex items-center px-4 py-2 bg-gradient-blue-purple text-white text-sm font-medium rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200"
                    >
                      <span>View Details</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Project Image/Icon */}
                <div className="h-48 bg-gradient-purple-blue flex items-center justify-center text-6xl relative overflow-hidden">
                  <img src={project.image} alt="" className='object-cover w-full h-full' />

                  {/* Original overlay on hover - now hidden when suggestion overlay is active */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-0 transition-opacity duration-300">
                    <button className="px-6 py-3 bg-gradient-blue-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-accent-2/20 text-accent-2 text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-purple-200 text-xs rounded border border-purple-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-purple-200 text-xs rounded border border-purple-400/30">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Hover Card */}
        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setHoveredProject(null)}
              style={{ zIndex: 9999 }}
            >
              <motion.div
                className="bg-gray-900/95 backdrop-blur-md  z-100 rounded-2xl border border-purple-500/30 w-[80%] max-h-[90vh] overflow-hidden shadow-2xl"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Left Side - Video */}
                  <div className="lg:w-1/2 relative bg-black min-h-[440px]">
                    {/* Fallback background - always visible as base layer */}
                    {/* <div className="absolute inset-0 flex items-center justify-center text-8xl bg-gradient-purple-blue">
                      {hoveredProject.image}
                    </div>
                     */}
                    {/* Video element */}
                    {hoveredProject.video && (
                      <video
                        key={`video-${hoveredProject.id}`}
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls={false}
                        className="w-full h-full object-cover absolute inset-0 z-10"
                        style={{ backgroundColor: 'transparent' }}
                        onLoadStart={() => console.log('🎬 Video loading started:', hoveredProject.video)}
                        onCanPlay={() => console.log('✅ Video can play:', hoveredProject.video)}
                        onPlay={() => console.log('▶️ Video playing:', hoveredProject.video)}
                        onError={(e) => {
                          console.error('❌ Video error:', hoveredProject.video, e.target.error);
                        }}
                        onLoadedData={() => console.log('📼 Video data loaded:', hoveredProject.video)}
                      >
                        <source src={hoveredProject.video} type="video/webm" />
                        <p className="text-white">Your browser does not support the video tag.</p>
                      </video>
                    )}

                    {/* Video overlay - lighter so video is more visible */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20 pointer-events-none" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-30">
                      <span className="px-3 py-1 bg-purple-600/90 backdrop-blur-sm text-white text-sm rounded-full font-medium">
                        {hoveredProject.category}
                      </span>
                    </div>

                    {/* Debug info - remove this later */}
                    <div className="absolute bottom-4 left-4 z-30 bg-black/50 text-white text-xs p-2 rounded">
                      Video: {hoveredProject.video}
                    </div>
                  </div>

                  {/* Right Side - Details */}
                  <div className="lg:w-1/2 p-8 overflow-y-auto">
                    {/* Close Button */}
                    <button
                      onClick={() => setHoveredProject(null)}
                      className="absolute top-4 right-4 w-8 h-8 bg-gray-700/80 hover:bg-gray-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors z-10"
                    >
                      ✕
                    </button>

                    <h2 className="text-3xl font-bold text-white mb-4 pr-12">
                      {hoveredProject.title}
                    </h2>

                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {hoveredProject.detailedDescription}
                    </p>

                    {/* Project Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="text-purple-400 font-semibold mb-2">Duration</h4>
                        <p className="text-gray-300">{hoveredProject.duration}</p>
                      </div>
                      <div>
                        <h4 className="text-purple-400 font-semibold mb-2">Team Size</h4>
                        <p className="text-gray-300">{hoveredProject.team}</p>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-purple-400 font-semibold mb-3">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {hoveredProject.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-purple-400 font-semibold mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {hoveredProject.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-purple-200 text-sm rounded-lg border border-purple-400/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    {/* <div className="flex gap-4">
                      <button className="px-6 py-3 bg-gradient-blue-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105">
                        View Live Site
                      </button>
                      <button className="px-6 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105">
                        View Case Study
                      </button>
                    </div> */}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-8 text-lg">
            Have a project in mind? Let&apos;s bring it to life together.
          </p>
          <motion.button
            onClick={() => { window.location.href = '/contact' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-blue-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSimple;
