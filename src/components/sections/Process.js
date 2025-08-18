'use client';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Icon from '../ui/Icon';

const Process = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

//   gsap.timeline({
//   scrollTrigger: {
//     scrub: 1,
//     trigger: ".scroll-trigger-ready__worm-wrap",
//     start: "top 90%",
//     end: "bottom 30%",
//   },
// });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  
  const boxVariants = {
    hidden: { opacity: 0.5, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      transition: { duration: 0.2 }
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const steps = gsap.utils.toArray('.process-step');
    
    steps.forEach((step, i) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          scrub: 1,
          trigger: step,
          start: "top 90%",
          end: "bottom 30%",
        }
      });

      timeline.fromTo(step, 
        {
          opacity: 0,
          y: 50,
          x: i % 2 === 0 ? -50 : 50
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1
        }
      );
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  const steps = [
    {
      id: 1,
      title: "Initial Consultation",
      description: "We start with a detailed consultation to understand your vision, requirements, and business objectives. Our team analyzes your market position and target audience.",
      icon: "users"
    },
    {
      id: 2,
      title: "Project Planning",
      description: "Our project managers create a comprehensive project timeline, define milestones, and allocate resources. We establish clear communication channels and reporting structures.",
      icon: "briefcase"
    },
    {
      id: 3,
      title: "Research & Strategy",
      description: "Thorough market research, competitor analysis, and user behavior studies shape our strategic approach. We develop a tailored roadmap for your project's success.",
      icon: "lightning"
    },
    {
      id: 4,
      title: "Design Phase",
      description: "Our designers create wireframes, prototypes, and visual designs. We follow an iterative process with regular feedback sessions to ensure your vision is perfectly captured.",
      icon: "design"
    },
    {
      id: 5,
      title: "Development Sprint",
      description: "Using agile methodology, our development team works in sprints to build your project. Regular updates and demos keep you involved throughout the development process.",
      icon: "code"
    },
    {
      id: 6,
      title: "Quality Assurance",
      description: "Comprehensive testing across devices and platforms, including user acceptance testing, performance optimization, and security audits to ensure a flawless product.",
      icon: "cog"
    },
    {
      id: 7,
      title: "Deployment",
      description: "Carefully planned deployment process with backup strategies and rollback plans. We ensure a smooth transition to the live environment with minimal downtime.",
      icon: "rocket"
    },
    {
      id: 8,
      title: "Support & Maintenance",
      description: "Ongoing technical support, regular updates, and maintenance to keep your project running optimally. We monitor performance and implement improvements as needed.",
      icon: "cog"
    }
  ];
  
  return (
    <section 
      ref={sectionRef} 
      id="process" 
      className="py-12 bg-gradient-to-b from-[#1a1f36] to-primary relative overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          style={{ opacity }}
          className="absolute top-0 right-0 w-full h-full bg-[url('/grid.svg')] bg-repeat opacity-5"
        />
        <motion.div 
          style={{ opacity }}
          className="absolute top-1/4 right-[10%] w-96 h-96 bg-accent-1/10 rounded-full blur-[120px]"
        />
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-1/4 left-[10%] w-96 h-96 bg-accent-2/10 rounded-full blur-[120px]"
        />
        <motion.div 
          style={{ opacity }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-96 bg-secondary/10 rounded-full blur-[150px]"
        />
        {/* Additional decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-1 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-2 to-transparent" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-hero">
            Our <span className="text-gradient-accent">Process</span>
          </h2>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            How We <span className="text-accent-2">Work</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-light/80 max-w-2xl mx-auto"
          >
            Our proven step-by-step approach ensures we deliver exceptional results for every project.
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-white/10 rounded-full md:block"></div>
          
          <div className="space-y-6 md:space-y-8 relative z-10 text-white max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                className="process-step md:grid md:grid-cols-2 md:gap-8 items-center relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Step number circle for desktop */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent-1 rounded-full items-center justify-center text-white font-bold z-10 md:flex hidden"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  
                </motion.div>
                
                {/* Content positioning based on even/odd */}
                <motion.div 
                  className={`${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'} 
                    group bg-dark/50 backdrop-blur-sm p-5 md:p-6 rounded-xl border border-white/10 relative
                    max-w-xl mx-auto w-full hover:bg-dark/60 transition-all duration-300`}
                  variants={boxVariants}
                  whileHover="hover"
                >
                  {/* Step number for mobile */}
                  <motion.div 
                    className="w-8 h-8 bg-accent-1 rounded-full flex items-center justify-center text-white font-bold mb-4 md:hidden"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {step.id}
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-3 mb-3"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="text-2xl">
                      <Icon name={step.icon} className="w-6 h-6 text-accent-1" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  </motion.div>
                  
                  <motion.p 
                    className="text-light/70 text-sm"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {step.description}
                  </motion.p>

                  {/* Connecting line with animation */}
                  <motion.div 
                    className={`absolute top-1/2 w-[60px] h-[2px] bg-white/10
                      ${index % 2 === 0 ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.5 }}
                  />
                </motion.div>
                
                {/* Empty div for layout on desktop */}
                <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
