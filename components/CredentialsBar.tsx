import { credentials } from "@/lib/content";

export default function CredentialsBar() {
  return (
    <section className="border-y border-gold/40 bg-cream">
      <div className="wrap">
        <ul className="grid grid-cols-2 divide-gold/30 md:grid-cols-4 md:divide-x">
          {credentials.map((c, i) => (
            <li
              key={c}
              className="flex items-center justify-center gap-3 py-6 md:py-8"
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              <span className="text-gold" aria-hidden="true">
                ✦
              </span>
              <span className="font-body text-xs uppercase tracking-[0.18em] text-ink-soft md:text-[13px]">
                {c}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
