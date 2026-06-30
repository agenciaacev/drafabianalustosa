import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import Testimonials from "@/components/Testimonials";
import { whatsappLink } from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Menopausa e climatério em Fortaleza | Dra. Fabiana Lustosa — Endocrinologista",
  description:
    "Especialista em menopausa e reposição hormonal em Fortaleza. Avaliação hormonal completa, tratamento individualizado para fogachos, insônia, irritabilidade e queda de libido. CRM-CE 6123.",
  alternates: { canonical: "/menopausa" },
};

const dores = [
  "Calores e sudorese que aparecem do nada",
  "Noites mal dormidas, mesmo cansada",
  "Mudança de humor que você não reconhece em si mesma",
  "Queda de libido e desconforto que ninguém te explicou",
  'Já ouviu "isso é normal, vai passar" e nada passou',
];

const fases = [
  {
    n: "01",
    title: "Avaliação hormonal completa e histórico de sintomas",
    text: "Avaliamos estrogênio, progesterona, testosterona, FSH, LH, TSH e outros marcadores relevantes. Seu histórico clínico e familiar entra no diagnóstico antes de qualquer decisão.",
  },
  {
    n: "02",
    title: "Identificação do que está causando cada sintoma",
    text: "Não todos os sintomas têm a mesma causa. Antes de prescrever, identificamos o que está desequilibrado e por quê — sem generalizar, sem achismo.",
  },
  {
    n: "03",
    title: "Plano com reposição hormonal, se indicada, e ajustes de estilo de vida",
    text: "A reposição hormonal, quando indicada, é prescrita na dose e via adequadas para o seu caso. Acompanhamos também alimentação, sono e atividade física como parte do tratamento.",
  },
  {
    n: "04",
    title: "Acompanhamento contínuo com reavaliação periódica",
    text: "Os hormônios mudam, os sintomas mudam, e o tratamento acompanha. Cada retorno inclui reavaliação clínica e laboratorial para ajuste fino do protocolo.",
  },
];

const faqLocal = [
  {
    q: "A reposição hormonal é segura?",
    a: "Quando bem indicada e acompanhada, sim. Por isso a avaliação completa vem antes de qualquer prescrição.",
  },
  {
    q: "Toda mulher na menopausa precisa de reposição hormonal?",
    a: "Não. A indicação depende dos seus exames, sintomas e histórico de saúde.",
  },
  {
    q: "Em quanto tempo os sintomas melhoram?",
    a: "Varia de paciente para paciente. O acompanhamento permite ajustar a dose conforme a resposta.",
  },
  {
    q: "Aceita convênio?",
    a: "Não. Atendimento particular, com recibo para reembolso.",
  },
  {
    q: "Preciso levar exames antigos na primeira consulta?",
    a: "Sim, ajuda a montar um histórico mais completo do seu quadro hormonal.",
  },
];

export default function MenopausaPage() {
  return (
    <>
      {/* 1 · HERO */}
      <PageHero
        eyebrow="Endocrinologista em Fortaleza · Especialista em menopausa e climatério"
        title={
          <>
            Calor, insônia, irritação e falta de libido não são "coisa da
            idade".{" "}
            <span className="italic text-gold">
              São hormônios que podem ser tratados.
            </span>
          </>
        }
        subtitle="Avaliação hormonal completa para identificar a causa real dos seus sintomas, com reposição hormonal individualizada quando indicada."
        image="/images/sitting-wide.jpg"
        mobileImage="/images/sitting-wide-mobile.webp"
        cta="Olá, Dra. Fabiana. Gostaria de agendar uma avaliação hormonal para menopausa."
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
            <span className="italic text-gold">não é "só a idade".</span>
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
          <div className="mt-10 flex justify-center" data-aos="fade-up">
            <a href={whatsappLink("Olá, Dra. Fabiana. Gostaria de agendar uma consulta sobre menopausa.")} target="_blank" rel="noopener noreferrer" className="btn-light">
              Agendar consulta
            </a>
          </div>
        </div>
      </section>

      {/* 3 · MECANISMO */}
      <section className="bg-cream py-24 md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div data-aos="fade-up">
            <p className="eyebrow">Baseado em exames, não em achismo</p>
            <h2 className="display mt-6 text-3xl text-ink md:text-4xl">
              Reposição hormonal bem indicada, baseada em exame
            </h2>
            <div className="mt-7 space-y-5 font-body text-base leading-relaxed text-ink-soft md:text-lg">
              <p>
                Cada corpo responde de um jeito diferente à queda hormonal da
                menopausa. Antes de qualquer reposição, avaliamos seu perfil
                hormonal completo e seu risco individual.
              </p>
              <p>
                A partir disso, o tratamento é ajustado para você — não copiado
                de um protocolo padrão.
              </p>
            </div>
          </div>

          <div
            className="relative min-h-72 lg:min-h-0 overflow-hidden rounded-2xl"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            <Image
              src="/images/menopausa.png"
              alt="Tratamento de menopausa e reposição hormonal em Fortaleza"
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
          <div className="mt-10 flex justify-center" data-aos="fade-up">
            <a href={whatsappLink("Olá, Dra. Fabiana. Gostaria de agendar uma consulta sobre menopausa.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Agendar consulta
            </a>
          </div>
        </div>
      </section>

      {/* 5 · DEPOIMENTOS */}
      <Testimonials />

      {/* 6 · FAQ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="wrap">
          <h2
            className="display text-3xl text-ink md:text-4xl"
            data-aos="fade-up"
          >
            Dúvidas sobre menopausa e reposição hormonal
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
          <div className="mt-10 flex justify-center" data-aos="fade-up">
            <a href={whatsappLink("Olá, Dra. Fabiana. Gostaria de agendar uma consulta sobre menopausa.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Agendar consulta
            </a>
          </div>
        </div>
      </section>

      {/* 6 · CTA FINAL */}
      <CtaBanner
        title="Seus sintomas têm explicação. E têm tratamento."
        message="Olá, Dra. Fabiana. Gostaria de agendar uma consulta sobre menopausa."
      />
    </>
  );
}
