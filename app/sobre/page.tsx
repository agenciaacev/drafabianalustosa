import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Sobre a Dra. Fabiana Lustosa | Endocrinologista em Fortaleza",
  description:
    "Conheça a trajetória da Dra. Fabiana Lustosa, endocrinologista em Fortaleza formada na UFC com Residência na USP e Mestrado na UNIFESP. CRM-CE 6123.",
  alternates: { canonical: "/sobre" },
};

const formacao = [
  "Graduação em Medicina pela Universidade Federal do Ceará (UFC)",
  "Residência em Endocrinologia pela USP (Universidade de São Paulo)",
  "Mestrado em Endocrinologia e Metabolismo pela UNIFESP / Escola Paulista de Medicina",
  "CRM-CE 6123 · RQE 6609",
  "Membro da SBEM (Sociedade Brasileira de Endocrinologia e Metabologia)",
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre a Dra. Fabiana Lustosa"
        title={
          <>
            Endocrinologista em Fortaleza formada na UFC, com Residência na USP
            e <span className="italic text-taupe">Mestrado na UNIFESP</span>.
          </>
        }
      />

      <section className="bg-cream pb-24 md:pb-32">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start" data-aos="fade-up">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/portrait-serious.jpg"
                  alt="Dra. Fabiana Lustosa, endocrinologista em Fortaleza"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="80">
              <div className="space-y-6 font-body text-base leading-relaxed text-ink-soft md:text-lg">
                <p>
                  Nasci em Fortaleza, filha da Lúcia e do José Benevides,
                  pessoas que me ensinaram desde cedo o valor de ouvir com
                  atenção e tratar cada pessoa com respeito genuíno. Esse
                  ensinamento se tornou o fundamento de tudo que faço na
                  medicina.
                </p>
                <p>
                  Desde criança fui muito estudiosa, por influência da família
                  materna. A medicina surgiu como a soma do que mais me movia:
                  ciência, cuidado com pessoas e a possibilidade de fazer
                  diferença real na vida de alguém.
                </p>
                <p>
                  Me formei em Medicina pela Universidade Federal do Ceará, onde
                  aprendi a medicina pública, social e humanizada. Depois, fui
                  para São Paulo fazer Residência em Endocrinologia na USP. Não
                  parei por aí: concluí o Mestrado em Endocrinologia e
                  Metabolismo pela Escola Paulista de Medicina da UNIFESP, onde
                  aprofundei meu entendimento sobre metabolismo, obesidade e
                  terapia hormonal baseada em evidências.
                </p>
                <p>
                  Voltei para Fortaleza com uma certeza: queria atender do jeito
                  que eu gostaria de ser atendida. Com tempo, atenção real,
                  investigação profunda e um plano que fizesse sentido para a
                  vida real do paciente.
                </p>
                <p>
                  Hoje, atendo no Harmony Medical Center, no Meireles, e o que
                  mais me motiva ainda é o que sempre me motivou: ver alguém que
                  chegou cansado, frustrado e sem respostas sair com clareza, um
                  plano e esperança de verdade.
                </p>
              </div>

              <div className="mt-14">
                <p className="eyebrow">Formação e credenciais</p>
                <ul className="mt-7 space-y-4 border-t border-gold/50 pt-7">
                  {formacao.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-4 font-body text-[15px] text-ink-soft"
                    >
                      <span className="mt-2 h-px w-5 flex-none bg-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-14 rounded-2xl bg-[#f7e7d6] p-9 md:p-11">
                <p className="eyebrow">Filosofia de atendimento</p>
                <p className="mt-5 font-display text-2xl leading-snug text-ink md:text-[1.9rem]">
                  Não acredito em fórmulas genéricas. Acredito em medicina feita
                  para pessoas.
                </p>
                <p className="mt-5 font-body text-base leading-relaxed text-ink-soft">
                  A primeira consulta aqui nunca termina com uma prescrição
                  apressada. Termina com um diagnóstico claro, um plano de
                  exames personalizado e a certeza de que você foi ouvido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner title="Sua história merece ser ouvida antes de qualquer prescrição." />
    </>
  );
}
