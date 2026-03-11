"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "motion/react";

interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "servicios", label: "Servicios" },
    { id: "ubicaciones", label: "Ubicaciones" },
  ];

  /* Bloquear scroll cuando el menú está abierto */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* LOGO */}
        <figure className="">
          <img
            src="/logo.png"
            alt="Dr. Cristóbal Mendoza"
            className="w-full h-24 object-contain"
          />
        </figure>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative text-gray-700 hover:text-main font-medium transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-main after:transition-all after:duration-300 hover:after:w-full ${
                activeSection === item.id ? "text-main after:w-full" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="flex items-center mb-4">
            <div className="pt-6">
              <a
                href="tel:3133242688"
                className="group inline-flex items-center bg-main text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              >
                <span>Contacto</span>
              </a>
            </div>
          </div>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/40 z-[998]"
              onClick={() => setIsOpen(false)}
            />

            {/* PANEL */}
            <motion.div
              key="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-white z-[999] shadow-xl flex flex-col"
            >
              {/* HEADER */}
              <div className="flex items-center justify-end px-6 py-4 border-b">
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Cerrar menú"
                >
                  <FiX size={26} />
                </button>
              </div>

              {/* LINKS */}
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08 },
                  },
                }}
                className="flex flex-col gap-4 p-6"
              >
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsOpen(false);
                    }}
                    className={`text-left px-4 py-3 rounded-lg text-lg font-semibold transition ${
                      activeSection === item.id
                        ? "bg-main text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="mt-2"
                >
                  <a
                    href="tel:3133242688"
                    className="group flex items-center justify-center bg-main text-white font-semibold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 w-full"
                  >
                    <span>Contacto</span>
                  </a>
                </motion.div>
                <footer className="text-center text-gray-600 text-sm mt-4 absolute bottom-10 left-0 right-0">
                  <p>
                    &copy; {new Date().getFullYear()}, Dr. Cristóbal Mendoza.
                    Todos los Derechos Reservados. Sitio por{" "}
                    <a
                      href="https://ecommetrica.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-main hover:text-secondary font-semibold transition-colors duration-300"
                    >
                      Ecommetrica
                    </a>
                  </p>
                </footer>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
