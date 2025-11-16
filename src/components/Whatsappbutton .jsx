import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappNumber, whatsappMessage } from '../data/siteData';

/**
 * Componente WhatsAppButton - Botón flotante profesional
 * Estilo realista similar a los iconos de aplicaciones móviles
 */
const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 1 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Pulso animado de fondo */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Botón principal con gradiente realista */}
      <div 
        className="relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl cursor-pointer overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        }}
      >
        {/* Brillo superior para efecto 3D */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-full" />
        
        {/* Icono oficial de WhatsApp (sin puntos de chat) */}
        <FaWhatsapp 
          className="text-white text-4xl md:text-5xl relative z-10 drop-shadow-lg" 
        />

        {/* Badge de notificación (opcional) */}
        <motion.div
          className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: 'spring' }}
        >
          1
        </motion.div>
      </div>

      {/* Tooltip al hacer hover */}
      <motion.div
        className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={{ x: 10, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
      >
        <span className="text-sm font-medium">¿Necesitas ayuda? ¡Escríbenos!</span>
        {/* Flecha del tooltip */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
          <div className="border-8 border-transparent border-l-gray-900" />
        </div>
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppButton;