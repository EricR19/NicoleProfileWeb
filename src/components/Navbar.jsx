import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * NAVBAR COMPONENT
 * 
 * Sticky navigation bar that appears at the top of the page.
 * Features smooth scrolling to different sections.
 * 
 * CUSTOMIZATION:
 * - Edit navigation links in the 'navLinks' array
 * - Change colors by modifying Tailwind classes
 * - Adjust scroll behavior in handleClick function
 */

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links - edit these to change menu items
  const navLinks = [
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Planes', href: '#plans' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' },
  ];

  // Smooth scroll to section
  const handleClick = (e, href) => {
    e.preventDefault();
    
    // Close mobile menu first
    setIsMobileMenuOpen(false);
    
    // Small delay to allow menu animation, then scroll
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => handleClick(e, '#hero')}
            className={`text-xl font-heading transition-colors ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Nicole Arguedas
          </motion.a>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`font-medium transition-colors hover:text-primary-500 ${
                  isScrolled ? 'text-primary-700' : 'text-white'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${
                isScrolled ? 'text-black' : 'text-white'
              } p-2`}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                // Close icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
          className="md:hidden overflow-hidden"
        >
          <div className={`py-4 space-y-2 ${
            isScrolled ? 'bg-white' : 'bg-black/90 backdrop-blur-sm'
          }`}>
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                initial={{ x: -20, opacity: 0 }}
                animate={{
                  x: isMobileMenuOpen ? 0 : -20,
                  opacity: isMobileMenuOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`block px-4 py-3 font-medium transition-colors ${
                  isScrolled
                    ? 'text-primary-900 hover:bg-primary-50'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
