import Image from "next/image";
import { clinic, whatsappLink } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Mobile: imagem como fundo com overlay cream */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/images/hero2.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-cream/88" />
      </div>

      <div className="relative flex h-full w-full">

        {/* ── Painel esquerdo · texto ── */}
        <div className="flex w-full flex-col justify-between bg-transparent px-6 py-24 sm:px-10 lg:w-1/2 lg:bg-cream lg:px-16 xl:px-20 2xl:px-28">

          {/* Conteúdo principal */}
          <div className="flex flex-col justify-center flex-1">
            <p
              className="eyebrow"
              data-aos="fade-up"
            >
              Endocrinologista em Fortaleza
            </p>

            <h1
              className="display mt-5 text-ink"
              data-aos="fade-up"
              data-aos-delay="80"
              style={{ fontSize: "clamp(2rem, 3.2vw, 4rem)" }}
            >
              Você não fracassou
              <br />
              na dieta.
              <span
                className="mt-1 block italic text-taupe"
                style={{ fontSize: "clamp(1.6rem, 3.2vw, 4rem)" }}
              >
                O seu metabolismo nunca foi investigado de verdade.
              </span>
            </h1>

            <p
              className="mt-5 max-w-md font-body leading-relaxed text-ink-soft"
              data-aos="fade-up"
              data-aos-delay="160"
              style={{ fontSize: "clamp(0.875rem, 1vw, 1.05rem)" }}
            >
              Especialista em emagrecimento, diabetes, menopausa e reposição
              hormonal. Formada UFC · Residência USP · Mestrado UNIFESP ·
              CRM-CE 6123.
            </p>

            <div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
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

          {/* Credenciais no rodapé do painel */}
          <div
            className="flex gap-8 font-body text-[11px] uppercase tracking-[0.16em] text-ink/35"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span>{clinic.crm}</span>
            <span>Fortaleza — CE</span>
          </div>
        </div>

        {/* ── Painel direito · foto (desktop) ── */}
        <div className="relative hidden h-full overflow-hidden lg:block lg:w-1/2">
          <Image
            src="/images/hero2.png"
            alt="Dra. Fabiana Lustosa, endocrinologista em Fortaleza"
            fill
            priority
            sizes="50vw"
            className="object-cover object-[center_15%]"
          />
          {/* Gradiente largo cream → transparente na borda esquerda */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[35%] bg-gradient-to-r from-cream to-transparent" />
        </div>

      </div>
    </section>
  );
}
