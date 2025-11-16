import { motion } from 'framer-motion';
import { benefits } from '../data/siteData';

/**
 * Componente Benefits - Muestra los beneficios del servicio
 * ACTUALIZADO: Iconos profesionales con React Icons
 */
const Benefits = () => {
  return (
    <section id="beneficios" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
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
            ¿Por Qué Elegirnos?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Beneficios que Marcan la{' '}
            <span className="gradient-text">Diferencia</span>
          </h2>
          <p className="text-lg text-gray-600">
            Características únicas que nos convierten en la mejor opción para el
            desarrollo académico de tus hijos
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Icon Profesional con animación */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 inline-block"
                >
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${benefit.iconColor}20 0%, ${benefit.iconColor}40 100%)`,
                    }}
                  >
                    <IconComponent 
                      className="text-4xl"
                      style={{ color: benefit.iconColor }}
                    />
                  </div>
                </motion.div>

                {/* Título */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>

                {/* Descripción */}
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Línea decorativa */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  className="h-1 rounded-full mt-6"
                  style={{
                    background: `linear-gradient(90deg, ${benefit.iconColor} 0%, ${benefit.iconColor}60 100%)`
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;