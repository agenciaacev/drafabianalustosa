import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title:
    "Reposição hormonal em Fortaleza | Dra. Fabiana Lustosa — Endocrinologista",
  description:
    "Especialista em reposição hormonal em Fortaleza. Investigação de testosterona, estrogênio, progesterona, tireoide e vitamina D. Tratamento baseado em exames, não em achismo. CRM-CE 6123.",
  alternates: { canonical: "/reposicao-hormonal" },
};

const sintomas = [
  "Cansaço persistente sem causa aparente",
  "Queda de cabelo e unhas frágeis",
  "Baixa libido e disfunção sexual",
  "Mau humor, irritabilidade e ansiedade",
  "Dificuldade de concentração e memória",
  "Ganho de gordura mesmo com dieta",
  "Perda de massa muscular",
  "Pele seca e envelhecimento precoce",
  "Insônia e sono não reparador",
];

const hormônios = [
  {
    title: "Testosterona",
    text: "Essencial para libido, energia, massa muscular e bem-estar em homens e mulheres. Deficiência causa fadiga, perda de músculo e queda de desempenho físico e cognitivo.",
  },
  {
    title: "Estrogênio e progesterona",
    text: "Regulam o ciclo, o humor, a qualidade do sono, a composição corporal e a saúde óssea. Desequilíbrios afetam mulheres em qualquer fase da vida, não só na menopausa.",
  },
  {
    title: "Hormônios da tireoide",
    text: "Hipotireoidismo subclínico é frequentemente subdiagnosticado. Causa cansaço, ganho de peso, queda de cabelo e lentidão metabólica mesmo com exames 'dentro do normal'.",
  },
  {
    title: "Vitamina D e outros",
    text: "Vitamina D, DHEA, cortisol e hormônio do crescimento também integram o painel. Investigamos o quadro completo — não apenas o que aparece nos exames convencionais.",
  },
];

const faqLocal = [
  {
    q: "Reposição hormonal é só para mulheres na menopausa?",
    a: "Não. Homens com deficiência de testosterona, mulheres jovens com desequilíbrios hormonais, adultos com hipotireoidismo subclínico ou deficiência de vitamina D — todos podem se beneficiar de avaliação hormonal especializada.",
  },
  {
    q: "Como saber se tenho desequilíbrio hormonal?",
    a: "Cansaço persistente, queda de cabelo, ganho de peso sem mudança de hábito, baixa libido e dificuldade de concentração são sinais de alerta. A investigação é feita com exames laboratoriais específicos e avaliação clínica detalhada.",
  },
  {
    q: "A reposição hormonal tem riscos?",
    a: "Todo tratamento tem riscos e benefícios que precisam ser avaliados individualmente. A reposição hormonal bem indicada, com exames atualizados e acompanhamento regular, é segura para a grande maioria dos pacientes.",
  },
];

export default function ReposicaoHormonalPage() {
  return (
    <>
      <PageHero
        eyebrow="Reposição hormonal em Fortaleza"
        title={
          <>
            Seus sintomas têm causa.{" "}
            <span className="italic text-gold">E a causa costuma ser hormonal.</span>
          </>
        }
        subtitle="Cansaço, queda de cabelo, ganho de peso, baixa libido e mau humor não são só 'coisa da idade'. São sinais de que algo hormonal merece investigação."
        image="/images/hero.jpg"
        imagePosition="object-right-top"
        cta="Olá, Dra. Fabiana. Gostaria de agendar uma consulta sobre reposição hormonal."
      />

      {/* Intro + photo */}
      <section className="bg-cream py-24 md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div
            className="relative aspect-[3/4] overflow-hidden rounded-2xl"
            data-aos="fade-up"
          >
            <Image
              src="/images/standing.jpg"
              alt="Dra. Fabiana Lustosa, especialista em reposição hormonal em Fortaleza"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-[30%_center]"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="80">
            <h2 className="display text-3xl text-ink md:text-4xl">
              Por que investigar hormônios de forma completa
            </h2>
            <div className="mt-7 space-y-5 font-body text-base leading-relaxed text-ink-soft md:text-lg">
              <p>
                Muitos pacientes chegam com queixas vagas que foram descartadas
                por exames "normais". O problema está no que foi pedido — ou no
                que não foi. Valores dentro da faixa de referência não significam
                níveis adequados para o seu organismo.
              </p>
              <p>
                Investigamos testosterona, estrogênio, progesterona, hormônios
                da tireoide, cortisol, DHEA, vitamina D e outros marcadores
                relevantes. Tratamos com base em exames, não em achismo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sintomas */}
      <section className="bg-[#f7e7d6] py-24 md:py-32">
        <div className="wrap">
          <p className="eyebrow" data-aos="fade-up">
            Sinais de alerta
          </p>
          <h2
            className="display mt-6 max-w-2xl text-3xl text-ink md:text-4xl"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            Sintomas que indicam avaliação hormonal
          </h2>

          <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-gold/40 bg-gold/40 sm:grid-cols-2 lg:grid-cols-3">
            {sintomas.map((s, i) => (
              <li
                key={s}
                className="flex items-center gap-4 bg-cream p-7"
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 70}
              >
                <span className="text-gold" aria-hidden="true">
                  ✦
                </span>
                <span className="font-body text-[15px] text-ink-soft">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hormônios que investigamos */}
      <section className="bg-cream py-24 md:py-32">
        <div className="wrap">
          <h2
            className="display max-w-2xl text-3xl text-ink md:text-4xl"
            data-aos="fade-up"
          >
            O que investigamos no painel hormonal completo
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-gold/40 bg-gold/40 sm:grid-cols-2">
            {hormônios.map((h, i) => (
              <div
                key={h.title}
                className="bg-cream p-9 md:p-10"
                data-aos="fade-up"
                data-aos-delay={(i % 2) * 80}
              >
                <h3 className="font-display text-2xl text-ink">{h.title}</h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-ink-soft">
                  {h.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7e7d6] py-24 md:py-32">
        <div className="wrap">
          <h2
            className="display text-3xl text-ink md:text-4xl"
            data-aos="fade-up"
          >
            Dúvidas sobre reposição hormonal
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
        title="Quer entender o que está por trás dos seus sintomas?"
        message="Olá, Dra. Fabiana. Gostaria de agendar uma consulta sobre reposição hormonal."
      />
    </>
  );
}
