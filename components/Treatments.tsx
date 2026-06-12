import Link from "next/link";
import { treatments } from "@/lib/content";

const pageFor: Record<string, string> = {
  emagrecimento: "/emagrecimento",
  menopausa: "/menopausa",
};

export default function Treatments() {
  return (
    <section id="tratamentos" className="scroll-mt-20 bg-[#f7e7d6] py-24 md:py-36">
      <div className="wrap">
        <div className="max-w-2xl" data-aos="fade-up">
          <p className="eyebrow">Tratamentos em Fortaleza</p>
          <h2 className="display mt-6 text-4xl text-ink md:text-5xl">
            Cada tratamento começa com uma avaliação completa
          </h2>
          <p className="mt-5 font-body text-base text-ink-soft md:text-lg">
            Não com uma prescrição pronta. Não existe protocolo igual para dois
            pacientes — existe uma investigação séria feita para você.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-gold/40 bg-gold/40 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t, i) => {
            const href = pageFor[t.slug];
            const Inner = (
              <div className="flex h-full flex-col bg-cream p-8 transition-colors duration-300 group-hover:bg-[#fdf4ea] md:p-10">
                <span className="font-body text-xs tracking-[0.2em] text-gold">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-display text-2xl text-ink md:text-[1.7rem]">
                  {t.title}
                </h3>
                <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-ink-soft">
                  {t.short}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.18em] text-taupe">
                  {href ? "Saber mais" : "Na consulta"}
                  {href && (
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  )}
                </span>
              </div>
            );

            return (
              <div
                key={t.slug}
                className="group"
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 80}
              >
                {href ? (
                  <Link href={href} className="block h-full">
                    {Inner}
                  </Link>
                ) : (
                  Inner
                )}
              </div>
            );
          })}
        </div>

        {/* InBody highlight */}
        <div
          className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-ink px-8 py-10 text-cream md:flex-row md:items-center md:px-12"
          data-aos="fade-up"
        >
          <div>
            <p className="font-body text-xs uppercase tracking-eyebrow text-gold">
              Bioimpedância InBody
            </p>
            <p className="mt-3 font-display text-2xl md:text-3xl">
              Em todas as consultas. Você vê a mudança em números, não só no
              espelho.
            </p>
          </div>
          <p className="max-w-xs font-body text-sm leading-relaxed text-cream/70">
            Gordura visceral, massa muscular segmentada, taxa metabólica basal e
            hidratação — medidos em minutos. O que não é medido não é
            acompanhado.
          </p>
        </div>
      </div>
    </section>
  );
}
