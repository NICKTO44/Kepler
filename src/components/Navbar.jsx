import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../data/siteData';
import logo from '../assets/images/kepler10.webp'; // Tu logo PNG

/**
 * Navbar con Logo PNG Personalizado
 * ACTUALIZADO: Usa tu logo en lugar del icono de graduación
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg py-4'
            : 'bg-white/95 backdrop-blur-sm py-6'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo con imagen PNG */}
            <motion.a
              href="#inicio"
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Logo PNG personalizado */}
              <img 
                src={logo} 
                alt="Kelper Logo" 
                className="h-12 w-auto object-contain" 
              />
              <span className="text-2xl font-bold gradient-text">
                Kelper
              </span>
            </motion.a>

            {/* Botones del lado derecho */}
            <div className="flex items-center gap-4">
              {/* Botón CTA Principal */}
              <motion.a
                href="https://wa.me/51929398520?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full font-semibold transition-all duration-300 text-white shadow-lg hover:shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="text-xl" />
                <span className="hidden sm:inline">Contactar</span>
              </motion.a>

              {/* Botón de Menú Hamburguesa (opcional para navegación) */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Menu"
              >
                {isOpen ? (
                  <FaTimes className="text-xl text-gray-700" />
                ) : (
                  <FaBars className="text-xl text-gray-700" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Drawer lateral con menú de navegación */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay oscuro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            />

            {/* Panel lateral */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              {/* Header del drawer */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Logo en el drawer */}
                    <img 
                      src={logo} 
                      alt="Kelper Logo" 
                      className="h-10 w-auto object-contain" 
                    />
                    <span className="text-xl font-bold gradient-text">Kelper</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center"
                  >
                    <FaTimes className="text-xl text-gray-700" />
                  </button>
                </div>
                <p className="text-sm text-gray-600">
                  Navegación rápida
                </p>
              </div>

              {/* Links de navegación */}
              <div className="p-6">
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-primary/10 hover:text-primary font-medium transition-all"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                {/* CTA en el drawer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 p-4 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)'
                  }}
                >
                  <p className="text-white font-semibold mb-2">
                    ¿Necesitas ayuda?
                  </p>
                  <p className="text-white/90 text-sm mb-3">
                    Chatea con nosotros por WhatsApp
                  </p>
                  <a
                    href="https://wa.me/51929398520?text=Hola,%20quiero%20más%20información"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    <FaWhatsapp className="text-xl" />
                    Abrir Chat
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;