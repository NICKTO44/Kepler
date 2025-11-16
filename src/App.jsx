import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Methodology from './components/Methodology';

import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

/**
 * Componente principal App
 * Integra todos los componentes de la landing page
 */
function App() {
  // Inicializar AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });

    // Refrescar AOS en cambios de ruta o scroll
    window.addEventListener('load', AOS.refresh);
    
    return () => {
      window.removeEventListener('load', AOS.refresh);
    };
  }, []);

  return (
    <div className="App">
      {/* Navegación */}
      <Navbar />

      {/* Contenido principal */}
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Methodology />
        
        <Pricing />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;