import { motion } from 'framer-motion';
import { navLinks, socialLinks } from '../data/siteData';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/images/kepler10.webp'; // Tu logo PNG

/**
 * Componente Footer con Logo PNG Personalizado
 * ACTUALIZADO: Usa tu logo en lugar del icono de graduación
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Sección principal del footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Columna 1: Logo y descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              {/* Logo PNG personalizado */}
              <img 
                src={logo} 
                alt="Kelper Logo" 
                className="h-10 w-auto object-contain brightness-0 invert" 
              />
              <span className="text-2xl font-bold gradient-text">Kepler</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformando vidas a través de la educación personalizada y el
              desarrollo integral de cada niño.
            </p>
          </motion.div>

          {/* Columna 2: Enlaces rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 3: Servicios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#servicios"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Reforzamiento Académico
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Terapia de Lenguaje
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Atención Personalizada
                </a>
              </li>
              <li>
                <a
                  href="#planes"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  Ver Planes
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Columna 4: Contacto y redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 mb-6">
              {/* WhatsApp con icono profesional */}
              <li className="flex items-center gap-3 text-gray-400 group">
                <div className="w-8 h-8 rounded-lg bg-gray-800 group-hover:bg-green-600 flex items-center justify-center transition-colors">
                  <FaWhatsapp className="text-lg" />
                </div>
                <a
                  href="https://wa.me/51929398520"
                  className="hover:text-primary transition-colors"
                >
                  +51 929 398 520
                </a>
              </li>

              {/* Email con icono profesional */}
              <li className="flex items-center gap-3 text-gray-400 group">
                <div className="w-8 h-8 rounded-lg bg-gray-800 group-hover:bg-red-500 flex items-center justify-center transition-colors">
                  <FaEnvelope className="text-sm" />
                </div>
                <a
                  href="mailto:contacto@edukids.com"
                  className="hover:text-primary transition-colors"
                >
                  kepler@educa.com
                </a>
              </li>

              {/* Ubicación con icono profesional */}
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <span>Cusco, Perú</span>
              </li>
            </ul>

            {/* Redes sociales con iconos profesionales */}
            <h5 className="font-semibold mb-3">Síguenos</h5>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg transition-all duration-300 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${social.color}20 0%, ${social.color}40 100%)`,
                      border: `1px solid ${social.color}30`
                    }}
                    aria-label={social.name}
                  >
                    <IconComponent style={{ color: social.color }} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Línea divisoria con gradiente */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

      {/* Copyright */}
      <div className="container-custom py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} Kelper. Todos los derechos reservados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Términos y Condiciones
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;