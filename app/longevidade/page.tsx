import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title:
    "Longevidade saudável em Fortaleza | Dra. Fabiana Lustosa — Endocrinologista",
  description:
    "Medicina de longevidade em Fortaleza. Prevenção ativa de doenças metabólicas, cardiovasculares e hormonais. Envelheça com saúde real e energia. CRM-CE 6123.",
  alternates: { canonical: "/longevidade" },
};

const pilares = [
  {
    title: "Metabolismo e composição corporal",
    text: "Avaliamos resistência à insulina, metabolismo basal, percentual de gordura visceral e massa muscular com bioimpedância InBody. Desequilíbrios metabólicos aceleram o envelhecimento — e têm correção.",
  },
  {
    title: "Equilíbrio hormonal",
    text: "Testosterona, estrogênio, progesterona, GH e tireoide influenciam diretamente energia, composição corporal, cognição e longevidade. Investigamos e corrigimos deficiências com base em exames.",
  },
  {
    title: "Saúde cardiovascular e metabólica",
    text: "Perfil lipídico avançado, risco cardiovascular global, marcadores inflamatórios e função renal. Identificamos e corrigimos riscos antes que virem eventos — infarto, AVC, diabetes.",
  },
  {
    title: "Nutrição e suplementação inteligente",
    text: "Vitamina D, ômega-3, magnésio, zinco e outros micronutrientes têm impacto comprovado na longevidade. Prescrevemos com base em exames — não em modismos.",
  },
];

const marcadores = [
  "Glicemia de jejum e HbA1c",
  "Insulina de jejum e HOMA-IR",
  "Perfil lipídico avançado (LDL, HDL, triglicerídeos, VLDL)",
  "Proteína C-reativa ultrassensível",
  "Vitamina D, B12 e zinco",
  "Testosterona total e livre",
  "Hormônios da tireoide (TSH, T3, T4)",
  "IGF-1 (marcador de GH)",
  "Cortisol sérico",
  "Bioimpedância InBody",
];

const faqLocal = [
  {
    q: "Medicina de longevidade é a mesma coisa que medicina anti-aging?",
    a: "A medicina de longevidade é baseada em evidências científicas e foca em prevenção ativa de doenças metabólicas, cardiovasculares e hormonais. Não se trata de promessas de rejuvenescimento, mas de identificar e corrigir desequilíbrios antes que virem doenças.",
  },
  {
    q: "A partir de que idade devo buscar acompanhamento de longevidade?",
    a: "Quanto antes melhor. Os desequilíbrios metabólicos e hormonais se instalam gradualmente. Idealmente, o acompanhamento preventivo começa a partir dos 35-40 anos, mas pode ser iniciado em qualquer fase.",
  },
  {
    q: "O acompanhamento de longevidade é diferente do check-up convencional?",
    a: "Sim. O check-up convencional detecta doenças instaladas. O acompanhamento de longevidade busca marcadores subclínicos — resistência à insulina, inflamação crônica, deficiências hormonais — muito antes do diagnóstico formal.",
  },
];

export default function LongevidadePage() {
  return (
    <>
      <PageHero
        eyebrow="Longevidade saudável em Fortaleza"
        title={
          <>
            Envelhecer bem não é sorte.{" "}
            <span className="italic text-gold">É prevenção ativa.</span>
          </>
        }
        subtitle="A medicina de longevidade identifica e corrige desequilíbrios metabólicos, hormonais e nutricionais antes que se tornem doenças. O objetivo é que você chegue aos 70, 80 anos com energia e saúde real."
        image="/images/standing.jpg"
        imagePosition="object-[30%_center]"
        cta="Olá, Dra. Fabiana. Gostaria de agendar uma consulta sobre longevidade."
      />

      {/* Intro + photo */}
      <section className="bg-cream py-24 md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div
            className="relative aspect-[3/4] overflow-hidden rounded-2xl"
            data-aos="fade-up"
          >
            <Image
              src="/images/portrait-couch.jpg"
              alt="Dra. Fabiana Lustosa, medicina de longevidade em Fortaleza"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="80">
            <h2 className="display text-3xl text-ink md:text-4xl">
              O que é a medicina de longevidade
            </h2>
            <div className="mt-7 space-y-5 font-body text-base leading-relaxed text-ink-soft md:text-lg">
              <p>
                Envelhecemos bem quando nosso metabolismo, hormônios e sistema
                imune funcionam de forma equilibrada. Quando esses sistemas
                entram em desequilíbrio — e isso começa décadas antes dos
                sintomas — o envelhecimento acelera e as doenças aparecem.
              </p>
              <p>
                A medicina de longevidade não espera o diagnóstico. Ela busca e
                corrige desequilíbrios subclínicos: resistência à insulina antes
                do diabetes, inflamação crônica antes do evento cardiovascular,
                deficiência hormonal antes da perda de qualidade de vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="bg-[#f7e7d6] py-24 md:py-32">
        <div className="wrap">
          <h2
            className="display max-w-2xl text-3xl text-ink md:text-4xl"
            data-aos="fade-up"
          >
            Os pilares do acompanhamento de longevidade
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-gold/40 bg-gold/40 sm:grid-cols-2">
            {pilares.map((p, i) => (
              <div
                key={p.title}
                className="bg-cream p-9 md:p-10"
                data-aos="fade-up"
                data-aos-delay={(i % 2) * 80}
              >
                <span className="font-display text-3xl italic text-gold">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl text-ink">
                  {p.title}
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-ink-soft">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Painel de marcadores */}
      <section className="bg-cream py-24 md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div data-aos="fade-up">
            <p className="eyebrow">Painel de longevidade</p>
            <h2 className="display mt-6 text-3xl text-ink md:text-4xl">
              O que investigamos além do check-up convencional
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-ink-soft md:text-lg">
              Marcadores subclínicos que mostram o que está vindo — muito antes
              de se tornarem um diagnóstico formal.
            </p>
          </div>
          <ul
            className="space-y-3"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            {marcadores.map((m) => (
              <li key={m} className="flex items-start gap-4">
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-gold text-gold text-[10px]">
                  ✓
                </span>
                <span className="font-body text-[15px] leading-relaxed text-ink-soft">
                  {m}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7e7d6] py-24 md:py-32">
        <div className="wrap">
          <h2
            className="display text-3xl text-ink md:text-4xl"
            data-aos="fade-up"
          >
            Dúvidas sobre longevidade
          </h2>
          <dl className="mt-12 max-w-3xl border-t border-gold/50">
            {faqLocal.map((f) => (
              <div
                key={f.q}
                className="border-b border-gold/50 py-7"
                data-aos="fade-up"
              >
                <dt className="font-display text-xl text-ink md:text-2xl">
                  {f.q}
                </dt>
                <dd className="mt-3 font-body text-base leading-relaxed text-ink-soft">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBanner
        title="Quer envelhecer com saúde e prevenir doenças antes que apareçam?"
        message="Olá, Dra. Fabiana. Gostaria de agendar uma consulta sobre longevidade."
      />
    </>
  );
}
