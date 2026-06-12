import { clinic, faqs } from "@/lib/content";

const physician = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dra. Fabiana Lustosa",
  alternateName: "Fabiana Lustosa",
  description:
    "Endocrinologista em Fortaleza CE. Especialista em emagrecimento, diabetes, menopausa e reposição hormonal. Formada UFC, Residência USP, Mestrado UNIFESP.",
  medicalSpecialty: ["Endocrinology", "ObesityMedicine"],
  url: "https://drafabianalustosa.com.br",
  telephone: "+5585988896437",
  email: clinic.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Dom Luís, 1233, Sala 2007",
    addressLocality: "Fortaleza",
    addressRegion: "CE",
    postalCode: "60160-230",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -3.7354624,
    longitude: -38.4897771,
  },
  openingHours: "Mo-Fr 08:00-18:00",
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Universidade Federal do Ceará (UFC)" },
    { "@type": "EducationalOrganization", name: "Universidade de São Paulo (USP)" },
    { "@type": "EducationalOrganization", name: "UNIFESP — Escola Paulista de Medicina" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "CRM-CE 6123 | RQE 6609",
  },
  sameAs: [
    clinic.instagramUrl,
    "https://www.doctoralia.com.br/fabiana-lustosa/endocrinologista/fortaleza",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "12",
    bestRating: "5",
  },
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Schema() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physician) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
