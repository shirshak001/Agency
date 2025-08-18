'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Particle = ({ delay, x, y }) => (
  <motion.circle
    cx={x}
    cy={y}
    r="2"
    initial={{ opacity: 0.8, scale: 1 }}
    animate={{
      opacity: 0,
      scale: 0,
      x: Math.random() * 40 - 20,
      y: Math.random() * 40 - 20,
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      delay,
      ease: "easeOut"
    }}
    className="fill-accent-1"
  />
);

const PlaneAnimation = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const controls = useAnimation();
  const [particles, setParticles] = useState([]);
  const pathRef = useRef(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Generate particles along the path
  useEffect(() => {
    const interval = setInterval(() => {
      if (particles.length < 20) {
        setParticles(prev => [
          ...prev,
          {
            id: Date.now(),
            delay: Math.random() * 0.5,
            x: Math.random() * 1000,
            y: 200 + Math.sin(Math.random() * Math.PI * 2) * 100
          }
        ]);
      } else {
        setParticles(prev => [...prev.slice(1)]);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [particles]);

  return (
    <div ref={containerRef} className="relative w-full h-[400px] overflow-hidden bg-gradient-to-b from-transparent to-primary/10">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-1/5 via-transparent to-transparent" />
      
      <svg
        className="pointer-events-none absolute inset-0 w-[120%] h-full -translate-x-[10%]"
        viewBox="0 0 1200 300"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {/* Glowing effect for path */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Path with glow */}
        <path
          ref={pathRef}
          d="M 0,200 
             C 150,100 250,250 400,150
             C 550,50 650,200 800,150
             C 950,100 1050,250 1200,150"
          fill="none"
          className="stroke-accent-1/10"
          strokeWidth="1.5"
          strokeDasharray="5,5"
          filter="url(#glow)"
        >
          <animate
            attributeName="strokeDashoffset"
            values="0;100"
            dur="20s"
            repeatCount="indefinite"
          />
        </path>

        {/* Secondary decorative paths */}
        <path
          d="M 0,220 
             C 150,120 250,270 400,170
             C 550,70 650,220 800,170
             C 950,120 1050,270 1200,170"
          fill="none"
          className="stroke-accent-2/5"
          strokeWidth="0.5"
          strokeDasharray="3,8"
        >
          <animate
            attributeName="strokeDashoffset"
            values="0;100"
            dur="15s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M 0,180 
             C 150,80 250,230 400,130
             C 550,30 650,180 800,130
             C 950,80 1050,230 1200,130"
          fill="none"
          className="stroke-secondary/5"
          strokeWidth="0.5"
          strokeDasharray="3,8"
        >
          <animate
            attributeName="strokeDashoffset"
            values="0;-100"
            dur="25s"
            repeatCount="indefinite"
          />
        </path>

        {/* Particles */}
        {particles.map((particle) => (
          <Particle key={particle.id} {...particle} />
        ))}

        {/* The animated plane */}
        <motion.g
          initial={{ offsetDistance: "0%" }}
          animate={{ 
            offsetDistance: "100%",
            filter: ["drop-shadow(0 0 8px rgba(255,255,255,0.5))", "drop-shadow(0 0 12px rgba(255,255,255,0.8))", "drop-shadow(0 0 8px rgba(255,255,255,0.5))"]
          }}
          transition={{
            offsetDistance: {
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            },
            filter: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          style={{
            offsetPath: "path('M 0,200 C 150,100 250,250 400,150 C 550,50 650,200 800,150 C 950,100 1050,250 1200,150')"
          }}
        >
          {/* Plane with glowing trail */}
          <motion.path
            d="M24 0c-1.6 0-3.2.8-4 2L8 20H4c-2.2 0-4 1.8-4 4s1.8 4 4 4h4l12 18c.8 1.2 2.4 2 4 2s3.2-.8 4-2l12-18h4c2.2 0 4-1.8 4-4s-1.8-4-4-4h-4L28 2c-.8-1.2-2.4-2-4-2z"
            className="fill-accent-1"
            whileHover={{ scale: 1.2 }}
            initial={{ rotate: 0 }}
            animate={{ 
              rotate: 360,
              filter: ["drop-shadow(0 0 8px rgba(255,255,255,0.5))", "drop-shadow(0 0 12px rgba(255,255,255,0.8))", "drop-shadow(0 0 8px rgba(255,255,255,0.5))"]
            }}
            transition={{
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              },
              filter: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        </motion.g>

        {/* Additional decorative elements */}
        <motion.circle
          cx="500"
          cy="200"
          r="100"
          className="fill-accent-1/5"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>

      {/* Animated background lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-accent-1/20 to-transparent"
            initial={{ y: 400 * (i / 5), opacity: 0 }}
            animate={{ 
              y: [400 * (i / 5), -100],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PlaneAnimation;
