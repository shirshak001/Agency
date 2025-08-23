'use client';
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Icon from '../ui/Icon';

const EnhancedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDir, setScrollDir] = useState("up");
  const [activeItem, setActiveItem] = useState(0);

  const navItems = useMemo(() => [
    { title: 'Home', href: '/', icon: 'home' },
    { title: 'About', href: '#about', icon: 'users' },
    { title: 'Services', href: '#services', icon: 'lightning' },
    { title: 'Projects', href: '#projects', icon: 'rocket' },
    { title: 'Team', href: '#team', icon: 'briefcase' },
    { title: 'FAQ', href: '#faq', icon: 'question' },
    { title: 'Pricing', href: '/pricing', icon: 'currency' },
    { title: 'Contact', href: '#contact', icon: 'mail' },
  ], []);

  // Detect scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        setScrollDir(currentScrollY > lastScrollY ? "down" : "up");
        lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      }
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      if (scrollPosition < 150) {
        setActiveItem(0);
        return;
      }
      navItems.forEach((item, index) => {
        if (item.href.startsWith('#')) {
          const section = document.querySelector(item.href);
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              setActiveItem(index);
            }
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <motion.nav
      initial={false}
      animate={scrollDir === "down" ? "shrunk" : "expanded"}
      variants={{
        expanded: { height: 80, backgroundColor: "rgba(17,24,39,0.8)", backdropFilter: "blur(12px)" },
        shrunk: { height: 0, opacity: 0, backgroundColor: "rgba(17,24,39,0.95)", backdropFilter: "blur(16px)" },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 shadow-lg border-b border-white/10"
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          Creative<span className="text-secondary">Sync</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setActiveItem(index)}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeItem === index ? 'text-accent-1' : 'text-white hover:text-accent-1'
              }`}
            >
              {item.title}
              {activeItem === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-accent-1/20 to-accent-2/20 rounded-lg border border-accent-1/30"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <motion.button
            onClick={() => (window.location.href = '/contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 px-4 py-2 bg-gradient-blue-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 gradient-shift"
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white relative w-10 h-10 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-primary/95 backdrop-blur-xl border-t border-white/10"
        >
          <div className="p-4 flex flex-col space-y-3">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-white hover:text-accent-1"
                onClick={() => { setIsOpen(false); setActiveItem(index); }}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default EnhancedNavbar;
