import { whatsappLink } from "@/lib/content";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  image?: string;
  mobileImage?: string;
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
  mobileImage,
  imagePosition = "object-center",
  cta,
  ctaLabel = "Agendar consulta",
  seal,
}: Props) {
  if (image) {
    return (
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 lg:min-h-screen items-stretch">

          {/* Imagem — order-first no mobile, coluna direita no desktop */}
          <div className="relative order-first lg:order-last overflow-hidden">
            {/* Mobile */}
            <img
              src={mobileImage ?? image}
              alt=""
              className="lg:hidden block w-full h-auto"
              style={{ objectPosition: "50% 15%" }}
            />
            {/* Desktop */}
            <img
              src={image}
              alt=""
              className="hidden lg:block w-full h-auto lg:absolute lg:inset-0 lg:h-full lg:object-cover"
              style={{ objectPosition: imagePosition }}
            />
            {/* Desktop: gradiente lateral esquerda */}
            <div
              className="hidden lg:block absolute inset-y-0 left-0 w-2/5 pointer-events-none"
              style={{ background: "linear-gradient(to right, #fcefe1, transparent)" }}
            />
            {/* Desktop: gradiente top */}
            <div
              className="hidden lg:block absolute top-0 inset-x-0 h-24 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, #fcefe1, transparent)" }}
            />
            {/* Bottom gradient (mobile e desktop) */}
            <div
              className="absolute bottom-0 inset-x-0 h-40 lg:h-1/3 pointer-events-none"
              style={{ background: "linear-gradient(to top, #fcefe1, transparent)" }}
            />
            {/* Top gradient mobile */}
            <div
              className="absolute top-0 inset-x-0 h-16 lg:hidden pointer-events-none"
              style={{ background: "linear-gradient(to bottom, rgba(252,239,225,0.6), transparent)" }}
            />
          </div>

          {/* Texto — coluna esquerda */}
          <div className="relative z-10 flex items-center lg:bg-cream px-6 md:px-12 lg:px-16 xl:px-20 py-16 lg:py-24 -mt-72 lg:mt-0">
            {/* Gradiente mobile (transição foto → conteúdo) */}
            <div
              className="absolute inset-0 lg:hidden pointer-events-none"
              style={{ background: "linear-gradient(to bottom, transparent 0%, #fcefe1 7rem)" }}
            />

            <div className="relative max-w-xl">

              <div className="mb-6" data-aos="fade-up">
                <p className="eyebrow">{eyebrow}</p>
              </div>

              <h1
                className="display text-ink"
                data-aos="fade-up"
                data-aos-delay="80"
                style={{ fontSize: "clamp(2rem, 3.2vw, 4rem)" }}
              >
                {title}
              </h1>

              {subtitle && (
                <p
                  className="mt-5 max-w-md font-body leading-relaxed text-ink-soft"
                  data-aos="fade-up"
                  data-aos-delay="160"
                  style={{ fontSize: "clamp(0.875rem, 1vw, 1.05rem)" }}
                >
                  {subtitle}
                </p>
              )}

              {cta && (
                <div
                  className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
                  data-aos="fade-up"
                  data-aos-delay="220"
                >
                  <a
                    href={whatsappLink(cta)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    {ctaLabel}
                  </a>
                  {seal && (
                    <p className="font-body text-[11px] uppercase tracking-[0.14em] text-ink/35">
                      {seal}
                    </p>
                  )}
                </div>
              )}

              <div
                className="mt-10 flex gap-8 font-body text-[11px] uppercase tracking-[0.16em] text-ink/30"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <span>CRM-CE 6123</span>
                <span>Fortaleza — CE</span>
              </div>

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
