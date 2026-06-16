import Image from "next/image";
import { whatsappLink } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Dra. Fabiana Lustosa, endocrinologista, em seu consultório no Meireles, Fortaleza"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right-top"
      />

      <div className="absolute inset-0 z-10 flex items-end overflow-hidden">
        <div className="wrap pb-10 md:pb-16 2xl:pb-28">
          <div className="max-w-2xl">
            <p
              className="eyebrow !text-white"
              data-aos="fade-up"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.35)" }}
            >
              Endocrinologista em Fortaleza
            </p>

            <h1
              className="display mt-4 text-ink"
              data-aos="fade-up"
              data-aos-delay="80"
              style={{
                fontSize: "clamp(2rem, 4vw, 4.6rem)",
                textShadow: "0 2px 12px rgba(0,0,0,0.3)",
              }}
            >
              Você não fracassou
              <br />
              na dieta.
              <span
                className="mt-1 block italic text-white"
                style={{ fontSize: "clamp(1.5rem, 4vw, 4.6rem)" }}
              >
                O seu metabolismo nunca foi investigado de verdade.
              </span>
            </h1>

            <p
              className="mt-4 max-w-xl font-body leading-relaxed text-ink"
              data-aos="fade-up"
              data-aos-delay="160"
              style={{
                fontSize: "clamp(0.875rem, 1.1vw, 1.125rem)",
                textShadow: "0 1px 6px rgba(0,0,0,0.3)",
              }}
            >
              Especialista em emagrecimento, diabetes, menopausa e reposição
              hormonal. Formada UFC · Residência USP · Mestrado UNIFESP ·
              CRM-CE 6123.
            </p>

            <div
              className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center 2xl:mt-10"
              data-aos="fade-up"
              data-aos-delay="220"
            >
              <a
                href={whatsappLink(
                  "Olá, Dra. Fabiana. Gostaria de agendar uma consulta."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Agendar consulta
              </a>
              <a href="#tratamentos" className="btn-ghost">
                Ver tratamentos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
