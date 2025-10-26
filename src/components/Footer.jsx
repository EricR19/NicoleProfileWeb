import { motion } from 'framer-motion';

/**
 * FOOTER COMPONENT
 * 
 * Simple footer with copyright and branding.
 * 
 * CUSTOMIZATION:
 * - Edit copyright text and year
 * - Add additional links if needed
 * - Modify colors using Tailwind classes
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-primary-300 text-sm"
          >
            © {currentYear} Nicole Arguedas Fitness. Todos los derechos reservados.
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-400 text-sm"
          >
            Built with 💪 and dedication
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
