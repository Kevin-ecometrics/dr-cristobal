'use client';

import React from 'react';
import { FiPhone, FiMapPin } from 'react-icons/fi';

const UbicacionesSection: React.FC = () => {
  return (
    <section id="ubicaciones" className="py-20 px-6 bg-gradient-to-b from-white to-[#e4f4fd]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 mb-4">
            Nuestras <span className="text-[#0284c7] font-semibold">Ubicaciones</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#0284c7] via-[#9ac9e8] to-[#0284c7] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Consulta en dos ubicaciones para tu mayor comodidad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Colima */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
            <div className="bg-gradient-to-r from-[#0284c7] to-[#0a5d8c] px-6 py-4">
              <h3 className="text-2xl font-bold text-white">COLIMA</h3>
              <p className="text-white/90">Clínica Córdoba</p>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg border-4 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.5001621364154!2d-103.87361862523959!3d18.90924298226131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x843ab657065685c5%3A0xceb1698d675f4b7d!2sZaragoza%20377%2C%20Centro%2C%2028140%20Tecom%C3%A1n%2C%20Col.!5e0!3m2!1ses-419!2smx!4v1772047324066!5m2!1ses-419!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '250px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
              
              <div className="space-y-4 bg-[#e4f4fd] p-5 rounded-xl">
                <a
                  href="https://maps.google.com/?q=Zaragoza+377,+Centro,+Tecomán,+Col."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-700 hover:text-[#0284c7] transition-colors group"
                >
                  <FiMapPin className="w-5 h-5 text-[#0284c7] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Zaragoza #377, Centro, Tecomán, Col.</span>
                </a>
                
                <div className="flex items-start gap-3">
                  <FiPhone className="w-5 h-5 text-[#0284c7] flex-shrink-0 mt-1" />
                  <div>
                    <a
                      href="tel:3123122121"
                      className="block text-gray-700 hover:text-[#0284c7] transition-colors font-medium"
                    >
                      Tels. 312 312 2121
                    </a>
                    <a
                      href="tel:3121320435"
                      className="block text-sm text-[#0284c7] hover:text-[#0a5d8c] transition-colors mt-1 font-semibold"
                    >
                      Urgencias 312 132 0435
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tecomán */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
            <div className="bg-gradient-to-r from-[#0284c7] to-[#0a5d8c] px-6 py-4">
              <h3 className="text-2xl font-bold text-white">TECOMÁN</h3>
              <p className="text-white/90">Unidad de Especialidades Médicas</p>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg border-4 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.4433940504955!2d-103.87838642523955!3d18.911758382259304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x843ab65a7729626f%3A0x7cd05f7476938559!2s18%20de%20Marzo%20113%2C%20Centro%2C%2028100%20Tecom%C3%A1n%2C%20Col.!5e0!3m2!1ses-419!2smx!4v1772047239265!5m2!1ses-419!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '250px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
              
              <div className="space-y-4 bg-[#e4f4fd] p-5 rounded-xl">
                <a
                  href="https://maps.google.com/?q=18+de+Marzo+113,+Centro,+Tecomán,+Col."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-700 hover:text-[#0284c7] transition-colors group"
                >
                  <FiMapPin className="w-5 h-5 text-[#0284c7] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">18 de Marzo #113, Centro, Tecomán, Col.</span>
                </a>
                
                <div className="flex items-start gap-3">
                  <FiPhone className="w-5 h-5 text-[#0284c7] flex-shrink-0 mt-1" />
                  <a
                    href="tel:3133242688"
                    className="text-gray-700 hover:text-[#0284c7] transition-colors font-medium"
                  >
                    Tel. 313 324 2688
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UbicacionesSection;
