import { motion } from 'framer-motion';

/**
 * HERO SECTION
 * 
 * Full-screen hero section with background image/video and CTA button.
 * 
 * CUSTOMIZATION:
 * - Replace background image URL in the style prop
 * - Edit main heading and subheading text
 * - Change button text and scroll target
 * - Modify colors using Tailwind classes
 * 
 * RECOMMENDED IMAGES:
 * Use Unsplash for high-quality fitness images:
 * https://unsplash.com/s/photos/fitness-training
 * https://unsplash.com/s/photos/personal-trainer
 */

const Hero = () => {
  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        // EDIT THIS: Replace with your background image URL
        backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-heading mb-6 leading-tight"
        >
          {/* EDIT THIS: Main heading */}
          Nicole Arguedas
          <br />
          <span className="text-4xl md:text-5xl text-primary-50 font-normal font-sans">Personal Trainer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-10 font-light text-primary-50"
        >
          {/* EDIT THIS: Subheading */}
          Progreso, motivación y resultados reales.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleScrollToContact}
          className="bg-white text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg"
        >
          {/* EDIT THIS: CTA button text */}
          Comienza Hoy
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
