"use client";

import { useState, useEffect, useRef } from "react";

const BEFORE = "A maioria dos meus pacientes chegou depois de ";
const ITALIC = "anos tentando";
const AFTER = " emagrecer, controlar o açúcar no sangue ou sobreviver à menopausa.";
const FULL = BEFORE + ITALIC + AFTER;

export default function Intro() {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || count >= FULL.length) return;
    const id = setTimeout(() => setCount((c) => c + 1), 65);
    return () => clearTimeout(id);
  }, [started, count]);

  const done = count >= FULL.length;

  function renderTyped() {
    const typed = FULL.slice(0, count);
    const b1 = Math.min(count, BEFORE.length);
    const b2 = Math.min(count, BEFORE.length + ITALIC.length);
    const b3 = count;

    return (
      <>
        {typed.slice(0, b1)}
        {b2 > b1 && (
          <span className="italic text-taupe">{typed.slice(b1, b2)}</span>
        )}
        {b3 > b2 && typed.slice(b2, b3)}
        {!done && (
          <span className="animate-pulse opacity-60">|</span>
        )}
      </>
    );
  }

  return (
    <section ref={sectionRef} className="bg-cream py-24 md:py-36">
      <div className="wrap">
        <div className="mx-auto max-w-3xl text-center">
          <p className="display text-3xl text-ink md:text-[2.6rem]">
            {renderTyped()}
          </p>
          <p
            className="mt-8 font-body text-base leading-relaxed text-ink-soft md:text-lg"
            data-aos="fade-up"
          >
            A endocrinologia existe exatamente para investigar o que está por
            baixo dos sintomas — hormônios, metabolismo, composição corporal —
            e criar um plano que funcione para a sua vida real, não para um
            manual genérico.
          </p>
        </div>
      </div>
    </section>
  );
}
