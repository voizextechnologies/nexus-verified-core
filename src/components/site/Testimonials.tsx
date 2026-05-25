import { SectionHeader } from "./Products";

export function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Customer evidence"
          title={<>What risk and engineering leaders <span className="font-display italic font-normal text-gradient">say.</span></>}
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-6">
          {/* Featured quote */}
          <figure className="lg:col-span-7 rounded-2xl border border-border bg-gradient-to-br from-white to-silver/50 p-10 relative overflow-hidden">
            <svg className="absolute right-6 top-6 opacity-[0.08]" width="120" height="120" viewBox="0 0 100 100" fill="oklch(0.28 0.12 262)">
              <path d="M0 80V50C0 22 15 5 40 0L43 10C28 16 21 28 20 42H40V80H0zM55 80V50C55 22 70 5 95 0L98 10C83 16 76 28 75 42H95V80H55z"/>
            </svg>
            <blockquote className="relative font-display text-[28px] sm:text-[34px] leading-[1.18] tracking-[-0.02em] text-ink">
              “Stromont replaced four verification vendors with one orchestration layer. We
              cut onboarding drop-off by 31% in the first quarter and the audit story
              finally tells itself.”
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-deep to-brand grid place-items-center text-white text-sm font-semibold">PV</div>
              <div>
                <div className="text-[13px] font-semibold text-ink">Priya Venkatesan</div>
                <div className="text-[11.5px] text-ink-soft">VP Risk · Tier-1 Indian private bank</div>
              </div>
            </figcaption>
          </figure>

          {/* Side quotes */}
          <div className="lg:col-span-5 grid gap-6">
            {[
              { q: "The single best engineering experience we've had with a verification provider. Their idempotent contracts saved us during a peak surge.", a: "Karan Mehta", r: "Head of Platform · Consumer fintech" },
              { q: "Procurement, security and InfoSec all signed off in one cycle. That's a first.", a: "Anita Rao", r: "CISO · NBFC" },
            ].map((t, i) => (
              <figure key={i} className="rounded-2xl border border-border bg-white p-6">
                <blockquote className="text-[15px] leading-[1.55] text-ink">“{t.q}”</blockquote>
                <figcaption className="mt-5 flex items-center justify-between">
                  <div>
                    <div className="text-[12.5px] font-semibold text-ink">{t.a}</div>
                    <div className="text-[11px] text-ink-soft">{t.r}</div>
                  </div>
                  <span className="text-[10px] font-mono text-ink-soft/60">CASE STUDY →</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
