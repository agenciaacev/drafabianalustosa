import Image from "next/image";
import Link from "next/link";

const creds = [
  "Graduação em Medicina — UFC",
  "Residência em Endocrinologia — USP",
  "Mestrado em Endocrinologia e Metabolismo — UNIFESP",
  "CRM-CE 6123 · RQE 6609 · Membro da SBEM",
];

export default function AboutPreview() {
  return (
    <section className="bg-[#f7e7d6] py-24 md:py-36">
      <div className="wrap">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Portrait */}
          <div className="relative" data-aos="fade-up">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="/images/portrait-couch.jpg"
                alt="Dra. Fabiana Lustosa, endocrinologista em Fortaleza"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden rounded-xl bg-cream px-7 py-5 shadow-lg sm:block md:-right-6">
              <p className="font-display text-3xl text-ink">5.0★</p>
              <p className="mt-1 font-body text-xs uppercase tracking-[0.15em] text-taupe">
                Avaliações verificadas
              </p>
            </div>
          </div>

          {/* Text */}
          <div data-aos="fade-up" data-aos-delay="80">
            <p className="eyebrow">Sobre a Dra. Fabiana</p>
            <h2 className="display mt-6 text-4xl text-ink md:text-5xl">
              A endocrinologia me escolheu porque busca a{" "}
              <span className="italic text-taupe">causa</span>.
            </h2>
            <p className="mt-7 font-body text-base leading-relaxed text-ink-soft md:text-lg">
              Cresci em Fortaleza e aprendi desde criança o valor de ouvir com
              atenção. Esse é o fundamento do meu trabalho: entender sua
              história antes de qualquer prescrição.
            </p>
            <p className="mt-5 font-body text-base leading-relaxed text-ink-soft md:text-lg">
              Cada paciente que chega com anos de tentativas frustradas, cansaço
              sem explicação ou peso que não sai, tem uma investigação séria
              esperando por ele aqui.
            </p>

            <ul className="mt-9 space-y-3">
              {creds.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 font-body text-sm text-ink-soft"
                >
                  <span className="mt-2 h-px w-4 flex-none bg-gold" />
                  {c}
                </li>
              ))}
            </ul>

            <Link href="/sobre" className="btn-ghost mt-10">
              Conhecer a trajetória
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
