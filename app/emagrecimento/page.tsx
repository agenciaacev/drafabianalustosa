import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title:
    "Emagrecimento em Fortaleza | Dra. Fabiana Lustosa — Endocrinologista",
  description:
    "Endocrinologista especialista em emagrecimento em Fortaleza. Avaliação metabólica completa, bioimpedância InBody, semaglutida, tirzepatida e acompanhamento médico contínuo. CRM-CE 6123.",
  alternates: { canonical: "/emagrecimento" },
};

const fases = [
  {
    title: "Investigação completa",
    text: "Analisamos hormônios da tireoide, insulina de jejum, hemoglobina glicada, cortisol, testosterona, estradiol, vitamina D e outros marcadores. Realizamos a bioimpedância InBody para mapear sua composição corporal atual.",
  },
  {
    title: "Estratégia personalizada",
    text: "Com base nos exames e na sua história clínica, montamos um plano que pode incluir ajuste hormonal, dieta com nutricionista, suplementação baseada em exames e, quando indicado, medicamentos modernos de emagrecimento.",
  },
  {
    title: "Acompanhamento real",
    text: "Nova bioimpedância em todas as consultas. Ajuste de medicações conforme evolução. Acompanhamento até a meta e além dela, para garantir que o resultado se mantenha.",
  },
];

const antesDepois = [
  {
    label: "Emagrecimento",
    period: "3 meses de acompanhamento",
    detail: "Perda de 12 kg com manutenção de massa muscular e regularização hormonal.",
    antes: "/images/antes-depois/caso-1-antes.jpg",
    depois: "/images/antes-depois/caso-1-depois.jpg",
  },
  {
    label: "Recomposição corporal",
    period: "5 meses de acompanhamento",
    detail: "Redução de gordura visceral e aumento de massa magra com ajuste metabólico.",
    antes: "/images/antes-depois/caso-2-antes.jpg",
    depois: "/images/antes-depois/caso-2-depois.jpg",
  },
  {
    label: "Controle metabólico",
    period: "4 meses de acompanhamento",
    detail: "Normalização da hemoglobina glicada e redução de 9 kg com protocolo personalizado.",
    antes: "/images/antes-depois/caso-3-antes.jpg",
    depois: "/images/antes-depois/caso-3-depois.jpg",
  },
];

const faqLocal = [
  {
    q: "Médico para emagrecer — qual especialidade procurar?",
    a: "O endocrinologista é o especialista em metabolismo e hormônios, o médico mais indicado para investigar as causas do excesso de peso e prescrever um tratamento personalizado.",
  },
  {
    q: "A semaglutida precisa de receita médica?",
    a: "Sim. Semaglutida e tirzepatida são medicamentos de uso controlado que exigem prescrição médica e acompanhamento. O uso sem supervisão pode causar efeitos adversos sérios.",
  },
  {
    q: "Quanto tempo para ver resultados no emagrecimento?",
    a: "Depende do quadro clínico e do plano estabelecido. Com tratamento metabólico e hormonal adequado, a maioria dos pacientes começa a ver mudanças reais na composição corporal entre 4 e 8 semanas.",
  },
];

function CameraPlaceholder({ label }: { label: string }) {
  return (
    <div className="relative flex aspect-[3/4] flex-col items-center justify-center gap-3 bg-gold/10">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-gold/50"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
        />
      </svg>
      <p className="font-body text-[11px] uppercase tracking-widest text-gold/50">
        {label}
      </p>
    </div>
  );
}

