import Link from "next/link";
import Image from "next/image";
import { treatments } from "@/lib/content";

const pageFor: Record<string, string> = {
  emagrecimento: "/emagrecimento",
  menopausa: "/menopausa",
  diabetes: "/diabetes",
  "reposicao-hormonal": "/reposicao-hormonal",
  longevidade: "/longevidade",
};

const imageMap: Record<string, string> = {
  emagrecimento: "/images/emagrecimento.png",
  menopausa: "/images/menopausa.png",
  diabetes: "/images/controle-do-diabetes.png",
  "reposicao-hormonal": "/images/reposicao-hormonal.png",
  longevidade: "/images/logenvidade.png",
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

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {treatments.map((t, i) => {
            const href = pageFor[t.slug];
            const img = imageMap[t.slug];

            const colClass = i === 3 ? "lg:col-start-2 lg:col-span-2" : "lg:col-span-2";

            const CardContent = (
              <div className="group relative overflow-hidden rounded-2xl aspect-square">
                {img && (
                  <Image
                    src={img}
                    alt={t.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <h3 className="font-display text-2xl text-white md:text-[1.6rem]">
                    {t.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-white/75">
                    {t.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.18em] text-white/60">
                    {href ? "Saber mais" : "Na consulta"}
                    {href && (
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    )}
                  </span>
                </div>
              </div>
            );

            return (
              <div
                key={t.slug}
                className={colClass}
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 80}
              >
                {href ? (
                  <Link href={href} className="block h-full">
                    {CardContent}
                  </Link>
                ) : (
                  CardContent
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
