import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import AosProvider from "@/components/AosProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";
import Schema from "@/components/Schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://drafabianalustosa.com.br"),
  title:
    "Dra. Fabiana Lustosa | Endocrinologista em Fortaleza CE — Emagrecimento, Diabetes e Menopausa",
  description:
    "Endocrinologista em Fortaleza CE. Especialista em emagrecimento, diabetes, menopausa e reposição hormonal. Formada UFC · Residência USP · Mestrado UNIFESP · CRM-CE 6123. Agende sua consulta.",
  keywords: [
    "endocrinologista Fortaleza",
    "emagrecimento Fortaleza",
    "menopausa Fortaleza",
    "diabetes Fortaleza",
    "reposição hormonal",
    "semaglutida",
    "tirzepatida",
  ],
  authors: [{ name: "Dra. Fabiana Lustosa" }],
  openGraph: {
    title: "Dra. Fabiana Lustosa | Endocrinologista em Fortaleza",
    description:
      "Especialista em emagrecimento, diabetes, menopausa e reposição hormonal em Fortaleza.",
    type: "website",
    locale: "pt_BR",
    images: ["/images/portrait-serious.jpg"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18158283496"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18158283496');
          `}
        </Script>
      </head>
      <body>
        <Schema />
        <AosProvider />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