export default function EmagrecimentoPage() {
  return (
    <>
      <PageHero
        eyebrow="Emagrecimento em Fortaleza"
        title={
          <>
            Emagrecimento com acompanhamento{" "}
            <span className="italic text-taupe">endocrinológico</span>
          </>
        }
        subtitle="Dieta e exercício são parte da solução, mas raramente são a causa do problema. O endocrinologista investiga o que ninguém investigou antes."
      />

      {/* Why */}
      <section className="bg-cream pb-24 md:pb-32">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl" data-aos="fade-up">
            <Image
              src="/images/standing.jpg"
              alt="Dra. Fabiana Lustosa, especialista em emagrecimento em Fortaleza"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[30%_center]"
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="80">
            <h2 className="display text-3xl text-ink md:text-4xl">
              Por que emagrecer com um endocrinologista faz diferença
            </h2>
            <div className="mt-7 space-y-5 font-body text-base leading-relaxed text-ink-soft md:text-lg">
              <p>
                Quem não consegue emagrecer, ou perde peso e recupera tudo
                rapidamente, quase sempre tem algo metabólico ou hormonal por
                trás: resistência à insulina, hipotireoidismo subclínico,
                cortisol elevado, desequilíbrios em leptina e grelina.
              </p>
              <p>
                Ou simplesmente um metabolismo basal adaptado a anos de
                restrição calórica. A investigação séria revela o que está
                travando o seu corpo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="bg-[#f7e7d6] py-24 md:py-32">
        <div className="wrap">
          <h2
            className="display max-w-2xl text-3xl text-ink md:text-4xl"
            data-aos="fade-up"
          >
            Como funciona o tratamento de emagrecimento aqui
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

      {/* Semaglutida */}
      <section className="bg-cream py-24 md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div data-aos="fade-up">
            <p className="eyebrow">Medicamentos modernos</p>
            <h2 className="display mt-6 text-3xl text-ink md:text-4xl">
              Semaglutida e tirzepatida: quando são indicadas
            </h2>
          </div>
          <div
            className="space-y-5 font-body text-base leading-relaxed text-ink-soft md:text-lg"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            <p>
              Os medicamentos GLP-1, como a semaglutida (Ozempic/Wegovy) e a
              tirzepatida (Mounjaro), representam um avanço real no tratamento da
              obesidade. Agem diretamente nos mecanismos de saciedade e regulação
              metabólica, não são apenas redutores de apetite.
            </p>
            <p>
              Mas nem todo paciente é candidato, e o uso sem acompanhamento
              médico traz riscos sérios. Aqui, avaliamos a indicação,
              prescrevemos com protocolo individualizado, ajustamos a dose
              progressivamente e acompanhamos os resultados a cada retorno.
            </p>
          </div>
        </div>
      </section>

      {/* Antes e Depois */}
      <section className="bg-[#f7e7d6] py-24 md:py-32">
        <div className="wrap">
          <div className="text-center" data-aos="fade-up">
            <p className="eyebrow mx-auto">Resultados reais</p>
            <h2 className="display mt-6 text-3xl text-ink md:text-4xl">
              Antes e depois do acompanhamento
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-body text-base leading-relaxed text-ink-soft">
              Cada transformação começa com uma investigação séria. Resultados
              documentados com bioimpedância InBody em todas as consultas.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {antesDepois.map((item, i) => (
              <article
                key={i}
                className="overflow-hidden rounded-2xl border border-gold/40 bg-cream"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="grid grid-cols-2">
                  {/* Antes */}
                  <div className="relative overflow-hidden">
                    <CameraPlaceholder label="Antes" />
                    <span className="absolute left-3 top-3 rounded-full bg-ink/65 px-3 py-1 font-body text-[11px] uppercase tracking-widest text-cream/90 backdrop-blur-sm">
                      Antes
                    </span>
                  </div>

                  {/* Depois */}
                  <div className="relative overflow-hidden border-l border-gold/30">
                    <CameraPlaceholder label="Depois" />
                    <span className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 font-body text-[11px] uppercase tracking-widest text-ink">
                      Depois
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="font-body text-[11px] uppercase tracking-eyebrow text-gold">
                    {item.label} · {item.period}
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ink-soft">
                    {item.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="wrap">
          <h2 className="display text-3xl text-ink md:text-4xl" data-aos="fade-up">
            Dúvidas sobre emagrecimento
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
        title="Quer usar semaglutida ou tirzepatida com segurança em Fortaleza?"
        message="Olá, Dra. Fabiana. Gostaria de agendar uma consulta sobre emagrecimento."
      />
    </>
  );
}
