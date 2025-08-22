'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const UltraCreativeTeamSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  // Motion values for each card
  const mouseX0 = useMotionValue(0);
  const mouseY0 = useMotionValue(0);
  const mouseX1 = useMotionValue(0);
  const mouseY1 = useMotionValue(0);
  const mouseX2 = useMotionValue(0);
  const mouseY2 = useMotionValue(0);

  const rotateX0 = useTransform(mouseY0, [-300, 300], [15, -15]);
  const rotateY0 = useTransform(mouseX0, [-300, 300], [-15, 15]);
  const rotateX1 = useTransform(mouseY1, [-300, 300], [15, -15]);
  const rotateY1 = useTransform(mouseX1, [-300, 300], [-15, 15]);
  const rotateX2 = useTransform(mouseY2, [-300, 300], [15, -15]);
  const rotateY2 = useTransform(mouseX2, [-300, 300], [-15, 15]);

  const motionValues = [
    { mouseX: mouseX0, mouseY: mouseY0, rotateX: rotateX0, rotateY: rotateY0 },
    { mouseX: mouseX1, mouseY: mouseY1, rotateX: rotateX1, rotateY: rotateY1 },
    { mouseX: mouseX2, mouseY: mouseY2, rotateX: rotateX2, rotateY: rotateY2 }
  ];

  // Team member data
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'Founder & CEO',
      bio: 'Visionary with 10+ years in digital innovation. Passionate about creating meaningful digital experiences that transform businesses.',
      image: '/team/founder.jpg',
      skills: ['Strategic Vision', 'UX Design', 'Business Development', 'Innovation'],
      superpower: 'Future Sight',
      experience: '10+ Years',
      projects: '150+ Projects',
      social: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      },
      color: { primary: '#8B5CF6', secondary: '#3B82F6' },
      element: 'Lightning'
    },
    {
      name: 'Sarah Johnson',
      role: 'Co-Founder & Creative Director',
      bio: 'Award-winning designer with a passion for creating memorable brand experiences and revolutionary user interfaces.',
      image: '/team/cofounder.jpg',
      skills: ['UI/UX', 'Brand Design', 'Motion Graphics', 'Creative Strategy'],
      superpower: 'Design Alchemy',
      experience: '8+ Years',
      projects: '200+ Designs',
      social: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        dribbble: 'https://dribbble.com'
      },
      color: { primary: '#EC4899', secondary: '#F59E0B' },
      element: 'Fire'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      bio: 'Tech innovator specializing in emerging technologies, system architecture, and next-generation performance optimization.',
      image: '/team/cto.jpg',
      skills: ['Full-stack Development', 'AI/ML', 'Cloud Architecture', 'DevOps'],
      superpower: 'Code Mastery',
      experience: '12+ Years',
      projects: '300+ Systems',
      social: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      },
      color: { primary: '#10B981', secondary: '#06B6D4' },
      element: 'Matrix'
    }
  ];

  // Mouse tracking for magnetic effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cardsRef.current) {
        cardsRef.current.forEach((card, index) => {
          if (card && hoveredCard === index) {
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = (e.clientX - centerX) * 0.1;
            const deltaY = (e.clientY - centerY) * 0.1;
            
            gsap.to(card, {
              x: deltaX,
              y: deltaY,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hoveredCard]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800 relative overflow-hidden min-h-screen"
    >
      {/* Cosmic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-black"></div>
        
        {/* Floating Cosmic Elements */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Nebula Effects */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Title Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-6xl md:text-8xl font-bold mb-8 relative"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Meet Our
            </motion.span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Digital Legends
            </motion.span>
            
            {/* Floating Icons */}
            <motion.div
              className="absolute -top-8 -right-8 text-4xl"
              animate={{ rotate: 360, y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              ⚡
            </motion.div>
            <motion.div
              className="absolute -bottom-8 -left-8 text-4xl"
              animate={{ rotate: -360, y: [10, -10, 10] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              🔥
            </motion.div>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Extraordinary individuals with superpowers in design, development, and innovation. 
            Together, we craft digital experiences that transcend the ordinary.
          </motion.p>
        </motion.div>

        {/* Ultra Creative Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {teamMembers.map((member, index) => {
            const isHovered = hoveredCard === index;
            const isActive = activeCard === index;
            const motion = motionValues[index];

            return (
              <motion.div
                key={index}
                className="team-card group relative perspective-1000"
                ref={el => cardsRef.current[index] = el}
                initial={{ opacity: 0, y: 100, rotateX: 30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: index * 0.4, 
                  duration: 1.5, 
                  type: "spring",
                  stiffness: 80,
                  damping: 20
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const centerX = rect.left + rect.width / 2;
                  const centerY = rect.top + rect.height / 2;
                  motion.mouseX.set((e.clientX - centerX) * 0.5);
                  motion.mouseY.set((e.clientY - centerY) * 0.5);
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => {
                  motion.mouseX.set(0);
                  motion.mouseY.set(0);
                  setHoveredCard(null);
                  gsap.to(cardsRef.current[index], { x: 0, y: 0, duration: 0.5 });
                }}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
                style={{
                  rotateX: motion.rotateX,
                  rotateY: motion.rotateY,
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Holographic Border Ring */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: `conic-gradient(from 0deg, ${member.color.primary}, ${member.color.secondary}, ${member.color.primary})`,
                    padding: '3px'
                  }}
                  animate={hoveredCard === index ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 2, ease: "linear" }}
                >
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-slate-900/95 to-slate-800/90 backdrop-blur-xl"></div>
                </motion.div>

                {/* Main Card Container */}
                <motion.div 
                  className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[600px]"
                  style={{ transform: "translateZ(50px)" }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 50px 100px ${member.color.primary}40`,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Energy Field Background */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    <motion.div
                      className="absolute w-full h-full opacity-20"
                      style={{
                        background: `radial-gradient(circle at 30% 40%, ${member.color.primary}20 0%, transparent 70%), 
                                   radial-gradient(circle at 70% 80%, ${member.color.secondary}20 0%, transparent 70%)`
                      }}
                      animate={hoveredCard === index ? {
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      } : {}}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                  </div>

                  {/* Particle Storm */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    {[...Array(25)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{
                          background: `linear-gradient(45deg, ${member.color.primary}, ${member.color.secondary})`,
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={hoveredCard === index ? {
                          y: [-30, -80, -30],
                          x: [-20, 20, -20],
                          opacity: [0, 1, 0],
                          scale: [0.5, 2, 0.5],
                        } : {
                          y: [-10, -20, -10],
                          opacity: [0, 0.3, 0],
                          scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>

                  {/* Quantum Grid */}
                  <svg className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-30 transition-opacity duration-700">
                    <defs>
                      <pattern id={`grid-${index}`} width="50" height="50" patternUnits="userSpaceOnUse">
                        <path d="M 50 0 L 0 0 0 50" fill="none" stroke={member.color.primary} strokeWidth="1"/>
                      </pattern>
                      <linearGradient id={`gridGradient-${index}`}>
                        <stop offset="0%" stopColor={member.color.primary} />
                        <stop offset="100%" stopColor={member.color.secondary} />
                      </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
                  </svg>

                  {/* Glitch Effect */}
                  <AnimatePresence>
                    {hoveredCard === index && (
                      <motion.div
                        className="absolute inset-0 mix-blend-overlay"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: [0, 0.3, 0, 0.3, 0],
                          x: [0, -2, 2, -1, 1, 0],
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, repeat: 2 }}
                        style={{
                          background: `linear-gradient(90deg, ${member.color.primary}20, transparent, ${member.color.secondary}20)`
                        }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Image Container with Portal Effect */}
                  <div className="relative h-80 overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      style={{ transform: "translateZ(40px)" }}
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        width={600}
                        height={600}
                        className="object-cover w-full h-full group-hover:brightness-125 transition-all duration-700"
                      />
                    </motion.div>
                    
                    {/* Portal Ring Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 opacity-0 group-hover:opacity-70"
                      style={{
                        borderColor: member.color.primary,
                        borderImage: `linear-gradient(45deg, ${member.color.primary}, ${member.color.secondary}) 1`,
                      }}
                      animate={hoveredCard === index ? {
                        scale: [0.8, 1.2, 0.8],
                        rotate: [0, 360],
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    {/* Element Symbol */}
                    <motion.div
                      className="absolute top-6 left-6 text-6xl"
                      animate={hoveredCard === index ? {
                        rotate: [0, 360],
                        scale: [1, 1.3, 1],
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {member.element === 'Lightning' && '⚡'}
                      {member.element === 'Fire' && '🔥'}
                      {member.element === 'Matrix' && '🔮'}
                    </motion.div>
                    
                    {/* Superpower Badge */}
                    <motion.div 
                      className="absolute top-6 right-6"
                      whileHover={{ 
                        scale: 1.2,
                        boxShadow: `0 0 30px ${member.color.primary}80`
                      }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div 
                        className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border-2"
                        style={{ borderColor: member.color.primary }}
                      >
                        <p className="text-sm font-bold text-white">{member.superpower}</p>
                      </div>
                    </motion.div>

                    {/* Stats HUD */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex justify-between text-xs text-gray-300">
                        <motion.div
                          className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full"
                          whileHover={{ scale: 1.1 }}
                        >
                          {member.experience}
                        </motion.div>
                        <motion.div
                          className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full"
                          whileHover={{ scale: 1.1 }}
                        >
                          {member.projects}
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  </div>

                  {/* Enhanced Card Content */}
                  <motion.div 
                    className="p-8 relative h-[220px] flex flex-col"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    {/* Role Title */}
                    <motion.p
                      className="text-sm font-semibold mb-2 tracking-wider uppercase opacity-80"
                      style={{ color: member.color.primary }}
                    >
                      {member.role}
                    </motion.p>
                    
                    {/* Name with Holographic Effect */}
                    <motion.h3 
                      className="text-3xl font-bold mb-4 relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.span
                        className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
                        animate={hoveredCard === index ? {
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        } : {}}
                        transition={{ duration: 3, repeat: Infinity }}
                        style={{
                          backgroundSize: "200% 200%",
                        }}
                      >
                        {member.name}
                      </motion.span>
                    </motion.h3>
                    
                    {/* Bio Text */}
                    <motion.p 
                      className="text-gray-300 mb-6 leading-relaxed text-sm flex-grow"
                      whileHover={{ 
                        color: "rgba(255, 255, 255, 0.95)"
                      }}
                    >
                      {member.bio}
                    </motion.p>
                    
                    {/* Quantum Skills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.skills.map((skill, skillIndex) => (
                        <motion.span 
                          key={skill} 
                          className="px-3 py-1 text-xs rounded-full border relative overflow-hidden"
                          style={{
                            backgroundColor: `${member.color.primary}15`,
                            borderColor: `${member.color.primary}40`,
                            color: member.color.primary
                          }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: skillIndex * 0.1 }}
                          whileHover={{ 
                            scale: 1.1,
                            boxShadow: `0 0 20px ${member.color.primary}60`,
                            backgroundColor: `${member.color.primary}25`
                          }}
                        >
                          <motion.div
                            className="absolute inset-0"
                            style={{
                              background: `linear-gradient(90deg, transparent, ${member.color.secondary}40, transparent)`
                            }}
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                          />
                          <span className="relative z-10">{skill}</span>
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* Interdimensional Social Links */}
                    <div className="flex justify-center space-x-4">
                      {Object.entries(member.social).map(([platform, url], socialIndex) => {
                        if (!url) return null;
                        return (
                          <motion.a 
                            key={platform} 
                            href={url} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center relative overflow-hidden group/social"
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ 
                              delay: socialIndex * 0.15, 
                              type: "spring", 
                              stiffness: 400,
                              damping: 20 
                            }}
                            whileHover={{ 
                              scale: 1.5, 
                              rotate: 360,
                              boxShadow: `0 0 30px ${member.color.primary}80`
                            }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {/* Portal Background */}
                            <motion.div
                              className="absolute inset-0 rounded-2xl"
                              style={{
                                background: `conic-gradient(from 0deg, ${member.color.primary}40, transparent, ${member.color.secondary}40)`
                              }}
                              animate={hoveredCard === index ? { rotate: 360 } : {}}
                              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                            
                            {/* Energy Wave */}
                            <motion.div
                              className="absolute inset-0 rounded-2xl"
                              style={{
                                background: `radial-gradient(circle, ${member.color.primary}30 0%, transparent 70%)`
                              }}
                              initial={{ scale: 0, opacity: 0 }}
                              whileHover={{ scale: 2, opacity: 1 }}
                              transition={{ duration: 0.8 }}
                            />
                            
                            {/* Social Icons */}
                            {platform === 'twitter' && (
                              <motion.svg 
                                className="w-7 h-7 text-blue-400 relative z-10" 
                                fill="currentColor" 
                                viewBox="0 0 24 24"
                                whileHover={{ filter: `drop-shadow(0 0 15px ${member.color.primary})` }}
                              >
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                              </motion.svg>
                            )}
                            {platform === 'linkedin' && (
                              <motion.svg 
                                className="w-7 h-7 text-blue-600 relative z-10" 
                                fill="currentColor" 
                                viewBox="0 0 24 24"
                                whileHover={{ filter: `drop-shadow(0 0 15px ${member.color.primary})` }}
                              >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </motion.svg>
                            )}
                            {platform === 'github' && (
                              <motion.svg 
                                className="w-7 h-7 text-purple-300 relative z-10" 
                                fill="currentColor" 
                                viewBox="0 0 24 24"
                                whileHover={{ filter: `drop-shadow(0 0 15px ${member.color.primary})` }}
                              >
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                              </motion.svg>
                            )}
                            {platform === 'dribbble' && (
                              <motion.svg 
                                className="w-7 h-7 text-pink-400 relative z-10" 
                                fill="currentColor" 
                                viewBox="0 0 24 24"
                                whileHover={{ filter: `drop-shadow(0 0 15px ${member.color.primary})` }}
                              >
                                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                              </motion.svg>
                            )}
                          </motion.a>
                        );
                      })}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-12 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold text-lg rounded-full relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Join Our Legendary Team</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraCreativeTeamSection;
