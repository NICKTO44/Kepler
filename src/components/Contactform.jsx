import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaPaperPlane 
} from 'react-icons/fa';

/**
 * Componente ContactForm - Formulario de contacto frontend
 * ACTUALIZADO: Iconos profesionales con React Icons
 */
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpiar error del campo cuando el usuario escribe
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Validar formulario
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!/^\d{9,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Teléfono inválido (mínimo 9 dígitos)';
    }

    if (!formData.service) {
      newErrors.service = 'Selecciona un servicio';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Construir mensaje para WhatsApp
    const message = `
🎓 *Nueva Consulta - Kelper*

👤 *Nombre:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Teléfono:* ${formData.phone}
🎯 *Servicio:* ${formData.service}

💬 *Mensaje:*
${formData.message}
    `.trim();

    // Enviar a WhatsApp
    const whatsappUrl = `https://wa.me/51929398520?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Simular envío exitoso
    setTimeout(() => {
      setIsSubmitting(false);
      // Resetear formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    }, 1000);
  };

  return (
    <section id="contacto" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Contáctanos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Comienza el Viaje{' '}
              <span className="gradient-text">Educativo</span> Hoy
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Estamos aquí para responder tus preguntas y ayudarte a encontrar
              el programa perfecto para tu hijo.
            </p>

            {/* Información de contacto con iconos profesionales */}
            <div className="space-y-6">
              {/* WhatsApp */}
              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 cursor-pointer"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md"
                  style={{
                    background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.2) 0%, rgba(37, 211, 102, 0.4) 100%)',
                  }}
                >
                  <FaWhatsapp className="text-3xl" style={{ color: '#25D366' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                  <a
                    href="https://wa.me/51929398520"
                    className="text-primary hover:underline"
                  >
                    +51 929 398 520
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 cursor-pointer"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md"
                  style={{
                    background: 'linear-gradient(135deg, rgba(234, 67, 53, 0.2) 0%, rgba(234, 67, 53, 0.4) 100%)',
                  }}
                >
                  <FaEnvelope className="text-3xl" style={{ color: '#EA4335' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a
                    href="mailto:contacto@edukids.com"
                    className="text-primary hover:underline"
                  >
                    kepler@educa.com
                  </a>
                </div>
              </motion.div>

              {/* Ubicación */}
              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.4) 100%)',
                  }}
                >
                  <FaMapMarkerAlt className="text-3xl" style={{ color: '#3B82F6' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ubicación</h4>
                  <p className="text-gray-600">Cusco, Perú</p>
                </div>
              </motion.div>

              {/* Horario */}
              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md"
                  style={{
                    background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.2) 0%, rgba(250, 204, 21, 0.4) 100%)',
                  }}
                >
                  <FaClock className="text-3xl" style={{ color: '#FACC15' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Horario</h4>
                  <p className="text-gray-600">Lun - Sáb: 8:00 AM - 8:00 PM</p>
                </div>
              </motion.div>
            </div>

            {/* Llamada a la acción adicional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 p-6 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #22C55E 100%)',
              }}
            >
              <h4 className="text-white font-bold text-lg mb-2">
                ¿Prefieres hablar directamente?
              </h4>
              <p className="text-white/90 mb-4 text-sm">
                Haz clic para enviarnos un mensaje por WhatsApp
              </p>
              <motion.a
                href="https://wa.me/51929398520?text=Hola,%20quiero%20más%20información"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="text-xl" style={{ color: '#25D366' }} />
                Chatear Ahora
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envíanos un mensaje
              </h3>

              {/* Nombre */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.name ? 'border-red-500' : 'border-gray-200'
                  } focus:border-primary focus:outline-none transition-colors`}
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  } focus:border-primary focus:outline-none transition-colors`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Teléfono */}
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.phone ? 'border-red-500' : 'border-gray-200'
                  } focus:border-primary focus:outline-none transition-colors`}
                  placeholder="999 999 999"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Servicio */}
              <div className="mb-4">
                <label
                  htmlFor="service"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Servicio de interés *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.service ? 'border-red-500' : 'border-gray-200'
                  } focus:border-primary focus:outline-none transition-colors`}
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Reforzamiento Académico">
                    Reforzamiento Académico
                  </option>
                  <option value="Terapia de Lenguaje">Terapia de Lenguaje</option>
                  <option value="Atención Personalizada">
                    Atención Personalizada
                  </option>
                  <option value="Otro">Otro</option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                )}
              </div>

              {/* Mensaje */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.message ? 'border-red-500' : 'border-gray-200'
                  } focus:border-primary focus:outline-none transition-colors resize-none`}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Botón de envío con icono profesional */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-3 btn-primary ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <FaPaperPlane className="text-xl" />
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </motion.button>

              {/* Nota de privacidad */}
              <p className="text-xs text-gray-500 text-center mt-4">
                Al enviar este formulario, aceptas nuestra política de privacidad.
                Tus datos están seguros con nosotros.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;