import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

/**
 * ABOUT SECTION
 * 
 * Showcases Nicole's background, philosophy, and core values.
 * Features an automatic slideshow with Nicole's gym photos AND video.
 * 
 * CUSTOMIZATION:
 * - Add/remove media from the 'media' array
 * - Edit bio text in the paragraph
 * - Modify core values (icons and text)
 * - Change slideshow speed for images (currently 4 seconds)
 * - Video plays for 5 seconds then automatically moves to next slide
 * - Change colors and spacing using Tailwind classes
 */

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const videoRef = useRef(null);
  
  // Automatic slideshow
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // EDIT THIS: Add or remove media (images/videos) from the public folder
  // type: 'image' or 'video'
  const media = [
    { type: 'image', src: '/nicole-1.jpg' },
    { type: 'image', src: '/nicole-2.jpg' },
    { type: 'image', src: '/nicole-3.jpg' },
    { type: 'image', src: '/nicole-4.jpg' },
    { type: 'video', src: '/nicole-video.mp4' }, // Video at the end
  ];

  // Automatic slideshow with smart timing
  useEffect(() => {
    const currentMedia = media[currentIndex];
    let isActive = true;
    
    // If it's a video, play it and move to next after 5 seconds
    if (currentMedia.type === 'video') {
      // Small delay to ensure video element is mounted
      const playTimeout = setTimeout(() => {
        if (videoRef.current && isActive) {
          const video = videoRef.current;
          video.currentTime = 0; // Reset to start
          
          // Play the video
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.then(() => {
              console.log('Video playing successfully');
            }).catch(err => {
              console.log('Video autoplay prevented - click page to enable:', err);
            });
          }
        }
      }, 200);
      
      // Move to next slide after 5 seconds
      const videoTimer = setTimeout(() => {
        if (videoRef.current && isActive) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
          console.log('Video stopped after 5 seconds');
        }
        if (isActive) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
        }
      }, 5200); // Video plays for 5 seconds + 200ms buffer
      
      return () => {
        isActive = false;
        clearTimeout(playTimeout);
        clearTimeout(videoTimer);
        // Don't pause here - let the timer handle it
      };
    } else {
      // For images, change after 4 seconds
      const imageTimer = setTimeout(() => {
        if (isActive) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
        }
      }, 4000);
      
      return () => {
        isActive = false;
        clearTimeout(imageTimer);
      };
    }
  }, [currentIndex]);

  // Core values - edit these to change the values displayed
  const coreValues = [
    { 
      title: 'Especialización en Resultados', 
      description: 'Hipertrofia muscular, tonificación y pérdida de peso con métodos comprobados',
      icon: '🎯'
    },
    { 
      title: 'Entrenamiento Femenino', 
      description: 'Experta certificada en entrenamiento avanzado para mujeres y desarrollo de glúteos',
      icon: '⚡'
    },
    { 
      title: 'Enfoque Integral', 
      description: 'Transformación física y mental a través de motivación constante y guía personalizada',
      icon: '🌟'
    },
  ];

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
              {/* Automatic Media Slideshow (Images + Video) */}
              <AnimatePresence mode="wait">
                {media[currentIndex].type === 'image' ? (
                  <motion.img
                    key={`img-${currentIndex}`}
                    src={media[currentIndex].src}
                    alt={`Nicole Arguedas training session ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                  />
                ) : (
                  <motion.div
                    key={`video-${currentIndex}`}
                    className="w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    <video
                      ref={videoRef}
                      src={media[currentIndex].src}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      playsInline
                      preload="auto"
                      loop={false}
                      onLoadedData={() => console.log('Video loaded successfully')}
                      onError={(e) => console.error('Video error:', e)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Media indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {media.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`View ${item.type} ${index + 1}`}
                  >
                    {item.type === 'video' && index === currentIndex && (
                      <span className="sr-only">Playing video</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-50 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading text-primary-900 mb-6">
              Sobre Mí
            </h2>
            
            {/* EDIT THIS: Bio text */}
            <p className="text-lg text-primary-600 mb-8 leading-relaxed">
              Soy Nicole Arguedas, Entrenadora Personal especializada en hipertrofia muscular, 
              tonificación y pérdida de peso. Mi misión es ayudar, motivar y enseñar a cada persona 
              en su camino hacia el progreso físico y mental.
            </p>

            <p className="text-lg text-primary-600 mb-10 leading-relaxed">
              Con formación como entrenadora personal, entrenamiento avanzado en mujeres y como 
              experta en glúteos, diseño programas personalizados que potencian resultados reales, 
              mejoran la confianza y promueven un estilo de vida activo y saludable.
            </p>

            {/* Core Values */}
            <div className="space-y-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-2xl">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-1">
                      {value.title}
                    </h3>
                    <p className="text-primary-600">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
