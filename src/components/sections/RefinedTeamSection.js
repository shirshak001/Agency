'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const RefinedTeamSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for magnetic effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Team member data
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'Founder & CEO',
      bio: 'Visionary with 10+ years in digital innovation. Passionate about creating meaningful digital experiences.',
      image: '/team/founder.jpg',
      skills: ['Strategic Vision', 'UX Design', 'Business Development'],
      social: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      }
    },
    {
      name: 'Sarah Johnson',
      role: 'Co-Founder & Creative Director',
      bio: 'Award-winning designer with a passion for creating memorable brand experiences and user interfaces.',
      image: '/team/cofounder.jpg',
      skills: ['UI/UX', 'Brand Design', 'Motion Graphics'],
      social: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        dribbble: 'https://dribbble.com'
      }
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      bio: 'Tech innovator specializing in emerging technologies, system architecture, and performance optimization.',
      image: '/team/cto.jpg',
      skills: ['Full-stack Development', 'AI/ML', 'Cloud Architecture'],
      social: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      }
    }
  ];

  // Setup GSAP animations
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const section = sectionRef.current;
    if (!section) return;
    
    const cards = cardsRef.current.filter(card => card !== null);
    if (cards.length === 0) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // Animated Background Elements with parallax effect
    gsap.to('.team-bg-element', {
      y: (i, el) => (parseFloat(el.getAttribute('data-speed') || 1) * -100),
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.2
    });

    // Create a rotation animation for some background elements
    gsap.to('.team-bg-element:nth-child(even)', {
      rotation: 360,
      duration: 60,
      repeat: -1,
      ease: 'linear'
    });

    // Animate the section title with text splitting for character-by-character animation
    const teamTitle = section.querySelector('.team-title');
    if (teamTitle) {
      const titleText = teamTitle.textContent;
      const chars = titleText.split('');
      teamTitle.innerHTML = '';
      chars.forEach((char, i) => {
        const span = document.createElement('span');
        span.className = 'title-char inline-block';
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.opacity = 0;
        teamTitle.appendChild(span);
      });

      tl.fromTo('.title-char', 
        { opacity: 0, y: 50, rotateX: 90 },
        { 
          opacity: 1, 
          y: 0, 
          rotateX: 0,
          duration: 1, 
          stagger: 0.03,
          ease: 'back.out(1.7)'
        },
        0
      );
    }

    // Animate the section description
    tl.fromTo('.team-description', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      0.5
    );

    // Animate each card with staggered timing and 3D effect
    tl.fromTo(cards,
      { 
        y: 100, 
        opacity: 0, 
        rotateY: 15,
        rotateX: 10,
        scale: 0.9
      },
      { 
        y: 0, 
        opacity: 1, 
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        duration: 1.2, 
        stagger: 0.15,
        ease: 'power4.out'
      },
      0.7
    );

    // Setup hover effect for cards with advanced animations
    cards.forEach(card => {
      if (!card) return;
      
      // Create hover effect handler for more dynamic interactions
      const handleMouseEnter = () => {
        // Card lift and scale effect
        gsap.to(card, {
          y: -15,
          scale: 1.05,
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
          duration: 0.4,
          ease: 'power2.out'
        });
        
        // Highlight the card content with a slight lift
        const content = card.querySelector('.card-content');
        if (content) {
          gsap.to(content, {
            y: -10,
            duration: 0.4,
            ease: 'power2.out'
          });
        }
        
        // Animate the team member image with a subtle zoom
        const teamImage = card.querySelector('.team-image');
        if (teamImage) {
          gsap.to(teamImage, {
            scale: 1.1,
            duration: 1.2,
            ease: 'power3.out'
          });
        }
        
        // Animate the background highlight with a glow effect
        const bgHighlight = card.querySelector('.card-bg-highlight');
        if (bgHighlight) {
          gsap.to(bgHighlight, {
            opacity: 0.8,
            scale: 1.4,
            duration: 1.2,
            ease: 'power2.out'
          });
        }
        
        // Animate social icons
        const socialIcons = card.querySelectorAll('.social-icon');
        if (socialIcons.length > 0) {
          gsap.to(socialIcons, {
            scale: 1.2,
            stagger: 0.1,
            duration: 0.4,
            ease: 'back.out(1.7)'
          });
        }
      };

      const handleMouseLeave = () => {
        // Smooth transition back to original state
        gsap.to(card, {
          y: 0,
          scale: 1,
          boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
          duration: 0.6,
          ease: 'power3.out'
        });
        
        // Reset the card content with slight delay
        const content = card.querySelector('.card-content');
        if (content) {
          gsap.to(content, {
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
            delay: 0.05
          });
        }
        
        // Reset the team member image with smooth transition
        const teamImage = card.querySelector('.team-image');
        if (teamImage) {
          gsap.to(teamImage, {
            scale: 1,
            duration: 0.8,
            ease: 'power2.inOut'
          });
        }
        
        // Reset the background highlight with fade out effect
        const bgHighlight = card.querySelector('.card-bg-highlight');
        if (bgHighlight) {
          gsap.to(bgHighlight, {
            opacity: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.inOut'
          });
        }
        
        // Reset social icons
        const socialIcons = card.querySelectorAll('.social-icon');
        if (socialIcons.length > 0) {
          gsap.to(socialIcons, {
            scale: 1,
            stagger: 0.05,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      };

      // Add event listeners
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);

      // Store the handlers for cleanup
      card._mouseEnterHandler = handleMouseEnter;
      card._mouseLeaveHandler = handleMouseLeave;
    });

    return () => {
      // Cleanup
      cards.forEach(card => {
        if (!card) return;
        
        if (card._mouseEnterHandler) {
          card.removeEventListener('mouseenter', card._mouseEnterHandler);
        }
        
        if (card._mouseLeaveHandler) {
          card.removeEventListener('mouseleave', card._mouseLeaveHandler);
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0f0f23]/60 to-[#1a1a2e]/60" data-speed="0.95">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="team-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Meet Our Team
          </h2>
          <p className="team-description text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            The brilliant minds behind our vision. Our passionate team is dedicated to creating extraordinary digital experiences that transform businesses.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mt-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-card group relative bg-gradient-to-br from-slate-900/90 to-slate-800/80 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 shadow-2xl"
              ref={el => cardsRef.current[index] = el}
              data-speed={1 + (index * 0.05)}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
              whileHover={{ 
                y: -20, 
                rotateY: 5,
                scale: 1.02,
                boxShadow: "0 40px 80px rgba(59, 130, 246, 0.4)",
                borderColor: "rgba(139, 92, 246, 0.7)"
              }}
            >
              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-slate-900/95 to-slate-800/95"></div>
              </div>

              {/* Floating particles effect */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-400/60 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [-20, -40, -20],
                      x: [-10, 10, -10],
                      opacity: [0, 1, 0],
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

              {/* Morphing background blob */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <motion.div 
                  className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full filter blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360],
                    x: [-10, 10, -10],
                    y: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0],
                    x: [10, -10, 10],
                    y: [10, -10, 10],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-blue-500/30 mix-blend-overlay z-10" />
                
                {/* Team member image with parallax effect */}
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={600}
                    height={600}
                    className="object-cover w-full h-full transition-all duration-700 ease-out team-image group-hover:brightness-110"
                  />
                </motion.div>
                
                {/* Dynamic overlay patterns */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), 
                                     radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
                  }} />
                </div>
                
                {/* Overlay gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-20"></div>
                
                {/* Animated role badge */}
                <motion.div 
                  className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full z-30"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 92, 246, 0.3)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-sm font-medium text-white">{member.role}</p>
                </motion.div>

                {/* Skill level indicator */}
                <div className="absolute bottom-4 left-4 z-30">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                        initial={{ scale: 0.5, opacity: 0.5 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.1 + index * 0.3, duration: 0.3 }}
                        whileHover={{ scale: 1.3 }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <motion.div 
                className="card-content p-6 relative z-30"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated background glow on hover */}
                <motion.div 
                  className="card-bg-highlight absolute top-0 right-0 w-56 h-56 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl -mt-16 -mr-16 pointer-events-none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1.2 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
                
                {/* Member Info with typing animation effect */}
                <motion.h3 
                  className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {member.name}
                </motion.h3>
                
                <motion.p 
                  className="text-white/80 mb-4 leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {member.bio}
                </motion.p>
                
                {/* Skills tags with staggered animation */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {member.skills && member.skills.map((skill, skillIndex) => (
                    <motion.span 
                      key={skill} 
                      className="px-3 py-1 bg-white/5 text-purple-200/80 text-xs rounded-full border border-purple-500/20 relative overflow-hidden"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "rgba(139, 92, 246, 0.2)",
                        borderColor: "rgba(139, 92, 246, 0.5)"
                      }}
                      transition={{ type: "spring", stiffness: 400, delay: skillIndex * 0.1 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="relative z-10">{skill}</span>
                    </motion.span>
                  ))}
                </div>
                
                {/* Social Links with advanced hover effects */}
                <div className="flex justify-start mt-auto pt-4 border-t border-white/10">
                  {Object.entries(member.social).map(([platform, url], socialIndex) => {
                    if (!url) return null;
                    return (
                      <motion.a 
                        key={platform} 
                        href={url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon mr-4 w-10 h-10 rounded-full bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center relative overflow-hidden"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: socialIndex * 0.1, type: "spring", stiffness: 300 }}
                        whileHover={{ 
                          scale: 1.3, 
                          rotate: 360,
                          backgroundColor: platform === 'twitter' ? 'rgba(29, 161, 242, 0.4)' : 
                                          platform === 'linkedin' ? 'rgba(10, 102, 194, 0.4)' : 
                                          platform === 'github' ? 'rgba(110, 84, 148, 0.4)' : 
                                          platform === 'dribbble' ? 'rgba(234, 76, 137, 0.4)' : 'rgba(255, 255, 255, 0.2)'
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {/* Ripple effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-white/20"
                          initial={{ scale: 0, opacity: 1 }}
                          whileHover={{ scale: 2, opacity: 0 }}
                          transition={{ duration: 0.6 }}
                        />
                        
                        {platform === 'twitter' && (
                          <motion.svg 
                            className="w-5 h-5 text-blue-400 relative z-10" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                            whileHover={{ rotate: 15 }}
                          >
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </motion.svg>
                        )}
                        {platform === 'linkedin' && (
                          <motion.svg 
                            className="w-5 h-5 text-blue-600 relative z-10" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                            whileHover={{ rotate: 15 }}
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </motion.svg>
                        )}
                        {platform === 'github' && (
                          <motion.svg 
                            className="w-5 h-5 text-purple-300 relative z-10" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                            whileHover={{ rotate: 15 }}
                          >
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                          </motion.svg>
                        )}
                        {platform === 'dribbble' && (
                          <motion.svg 
                            className="w-5 h-5 text-pink-400 relative z-10" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                            whileHover={{ rotate: 15 }}
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
          ))}
        </div>
        
        {/* Call to Action Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            <span>Join Our Team</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none team-bg-element" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none team-bg-element" />
      
      {/* Additional Decorative Elements */}
      <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-purple-500/20 rotate-45 pointer-events-none team-bg-element" />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-blue-500/20 rounded-full pointer-events-none team-bg-element" />
      
      {/* Animated gradient circles */}
      <div className="absolute top-40 right-40 w-40 h-40 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 rounded-full blur-xl pointer-events-none team-bg-element" />
      <div className="absolute bottom-60 left-40 w-56 h-56 bg-gradient-to-br from-blue-400/10 via-transparent to-purple-400/10 rounded-full blur-2xl pointer-events-none team-bg-element" />
    </section>
  );
};

export default RefinedTeamSection;
