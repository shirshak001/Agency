'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const SimpleTeamTest = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const teamMembers = [
    {
      name: 'Shresth Maheshwari',
      role: 'Full-Stack Developer',
      bio: 'Passionate developer with expertise in modern web technologies and scalable solutions.',
      color: { primary: '#8B5CF6', secondary: '#06B6D4' },
      // element: '🚀',
      image: '/team/shresth.jpeg', // ✅ Add image
    },
    {
      name: 'Shirshak Mondal',
      role: 'Product Designer',
      bio: 'Shaping the future of experiences through design and innovation..',
      color: { primary: '#EC4899', secondary: '#8B5CF6' },
      // element: '🎨',
      image: '/team/shirshak.jpeg', // ✅ Add image
    },
    {
      name: 'Ayush Kumar',
      role: 'Software Engineer',
      bio: 'Problem-solver specializing in backend systems and emerging technologies.',
      color: { primary: '#6366F1', secondary: '#EC4899' },
      // element: '💡',
      image: '/team/ayush.jpeg', // ✅ Add image
    },
  ];

  return (
    <section id='team' className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-cyan-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
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
            Meet Our Team
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
                  background: `linear-gradient(135deg, ${member.color.primary}, ${member.color.secondary})`,
                }}
                transition={{ duration: 2, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-sm"></div>
              </motion.div>

              {/* Main Card */}
              <motion.div
                className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 text-center h-[500px] flex flex-col justify-center border border-white/5 shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 25px 50px ${member.color.primary}40`,
                }}
              >
                {/* ✅ Avatar Image with 3D Effect */}
                <motion.div
                  className="relative w-fit mx-auto mb-6 overflow-visible"
                  whileHover={{ scale: 1.1, rotate: 5, y: -10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {/* Glow Effect Behind Image */}
                  <div
                    className="absolute -inset-4 rounded-3xl blur-2xl opacity-30"
                    style={{
                      background: `linear-gradient(135deg, ${member.color.primary}, ${member.color.secondary})`,
                    }}
                  />

                  {/* Actual Image */}
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="relative w-40 h-40 rounded-3xl object-cover border-4 border-white/20 shadow-xl"
                    whileHover={{ scale: 1.15 }}
                  />

                  {/* Floating Overlay Element that breaks outside */}
                  <motion.div
                    className="absolute -top-4 -right-4 text-3xl"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                    
                  </motion.div>
                </motion.div>

                <motion.h3 className="text-2xl font-bold text-white mb-2">
                  {member.name}
                </motion.h3>

                <motion.p
                  className="text-lg mb-4 font-semibold"
                  style={{
                    background: `linear-gradient(135deg, ${member.color.primary}, ${member.color.secondary})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
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