import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * TESTIMONIALS SECTION
 * 
 * Displays client testimonials with photos and quotes.
 * 
 * CUSTOMIZATION:
 * - Edit testimonials in the 'testimonials' array
 * - Replace client photos with real ones
 * - Modify layout and styling using Tailwind classes
 * - Add or remove testimonials as needed
 * 
 * RECOMMENDED IMAGES:
 * Use portrait photos or client before/after photos
 */

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Testimonials - EDIT THESE to add real client feedback
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Ejecutiva de Marketing',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200',
      quote: 'Nicole transformó completamente mi enfoque hacia el fitness. Sus planes de entrenamiento personalizados y motivación constante me ayudaron a perder 30 libras y ganar confianza que nunca supe que tenía.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Ingeniero de Software',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200',
      quote: "Trabajar con Nicole ha sido un cambio de vida. No solo entrena tu cuerpo—te enseña cómo construir hábitos saludables sostenibles. La mejor inversión que he hecho en mí mismo.",
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Maestra',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
      quote: "He probado muchos entrenadores antes, pero el enfoque holístico de Nicole es diferente. Ella entiende que el fitness es tanto mental como físico. Estoy más fuerte y confiada que nunca.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-primary-900 mb-4">
            Transformaciones de Clientes
          </h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            Resultados reales de personas reales que confiaron en el proceso
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-primary-50 rounded-2xl p-8 shadow-lg"
            >
              {/* Client Photo */}
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-white shadow-md"
                />
                <div>
                  <h3 className="font-semibold text-primary-900 text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-primary-600 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-primary-700 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Decorative Quote Mark */}
              <div className="mt-4 text-6xl text-primary-200 leading-none font-serif">
                "
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center"
        >
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary-900 mb-2">
              500+
            </div>
            <div className="text-primary-600">
              Clientes Entrenados
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary-900 mb-2">
              8+
            </div>
            <div className="text-primary-600">
              Años de Experiencia
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary-900 mb-2">
              98%
            </div>
            <div className="text-primary-600">
              Tasa de Éxito
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
