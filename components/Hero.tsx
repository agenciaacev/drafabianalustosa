import Image from "next/image";
import { whatsappLink } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Background photo (landscape) */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Dra. Fabiana Lustosa, endocrinologista, em seu consultório no Meireles, Fortaleza"
          fill
          priority
          sizes="100vh"
          className="object-cover object-right animate-slow-zoom"
        />
        {/* Warm legibility gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-cream/10 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/70 via-transparent to-transparent" />
      </div>

      <div className="wrap relative z-10 pb-20 pt-36 md:pb-28">
        <div className="max-w-2xl">
          <p
            className="eyebrow"
            data-aos="fade-up"
          >
            Endocrinologista em Fortaleza
          </p>

          <h1
            className="display mt-7 text-[2.7rem] text-ink sm:text-6xl lg:text-[4.6rem]"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            Você não fracassou
            <br />
            na dieta.
            <span className="mt-2 block italic text-taupe">
              O seu metabolismo nunca foi investigado de verdade.
            </span>
          </h1>

          <p
            className="mt-8 max-w-xl font-body text-base leading-relaxed text-ink-soft md:text-lg"
            data-aos="fade-up"
            data-aos-delay="160"
          >
            Especialista em emagrecimento, diabetes, menopausa e reposição
            hormonal. Formada UFC · Residência USP · Mestrado UNIFESP ·
            CRM-CE 6123.
          </p>

          <div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
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
    </section>
  );
}
