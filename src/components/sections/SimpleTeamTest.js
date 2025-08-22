'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const SimpleTeamTest = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const teamMembers = [
    {
      name: 'Alex Rivera',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 10+ years of experience.',
      color: { primary: '#8B5CF6', secondary: '#3B82F6' },
      element: '⚡'
    },
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      bio: 'Award-winning designer creating memorable experiences.',
      color: { primary: '#EC4899', secondary: '#F59E0B' },
      element: '🔥'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Tech innovator specializing in emerging technologies.',
      color: { primary: '#10B981', secondary: '#06B6D4' },
      element: '🔮'
    }
  ];

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
        <motion.h2 
          className="text-6xl md:text-7xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Meet Our Superteam
          </span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Holographic Border */}
              <motion.div 
                className="absolute inset-0 rounded-3xl p-[3px]"
                style={{
                  background: `conic-gradient(from 0deg, ${member.color.primary}, ${member.color.secondary}, ${member.color.primary})`
                }}
                animate={hoveredCard === index ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 2, ease: "linear" }}
              >
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-slate-900/95 to-slate-800/90"></div>
              </motion.div>

              {/* Main Card */}
              <motion.div
                className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/80 backdrop-blur-xl rounded-3xl p-8 text-center h-[500px] flex flex-col justify-center border border-white/10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 25px 50px ${member.color.primary}40`
                }}
              >
                {/* Element Icon */}
                <motion.div 
                  className="text-4xl mb-6"
                  animate={hoveredCard === index ? {
                    rotate: [0, 360],
                    scale: [1, 1.3, 1],
                  } : {}}
                  transition={{ duration: 2, repeat: hoveredCard === index ? Infinity : 0 }}
                >
                  {member.element}
                </motion.div>

                {/* Avatar */}
                <motion.div
                  className="w-24 h-24 rounded-full mx-auto mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${member.color.primary}, ${member.color.secondary})`
                  }}
                  whileHover={{ scale: 1.1 }}
                />

                <motion.h3 
                  className="text-2xl font-bold text-white mb-2"
                >
                  {member.name}
                </motion.h3>
                
                <motion.p 
                  className="text-lg mb-4 font-semibold"
                  style={{ 
                    background: `linear-gradient(135deg, ${member.color.primary}, ${member.color.secondary})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {member.role}
                </motion.p>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleTeamTest;
