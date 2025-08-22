'use client';
import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const WorkingUltraTeamSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Motion values for three cards
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

  const teamMembers = [
    {
      name: 'Alex Rivera',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 10+ years of experience in digital innovation.',
      image: '/team/founder.jpg',
      skills: ['Strategy', 'Leadership', 'Innovation', 'Business Development'],
      color: { primary: '#8B5CF6', secondary: '#3B82F6' },
      element: 'Lightning'
    },
    {
      name: 'Sarah Johnson',
      role: 'Co-Founder & Creative Director',
      bio: 'Award-winning designer with a passion for creating memorable brand experiences.',
      image: '/team/cofounder.jpg',
      skills: ['UI/UX', 'Brand Design', 'Motion Graphics', 'Creative Strategy'],
      color: { primary: '#EC4899', secondary: '#F59E0B' },
      element: 'Fire'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      bio: 'Tech innovator specializing in emerging technologies and system architecture.',
      image: '/team/cto.jpg',
      skills: ['Full-stack Development', 'AI/ML', 'Cloud Architecture', 'DevOps'],
      color: { primary: '#10B981', secondary: '#06B6D4' },
      element: 'Matrix'
    }
  ];

  const getElementIcon = (element) => {
    switch(element) {
      case 'Lightning': return '⚡';
      case 'Fire': return '🔥';
      case 'Matrix': return '🔮';
      default: return '✨';
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Meet Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Superteam
            </span>
          </motion.h2>
        </motion.div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {teamMembers.map((member, index) => {
            const motion = motionValues[index];
            
            return (
              <motion.div
                key={index}
                className="team-card group relative perspective-1000"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                }}
                style={{
                  rotateX: motion.rotateX,
                  rotateY: motion.rotateY,
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Holographic Border */}
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

                {/* Main Card */}
                <motion.div 
                  className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[600px]"
                  style={{ transform: "translateZ(50px)" }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 50px 100px ${member.color.primary}40`,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Element Icon */}
                  <motion.div 
                    className="absolute top-6 left-6 text-4xl"
                    animate={hoveredCard === index ? {
                      rotate: [0, 360],
                      scale: [1, 1.3, 1],
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {getElementIcon(member.element)}
                  </motion.div>

                  {/* Content */}
                  <div className="p-8 h-full flex flex-col justify-center items-center text-center">
                    <motion.div
                      className="w-32 h-32 rounded-full mb-6 overflow-hidden border-4 border-white/20"
                      style={{
                        background: `linear-gradient(135deg, ${member.color.primary}, ${member.color.secondary})`
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
                    </motion.div>

                    <motion.h3 
                      className="text-2xl font-bold text-white mb-2"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      {member.name}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-lg text-gray-300 mb-4"
                      style={{ 
                        background: `linear-gradient(135deg, ${member.color.primary}, ${member.color.secondary})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {member.role}
                    </motion.p>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.slice(0, 3).map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 backdrop-blur-sm"
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkingUltraTeamSection;
