"use client";

import React, { useEffect, useState } from "react";

const AboutSection: React.FC = () => {
  const [yearsExperience, setYearsExperience] = useState(0);

  const countYearsExperience = () => {
    const currentYear = new Date().getFullYear();
    return currentYear - 1999;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setYearsExperience(countYearsExperience());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[var(--color-background)] to-white animate-fade-in-up">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light ">
                Conoce al{" "}
                <span className=" font-normal">Dr. Cristóbal Mendoza</span>
              </h2>
              <p className="text-main font-semibold text-xl mt-2">
                Otorrinolaringólogo | {yearsExperience} años restaurando tu
                bienestar
              </p>
              <div className="w-full h-[2px] bg-linear-to-r from-[var(--color-main)] via-[var(--color-secondary)] to-transparent mt-4 rounded-full"></div>
            </div>

            {/* Formación y Cédulas */}
            <div className="bg-main p-5 rounded-xl border-l-4 text-white">
              <div className="flex gap-4 items-center justify-start">
                <p className=" font-semibold ">Cédulas profesionales:</p>
                <p className=" font-mono text-lg">1923423 / 0011422</p>
              </div>

              <p className="text-sm mt-2">
                Egresado de la Universidad Autónoma de Sinaloa como médico
                general y especializado en Otorrinolaringología por la UNAM, el
                Dr. Mendoza ha dedicado su carrera a la actualización constante
                para ofrecer diagnósticos certeros y tratamientos de vanguardia.
              </p>
            </div>

            {/* Descripción principal - experiencia */}
            <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
              <p>
                <span className="font-bold text-main">
                  Áreas de Especialidad:
                </span>{" "}
                El Dr. Mendoza brinda atención integral en padecimientos de
                oído, nariz y garganta, destacando en:
              </p>

              <div className="pl-4 space-y-2">
                <p>
                  <span className="font-bold text-main">Salud Nasal: </span>
                  Sinusitis (aguda y crónica), rinitis alérgica y pólipos
                  nasales.
                </p>
                <p>
                  <span className="font-bold text-main">
                    Audición y Equilibrio:{" "}
                  </span>
                  Tratamiento de pérdida auditiva en adultos mayores, vértigo
                  postural, enfermedad de Ménière y acúfenos.
                </p>
                <p>
                  <span className="font-bold text-main">
                    Garganta y Sueño:{" "}
                  </span>
                  Apnea obstructiva del sueño, ronquido, faringitis y trastornos
                  de la voz.
                </p>
              </div>

              <p className="italic text-gray-600">
                Su consulta es un espacio seguro, siempre con un enfoque preciso
                y ético.
              </p>
            </div>

            {/* Valores que Guían su Práctica */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-main">
                Valores que Guían su Práctica:
              </h3>

              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-main">
                    Compromiso y Excelencia:
                  </p>
                  <p className="text-gray-600 pl-4">
                    Un plan de tratamiento adaptado a tu contexto y necesidades
                    reales.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-main">Empatía y Humildad:</p>
                  <p className="text-gray-600 pl-4">
                    Un trato cercano donde tu voz es escuchada. El Dr. Mendoza
                    cree en el trabajo en equipo entre médico y paciente para
                    una recuperación exitosa.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-main">Honestidad:</p>
                  <p className="text-gray-600 pl-4">
                    Transparencia total en cada diagnóstico y alternativa
                    médica.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="pt-6">
                <a
                  href="#contacto"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0284c7] to-[#0a5d8c] text-white font-semibold px-8 py-4 rounded-lg hover:from-[#0a5d8c] hover:to-[#0284c7] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                >
                  <FiUser className="w-6 h-6" />
                  <span>Agenda tu consulta con el Dr. Cristóbal</span>
                  <FiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>   */}
          </div>

          <div className="relative group lg:sticky lg:top-8 animate-fade-in-up">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
              <img
                src="/dr cristobal representante en colima.webp"
                alt="Dr. Cristóbal Mendoza - Otorrinolaringólogo"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color-mix(in srgb, var(--color-main) 25%, transparent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
              <p className=" font-bold text-sm">+ {yearsExperience} AÑOS</p>
              <p className="text-gray-600 text-xs">de experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
