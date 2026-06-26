"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface Props {
  antes: string | null;
  depois: string | null;
  label: string;
  period: string;
  detail: string;
  aos?: string;
  aosDelay?: number;
}

function SlotPlaceholder({ shade }: { shade: "light" | "dark" }) {
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center gap-3 ${
        shade === "dark" ? "bg-gold/20" : "bg-gold/10"
      }`}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-gold/40"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
        />
      </svg>
      <p className="font-body text-[11px] uppercase tracking-widest text-gold/40">
        adicionar foto
      </p>
    </div>
  );
}

export default function BeforeAfterSlider({
  antes,
  depois,
  label,
  period,
  detail,
  aos,
  aosDelay,
}: Props) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const getPercent = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return 50;
    const { left, width } = el.getBoundingClientRect();
    return Math.max(4, Math.min(96, ((clientX - left) / width) * 100));
  }, []);

  useEffect(() => {
    const up = () => { dragging.current = false; };
    window.addEventListener("mouseup", up);
    return () => window.removeEventListener("mouseup", up);
  }, []);

  const onMouseDown = () => { dragging.current = true; };
  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!dragging.current) return;
      setPosition(getPercent(e.clientX));
    },
    [getPercent]
  );
  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      setPosition(getPercent(e.touches[0].clientX));
    },
    [getPercent]
  );

  return (
    <article
      className="overflow-hidden rounded-2xl border border-gold/40 bg-cream"
      data-aos={aos}
      data-aos-delay={aosDelay}
    >
      {/* ── Slider ── */}
      <div
        ref={containerRef}
        className="relative aspect-[3/4] select-none overflow-hidden cursor-ew-resize"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
      >
        {/* ANTES — base layer */}
        <div className="pointer-events-none absolute inset-0">
          {antes ? (
            <Image
              src={antes}
              fill
              sizes="(max-width: 768px) 90vw, 33vw"
              className="object-cover"
              alt="Antes"
              draggable={false}
            />
          ) : (
            <SlotPlaceholder shade="light" />
          )}
          <span className="absolute left-3 top-3 z-10 rounded-full bg-ink/65 px-3 py-1 font-body text-[11px] uppercase tracking-widest text-cream/90 backdrop-blur-sm">
            Antes
          </span>
        </div>

        {/* DEPOIS — clipped from left at position% */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
          {depois ? (
            <Image
              src={depois}
              fill
              sizes="(max-width: 768px) 90vw, 33vw"
              className="object-cover"
              alt="Depois"
              draggable={false}
            />
          ) : (
            <SlotPlaceholder shade="dark" />
          )}
          <span className="absolute right-3 top-3 z-10 rounded-full bg-gold px-3 py-1 font-body text-[11px] uppercase tracking-widest text-ink">
            Depois
          </span>
        </div>

        {/* ── Divider + handle ── */}
        <div
          className="pointer-events-none absolute inset-y-0 z-30"
          style={{ left: `${position}%` }}
        >
          {/* line — centered on the position point */}
          <div className="absolute inset-y-0 w-[2px] -translate-x-1/2 bg-white shadow-[0_0_6px_rgba(0,0,0,0.25)]" />
          {/* handle — centered on the position point */}
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-black/10">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-ink/60"
            >
              <path d="M8 6L3 12L8 18" />
              <path d="M16 6L21 12L16 18" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Caption ── */}
      <div className="p-6">
        <p className="font-body text-[11px] uppercase tracking-[0.12em] text-gold">
          {label} · {period}
        </p>
        <p className="mt-2 font-body text-sm leading-relaxed text-ink-soft">
          {detail}
        </p>
      </div>
    </article>
  );
}
