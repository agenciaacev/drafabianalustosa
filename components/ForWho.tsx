import Image from "next/image";
import { forWho, whatsappLink } from "@/lib/content";

function Check() {
  return (
    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-gold text-gold text-xs">
      ✓
    </span>
  );
}

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

        <ul className="mt-14 grid gap-3 sm:grid-cols-2">
          {forWho.map((item, i) => {
            const isLastOdd = i === forWho.length - 1 && forWho.length % 2 !== 0;
            return (
              <li
                key={i}
                className={`flex items-start gap-4 rounded-xl border border-cream/15 bg-cream/10 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-cream/15 ${
                  isLastOdd ? "sm:col-span-2 sm:max-w-[calc(50%-0.375rem)] sm:mx-auto" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={(i % 2) * 80}
              >
                <Check />
                <p className="font-body text-[15px] leading-relaxed text-cream/90">
                  {item}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 flex justify-center" data-aos="fade-up">
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
