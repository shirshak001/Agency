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
      title: "E-commerce Platform",
      description: "A modern e-commerce solution with advanced features and seamless user experience.",
      detailedDescription: "Built a comprehensive e-commerce platform with real-time inventory management, secure payment processing, and advanced analytics. Features include user authentication, shopping cart functionality, order tracking, and admin dashboard for complete business management.",
      category: "Web Development",
      image: "🛒",
      video: "/videos/soilbuddy.mp4", // Placeholder video
      tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Socket.io"],
      features: ["Real-time inventory", "Secure payments", "Order tracking", "Admin dashboard"],
      duration: "6 months",
      team: "4 developers",
      color: "from-accent-1 to-accent-2"
    },
    {
      id: 2,
      title: "Team Vibhav Project",
      description: "Complete team collaboration and project management solution with advanced features.",
      detailedDescription: "Developed a comprehensive team collaboration platform for Vibhav with real-time communication, project tracking, and advanced workflow management. The solution includes video conferencing, file sharing, task management, and team analytics to enhance productivity and collaboration.",
      category: "Team Collaboration",
      image: "images/vibhav.png",
      video: "/videos/team-vibhav.mp4",
      tech: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB", "Redis"],
      features: ["Real-time collaboration", "Video conferencing", "Task management", "Team analytics"],
      duration: "5 months",
      team: "6 developers",
      color: "from-accent-2 to-secondary"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking application with modern UI/UX design.",
      detailedDescription: "Designed and developed a secure mobile banking application with biometric authentication, real-time transaction monitoring, and advanced security features. Implemented end-to-end encryption, fraud detection, and seamless user experience for financial operations.",
      category: "Mobile App",
      image: "📱",
      video: "/videos/civicledger.mp4", // Placeholder video
      tech: ["React Native", "Firebase", "Stripe", "Biometric Auth", "Encryption"],
      features: ["Biometric login", "Real-time transactions", "Fraud detection", "Multi-currency"],
      duration: "8 months",
      team: "6 developers",
      color: "from-secondary to-accent-1"
    },
    {
      id: 4,
      title: "Healthcare Dashboard",
      description: "Data visualization dashboard for healthcare professionals with real-time analytics.",
      detailedDescription: "Created an advanced healthcare analytics dashboard with real-time patient monitoring, predictive analytics, and comprehensive reporting tools. Features include patient management, appointment scheduling, medical records, and AI-powered health insights.",
      category: "Web App",
      image: "📊",
      video: "/videos/Coolcare1.mp4", // Placeholder video
      tech: ["Vue.js", "D3.js", "PostgreSQL", "Python", "Machine Learning", "WebRTC"],
      features: ["Real-time monitoring", "Predictive analytics", "Patient records", "AI insights"],
      duration: "10 months",
      team: "8 developers",
      color: "from-accent-1 to-primary"
    },
    {
      id: 5,
      title: "Restaurant Website",
      description: "Beautiful restaurant website with online ordering and reservation system.",
      detailedDescription: "Built a modern restaurant website with online ordering system, table reservation management, menu customization, and integrated payment processing. Features include real-time availability, kitchen management system, and customer loyalty program.",
      category: "Website",
      image: "🍽️",
      video: "/videos/portfolio.mp4", // Placeholder video
      tech: ["Next.js", "Tailwind", "Sanity", "Stripe", "Google Maps API", "PWA"],
      features: ["Online ordering", "Table reservations", "Menu management", "Loyalty program"],
      duration: "4 months",
      team: "3 developers",
      color: "from-primary to-accent-2"
    },
    {
      id: 6,
      title: "Fitness App",
      description: "Comprehensive fitness tracking app with workout plans and nutrition guides.",
      detailedDescription: "Developed a complete fitness ecosystem with personalized workout plans, nutrition tracking, progress analytics, and social features. Integrated with wearable devices, AI-powered recommendations, and virtual trainer functionality for optimal user experience.",
      category: "Mobile App",
      image: "💪",
      video: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder video
      tech: ["Flutter", "Firebase", "AI/ML", "HealthKit", "Google Fit", "TensorFlow"],
      features: ["Personalized plans", "Nutrition tracking", "Progress analytics", "Social features"],
      duration: "7 months",
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
          <h2 className="text-4xl p-6 md:text-6xl font-bold mb-6 text-gradient-hero">
            Our <span className="text-gradient-accent">Projects</span>
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
                className="bg-gray-900/95 backdrop-blur-md rounded-2xl border border-purple-500/30 w-[80%] max-h-[90vh] overflow-hidden shadow-2xl"
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
                        <source src={hoveredProject.video} type="video/mp4" />
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
                    <div className="flex gap-4">
                      <button className="px-6 py-3 bg-gradient-blue-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105">
                        View Live Site
                      </button>
                      <button className="px-6 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105">
                        View Case Study
                      </button>
                    </div>
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
