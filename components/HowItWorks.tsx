import Image from "next/image";
import { process } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section className="bg-cream py-24 md:py-36">
      <div className="wrap">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          {/* Sticky photo (landscape) */}
          <div className="lg:sticky lg:top-28 lg:self-start" data-aos="fade-up">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/standing.jpg"
                alt="Dra. Fabiana Lustosa em seu consultório"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-[30%_center]"
              />
            </div>
            <div className="mt-8 max-w-sm">
              <p className="eyebrow">Como funciona o acompanhamento</p>
              <p className="mt-5 font-display text-2xl text-ink md:text-3xl">
                Um processo pensado para quem quer resultado real, não consulta
                única e boa sorte.
              </p>
            </div>
          </div>

          {/* Steps */}
          <ol className="flex flex-col">
            {process.map((p, i) => (
              <li
                key={p.n}
                className="border-t border-gold/40 py-10 first:border-t-0 first:pt-0"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-display text-3xl italic text-gold">
                    {p.n}
                  </span>
                  <h3 className="font-display text-2xl text-ink md:text-[1.7rem]">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-4 pl-0 font-body text-base leading-relaxed text-ink-soft md:pl-[3.7rem]">
                  {p.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
