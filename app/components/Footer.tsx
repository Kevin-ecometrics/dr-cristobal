'use client';

import React, { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi';
import Modal from './Modal';

const Footer: React.FC = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const openModalHandler = (modalId: string) => setOpenModal(modalId);
  const closeModalHandler = () => setOpenModal(null);

  const privacyContent = (
    <div className="space-y-4">
      <p>
        En drcristobal.com accesible desde https://drcristobal.com/, tu privacidad es una prioridad.
        Esta Política de Privacidad explica qué información recopilamos, cómo la usamos y tus
        derechos sobre tus datos.
      </p>
      <h3 className="text-xl font-bold text-gray-800 mt-6">Información que Recopilamos:</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Información personal que proporcionas directamente, como nombre, correo electrónico y
          teléfono al contactarnos o agendar una cita.
        </li>
        <li>
          Datos técnicos recopilados automáticamente, como dirección IP, tipo de navegador,
          información del dispositivo y páginas visitadas.
        </li>
      </ul>
    </div>
  );

  const termsContent = (
    <div className="space-y-6">
      <div className="bg-[#e4f4fd] p-4 rounded-lg border border-[#9ac9e8]">
        <p className="font-semibold text-[#0284c7]">
          La página de drcristobal.com contiene el contacto directo con nuestro personal de atención
          al cliente.
        </p>
      </div>
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-lg text-gray-800 mb-2">1. Reservaciones y Agendamiento</h4>
          <p>Toda reservación realizada en la página es directa a nuestra agenda en recepción.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg text-gray-800 mb-2">2. Confirmación de Citas</h4>
          <p>
            Las citas son confirmadas por teléfono y deberán ser atendidas por el cliente en el
            periodo de 48hrs a 24hrs antes de la cita.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <footer className="bg-gradient-to-b from-white to-[#e4f4fd] py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

            {/* Column 2: Colima Clinic */}
            <div>
              <h3 className="text-xl font-light text-[#0284c7] mb-4 uppercase tracking-wide">
                COLIMA
              </h3>
              <div className="space-y-3 text-gray-600">
                <p className="font-semibold text-gray-800">Clínica Córdoba</p>
                <a
                  href="https://maps.google.com/?q=Zaragoza+377,+Centro,+Tecomán,+Col."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-[#0284c7] transition-colors group"
                >
                  <FiMapPin className="w-5 h-5 text-[#0284c7] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <span>Zaragoza #377, Centro</span>
                </a>
                <div className="flex items-start gap-2">
                  <FiPhone className="w-5 h-5 text-[#0284c7] flex-shrink-0 mt-1" />
                  <div>
                    <a href="tel:3123122121" className="hover:text-[#0284c7] transition-colors block">
                      Tels. 312 312 2121
                    </a>
                    <a href="tel:3121320435" className="text-sm text-[#0284c7] hover:text-[#0a5d8c] transition-colors block">
                      Urgencias 312 132 0435
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Tecomán Clinic */}
            <div>
              <h3 className="text-xl font-light text-[#0284c7] mb-4 uppercase tracking-wide">
                TECOMÁN
              </h3>
              <div className="space-y-3 text-gray-600">
                <p className="font-semibold text-gray-800">Unidad de Especialidades Médicas</p>
                <a
                  href="https://maps.google.com/?q=18+de+Marzo+113,+Centro,+Tecomán,+Col."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-[#0284c7] transition-colors group"
                >
                  <FiMapPin className="w-5 h-5 text-[#0284c7] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <span>18 de Marzo #113, Centro, Tecomán, Col.</span>
                </a>
                <div className="flex items-start gap-2">
                  <FiPhone className="w-5 h-5 text-[#0284c7] flex-shrink-0 mt-1" />
                  <a href="tel:3133242688" className="hover:text-[#0284c7] transition-colors">
                    Tel. 313 324 2688
                  </a>
                </div>
              </div>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="text-xl font-light text-[#0284c7] mb-6 uppercase tracking-wide">
                Contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FiMail className="w-5 h-5 text-[#0284c7] flex-shrink-0 mt-1" />
                  <a
                    href="mailto:contacto@drcristobal.com"
                    className="text-gray-600 hover:text-[#0284c7] transition-colors duration-300 break-all"
                  >
                    contacto@drcristobal.com
                  </a>
                </div>

                <div className="pt-4">
                  <a
                    href="/contacto/"
                    className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0284c7] to-[#0a5d8c] text-white font-semibold px-6 py-3 rounded-lg hover:from-[#0a5d8c] hover:to-[#0284c7] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 w-full md:w-auto"
                  >
                    <span>SOLICITA TU CONSULTA</span>
                    <FiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#9ac9e8] to-transparent my-8"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              <button
                onClick={() => openModalHandler('privacy')}
                className="text-sm text-gray-600 hover:text-[#0284c7] transition-colors duration-300"
              >
                Política de Privacidad
              </button>
              <button
                onClick={() => openModalHandler('terms')}
                className="text-sm text-gray-600 hover:text-[#0284c7] transition-colors duration-300"
              >
                Términos y Condiciones
              </button>
            </div>
            <div className="text-center text-gray-600 text-sm">
              <p>
                Copyright 2026, Dr. Cristóbal Mendoza. Todos los Derechos Reservados. Sitio por{' '}
                <a
                  href="https://ecommetrica.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0284c7] hover:text-[#0a5d8c] font-semibold transition-colors duration-300"
                >
                  Ecommetrica
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <Modal
        id="privacy"
        title="Política de Privacidad"
        isOpen={openModal === 'privacy'}
        onClose={closeModalHandler}
      >
        {privacyContent}
      </Modal>

      <Modal
        id="terms"
        title="Términos y Condiciones"
        isOpen={openModal === 'terms'}
        onClose={closeModalHandler}
      >
        {termsContent}
      </Modal>
    </>
  );
};

export default Footer;