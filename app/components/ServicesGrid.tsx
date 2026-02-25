'use client';

import React from 'react';
import { motion } from 'motion/react';

const services = [
  {
    id: 'rinoplastia',
    title: 'RINOPLASTIA',
    description: 'Cirugía cosmética y funcional de nariz',
    image: '/proce1.jpg',
    link: '/cosmetica-nariz/',
    delay: 0
  },
  {
    id: 'ronquido',
    title: 'RONQUIDO Y APNEA',
    description: 'Tratamiento para mejorar la calidad del sueño',
    image: '/proce2.jpg',
    link: '/apnea-sueno/',
    delay: 0.1
  },
  {
    id: 'sinusitis',
    title: 'SINUSITIS',
    description: 'Alivio de infecciones e inflamación sinusal',
    image: '/proce3.jpg',
    link: '/sinusitis/',
    delay: 0.2
  },
  {
    id: 'alergias',
    title: 'ALERGIAS',
    description: 'Diagnóstico y tratamiento de alergias',
    image: '/proce4.jpg',
    link: '/alergias/',
    delay: 0.3
  },
  {
    id: 'audicion',
    title: 'PÉRDIDA DE AUDICIÓN',
    description: 'Evaluación y soluciones auditivas',
    image: '/proce5.jpg',
    link: '/perdida-audicion/',
    delay: 0.4
  },
  {
    id: 'vertigo',
    title: 'VÉRTIGO Y MAREO',
    description: 'Tratamiento de trastornos del equilibrio',
    image: '/proce6.jpg',
    link: '/vertigo-mareo/',
    delay: 0.5
  },
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white via-[#e4f4fd] to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c7e6fb]/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c7e6fb]/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#0284c7] font-semibold text-sm uppercase tracking-wider mb-3">
            Especialidades Médicas
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 mb-4">
            Mis <span className="text-[#0284c7] font-semibold">Servicios</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#0284c7] via-[#9ac9e8] to-[#0284c7] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Atención especializada en Otorrinolaringología con más de 15 años de experiencia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service) => (
            <motion.a
              key={service.id}
              href={service.link}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: service.delay }}
              className="block group"
              aria-label={`Ir a ${service.title}`}
            >
              <article className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.03] hover:-translate-y-2 cursor-pointer bg-white">
                <div className="relative h-72 md:h-80 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-2"
                    loading="lazy"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-white/95 backdrop-blur-md p-6 transform transition-all duration-500 group-hover:pb-8">
                  <h3 className="text-center text-lg md:text-xl font-bold text-[#0284c7] tracking-wide uppercase mb-2 group-hover:text-[#0a5d8c] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-center text-gray-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-h-0 group-hover:max-h-20 overflow-hidden">
                    {service.description}
                  </p>
                </div>

                <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#9ac9e8] transition-all duration-500 rounded-3xl pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </article>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

