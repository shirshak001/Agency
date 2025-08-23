'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Icon from '../ui/Icon';
import StarBorder from '../ui/StarBorder';

const ServicesSimple = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="h-96 bg-gray-900"></div>;
  }

  const services = [
    {
      id: 1,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences that convert visitors into customers.",
      icon: "palette",
      color: "bg-gradient-purple-blue"
    },
    {
      id: 2,
      title: "Web Development",
      description: "Building fast, responsive, and scalable websites using modern technologies.",
      icon: "code",
      color: "bg-gradient-blue-purple"
    },
    {
      id: 3,
      title: "Branding",
      description: "Developing strong brand identities that resonate with your target audience.",
      icon: "rocket",
      color: "bg-gradient-glow"
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that drive traffic and increase conversions.",
      icon: "sparkles",
      color: "bg-gradient-purple-blue"
    },
    {
      id: 5,
      title: "E-commerce",
      description: "Complete e-commerce solutions that help you sell more online.",
      icon: "briefcase",
      color: "bg-gradient-blue-purple"
    },
    {
      id: 6,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: "mobile",
      color: "bg-gradient-glow"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-primary via-dark to-primary">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-accent-1 transition-all duration-300 h-full relative overflow-hidden">
                {/* Icon */}
                <div className='mb-4 flex lg:flex-col gap-1 justify-center items-center'> 
                  <div className="text-2xl lg:text-4xl lg:mb-6 text-center">
                  <Icon name={service.icon} className="w-12 h-12 mx-auto text-accent-1" />
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-white  lg:mb-4 text-center">
                  {service.title}
                </h3> 
                </div>

                {/* Description */}
                <p className="text-gray-300 text-center leading-relaxed">
                  {service.description}
                </p>

                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 ${service.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                />

                {/* Glowing border effect on hover */}
                {/* <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-transparent"
                  whileHover={{
                    background: "linear-gradient(135deg, #8B5CF6, #3B82F6) border-box",
                    borderImage: "linear-gradient(135deg, #8B5CF6, #3B82F6) 1",
                  }}
                /> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0. }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-8 text-lg">
            Ready to elevate your digital presence?
          </p>
          
            <StarBorder
              as="button"
              onClick={() => window.location.href = '/contact'}
              className="custom-class"
              color="cyan"
              speed="5s"
            >
              Let&apos;s Work Together
            </StarBorder>

     
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSimple;
