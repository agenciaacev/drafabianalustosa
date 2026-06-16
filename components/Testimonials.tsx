"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { testimonials } from "@/lib/content";

// Duplicate so we can seamlessly loop: real items + clone of first N
const CLONE_COUNT = 3;
const ITEMS = [...testimonials, ...testimonials.slice(0, CLONE_COUNT)];
const LEN = testimonials.length;
const GAP = 24; // gap-6 = 24px

function Stars() {
  return (
    <span className="text-gold" aria-label="5 de 5 estrelas">
      ★★★★★
    </span>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Google">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const touchStartX = useRef(0);
  const [activeDot, setActiveDot] = useState(0);

  const cardStep = useCallback(() => {
    const card = firstCardRef.current;
    return card ? card.offsetWidth + GAP : 0;
  }, []);

  const slideTo = useCallback((index: number, animated = true) => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = animated ? "transform 600ms ease-in-out" : "none";
    track.style.transform = `translateX(-${index * cardStep()}px)`;
    posRef.current = index;
    setActiveDot(index % LEN);
  }, [cardStep]);

  const next = useCallback(() => {
    const next = posRef.current + 1;
    slideTo(next);
    // When we enter the clone zone, silently jump back after animation
    if (next >= LEN) {
      setTimeout(() => {
        slideTo(next - LEN, false);
      }, 620);
    }
  }, [slideTo]);

  const prev = useCallback(() => {
    const p = posRef.current - 1;
    if (p < 0) {
      // Jump silently to the end of real items, then slide left
      slideTo(LEN - 1, false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => slideTo(LEN - 1));
      });
    } else {
      slideTo(p);
    }
  }, [slideTo]);

  // Auto-play
  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  // Recalculate on resize
  useEffect(() => {
    const onResize = () => slideTo(posRef.current, false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [slideTo]);

  return (
    <section id="depoimentos" className="scroll-mt-20 bg-cream py-24 md:py-36">
      <div className="wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div data-aos="fade-up">
            <p className="eyebrow">O que pacientes dizem</p>
            <h2 className="display mt-6 max-w-xl text-4xl text-ink md:text-5xl">
              Confiança construída uma consulta de cada vez
            </h2>
          </div>
          <div
            className="flex items-center gap-2 font-body text-sm text-taupe"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            <GoogleIcon />
            <span>Avaliações verificadas no Google · média 5.0 ★</span>
          </div>
        </div>

        <div
          className="mt-16 overflow-hidden"
          data-aos="fade-up"
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const diff = touchStartX.current - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
          }}
        >
          <div ref={trackRef} className="flex gap-6 will-change-transform">
            {ITEMS.map((t, i) => (
              <figure
                key={i}
                ref={i === 0 ? firstCardRef : undefined}
                className="flex-none w-[85vw] sm:w-[45vw] lg:w-[calc(33.333%-1rem)] flex flex-col rounded-2xl border border-gold/40 bg-[#fdf4ea] p-8"
              >
                <div className="flex items-center justify-between">
                  <Stars />
                  <GoogleIcon />
                </div>
                <blockquote className="mt-5 flex-1 font-display text-xl leading-snug text-ink">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-gold/40 pt-5">
                  <p className="font-body text-sm font-medium text-ink">{t.name}</p>
                  <p className="mt-1 font-body text-xs uppercase tracking-[0.12em] text-taupe">
                    {t.date}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => slideTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeDot ? "w-6 bg-ink" : "w-1.5 bg-gold/50"
                }`}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-ink transition-colors hover:border-ink"
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-ink transition-colors hover:border-ink"
              aria-label="Próximo"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
