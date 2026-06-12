import Link from "next/link";
import { clinic, whatsappLink } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-cream">
      <div className="wrap py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl">Fabiana Lustosa</p>
            <p className="mt-2 font-body text-sm uppercase tracking-eyebrow text-gold">
              Endocrinologia · Fortaleza
            </p>
            <p className="mt-6 max-w-sm font-body text-sm leading-relaxed text-cream/70">
              Investigar a causa antes de tratar o sintoma. Emagrecimento,
              diabetes, menopausa e reposição hormonal com acompanhamento real.
            </p>
            <p className="mt-6 font-body text-xs tracking-wide text-cream/50">
              {clinic.crm} · {clinic.rqe}
            </p>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-eyebrow text-gold">
              Navegação
            </p>
            <ul className="mt-5 space-y-3 font-body text-sm text-cream/75">
              <li>
                <Link href="/" className="hover:text-gold">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/#tratamentos" className="hover:text-gold">
                  Tratamentos
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-gold">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/emagrecimento" className="hover:text-gold">
                  Emagrecimento
                </Link>
              </li>
              <li>
                <Link href="/menopausa" className="hover:text-gold">
                  Menopausa
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-eyebrow text-gold">
              Contato
            </p>
            <ul className="mt-5 space-y-3 font-body text-sm text-cream/75">
              <li>{clinic.building}</li>
              <li>{clinic.addressLine}</li>
              <li>{clinic.addressArea}</li>
              <li className="pt-2">
                <a
                  href={whatsappLink("Olá, gostaria de agendar uma consulta.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  WhatsApp {clinic.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${clinic.email}`} className="hover:text-gold">
                  {clinic.email}
                </a>
              </li>
              <li>
                <a
                  href={clinic.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  @{clinic.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-cream/15 pt-8 font-body text-xs text-cream/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} Dra. Fabiana Lustosa — Endocrinologista em Fortaleza CE
          </p>
          <p>{clinic.hours}</p>
        </div>
      </div>
    </footer>
  );
}
