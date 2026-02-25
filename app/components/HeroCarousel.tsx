'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiChevronLeft, FiChevronRight, FiPause, FiPlay } from 'react-icons/fi';

const slides = [
  {
    id: 1,
    title: 'LA MEJOR ATENCIÓN',
    subtitle: 'PARA TU SALUD',
    description: 'EL DR. CRISTÓBAL MENDOZA es especialista dedicado al tratamiento de OÍDOS, NARIZ y GARGANTA. Miembro de la Sociedad Mexicana de Rinología y Cirugía Plástica Facial.',
    buttonText: 'VER MÁS DEL DR. CRISTÓBAL',
    buttonLink: '/perfil/',
    image: '/hero1.png',
    imageAlt: 'Dr. Cristóbal con paciente'
  },
  {
    id: 2,
    title: 'CIRUGÍA ESTÉTICA',
    subtitle: 'Y FUNCIONAL DE NARIZ',
    description: 'El Dr. Cristóbal Mendoza tiene más de 15 años de experiencia en rinoplastía de vanguardia con técnicas que mejoran tu imagen y tu salud respiratoria.',
    buttonText: 'VER MÁS DE RINOPLASTIA',
    buttonLink: '/cosmetica-nariz/',
    image: '/hero2.png',
    imageAlt: 'Rinoplastia'
  },
  {
    id: 3,
    title: 'ATENCIÓN EN',
    subtitle: 'COLIMA Y TECOMÁN',
    description: 'Consulta en dos ubicaciones: Clínica Córdoba en Colima y Unidad de Especialidades Médicas en Tecomán. Atención de calidad cerca de ti.',
    buttonText: 'VER UBICACIONES',
    buttonLink: '/ubicaciones/',
    image: '/hero3.png',
    imageAlt: 'Mapa de ubicaciones'
  }
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    if (isPlaying) {
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            nextSlide();
            return 0;
          }
          return prev + 0.5;
        });
      }, 25);

      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isPlaying, nextSlide]);

  const slideVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: 0.7 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const textVariants = {
    enter: { opacity: 0, y: 40 },
    center: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.15 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 0.92 },
    center: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.25 } },
    exit: { opacity: 0, scale: 1.1, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative min-h-[600px] sm:min-h-[650px] md:min-h-[700px] lg:min-h-[750px] overflow-hidden bg-gradient-to-br from-[#e4f4fd] via-white to-[#e4f4fd]">
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#c7e6fb]/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#c7e6fb]/40 rounded-full blur-3xl"></div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20 h-full">
            <motion.div
              variants={textVariants}
              className="flex-1 w-full text-center md:text-left space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-700 leading-tight">
                {slides[currentSlide].title}
                {slides[currentSlide].subtitle && (
                  <>
                    <br />
                    <strong className="text-[#0284c7] font-bold">{slides[currentSlide].subtitle}</strong>
                  </>
                )}
              </h2>
              
              <div className="w-20 sm:w-24 h-[3px] bg-gradient-to-r from-[#0284c7] via-[#9ac9e8] to-[#0284c7] mx-auto md:mx-0 rounded-full"></div>
              
              <div className="bg-white/80 backdrop-blur-sm text-gray-700 font-medium p-4 sm:p-5 md:p-6 rounded-2xl max-w-full md:max-w-lg mx-auto md:mx-0 shadow-sm border border-[#e4f4fd]">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </div>

              <a
                href={slides[currentSlide].buttonLink}
                className="group bg-gradient-to-r from-[#0284c7] to-[#0a5d8c] text-white font-semibold px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-xl hover:from-[#0a5d8c] hover:to-[#0284c7] transition-all duration-300 inline-flex items-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 text-sm sm:text-base md:text-lg w-full md:w-auto justify-center"
              >
                <span>{slides[currentSlide].buttonText}</span>
                <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

            <motion.div
              variants={imageVariants}
              className="flex-1 w-full flex justify-center md:justify-end mt-6 md:mt-0"
            >
              <div className="relative max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[450px] w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0284c7]/10 to-[#0a5d8c]/10 rounded-full blur-2xl md:blur-3xl scale-110"></div>
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].imageAlt}
                  className="relative w-full h-auto object-contain drop-shadow-xl transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="hidden md:flex absolute inset-y-0 left-0 right-0 items-center justify-between px-4 lg:px-8 pointer-events-none z-20">
        <button
          onClick={prevSlide}
          className="pointer-events-auto bg-white/90 hover:bg-white rounded-full p-3 lg:p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 group border border-[#e4f4fd]"
          aria-label="Slide anterior"
        >
          <FiChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-[#0284c7] group-hover:text-[#0a5d8c]" />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto bg-white/90 hover:bg-white rounded-full p-3 lg:p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 group border border-[#e4f4fd]"
          aria-label="Siguiente slide"
        >
          <FiChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-[#0284c7] group-hover:text-[#0a5d8c]" />
        </button>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 sm:gap-4 md:gap-6 z-20">
        <div className="flex gap-2 sm:gap-2.5" role="tablist">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? 'w-8 sm:w-10 h-2.5 sm:h-3 bg-[#0284c7] shadow-md'
                  : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[#c7e6fb] hover:bg-[#9ac9e8] hover:scale-125'
              }`}
              role="tab"
              aria-selected={currentSlide === index}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-white/90 hover:bg-white rounded-full p-2 sm:p-2.5 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 border border-[#e4f4fd]"
          aria-label={isPlaying ? 'Pausar carrusel' : 'Reproducir carrusel'}
        >
          {isPlaying ? (
            <FiPause className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0284c7]" />
          ) : (
            <FiPlay className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0284c7]" />
          )}
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#e4f4fd] z-20">
        <div
          className="h-full bg-gradient-to-r from-[#0284c7] via-[#0a5d8c] to-[#0284c7] transition-all duration-100 ease-linear shadow-sm"
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  );
};

export default HeroCarousel;