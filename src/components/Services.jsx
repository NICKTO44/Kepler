import { motion } from 'framer-motion';
import { services } from '../data/siteData';

/**
 * Componente Services - Muestra los servicios ofrecidos
 * ACTUALIZADO: Iconos profesionales con React Icons
 */
const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Programas Diseñados para el{' '}
            <span className="gradient-text">Éxito Académico</span>
          </h2>
          <p className="text-lg text-gray-600">
            Ofrecemos servicios especializados adaptados a las necesidades de
            cada estudiante
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="card-service group relative overflow-hidden"
              >
                {/* Fondo animado al hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Icon Profesional con estilo 3D */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 inline-block"
                  >
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${service.iconColor}15 0%, ${service.iconColor}30 100%)`,
                        border: `2px solid ${service.iconColor}20`
                      }}
                    >
                      <IconComponent 
                        className="text-5xl"
                        style={{ color: service.iconColor }}
                      />
                    </div>
                  </motion.div>

                  {/* Título */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {service.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center text-gray-700"
                      >
                        <span 
                          className="w-2 h-2 rounded-full mr-3"
                          style={{ backgroundColor: service.iconColor }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Badge decorativo */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center ${
                      index === 0
                        ? 'bg-primary/10 text-primary'
                        : index === 1
                        ? 'bg-secondary/10 text-secondary'
                        : 'bg-accent/10 text-accent'
                    }`}
                  >
                    <span className="text-xl font-bold">0{index + 1}</span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contacto"
            className="btn-secondary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Información
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;