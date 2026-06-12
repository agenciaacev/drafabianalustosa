import Image from "next/image";
import { forWho, whatsappLink } from "@/lib/content";

export default function ForWho() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="absolute inset-0">
        <Image
          src="/images/sitting-wide.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 to-ink/40" />
      </div>

      <div className="wrap relative z-10">
        <div className="max-w-2xl" data-aos="fade-up">
          <p className="eyebrow !text-gold before:!bg-gold">
            Para quem é esse acompanhamento
          </p>
          <h2 className="display mt-6 text-4xl text-cream md:text-5xl">
            Esse acompanhamento é para você que…
          </h2>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-cream/15 bg-cream/10 sm:grid-cols-2">
          {forWho.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-5 bg-ink/40 p-7 backdrop-blur-sm md:p-8"
              data-aos="fade-up"
              data-aos-delay={(i % 2) * 80}
            >
              <span className="font-display text-xl italic text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-body text-[15px] leading-relaxed text-cream/90">
                {item}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12" data-aos="fade-up">
          <a
            href={whatsappLink(
              "Olá, Dra. Fabiana. Me identifiquei com o acompanhamento e gostaria de agendar."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-light"
          >
            Quero agendar minha consulta
          </a>
        </div>
      </div>
    </section>
  );
}
