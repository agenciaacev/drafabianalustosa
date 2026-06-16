import { clinic, whatsappLink } from "@/lib/content";

export default function Location() {
  return (
    <section id="contato" className="scroll-mt-20 bg-cream py-24 md:py-36">
      <div className="wrap">
        <div className="overflow-hidden rounded-3xl bg-ink text-cream">
          <div className="grid lg:grid-cols-2">
            {/* Map */}
            <div className="relative min-h-[360px] lg:min-h-full overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Harmony+Medical+Center+Av+Dom+Luis+1233+Meireles+Fortaleza+CE&output=embed&z=17&hl=pt-BR"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Dra. Fabiana Lustosa"
              />
            </div>

            {/* Info */}
            <div className="p-8 md:p-10 lg:p-12">
              <p
                className="eyebrow !text-gold before:!bg-gold"
                data-aos="fade-up"
              >
                Agende sua consulta
              </p>
              <h2
                className="display mt-6 text-4xl md:text-5xl"
                data-aos="fade-up"
                data-aos-delay="60"
              >
                A primeira consulta é o começo de uma investigação real.
              </h2>
              <p
                className="mt-6 font-body text-base leading-relaxed text-cream/75"
                data-aos="fade-up"
                data-aos-delay="120"
              >
                Não uma prescrição genérica. Uma conversa séria sobre o que está
                acontecendo com o seu corpo e o que pode melhorar.
              </p>

              <dl
                className="mt-6 space-y-4 border-t border-cream/15 pt-6 font-body text-sm"
                data-aos="fade-up"
                data-aos-delay="160"
              >
                <div>
                  <dt className="text-xs uppercase tracking-eyebrow text-gold">
                    Endereço
                  </dt>
                  <dd className="mt-2 text-cream/85">
                    {clinic.building}
                    <br />
                    {clinic.addressLine}
                    <br />
                    {clinic.addressArea}
                  </dd>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs uppercase tracking-eyebrow text-gold">
                      WhatsApp
                    </dt>
                    <dd className="mt-2 text-cream/85">
                      {clinic.whatsappDisplay}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-eyebrow text-gold">
                      Atendimento
                    </dt>
                    <dd className="mt-2 text-cream/85">{clinic.hours}</dd>
                  </div>
                </div>
              </dl>

              <div
                className="mt-6 flex flex-col gap-4 sm:flex-row"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a
                  href={whatsappLink(
                    "Olá, Dra. Fabiana. Gostaria de agendar uma consulta."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-light"
                >
                  Agendar pelo WhatsApp
                </a>
                <a
                  href={clinic.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-8 py-4 font-body text-[13px] font-medium uppercase tracking-[0.18em] text-cream transition-colors hover:border-gold hover:text-gold"
                >
                  Ver rotas no mapa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
