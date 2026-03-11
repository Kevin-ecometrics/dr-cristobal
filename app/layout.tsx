import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Cristóbal Mendoza - Otorrinolaringólogo",
  description: "Especialista en oídos, nariz y garganta en Colima y Tecomán",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <GoogleAnalytics gaId="G-M2NWCLZT" />
      <GoogleTagManager gtmId="GTM-KZ5Z6KZ" />
      <body>{children}</body>
    </html>
  );
}
