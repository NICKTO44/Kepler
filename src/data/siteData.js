/**
 * Datos centralizados para la landing page
 * Incluye servicios, testimonios, planes, beneficios, etc.
 * OPTIMIZADO: Tree-shaking de React Icons para reducir bundle size
 */

// ✅ OPTIMIZADO: Imports específicos por paquete (tree-shaking automático en producción)
import { 
  FaGraduationCap, 
  FaComments, 
  FaBullseye,
  FaChalkboardTeacher,
  FaHome,
  FaChartLine,
  FaHeart,
  FaPalette,
  FaUsers,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaCheckCircle,
  FaCalendarAlt
} from 'react-icons/fa';

import {
  IoSchoolSharp,
  IoLanguage,
  IoRocketSharp,
  IoShieldCheckmark,
  IoStatsChart
} from 'react-icons/io5';

import {
  MdRecordVoiceOver,
  MdPersonSearch,
  MdWorkspaces,
  MdVerified
} from 'react-icons/md';

import { 
  HiAcademicCap,
  HiUserGroup 
} from 'react-icons/hi';

export const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Beneficios', href: '#beneficios' },
  { name: 'Metodología', href: '#metodologia' },
  { name: 'Planes', href: '#planes' },
  { name: 'Contacto', href: '#contacto' },
];

export const services = [
  {
    id: 1,
    icon: HiAcademicCap,
    iconColor: '#0044D0',
    title: 'Reforzamiento Académico',
    description: 'Apoyo personalizado en todas las materias escolares para mejorar el rendimiento académico de tu hijo.',
    features: ['Matemáticas', 'Lenguaje', 'Ciencias', 'Historia'],
  },
  {
    id: 2,
    icon: MdRecordVoiceOver,
    iconColor: '#3EA1EB',
    title: 'Terapia de Lenguaje',
    description: 'Evaluación y tratamiento profesional para mejorar habilidades comunicativas y de lenguaje.',
    features: ['Articulación', 'Fluidez verbal', 'Comprensión', 'Expresión'],
  },
  {
    id: 3,
    icon: IoRocketSharp,
    iconColor: '#FF0000',
    title: 'Atención Personalizada',
    description: 'Programas diseñados específicamente para las necesidades individuales de cada niño y adolescente.',
    features: ['Evaluación inicial', 'Plan individual', 'Seguimiento', 'Reportes'],
  },
];

export const benefits = [
  {
    id: 1,
    icon: FaChalkboardTeacher,
    iconColor: '#0044D0',
    title: 'Profesionales Certificados',
    description: 'Equipo de especialistas con amplia experiencia en educación y terapia infantil.',
  },
  {
    id: 2,
    icon: FaHome,
    iconColor: '#3EA1EB',
    title: 'Modalidad Flexible',
    description: 'Sesiones presenciales y virtuales adaptadas a tus horarios y necesidades.',
  },
  {
    id: 3,
    icon: IoStatsChart,
    iconColor: '#0044D0',
    title: 'Resultados Medibles',
    description: 'Seguimiento constante del progreso con reportes detallados y objetivos claros.',
  },
  {
    id: 4,
    icon: IoShieldCheckmark,
    iconColor: '#FF0000',
    title: 'Ambiente Seguro',
    description: 'Espacio cálido y motivador diseñado para el aprendizaje efectivo.',
  },
  {
    id: 5,
    icon: FaPalette,
    iconColor: '#3EA1EB',
    title: 'Metodología Lúdica',
    description: 'Aprendizaje a través del juego y actividades dinámicas que mantienen el interés.',
  },
  {
    id: 6,
    icon: HiUserGroup,
    iconColor: '#0044D0',
    title: 'Apoyo Familiar',
    description: 'Orientación constante a los padres para reforzar el aprendizaje en casa.',
  },
];

export const methodology = [
  {
    id: 1,
    step: '01',
    icon: MdPersonSearch,
    iconColor: '#0044D0',
    title: 'Evaluación Inicial',
    description: 'Diagnóstico completo para identificar fortalezas y áreas de mejora del estudiante.',
    color: 'bg-primary',
  },
  {
    id: 2,
    step: '02',
    icon: MdWorkspaces,
    iconColor: '#3EA1EB',
    title: 'Plan Personalizado',
    description: 'Diseñamos un programa adaptado a las necesidades específicas de cada niño.',
    color: 'bg-secondary',
  },
  {
    id: 3,
    step: '03',
    icon: IoRocketSharp,
    iconColor: '#FF0000',
    title: 'Sesiones Dinámicas',
    description: 'Clases interactivas y motivadoras que fomentan el amor por el aprendizaje.',
    color: 'bg-accent',
  },
  {
    id: 4,
    step: '04',
    icon: FaChartLine,
    iconColor: '#0044D0',
    title: 'Seguimiento Continuo',
    description: 'Monitoreo constante del progreso con reportes periódicos a los padres.',
    color: 'bg-primary',
  },
];

export const plans = [
  {
    id: 1,
    name: 'Terapia de lenguaje',
    price: 'S/99',
    period: '/mes',
    description: 'Ideal para reforzar materias específicas',
    features: [
      '4 sesiones mensuales',
      '1 hora por sesión',
      'Material didáctico incluido',
      'Reporte mensual de progreso',
      'Acceso a plataforma online',
    ],
    highlighted: false,
    color: 'border-gray-300',
  },
  {
    id: 2,
    name: 'Reforzamiento Academico',
    price: 'S/179',
    period: '/mes',
    description: 'El más popular para resultados óptimos',
    features: [
      '8 sesiones mensuales',
      '1 hora por sesión',
      'Material didáctico incluido',
      'Reporte quincenal de progreso',
      'Acceso a plataforma online',
      'Asesoría para padres',
      'Terapia de lenguaje incluida',
    ],
    highlighted: true,
    color: 'border-primary',
  },
  {
    id: 3,
    name: 'Personalizado',
    price: 'S/299',
    period: '/mes',
    description: 'Atención integral y personalizada',
    features: [
      'Sesiones ilimitadas',
      'Duración flexible',
      'Material didáctico premium',
      'Reporte semanal de progreso',
      'Acceso prioritario a plataforma',
      'Asesoría familiar continua',
      'Terapia multidisciplinaria',
      'Seguimiento psicopedagógico',
      'Talleres grupales sin costo',
    ],
    highlighted: false,
    color: 'border-secondary',
  },
];

export const socialLinks = [
  { 
    name: 'Facebook', 
    icon: FaFacebookF, 
    url: 'https://facebook.com',
    color: '#1877F2',
    bgGradient: 'from-blue-500 to-blue-600'
  },
  { 
    name: 'Instagram', 
    icon: FaInstagram, 
    url: 'https://instagram.com',
    color: '#E4405F',
    bgGradient: 'from-purple-500 via-pink-500 to-orange-500'
  },
  { 
    name: 'WhatsApp', 
    icon: FaWhatsapp, 
    url: 'https://wa.me/51999999999',
    color: '#25D366',
    bgGradient: 'from-green-400 to-green-600'
  },
  { 
    name: 'Email', 
    icon: FaEnvelope, 
    url: 'mailto:contacto@edukids.com',
    color: '#EA4335',
    bgGradient: 'from-red-500 to-red-600'
  },
];

export const uiIcons = {
  check: FaCheckCircle,
  calendar: FaCalendarAlt,
  whatsapp: FaWhatsapp,
  verified: MdVerified,
};

export const whatsappNumber = '51999999999';
export const whatsappMessage = '¡Hola! Me interesa conocer más sobre sus servicios de reforzamiento académico y terapia de lenguaje.';