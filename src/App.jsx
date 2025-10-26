/**
 * MAIN APP COMPONENT
 * 
 * This is the main application component that brings together all sections.
 * 
 * STRUCTURE:
 * - Navbar: Sticky navigation at the top
 * - Hero: Full-screen landing section
 * - About: Information about Nicole
 * - Plans: Training plan pricing cards
 * - Testimonials: Client success stories
 * - Contact: Call-to-action and contact information
 * - Footer: Copyright and links
 * 
 * The page uses smooth scrolling between sections.
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Plans />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
