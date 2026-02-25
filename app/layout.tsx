import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dr. Cristóbal Mendoza - Otorrinolaringólogo',
  description: 'Especialista en oídos, nariz y garganta en Colima y Tecomán',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}