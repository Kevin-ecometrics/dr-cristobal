import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Cristóbal Mendoza - Otorrinolaringólogo",
  description:
    "Especialista en oídos, nariz y garganta en Colima y Tecomán. Diagnóstico y tratamiento de problemas auditivos, nasales y de garganta.",
  keywords:
    "otorrinolaringólogo, otologo, rinologist, laringologist, especialista oídos, nariz y garganta, Colima, Tecomán, consulta médica",
  openGraph: {
    title: "Dr. Cristóbal Mendoza - Otorrinolaringólogo",
    description:
      "Especialista en oídos, nariz y garganta con amplia experiencia en Colima y Tecomán. Diagnóstico y tratamiento de problemas auditivos, nasales y de garganta.",
    url: "https://dr-cristobal.netlify.app/",
    type: "website",
  },
  robots: "index, follow",
  authors: [{ name: "Dr. Cristóbal Mendoza" }],
  publisher: "Dr. Cristóbal Mendoza - Otorrinolaringólogo",
  alternates: {
    canonical: "https://dr-cristobal.netlify.app/",
  },
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
