import Image from "next/image";
import { whatsappLink } from "@/lib/content";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  image?: string;
  imagePosition?: string;
  cta?: string;
  ctaLabel?: string;
  seal?: string;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imagePosition = "object-center",
  cta,
  ctaLabel = "Agendar consulta",
  seal,
}: Props) {
  if (image) {
    return (
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className={`object-cover ${imagePosition}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-black/20" />

        <div className="absolute inset-0 z-10 flex items-end">
          <div className="wrap pb-12 md:pb-20 2xl:pb-28">
            <div className="max-w-3xl">
              <p
                className="eyebrow !text-gold before:!bg-gold"
                data-aos="fade-up"
              >
                {eyebrow}
              </p>
              <h1
                className="display mt-5 text-cream"
                data-aos="fade-up"
                data-aos-delay="80"
                style={{
                  fontSize: "clamp(2rem, 3.8vw, 4.4rem)",
                  textShadow: "0 2px 12px rgba(0,0,0,0.4)",
                }}
              >
                {title}
              </h1>
              {subtitle && (
                <p
                  className="mt-5 max-w-2xl font-body leading-relaxed text-cream/75"
                  data-aos="fade-up"
                  data-aos-delay="160"
                  style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.125rem)" }}
                >
                  {subtitle}
                </p>
              )}
              {cta && (
                <div
                  className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
                  data-aos="fade-up"
                  data-aos-delay="220"
                >
                  <a
                    href={whatsappLink(cta)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-light"
                  >
                    {ctaLabel}
                  </a>
                  {seal && (
                    <p className="font-body text-[11px] uppercase tracking-[0.14em] text-cream/50">
                      {seal}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

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
