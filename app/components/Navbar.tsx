'use client';

import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'ubicaciones', label: 'Ubicaciones' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xl font-bold text-[#0284c7]">Dr. Cristóbal Mendoza</span>
          <span className="text-sm text-gray-600">Otorrinolaringólogo</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-gray-700 hover:text-[#0284c7] font-medium transition-colors ${
                activeSection === item.id ? 'text-[#0284c7] border-b-2 border-[#0284c7]' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <FiMenu size={22} />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsOpen(false);
              }}
              className={`block w-full text-left py-2 text-gray-700 hover:text-[#0284c7] font-medium ${
                activeSection === item.id ? 'text-[#0284c7]' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;