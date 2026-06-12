import { whatsappLink } from "@/lib/content";

export default function CtaBanner({
  title = "Pronta para investigar o que está acontecendo de verdade?",
  message = "Olá, Dra. Fabiana. Gostaria de agendar uma consulta.",
}: {
  title?: string;
  message?: string;
}) {
  return (
    <section className="bg-cream pb-24 md:pb-36">
      <div className="wrap">
        <div
          className="rounded-3xl bg-ink px-8 py-16 text-center text-cream md:px-16 md:py-20"
          data-aos="fade-up"
        >
          <h2 className="display mx-auto max-w-3xl text-3xl md:text-[2.8rem]">
            {title}
          </h2>
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-light mt-10"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
