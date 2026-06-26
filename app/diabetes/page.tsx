import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title:
    "Controle do diabetes em Fortaleza | Dra. Fabiana Lustosa — Endocrinologista",
  description:
    "Endocrinologista especialista em diabetes em Fortaleza. Controle real da glicemia, hemoglobina glicada, pré-diabetes e risco cardiovascular. Atendimento personalizado. CRM-CE 6123.",
  alternates: { canonical: "/diabetes" },
};

const marcadores = [
  "Glicemia de jejum e pós-prandial",
  "Hemoglobina glicada (HbA1c)",
  "Insulina de jejum e HOMA-IR",
  "Peptídeo C e função pancreática",
  "Função renal (creatinina, TFG)",
  "Perfil lipídico completo",
  "Microalbuminúria",
  "Risco cardiovascular global",
];

const fases = [
  {
    title: "Avaliação completa",
    text: "Glicemia, HbA1c, insulina de jejum, função renal, perfil lipídico e risco cardiovascular. Identificamos o quadro real e as comorbidades associadas antes de qualquer conduta.",
  },
  {
    title: "Plano individualizado",
    text: "Medicação ajustada ao seu perfil metabólico, orientação alimentar em parceria com nutricionista e estratégias práticas para controle glicêmico no dia a dia.",
  },
  {
    title: "Acompanhamento contínuo",
    text: "Reavaliação periódica com novos exames, ajuste de doses e monitoramento de complicações. O objetivo é manter HbA1c em meta e reduzir risco cardiovascular de forma sustentada.",
  },
];

const faqLocal = [
  {
    q: "Qual médico tratar diabetes em Fortaleza?",
    a: "O endocrinologista é o especialista em diabetes e metabolismo. A Dra. Fabiana Lustosa atende em Fortaleza com avaliação completa de glicemia, HbA1c, função renal e risco cardiovascular.",
  },
  {
    q: "Pré-diabetes tem tratamento?",
    a: "Sim. O pré-diabetes é reversível com intervenção adequada: ajuste alimentar, atividade física e, em alguns casos, medicação. A detecção precoce é essencial para evitar a progressão para diabetes tipo 2.",
  },
  {
    q: "Com que frequência devo consultar o endocrinologista para diabetes?",
    a: "Em geral, a cada 3 a 6 meses, dependendo do controle glicêmico e das medicações em uso. Em casos de ajuste de tratamento, o acompanhamento pode ser mais frequente.",
  },
];

export default function DiabetesPage() {
  return (
    <>
      <PageHero
        eyebrow="Controle do diabetes em Fortaleza"
        title={
          <>
            Diabetes não é uma sentença.{" "}
            <span className="italic text-gold">É uma condição que tem controle.</span>
          </>
        }
        subtitle="Com investigação metabólica completa e acompanhamento especializado, é possível controlar a glicemia, reduzir a HbA1c e proteger sua saúde cardiovascular de verdade."
        image="/images/portrait-couch.jpg"
        cta="Olá, Dra. Fabiana. Gostaria de agendar uma consulta sobre diabetes."
      />

      {/* Intro + photo */}
      <section className="bg-cream py-24 md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div data-aos="fade-up">
            <div className="space-y-5 font-body text-base leading-relaxed text-ink-soft md:text-lg">
              <p>
                Diabetes tipo 2 se desenvolve ao longo de anos de resistência à
                insulina não tratada. Quando diagnosticado, já existe um
                comprometimento metabólico que precisa ser avaliado em
                profundidade — não apenas com controle glicêmico, mas com
                atenção ao risco cardiovascular, à função renal e ao padrão
                hormonal como um todo.
              </p>
              <p>
                O pré-diabetes, muitas vezes ignorado, é a janela de
                oportunidade para reverter o processo antes que se instale a
                doença. Investigamos e tratamos os dois.
              </p>
            </div>

            <div className="mt-12 rounded-2xl bg-[#f7e7d6] p-9 md:p-11">
              <h2 className="display text-2xl text-ink md:text-3xl">
                Diabetes tipo 1 e tipo 2
              </h2>
              <p className="mt-5 font-body text-base leading-relaxed text-ink-soft">
                O tipo 1 é autoimune e exige insulinoterapia desde o início. O
                tipo 2 resulta de resistência à insulina progressiva e, com
                acompanhamento especializado, pode ser controlado com
                medicamentos orais, injetáveis modernos (como GLP-1) ou
                insulina, sempre com protocolo individualizado.
              </p>
            </div>
          </div>

          <div
            className="relative aspect-[3/4] overflow-hidden rounded-2xl"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            <Image
              src="/images/portrait-serious.jpg"
              alt="Dra. Fabiana Lustosa, especialista em diabetes em Fortaleza"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* O que avaliamos */}
      <section className="bg-[#f7e7d6] py-24 md:py-32">
        <div className="wrap">
          <p className="eyebrow" data-aos="fade-up">
            Investigação completa
          </p>
          <h2
            className="display mt-6 max-w-2xl text-3xl text-ink md:text-4xl"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            O que avaliamos além da glicemia
          </h2>

          <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-gold/40 bg-gold/40 sm:grid-cols-2 lg:grid-cols-4">
            {marcadores.map((m, i) => (
              <li
                key={m}
                className="flex items-center gap-4 bg-cream p-7"
                data-aos="fade-up"
                data-aos-delay={(i % 4) * 60}
              >
                <span className="text-gold" aria-hidden="true">
                  ✦
                </span>
                <span className="font-body text-[15px] text-ink-soft">{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-cream py-24 md:py-32">
        <div className="wrap">
          <h2
            className="display max-w-2xl text-3xl text-ink md:text-4xl"
            data-aos="fade-up"
          >
            Como funciona o acompanhamento de diabetes aqui
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-gold/40 bg-gold/40 md:grid-cols-3">
            {fases.map((f, i) => (
              <div
                key={f.title}
                className="bg-cream p-9 md:p-10"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <span className="font-display text-3xl italic text-gold">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl text-ink">
                  {f.title}
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-ink-soft">
                  {f.text}
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
            Dúvidas sobre diabetes
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
        title="Quer controle real da glicemia com acompanhamento especializado?"
        message="Olá, Dra. Fabiana. Gostaria de agendar uma consulta sobre diabetes."
      />
    </>
  );
}
