import { testimonials } from "@/lib/content";

function Stars() {
  return (
    <span className="text-gold" aria-label="5 de 5 estrelas">
      ★★★★★
    </span>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="scroll-mt-20 bg-cream py-24 md:py-36">
      <div className="wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div data-aos="fade-up">
            <p className="eyebrow">O que pacientes dizem</p>
            <h2 className="display mt-6 max-w-xl text-4xl text-ink md:text-5xl">
              Confiança construída uma consulta de cada vez
            </h2>
          </div>
          <p
            className="font-body text-sm text-taupe"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            Avaliações verificadas no Google e Doctoralia · média 5.0
          </p>
        </div>

        <div className="mt-16 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="break-inside-avoid rounded-2xl border border-gold/40 bg-[#fdf4ea] p-8"
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 70}
            >
              <Stars />
              <blockquote className="mt-5 font-display text-xl leading-snug text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-gold/40 pt-5">
                <p className="font-body text-sm font-medium text-ink">
                  {t.name}
                </p>
                <p className="mt-1 font-body text-xs uppercase tracking-[0.12em] text-taupe">
                  {t.treatment}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
