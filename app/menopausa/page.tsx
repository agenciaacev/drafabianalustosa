import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title:
    "Menopausa e climatério em Fortaleza | Dra. Fabiana Lustosa — Endocrinologista",
  description:
    "Especialista em menopausa e reposição hormonal em Fortaleza. Avaliação completa de TRH, tratamento de fogachos, insônia e ganho de peso na menopausa. CRM-CE 6123.",
  alternates: { canonical: "/menopausa" },
};

const sintomas = [
  "Fogachos e suores noturnos",
  "Insônia e alterações do sono",
  "Ganho de gordura abdominal",
  "Irritabilidade e oscilações de humor",
  "Queda de libido",
  "Cansaço e falta de energia",
  "Ressecamento vaginal",
  "Dificuldade de concentração e memória",
  "Perda de massa muscular e óssea",
];

export default function MenopausaPage() {
  return (
    <>
      <PageHero
        eyebrow="Menopausa e climatério em Fortaleza"
        title={
          <>
            Você não precisa aceitar esses sintomas como{" "}
            <span className="italic text-taupe">normais</span>
          </>
        }
        subtitle="Fogachos, insônia, irritabilidade, ganho de gordura abdominal e queda de libido têm nome, têm causa e têm tratamento."
      />

      {/* Intro + photo */}
      <section className="bg-cream pb-24 md:pb-32">
        <div className="wrap grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div data-aos="fade-up">
            <div className="space-y-5 font-body text-base leading-relaxed text-ink-soft md:text-lg">
              <p>
                A menopausa é uma fase fisiológica, mas os sintomas incômodos são
                a resposta do corpo à queda de estrogênio e progesterona. Com
                avaliação médica adequada, a maioria desses sintomas pode ser
                tratada de forma eficaz e segura.
              </p>
              <p>
                Você não precisa aceitar esse período como algo a ser apenas
                suportado.
              </p>
            </div>

            <div className="mt-12 rounded-2xl bg-[#f7e7d6] p-9 md:p-11">
              <h2 className="display text-2xl text-ink md:text-3xl">
                O que é a terapia de reposição hormonal (TRH)
              </h2>
              <p className="mt-5 font-body text-base leading-relaxed text-ink-soft">
                A TRH consiste na reposição dos hormônios que o organismo deixa
                de produzir na menopausa, principalmente estrogênio e
                progesterona. Quando bem indicada, melhora os fogachos, a
                qualidade do sono, o humor, a libido e a composição corporal.
                Avaliamos benefícios, riscos e contraindicações antes de
                qualquer prescrição.
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
              alt="Dra. Fabiana Lustosa, especialista em menopausa em Fortaleza"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="bg-[#f7e7d6] py-24 md:py-32">
        <div className="wrap">
          <p className="eyebrow" data-aos="fade-up">
            Sintomas que tratamos
          </p>
          <h2
            className="display mt-6 max-w-2xl text-3xl text-ink md:text-4xl"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            Cada sintoma é um sinal que merece investigação
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

      <CtaBanner
        title="A menopausa não precisa ser apenas suportada."
        message="Olá, Dra. Fabiana. Gostaria de agendar uma consulta sobre menopausa."
      />
    </>
  );
}
