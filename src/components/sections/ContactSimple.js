'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaFacebook 
} from 'react-icons/fa';

const ContactSimple = () => {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // success / error message

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="h-96 bg-gray-900"></div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-blue-purple rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-purple-blue rounded-full opacity-20 blur-3xl animate-pulse delay-700" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-hero">
            Let&apos;s <span className="text-gradient-accent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gradient-accent">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-purple-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-purple-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-purple-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-blue-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </motion.button>

                {status === "success" && (
                  <p className="text-green-400 mt-4">Message sent successfully!</p>
                )}
                {status === "error" && (
                  <p className="text-red-400 mt-4">Something went wrong. Try again.</p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gradient-accent">Get in Touch</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <FaEnvelope className="w-6 h-6 text-accent-1" />,
                    title: 'Email',
                    info: '3threebitstudio@gmail.com',
                    description: 'Send us an email anytime'
                  },
                  {
                    icon: <FaPhone className="w-6 h-6 text-accent-1" />,
                    title: 'Phone',
                    info: '+91 8791167321, 8617300719, 9015195801',
                    description: 'Mon-Fri from 8am to 6pm'
                  },
                  {
                    icon: <FaMapMarkerAlt className="w-6 h-6 text-accent-1" />,
                    title: 'Office',
                    info: 'NIT Hamirpur, H.P, India',
                    description: 'Call us or email to schedule a meeting'
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl">{contact.icon}</div>
                    <div>
                      <h4 className="text-white font-semibold">{contact.title}</h4>
                      <p className="text-accent-2 font-medium">{contact.info}</p>
                      <p className="text-gray-400 text-sm">{contact.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
              
              <div className="flex space-x-4">
                {[
                  { name: 'LinkedIn', icon: <FaLinkedin className="w-6 h-6 text-white" /> },
                  { name: 'Twitter', icon: <FaTwitter className="w-6 h-6 text-white" /> },
                  { name: 'Facebook', icon: <FaFacebook className="w-6 h-6 text-white" /> },
                  { name: 'Instagram', icon: <FaInstagram className="w-6 h-6 text-white" /> },
                ].map((social, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-xl hover:bg-accent-2 transition-colors duration-300"
                    title={social.name}
                  >
                    {social.icon}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSimple;
