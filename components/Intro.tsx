export default function Intro() {
  return (
    <section className="bg-cream py-24 md:py-36">
      <div className="wrap">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <p
            className="eyebrow self-start"
            data-aos="fade-up"
          >
            A endocrinologia existe para isso
          </p>

          <div data-aos="fade-up" data-aos-delay="80">
            <p className="display text-3xl text-ink md:text-[2.6rem]">
              A maioria dos meus pacientes chegou depois de{" "}
              <span className="italic text-taupe">anos tentando</span>{" "}
              emagrecer, controlar o açúcar no sangue ou sobreviver à menopausa.
            </p>
            <p className="mt-8 font-body text-base leading-relaxed text-ink-soft md:text-lg">
              A endocrinologia existe exatamente para investigar o que está por
              baixo dos sintomas — hormônios, metabolismo, composição corporal —
              e criar um plano que funcione para a sua vida real, não para um
              manual genérico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
