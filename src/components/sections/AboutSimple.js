'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Icon from '../ui/Icon';

const AboutSimple = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="h-96 bg-primary"></div>;
  }

  return (
    <section id="about" className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-blue-purple rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-purple-blue rounded-full opacity-20 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-gradient">CreativeSync</span>
            </h2>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed text-center lg:text-left">
              We are a passionate team of designers, developers, and strategists who believe
              in the power of exceptional digital experiences. Since our founding, we&apos;ve been
              dedicated to helping businesses transform their online presence.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed text-center lg:text-left">
              Our approach combines creative innovation with technical expertise to deliver
              solutions that not only look stunning but also drive real business results.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                { text: "Strategic approach to every project", icon: "lightning" },
                { text: "Cutting-edge technologies and tools", icon: "rocket" },
                { text: "Collaborative and transparent process", icon: "users" },
                { text: "Focus on measurable results", icon: "sparkles" }
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-gray-300"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon name={point.icon} className="w-5 h-5 text-accent-1 flex-shrink-0" />
                  <span className="text-lg">{point.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-1/20 to-accent-2/20 rounded-3xl blur-3xl"></div>

            {/* Content */}
            <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 text-center text-gradient-accent">
                Our Impact
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '22+', label: 'Projects Delivered', icon: 'rocket' },
                  { value: '16+', label: 'Happy Clients', icon: 'users' },
                  { value: '3+', label: 'Years Experience', icon: 'sparkles' },
                  { value: '5+', label: 'Team Members', icon: 'briefcase' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl mb-2">
                      <Icon name={stat.icon} className="w-8 h-8 text-accent-1 mx-auto" />
                    </div>
                    <div className="text-2xl font-bold text-accent-2 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mission Statement */}
              <div className="mt-8 p-6 bg-gradient-to-r from-accent-1/10 to-accent-2/10 rounded-xl border border-accent-2/20">
                <h4 className="text-lg font-semibold text-white mb-3">Our Mission</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth,
                  enhance user experiences, and create lasting impact in the digital landscape.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSimple;
