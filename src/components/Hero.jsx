import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaArrowDown } from 'react-icons/fa';
import { whatsappNumber, whatsappMessage } from '../data/siteData';

// ✅ CORRECCIÓN: Imports de imágenes para que funcionen en producción
import home2 from '../assets/images/home2.webp';
import imagen10 from '../assets/images/imagen10.webp';
import imagen41 from '../assets/images/imagen41.webp';

/**
 * Componente Hero con Carrusel de Imágenes de Fondo
 * ACTUALIZADO: 3 imágenes rotando automáticamente + filtro más claro
 * OPTIMIZADO: Imports directos para funcionar en producción (GitHub Pages)
 */
const Hero = () => {
    // ✅ Array de imágenes usando imports (funciona en dev y producción)
    const backgroundImages = [home2, imagen10, imagen41];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Cambiar imagen cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % backgroundImages.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(url, '_blank');
    };

    return (
        <section
            id="inicio"
            className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
        >
            {/* Carrusel de Imágenes de Fondo con AnimatePresence */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
            </AnimatePresence>

            {/* Overlay MEJORADO - Más claro y menos borroso */}
            <div 
                className="absolute inset-0 pointer-events-none" 
                style={{
                    background: 'linear-gradient(to right, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.65) 50%, rgba(255, 255, 255, 0.2) 100%)'
                }}
            />

            {/* Indicadores del carrusel (puntos) */}
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                {backgroundImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex 
                                ? 'bg-primary w-8' 
                                : 'bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Ir a imagen ${index + 1}`}
                    />
                ))}
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Contenido de texto - Lado izquierdo */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6 lg:space-y-8"
                    >
                        <motion.div variants={itemVariants}>
                            <span
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-sm"
                                style={{
                                    backgroundColor: 'rgba(0, 68, 208, 0.1)',
                                    color: '#0044D0'
                                }}
                            >
                                <span className="text-lg">🎓</span>
                                Centro Educativo Profesional
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight"
                            style={{ color: '#111827' }}
                        >
                            Impulsamos{' '}
                            <span className="relative inline-block">
                                <span className="gradient-text relative z-10">
                                    Tu Aprendizaje
                                </span>
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ delay: 1, duration: 0.8 }}
                                    style={{
                                        position: 'absolute',
                                        bottom: '0.5rem',
                                        left: 0,
                                        height: '0.75rem',
                                        backgroundColor: '#FF0000',
                                        zIndex: -10
                                    }}
                                />
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl"
                            style={{ color: '#374151' }}
                        >
                            Reforzamiento académico personalizado y terapia de lenguaje
                            profesional para niños y adolescentes. Resultados comprobados
                            con metodología innovadora y atención integral.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <motion.button
                                onClick={handleWhatsAppClick}
                                className="group relative px-8 py-4 rounded-full font-bold text-lg overflow-hidden"
                                style={{
                                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                                    color: 'white',
                                    boxShadow: '0 20px 25px -5px rgba(37, 211, 102, 0.3), 0 10px 10px -5px rgba(37, 211, 102, 0.04)'
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 25px 50px -12px rgba(37, 211, 102, 0.5)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    <FaWhatsapp className="text-2xl" />
                                    Contactar por WhatsApp
                                </span>
                            </motion.button>

                            <motion.a
                                href="#servicios"
                                className="px-8 py-4 rounded-full font-bold text-lg text-center transition-all duration-300"
                                style={{
                                    border: '3px solid #0044D0',
                                    color: '#0044D0',
                                    backgroundColor: 'white',
                                    boxShadow: '0 10px 15px -3px rgba(0, 68, 208, 0.2)'
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: '#0044D0',
                                    color: 'white',
                                    boxShadow: "0 20px 25px -5px rgba(0, 68, 208, 0.4)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Conocer Servicios
                            </motion.a>
                        </motion.div>

                        {/* Stats mejorados con tus colores */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-3 gap-4 lg:gap-6 pt-6"
                        >
                            <div className="text-center">
                                <motion.div
                                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-1"
                                    style={{ color: '#0044D0' }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.5, type: "spring" }}
                                >
                                    500+
                                </motion.div>
                                <div className="text-xs md:text-sm lg:text-base font-medium" style={{ color: '#6B7280' }}>
                                    Estudiantes
                                </div>
                            </div>
                            <div className="text-center">
                                <motion.div
                                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-1"
                                    style={{ color: '#3EA1EB' }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.7, type: "spring" }}
                                >
                                    98%
                                </motion.div>
                                <div className="text-xs md:text-sm lg:text-base font-medium" style={{ color: '#6B7280' }}>
                                    Satisfacción
                                </div>
                            </div>
                            <div className="text-center">
                                <motion.div
                                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-1"
                                    style={{ color: '#FF0000' }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.9, type: "spring" }}
                                >
                                    15+
                                </motion.div>
                                <div className="text-xs md:text-sm lg:text-base font-medium" style={{ color: '#6B7280' }}>
                                    Años Exp.
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Lado derecho - Espacio para la imagen de fondo */}
                    <div className="hidden lg:block">
                        {/* Este espacio se deja para que la imagen de fondo se vea */}
                    </div>
                </div>
            </div>

            {/* Indicador de scroll con icono profesional */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-2"
                    style={{ color: '#6B7280' }}
                >
                    <span className="text-sm font-medium">Desliza para explorar</span>
                    <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <FaArrowDown className="text-lg" style={{ color: '#0044D0' }} />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;