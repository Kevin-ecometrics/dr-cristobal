'use client';

import React from 'react';
import { FiUser, FiArrowRight } from 'react-icons/fi';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#e4f4fd] to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-700">
                Acerca del <span className="text-[#0284c7] font-normal">Dr. Cristóbal Mendoza</span>
              </h2>
              <p className="text-gray-600 text-xl mt-2">Otorrinolaringólogo</p>
              <div className="w-full h-[2px] bg-gradient-to-r from-[#0284c7] via-[#9ac9e8] to-transparent mt-4 rounded-full"></div>
            </div>

            <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
              <p>
                Con más de 15 años de experiencia, el Dr. Cristóbal Mendoza ofrece a sus pacientes las técnicas
                más actualizadas en el tratamiento de oídos, nariz y garganta, con enfoque en procedimientos
                mínimamente invasivos, en un ambiente seguro y agradable, dando atención a pacientes de Colima,
                Jalisco, Michoacán y otros estados.
              </p>
              <p>
                Ha desarrollado la reputación de ofrecer una atención médica excepcional a cada uno de sus
                pacientes, basando su práctica en la honestidad, integridad y dedicación a la excelencia en la
                Otorrinolaringología.
              </p>
              <p>
                El Dr. Cristóbal Mendoza se encuentra certificado por el Consejo Mexicano de Otorrinolaringología
                y Cirugía de Cabeza y Cuello, y es miembro activo de la Sociedad Mexicana de Rinología.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="/perfil/"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0284c7] to-[#0a5d8c] text-white font-semibold px-8 py-4 rounded-lg hover:from-[#0a5d8c] hover:to-[#0284c7] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              >
                <FiUser className="w-6 h-6" />
                <span>CONOZCA MÁS ACERCA DEL DR. CRISTÓBAL</span>
                <FiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
              <img
                src="/doctor.jpg"
                alt="Dr. Cristóbal Mendoza"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0284c7]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-[#9ac9e8] rounded-2xl -z-10 transition-all duration-500 group-hover:scale-105"></div>

            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
              <p className="text-[#0284c7] font-bold text-sm">+15 AÑOS</p>
              <p className="text-gray-600 text-xs">de experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;