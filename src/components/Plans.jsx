import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * PLANS SECTION
 * 
 * Displays training plan options with pricing cards.
 * 
 * CUSTOMIZATION:
 * - Edit plan details in the 'plans' array
 * - Modify pricing, features, and descriptions
 * - Change colors by editing Tailwind classes
 * - Update the contact method (WhatsApp, email, etc.)
 * 
 * PRICING:
 * Edit the price, currency, and billing period for each plan
 */

const Plans = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Training plans - EDIT THESE to change plan details
  const plans = [
    {
      name: 'Básico',
      price: '$99',
      period: '/mes',
      description: 'Perfecto para comenzar tu viaje fitness',
      features: [
        'Plan de entrenamiento personalizado',
        'Seguimiento mensual de progreso',
        'Soporte por email',
        'Guía de nutrición',
      ],
      featured: false,
    },
    {
      name: 'Pro',
      price: '$179',
      period: '/mes',
      description: 'Apoyo completo para transformación dedicada',
      features: [
        'Planes personalizados de entrenamiento y alimentación',
        'Seguimiento semanal por video',
        'Soporte prioritario por chat',
        'Videos de revisión de técnica',
        'Guía de suplementación',
      ],
      featured: true,
    },
    {
      name: 'Premium',
      price: '$299',
      period: '/mes',
      description: 'Coaching elite con máxima responsabilidad',
      features: [
        'Todo lo incluido en Pro',
        'Sesiones de entrenamiento presencial',
        'Soporte por mensajería 24/7',
        'Análisis de composición corporal',
        'Preparación para competencias (opcional)',
      ],
      featured: false,
    },
  ];

  // EDIT THIS: Change the contact method (WhatsApp number, email, etc.)
  const handleJoinClick = (planName) => {
    // Replace with your WhatsApp number (format: country code + number, no spaces or special chars)
    const whatsappNumber = '50687406385';
    const message = `¡Hola Nicole! Estoy interesado/a en el plan ${planName}.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="plans" className="py-24 bg-primary-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-primary-900 mb-4">
            Planes de Entrenamiento
          </h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            Elige el plan que se ajuste a tus metas y nivel de compromiso
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg ${
                plan.featured
                  ? 'ring-2 ring-primary-900 md:scale-105'
                  : ''
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-900 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-primary-900 mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-5xl font-bold text-primary-900">
                  {plan.price}
                </span>
                <span className="text-primary-600 text-lg">
                  {plan.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-primary-600 mb-6">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-primary-700"
                  >
                    <svg
                      className="w-6 h-6 text-primary-900 flex-shrink-0 mt-0.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleJoinClick(plan.name)}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.featured
                    ? 'bg-primary-900 text-white hover:bg-primary-800'
                    : 'bg-primary-100 text-primary-900 hover:bg-primary-200'
                }`}
              >
                Únete Ahora
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
