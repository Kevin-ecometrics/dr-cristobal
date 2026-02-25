'use client';

import React, { useEffect } from 'react';
import { FiX } from 'react-icons/fi';

interface ModalProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ id, title, children, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative max-h-[80vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-white p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
          aria-label="Cerrar modal"
        >
          <FiX className="h-5 w-5" />
        </button>

        <div className="mb-6 border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        </div>

        <div className="prose prose-lg max-w-none">{children}</div>

        <div className="mt-8 flex justify-end border-t border-gray-200 pt-6">
          <button
            onClick={onClose}
            className="rounded-lg bg-gradient-to-r from-[#0284c7] to-[#0a5d8c] px-6 py-3 font-semibold text-white transition-colors hover:from-[#0a5d8c] hover:to-[#0284c7]"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;