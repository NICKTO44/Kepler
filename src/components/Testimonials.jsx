import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/siteData';

/**
 * Componente Testimonials - Carrusel de testimonios
 * Incluye navegación automática y manual
 */
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play del carrusel
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Cambiar cada 5 segundos

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Variantes de animación para el slide
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  // Renderizar estrellas de rating
  const renderStars = (rating) => {
    return Array(rating)
      .fill(0)
      .map((_, i) => (
        <span key={i} className="text-accent text-xl">
          ⭐
        </span>
      ));
  };

  return (
    <section id="testimonios" className="section-padding bg-gradient-to-br from-blue-50 to-green-50">
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
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Lo que Dicen Nuestras{' '}
            <span className="gradient-text">Familias</span>
          </h2>
          <p className="text-lg text-gray-600">
            Historias reales de éxito y transformación académica
          </p>
        </motion.div>

        {/* Carrusel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Contenedor de testimonios */}
          <div className="relative h-96 md:h-80 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full"
              >
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                  {/* Avatar y Rating */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>

                  {/* Testimonio */}
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  {/* Comillas decorativas */}
                  <div className="text-8xl text-primary/10 absolute top-4 right-8 font-serif">
                    "
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Botones de navegación */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Anterior testimonio"
            >
              ←
            </motion.button>

            {/* Dots indicadores */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-primary'
                      : 'w-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir a testimonio ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Siguiente testimonio"
            >
              →
            </motion.button>
          </div>
        </div>

        {/* Contador de testimonios */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-gray-600"
        >
          {currentIndex + 1} / {testimonials.length}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;