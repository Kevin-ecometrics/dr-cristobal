'use client';

import React from 'react';
import { FiUser, FiArrowRight } from 'react-icons/fi';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#e4f4fd] to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-700">
                Conoce al <span className="text-[#0284c7] font-normal">Dr. Cristóbal Mendoza</span>
              </h2>
              <p className="text-gray-600 text-xl mt-2">Otorrinolaringólogo | 27 años restaurando tu bienestar</p>
              <div className="w-full h-[2px] bg-gradient-to-r from-[#0284c7] via-[#9ac9e8] to-transparent mt-4 rounded-full"></div>
            </div>

            {/* Formación y Cédulas - ACTUALIZADO al mismo estilo que certificaciones */}
            <div className="bg-[#0284c7]/5 p-5 rounded-xl border-l-4 border-[#0284c7]">
              <p className="text-[#0284c7] font-semibold mb-2">Cédulas profesionales:</p>
              <p className="text-gray-700 font-mono text-lg">1923423 / 0011422</p>
              <p className="text-gray-600 text-sm mt-2">
                Egresado de la Universidad Autónoma de Sinaloa como médico general y especializado en 
                Otorrinolaringología por la UNAM.
              </p>
            </div>

            {/* Descripción principal - experiencia */}
            <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
              <p>
                Con más de 27 años de experiencia, el Dr. Cristóbal Mendoza ha dedicado su carrera a la 
                actualización constante para ofrecer diagnósticos certeros y tratamientos de vanguardia 
                en el tratamiento de oídos, nariz y garganta, con enfoque en procedimientos mínimamente 
                invasivos, en un ambiente seguro y agradable, dando atención a pacientes de Colima, 
                Jalisco, Michoacán y otros estados.
              </p>
            </div>

            {/* Certificaciones */}
            <div className="bg-[#0284c7]/5 p-5 rounded-xl border-l-4 border-[#0284c7]">
              <p className="text-gray-700">
                El Dr. Cristóbal Mendoza se encuentra <span className="font-semibold text-[#0284c7]">certificado por el Consejo Mexicano de Otorrinolaringología y Cirugía de Cabeza y Cuello</span>, y es miembro activo de la Sociedad Mexicana de Rinología.
              </p>
            </div>

            {/* Áreas de Especialidad */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Valores que Guían su Práctica:</h3>
              
              <div>
                <p className="font-semibold text-[#0284c7] flex items-center gap-2">
                  <span className="text-2xl">·</span> Compromiso y Excelencia:
                </p>
                <p className="text-gray-600 pl-6">Un plan de tratamiento adaptado a tu contexto y necesidades reales.</p>
              </div>
              
              <div>
                <p className="font-semibold text-[#0284c7] flex items-center gap-2">
                  <span className="text-2xl">·</span> Empatía y Humildad:
                </p>
                <p className="text-gray-600 pl-6">
                  Un trato cercano donde tu voz es escuchada. El Dr. Mendoza cree en el trabajo en equipo 
                  entre médico y paciente para una recuperación exitosa.
                </p>
              </div>
              
              <div>
                <p className="font-semibold text-[#0284c7] flex items-center gap-2">
                  <span className="text-2xl">·</span> Honestidad:
                </p>
                <p className="text-gray-600 pl-6">Transparencia total en cada diagnóstico y alternativa médica.</p>
              </div>
              <p className="text-gray-600 italic mt-2">
                Su consulta es un espacio seguro, siempre con un enfoque preciso y ético.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Valores que Guían su Práctica:</h3>
              
              <div>
                <p className="font-semibold text-[#0284c7] flex items-center gap-2">
                  <span className="text-2xl">·</span> Compromiso y Excelencia:
                </p>
                <p className="text-gray-600 pl-6">Un plan de tratamiento adaptado a tu contexto y necesidades reales.</p>
              </div>
              
              <div>
                <p className="font-semibold text-[#0284c7] flex items-center gap-2">
                  <span className="text-2xl">·</span> Empatía y Humildad:
                </p>
                <p className="text-gray-600 pl-6">
                  Un trato cercano donde tu voz es escuchada. El Dr. Mendoza cree en el trabajo en equipo 
                  entre médico y paciente para una recuperación exitosa.
                </p>
              </div>
              
              <div>
                <p className="font-semibold text-[#0284c7] flex items-center gap-2">
                  <span className="text-2xl">·</span> Honestidad:
                </p>
                <p className="text-gray-600 pl-6">Transparencia total en cada diagnóstico y alternativa médica.</p>
              </div>
            </div>

            {/* Reputación */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed border-t border-gray-200 pt-4">
              Ha desarrollado la reputación de ofrecer una atención médica excepcional a cada uno de sus 
              pacientes, basando su práctica en la honestidad, integridad y dedicación a la excelencia en la 
              Otorrinolaringología.
            </p>

            <div className="pt-6">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0284c7] to-[#0a5d8c] text-white font-semibold px-8 py-4 rounded-lg hover:from-[#0a5d8c] hover:to-[#0284c7] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              >
                <FiUser className="w-6 h-6" />
                <span>Agenda tu consulta con el Dr. Cristóbal</span>
                <FiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="relative group lg:sticky lg:top-8">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
              <img
                src="/doctor.jpg"
                alt="Dr. Cristóbal Mendoza - Otorrinolaringólogo"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0284c7]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
              <p className="text-[#0284c7] font-bold text-sm">+27 AÑOS</p>
              <p className="text-gray-600 text-xs">de experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;