import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { methodology } from '../data/siteData';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * Componente Methodology - Muestra la metodología de trabajo
 * ACTUALIZADO: Iconos profesionales con React Icons
 */
const Methodology = () => {
  // Inicializar AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section id="metodologia" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Nuestra Metodología
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Un Proceso Probado para el{' '}
            <span className="gradient-text">Éxito Educativo</span>
          </h2>
          <p className="text-lg text-gray-600">
            Seguimos un proceso estructurado de 4 pasos para garantizar
            resultados excepcionales
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical central (solo visible en desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent" />

          {/* Steps */}
          <div className="space-y-12">
            {methodology.map((step, index) => {
              const IconComponent = step.icon;
              
              return (
                <div
                  key={step.id}
                  data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                  data-aos-delay={index * 100}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Contenido */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="md:w-5/12 bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      {/* Número del paso con icono */}
                      <div
                        className={`${step.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden group`}
                      >
                        <span className="text-2xl font-bold relative z-10">{step.step}</span>
                        {/* Icono de fondo sutil */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-20">
                          <IconComponent className="text-5xl" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>

                    {/* Icono grande del paso */}
                    <div className="mb-4">
                      <div 
                        className="inline-flex w-14 h-14 rounded-xl items-center justify-center shadow-md"
                        style={{
                          background: `linear-gradient(135deg, ${step.iconColor}20 0%, ${step.iconColor}40 100%)`,
                        }}
                      >
                        <IconComponent 
                          className="text-3xl"
                          style={{ color: step.iconColor }}
                        />
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Círculo central (solo visible en desktop) */}
                  <div className="hidden md:block md:w-2/12 flex justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', duration: 0.6, delay: index * 0.1 }}
                      className={`w-8 h-8 ${step.color} rounded-full border-4 border-white shadow-lg z-10`}
                    />
                  </div>

                  {/* Espacio vacío para mantener el layout */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden"
        >
          {/* Patrón de fondo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para comenzar el viaje educativo?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Agenda una evaluación inicial gratuita y descubre cómo podemos
              ayudar a tu hijo
            </p>
            <motion.a
              href="https://wa.me/51929398520?text=Hola,%20quiero%20agendar%20una%20evaluación%20inicial%20gratuita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="text-2xl" style={{ color: '#25D366' }} />
              Agendar Evaluación Gratuita
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;