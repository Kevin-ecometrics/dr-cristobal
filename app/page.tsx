'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import ServicesGrid from './components/ServicesGrid';
import UbicacionesSection from './components/UbicacionesSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('inicio');

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'ubicaciones', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <section id="inicio">
          <HeroCarousel />
        </section>
        <section id="servicios">
          <ServicesGrid />
        </section>
        <AboutSection />
        <section id="ubicaciones">
          <UbicacionesSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
