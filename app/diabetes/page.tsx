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

const dores = [
  "Glicemia que varia mesmo com dieta e remédio em dia",
  "Hemoglobina glicada alta sem entender o motivo",
  "Medo de complicação no futuro, mesmo \"controlado\"",
  "Pré-diabetes diagnosticado e nenhuma orientação clara do que fazer",
  "Trocou de remédio várias vezes sem melhora real",
];

const fases = [
  {
    n: "01",
    title: "Avaliação completa do quadro metabólico e histórico de medicação",
    text: "Glicemia, HbA1c, insulina de jejum, função renal, perfil lipídico e risco cardiovascular. Revisamos também toda a história de medicações anteriores antes de qualquer conduta.",
  },
  {
    n: "02",
    title: "Identificação do que está impedindo o controle real",
    text: "Nem toda glicemia descontrolada tem a mesma causa. Identificamos resistência à insulina, falha no protocolo atual, fatores alimentares e hormonais associados.",
  },
  {
    n: "03",
    title: "Ajuste de medicação e plano alimentar individualizado",
    text: "Medicação ajustada ao seu perfil metabólico — não ao padrão genérico. Quando necessário, incluímos medicamentos modernos como os GLP-1, com protocolo individualizado.",
  },
  {
    n: "04",
    title: "Acompanhamento contínuo com reavaliação de exames",
    text: "Cada retorno inclui reavaliação laboratorial: HbA1c, função renal, perfil lipídico. O objetivo é manter o controle de longo prazo e prevenir complicações cardiovasculares e renais.",
  },
];

const depoimentos = [
  {
    quote:
      "A Dra. Fabiana Lustosa é uma excelente profissional, muito competente e atenciosa. Saí do consultório muito feliz, superou as minhas expectativas, super indico.",
    name: "Débora Costa",
    date: "4 meses atrás",
  },
  {
    quote:
      "Médica Endocrinologista super competente, estudiosa, atualizada, paciente e comprometida com a saúde e o bem estar de seus pacientes!",
    name: "Sellene Benevides",
    date: "6 meses atrás",
  },
  {
    quote:
      "Primeira consulta c a Dra. Fabiana e foi incrível, médica que escuta e domina do assunto.",
    name: "Alanna Neumann",
    date: "15 horas atrás",
  },
];

const faqLocal = [
  {
    q: "Tenho pré-diabetes, preciso de acompanhamento mesmo sem remédio?",
    a: "Sim. Essa é a fase em que ainda dá para evitar a evolução para diabetes com mudanças orientadas.",
  },
  {
    q: "Vou precisar trocar minha medicação?",
    a: "Depende do seu controle atual. O ajuste é feito a partir dos seus exames, não por padrão.",
  },
  {
    q: "Com que frequência preciso repetir exames?",
    a: "Varia conforme seu quadro, mas o acompanhamento inclui reavaliação periódica da hemoglobina glicada e função renal.",
  },
  {
    q: "Aceita convênio?",
    a: "Não. Atendimento particular, com recibo para reembolso.",
  },
  {
    q: "O diabetes tem cura?",
    a: "Não, mas tem controle real, capaz de evitar complicações e manter qualidade de vida.",
  },
];

function Stars() {
  return (
    <span className="text-gold" aria-label="5 estrelas">
      ★★★★★
    </span>
  );
}

export default function DiabetesPage() {
  return (
    <>
      {/* 1 · HERO */}
      <PageHero
        eyebrow="Endocrinologista em Fortaleza · Especialista em diabetes"
        title={
          <>
            Sua glicemia oscila mesmo seguindo a dieta certa e tomando o
            remédio certo.{" "}
            <span className="italic text-gold">
              O problema é o plano, não você.
            </span>
          </>
        }
        subtitle="Controle real da glicemia, da hemoglobina glicada e do risco cardiovascular, com ajuste individualizado de medicação e acompanhamento contínuo."
        image="/images/portrait-couch.jpg"
        cta="Olá, Dra. Fabiana. Gostaria de agendar uma avaliação do diabetes."
        ctaLabel="Agendar avaliação do diabetes"
        seal="Formada UFC · Residência USP · Mestrado UNIFESP · CRM-CE 6123"
      />

      {/* 2 · DOR */}
      <section className="bg-ink py-24 md:py-32">
        <div className="wrap">
          <h2
            className="display mx-auto max-w-2xl text-center text-3xl text-cream md:text-4xl"
            data-aos="fade-up"
          >
            Se você se identifica com algo aqui,{" "}
            <span className="italic text-gold">
              o controle pode estar incompleto.
            </span>
          </h2>

          <ul className="mx-auto mt-14 max-w-2xl space-y-4">
            {dores.map((d, i) => (
              <li
                key={i}
                className="flex items-center gap-5 rounded-xl border border-cream/10 bg-cream/5 px-7 py-5 backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay={i * 70}
              >
                <span className="text-gold text-lg" aria-hidden="true">
                  ✦
                </span>
                <span className="font-body text-base leading-relaxed text-cream/85 md:text-lg">
                  {d}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 · MECANISMO */}
      <section className="bg-cream py-24 md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div data-aos="fade-up">
            <p className="eyebrow">Além do número no glicosímetro</p>
            <h2 className="display mt-6 text-3xl text-ink md:text-4xl">
              Controle de diabetes não é só baixar a glicemia do dia
            </h2>
            <div className="mt-7 space-y-5 font-body text-base leading-relaxed text-ink-soft md:text-lg">
              <p>
                O foco vai além do número no glicosímetro. Avaliamos hemoglobina
                glicada, função renal, perfil lipídico e risco cardiovascular
                para montar um plano que protege você a longo prazo, não só no
                momento da consulta.
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

      {/* 4 · COMO FUNCIONA */}
      <section className="bg-[#f7e7d6] py-24 md:py-32">
        <div className="wrap">
          <h2
            className="display max-w-2xl text-3xl text-ink md:text-4xl"
            data-aos="fade-up"
          >
            Como funciona o acompanhamento
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-gold/40 bg-gold/40 sm:grid-cols-2">
            {fases.map((f, i) => (
              <div
                key={f.n}
                className="bg-cream p-9 md:p-10"
                data-aos="fade-up"
                data-aos-delay={(i % 2) * 80}
              >
                <span className="font-display text-3xl italic text-gold">
                  {f.n}
                </span>
                <h3 className="mt-4 font-display text-xl text-ink md:text-2xl">
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

      {/* 5 · PROVA SOCIAL */}
      <section className="bg-cream py-24 md:py-32">
        <div className="wrap">
          <div className="text-center" data-aos="fade-up">
            <p className="eyebrow mx-auto">Avaliação 5.0 no Google</p>
            <h2 className="display mt-6 text-3xl text-ink md:text-4xl">
              O que pacientes dizem
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {depoimentos.map((d, i) => (
              <figure
                key={i}
                className="flex flex-col rounded-2xl border border-gold/40 bg-[#fdf4ea] p-8"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <Stars />
                <blockquote className="mt-5 flex-1 font-display text-xl leading-snug text-ink">
                  "{d.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-gold/40 pt-5">
                  <p className="font-body text-sm font-medium text-ink">
                    {d.name}
                  </p>
                  <p className="mt-1 font-body text-xs uppercase tracking-[0.12em] text-taupe">
                    {d.date}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 6 · FAQ */}
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

      {/* 7 · CTA FINAL */}
      <CtaBanner
        title="Controle de verdade começa com avaliação completa."
        message="Olá, Dra. Fabiana. Gostaria de agendar uma avaliação do diabetes."
      />
    </>
  );
}
