type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
};

export default function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="bg-cream pb-16 pt-36 md:pb-24 md:pt-44">
      <div className="wrap">
        <p className="eyebrow" data-aos="fade-up">
          {eyebrow}
        </p>
        <h1
          className="display mt-7 max-w-4xl text-[2.6rem] text-ink sm:text-5xl lg:text-6xl"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-7 max-w-2xl font-body text-base leading-relaxed text-ink-soft md:text-lg"
            data-aos="fade-up"
            data-aos-delay="140"
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
