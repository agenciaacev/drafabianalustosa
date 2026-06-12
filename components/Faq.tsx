"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-[#f7e7d6] py-24 md:py-36">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start" data-aos="fade-up">
            <p className="eyebrow">Perguntas frequentes</p>
            <h2 className="display mt-6 text-4xl text-ink md:text-5xl">
              O que você precisa saber antes de marcar
            </h2>
          </div>

          <div data-aos="fade-up" data-aos-delay="80">
            <ul className="border-t border-gold/50">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={i} className="border-b border-gold/50">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-xl text-ink md:text-2xl">
                        {f.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border border-gold text-gold transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-7 pr-12 font-body text-base leading-relaxed text-ink-soft">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
