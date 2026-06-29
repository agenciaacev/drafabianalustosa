import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title:
    "Longevidade saudável em Fortaleza | Dra. Fabiana Lustosa — Endocrinologista",
  description:
    "Medicina de longevidade em Fortaleza. Prevenção ativa com avaliação metabólica e hormonal completa para corrigir desequilíbrios antes que virem doença. CRM-CE 6123.",
  alternates: { canonical: "/longevidade" },
};

const dores = [
  "Faz exame de rotina, mas nunca uma avaliação metabólica completa",
  "Tem histórico familiar de diabetes, hipertensão ou doença cardiovascular",
  "Sente que está envelhecendo mais rápido do que gostaria",
  "Quer continuar ativo e funcional depois dos 50, 60 anos",
  "Prefere prevenir do que só tratar quando a doença já está instalada",
];

const fases = [
  {
    n: "01",
    title: "Avaliação completa, com histórico familiar e exames ampliados",
    text: "Glicemia, insulina, HbA1c, perfil lipídico avançado, marcadores inflamatórios, painel hormonal completo e bioimpedância InBody. Tudo o que o check-up convencional deixa de fora.",
  },
  {
    n: "02",
    title: "Identificação de desequilíbrios antes que se tornem doença",
    text: "Resistência à insulina, inflamação crônica, deficiência hormonal, sarcopenia precoce — identificamos o que está em curso muito antes do diagnóstico formal.",
  },
  {
    n: "03",
    title: "Plano de prevenção individualizado, hormonal e metabólico",
    text: "Reposição hormonal quando indicada, suplementação baseada em exames, ajuste metabólico e orientações práticas de estilo de vida. Tudo construído para o seu perfil.",
  },
  {
    n: "04",
    title: "Acompanhamento contínuo com reavaliação periódica",
    text: "Os marcadores mudam, o plano acompanha. Cada retorno inclui nova avaliação para ajuste fino — o objetivo é manter equilíbrio de longo prazo.",
  },
];

const depoimentos = [
  {
    quote:
      "A Dra. Fabiana e sua atendente são super solícitas, esclarecem todas as dúvidas e têm uma atenção ímpar com os pacientes. Gratidão à Dra. por devolver minha auto estima.",
    name: "Nair Pinheiro",
    date: "6 meses atrás",
  },
  {
    quote:
      "Muito estudiosa, inteligente, comprometida e séria.",
    name: "Leave'n Live Free",
    date: "3 semanas atrás",
  },
  {
    quote:
      "Atendimento impecável, clínica muito organizada. Agora não quero outra endócrino!!!",
    name: "Eduarda Paiva",
    date: "1 mês atrás",
  },
];

const faqLocal = [
  {
    q: "Para quem é indicada a avaliação de longevidade?",
    a: "Para quem quer antecipar riscos metabólicos e hormonais, mesmo sem sintoma ou diagnóstico atual.",
  },
  {
    q: "É diferente de um check-up comum?",
    a: "Sim. Vai além dos exames de rotina, com avaliação hormonal e metabólica direcionada ao seu histórico.",
  },
  {
    q: "Com que frequência preciso repetir essa avaliação?",
    a: "Geralmente anual, mas pode variar conforme os resultados e o seu histórico.",
  },
  {
    q: "Aceita convênio?",
    a: "Não. Atendimento particular, com recibo para reembolso.",
  },
  {
    q: "Já tenho uma doença crônica, ainda faz sentido essa avaliação?",
    a: "Sim, ajuda a identificar desequilíbrios associados que podem estar agravando seu quadro.",
  },
];

function Stars() {
  return (
    <span className="text-gold" aria-label="5 estrelas">
      ★★★★★
    </span>
  );
}

export default function LongevidadePage() {
  return (
    <>
      {/* 1 · HERO */}
      <PageHero
        eyebrow="Endocrinologista em Fortaleza · Especialista em longevidade saudável"
        title={
          <>
            Você pode esperar a doença chegar, ou descobrir agora o que já
            está desequilibrado no seu corpo.
          </>
        }
        subtitle="Prevenção ativa, com avaliação metabólica e hormonal completa, para corrigir desequilíbrios antes que virem doença."
        image="/images/standing.jpg"
        imagePosition="object-[30%_center]"
        cta="Olá, Dra. Fabiana. Gostaria de agendar uma avaliação preventiva de longevidade."
        ctaLabel="Agendar avaliação preventiva"
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
              vale antecipar o cuidado.
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
            <p className="eyebrow">Prevenção ativa</p>
            <h2 className="display mt-6 text-3xl text-ink md:text-4xl">
              Corrigir antes, não remediar depois
            </h2>
            <div className="mt-7 space-y-5 font-body text-base leading-relaxed text-ink-soft md:text-lg">
              <p>
                A maior parte dos problemas crônicos começa anos antes do
                diagnóstico, em pequenos desequilíbrios hormonais e metabólicos
                que exames de rotina não captam.
              </p>
              <p>
                Aqui a investigação vai além do check-up padrão — avaliação
                hormonal, composição corporal e marcadores de risco — para agir
                enquanto ainda dá tempo de prevenir.
              </p>
            </div>
          </div>

          <div
            className="relative aspect-[3/4] overflow-hidden rounded-2xl"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            <Image
              src="/images/portrait-couch.jpg"
              alt="Dra. Fabiana Lustosa, medicina de longevidade em Fortaleza"
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

      {/* 7 · CTA FINAL */}
      <CtaBanner
        title="O melhor momento para prevenir é antes do diagnóstico."
        message="Olá, Dra. Fabiana. Gostaria de agendar uma avaliação preventiva de longevidade."
      />
    </>
  );
}
