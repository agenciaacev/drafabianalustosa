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

const dores = [
  "Cansaço constante, mesmo dormindo bem",
  "Queda de libido sem explicação aparente",
  "Dificuldade para manter massa muscular ou perder gordura",
  "Humor instável, sem motivo claro",
  'Já fez exame de rotina e "tudo deu normal"',
];

const fases = [
  {
    n: "01",
    title: "Avaliação hormonal completa e histórico de sintomas",
    text: "Investigamos testosterona, estrogênio, progesterona, hormônios da tireoide, cortisol, DHEA, vitamina D e outros marcadores. Seu histórico clínico entra no diagnóstico antes de qualquer decisão.",
  },
  {
    n: "02",
    title: "Identificação da causa da queda hormonal",
    text: "Antes de repor, identificamos o que está em queda e por quê. Causas diferentes exigem abordagens diferentes — não existe protocolo único.",
  },
  {
    n: "03",
    title: "Plano de reposição individualizado, com dose ajustada para você",
    text: "A reposição é prescrita na dose, via e forma adequadas ao seu perfil. Para homens, para mulheres, para cada fase da vida — o plano é construído a partir dos seus exames e objetivos.",
  },
  {
    n: "04",
    title: "Acompanhamento contínuo com reavaliação periódica",
    text: "Hormônios mudam com o tempo. Cada retorno inclui reavaliação laboratorial e clínica para ajuste fino do protocolo conforme a resposta do seu corpo.",
  },
];

const depoimentos = [
  {
    quote:
      "Gratidão à Dra. por devolver minha auto estima. Ela e sua atendente são super solícitas, esclarecem todas as dúvidas e têm uma atenção ímpar com os pacientes.",
    name: "Nair Pinheiro",
    date: "6 meses atrás",
  },
  {
    quote:
      "Experiência maravilhosa! Médica atenciosa, gentil e muito capacitada. Achei uma Médica pra chamar de \"minha\".",
    name: "Viena",
    date: "6 meses atrás",
  },
  {
    quote:
      "Médica Endocrinologista super competente, estudiosa, atualizada, paciente e comprometida com a saúde e o bem estar de seus pacientes!",
    name: "Sellene Benevides",
    date: "6 meses atrás",
  },
];

const faqLocal = [
  {
    q: "Quem pode fazer reposição hormonal?",
    a: "Homens e mulheres com queda hormonal confirmada por exame e sintomas associados.",
  },
  {
    q: "A reposição hormonal é segura a longo prazo?",
    a: "Quando bem indicada e acompanhada com reavaliação periódica, sim.",
  },
  {
    q: "Em quanto tempo sinto diferença?",
    a: "Varia de pessoa para pessoa. O acompanhamento permite ajustar a dose conforme a resposta.",
  },
  {
    q: "Aceita convênio?",
    a: "Não. Atendimento particular, com recibo para reembolso.",
  },
  {
    q: "Preciso de exames recentes para a primeira consulta?",
    a: "Ajuda, mas a avaliação inicial já direciona quais exames serão solicitados.",
  },
];

function Stars() {
  return (
    <span className="text-gold" aria-label="5 estrelas">
      ★★★★★
    </span>
  );
}

export default function ReposicaoHormonalPage() {
  return (
    <>
      {/* 1 · HERO */}
      <PageHero
        eyebrow="Endocrinologista em Fortaleza · Especialista em reposição hormonal"
        title={
          <>
            Cansaço, queda de libido e falta de disposição não são "coisa da
            idade".{" "}
            <span className="italic text-gold">
              Podem ser hormônio em queda.
            </span>
          </>
        }
        subtitle="Equilíbrio hormonal restaurado com base em exames, não em achismo. Avaliação completa antes de qualquer reposição."
        image="/images/hero.jpg"
        imagePosition="object-right-top"
        cta="Olá, Dra. Fabiana. Gostaria de agendar uma avaliação hormonal."
        ctaLabel="Agendar avaliação hormonal"
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
              vale investigar seus hormônios.
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
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
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
            <p className="eyebrow">Baseado em exames, não em achismo</p>
            <h2 className="display mt-6 text-3xl text-ink md:text-4xl">
              Reposição hormonal não é padrão, é individual
            </h2>
            <div className="mt-7 space-y-5 font-body text-base leading-relaxed text-ink-soft md:text-lg">
              <p>
                Cada queda hormonal tem uma causa diferente, e cada corpo
                responde de um jeito à reposição. Antes de prescrever,
                avaliamos seu perfil hormonal completo, sua idade, seu histórico
                de saúde e seus objetivos.
              </p>
              <p>O plano é construído a partir disso.</p>
            </div>
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

      {/* 7 · CTA FINAL */}
      <CtaBanner
        title="Hormônio em equilíbrio começa com avaliação completa."
        message="Olá, Dra. Fabiana. Gostaria de agendar uma avaliação hormonal."
      />
    </>
  );
}
