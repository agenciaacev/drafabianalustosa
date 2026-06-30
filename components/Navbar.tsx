"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { clinic, whatsappLink } from "@/lib/content";

const nav = [
  { label: "Início", href: "/" },
  { label: "Tratamentos", href: "/#tratamentos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Contato", href: "/#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const hamburguerBranco = pathname === "/emagrecimento" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_rgba(202,177,149,0.4)]"
          : open
          ? "bg-cream"
          : "bg-transparent"
      }`}
    >
      <div className="wrap flex h-20 items-center justify-between">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex flex-col leading-none"
          aria-label="Dra. Fabiana Lustosa — início"
        >
          <span className="font-display text-xl tracking-tight text-ink">
            Fabiana Lustosa
          </span>
          <span className="mt-1 font-body text-[10px] uppercase tracking-eyebrow text-taupe">
            Endocrinologia
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline font-body text-[13px] uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappLink("Olá, gostaria de agendar uma consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-3 !px-6 !text-[11px]"
          >
            Agendar
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <span
            className={`h-px w-7 transition-all duration-300 ${hamburguerBranco ? "bg-white" : "bg-ink"} ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-7 transition-all duration-300 ${hamburguerBranco ? "bg-white" : "bg-ink"} ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-7 transition-all duration-300 ${hamburguerBranco ? "bg-white" : "bg-ink"} ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

    </header>

      {/* Mobile menu — fora do <header> para não ser limitado pelo backdrop-blur */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-cream px-6 pt-28 transition-all duration-500 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-gold/30 py-5 font-display text-3xl text-ink"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={whatsappLink("Olá, gostaria de agendar uma consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="btn-primary mt-10 w-full"
        >
          Agendar pelo WhatsApp
        </a>
      </div>
    </>
  );
}
