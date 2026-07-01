import { clinic, whatsappLink } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 items-stretch min-h-screen">

        {/* RIGHT — foto (order-first no mobile) */}
        <div className="relative order-first lg:order-last overflow-hidden">
          {/* Mobile */}
          <img
            src="/images/heromain.webp"
            alt=""
            className="lg:hidden block w-full h-auto"
            style={{ objectPosition: "50% 15%" }}
          />
          {/* Desktop */}
          <img
            src="/images/heromain.webp"
            alt="Dra. Fabiana Lustosa, endocrinologista em Fortaleza"
            className="hidden lg:block w-full h-auto lg:absolute lg:inset-0 lg:h-full lg:object-cover"
            style={{ objectPosition: "50% 15%" }}
          />
          {/* Gradiente top desktop — cobre a navbar */}
          <div
            className="hidden lg:block absolute top-0 inset-x-0 h-24 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, #fcefe1, transparent)" }}
          />
          {/* Gradiente lateral esquerda (desktop) */}
          <div
            className="hidden lg:block absolute inset-y-0 left-0 w-2/5 pointer-events-none"
            style={{ background: "linear-gradient(to right, #fcefe1, transparent)" }}
          />
          {/* Gradiente bottom */}
          <div
            className="absolute bottom-0 inset-x-0 h-40 lg:h-1/3 pointer-events-none"
            style={{ background: "linear-gradient(to top, #fcefe1, transparent)" }}
          />
          {/* Gradiente top mobile */}
          <div
            className="absolute top-0 inset-x-0 h-16 lg:hidden pointer-events-none"
            style={{ background: "linear-gradient(to bottom, rgba(252,239,225,0.6), transparent)" }}
          />
        </div>

        {/* LEFT — conteúdo */}
        <div className="relative z-10 flex items-center lg:bg-cream px-6 md:px-12 lg:px-16 xl:px-20 py-16 lg:py-24 -mt-72 lg:mt-0">
          {/* Gradiente mobile: faz a transição da foto para o conteúdo */}
          <div
            className="absolute inset-0 lg:hidden pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent 0%, #fcefe1 7rem)" }}
          />

          <div className="relative max-w-xl">
            <div className="flex justify-center mb-10" data-aos="fade-up">
              <p className="eyebrow whitespace-nowrap">Endocrinologista em Fortaleza</p>
            </div>

            <h1
              className="font-display text-ink leading-[1.06] tracking-tight"
              style={{ fontSize: "clamp(2rem, 3.2vw, 4rem)" }}
              data-aos="fade-up"
              data-aos-delay="80"
            >
              Você não fracassou
              <br />
              na dieta.{" "}
              <em
                className="italic text-taupe font-normal block mt-1"
                style={{ fontSize: "clamp(1.6rem, 3.2vw, 4rem)" }}
              >
                O seu metabolismo nunca foi investigado de verdade.
              </em>
            </h1>

            <p
              className="mt-7 font-body text-ink-soft text-base md:text-[17px] leading-relaxed max-w-md"
              data-aos="fade-up"
              data-aos-delay="160"
            >
              Especialista em emagrecimento, diabetes, menopausa e reposição
              hormonal. Formada UFC · Residência USP · Mestrado UNIFESP ·
              CRM-CE 6123.
            </p>

            <div
              className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center"
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

            <div
              className="mt-12 flex gap-8 font-body text-[11px] uppercase tracking-[0.16em] text-ink/35"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span>{clinic.crm}</span>
              <span>Fortaleza, CE</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
