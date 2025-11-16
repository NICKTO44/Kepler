import { motion } from 'framer-motion';
import { plans } from '../data/siteData';

/**
 * Componente Pricing - Muestra los planes y precios
 * Incluye cards de planes con highlight para el plan recomendado
 */
const Pricing = () => {
  const handleSelectPlan = (planName) => {
    const message = `Hola, estoy interesado en el ${planName}. ¿Podrían darme más información?`;
    const url = `https://wa.me/51929398520?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="planes" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            Planes y Precios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Encuentra el Plan{' '}
            <span className="gradient-text">Perfecto</span> para ti
          </h2>
          <p className="text-lg text-gray-600">
            Opciones flexibles adaptadas a tus necesidades y presupuesto
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                plan.highlighted ? 'border-4 border-primary scale-105' : 'border-2 ' + plan.color
              }`}
            >
              {/* Badge "Más Popular" */}
              {plan.highlighted && (
                <motion.div
                  initial={{ x: -100 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                  className="absolute top-6 -left-8 bg-primary text-white px-12 py-1 text-sm font-semibold transform -rotate-45"
                >
                  Más Popular
                </motion.div>
              )}

              <div className="p-8">
                {/* Nombre del plan */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>

                {/* Descripción */}
                <p className="text-gray-600 mb-6">{plan.description}</p>

                {/* Precio */}
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 text-lg">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-secondary text-xl flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  onClick={() => handleSelectPlan(plan.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-primary text-white hover:bg-blue-600 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Seleccionar Plan
                </motion.button>
              </div>

              {/* Decoración de fondo */}
              {plan.highlighted && (
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Información adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            💡 Todos los planes incluyen material didáctico y acceso a plataforma online
          </p>
          <p className="text-gray-600">
            ¿Tienes dudas? Contáctanos para una{' '}
            <a
              href="#contacto"
              className="text-primary font-semibold hover:underline"
            >
              asesoría personalizada
            </a>
          </p>
        </motion.div>

        {/* Garantía */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8 max-w-3xl mx-auto text-center"
        >
          <div className="text-5xl mb-4">🏆</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Garantía de Satisfacción
          </h3>
          <p className="text-gray-700">
            Si no estás satisfecho en la primera semana, te devolvemos tu dinero.
            Sin preguntas, sin complicaciones.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;