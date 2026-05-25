import { Counter } from "./Counter";
import { CheckCircle2, Shield, ArrowUpRight, Activity } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid radial-fade" />
        <div className="absolute left-1/2 top-[-200px] -translate-x-1/2 h-[700px] w-[1200px] rounded-full bg-[radial-gradient(closest-side,oklch(0.68_0.18_255/0.18),transparent)]" />
        <div className="absolute right-[-100px] top-[260px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,oklch(0.45_0.16_262/0.18),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 backdrop-blur px-3 py-1 text-[12px] text-ink-soft animate-rise">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-60 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
              </span>
              <span>Verification engine — operating at 99.99% uptime</span>
            </div>

            <h1 className="mt-6 text-[44px] sm:text-6xl lg:text-[68px] leading-[1.02] font-semibold tracking-[-0.03em] text-ink animate-rise">
              <span className="block">Enterprise Verification</span>
              <span className="block">
                Infrastructure <span className="font-display italic font-normal text-gradient">built for scale.</span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-ink-soft animate-rise">
              Stromont Consulting powers secure digital identity verification and KYC
              automation for banks, fintechs, telecom operators and government
              agencies — through a single, developer-first API layer.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 animate-rise">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white hover:bg-brand-deep transition-all hover:gap-3"
              >
                Get started
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-medium text-ink hover:border-ink/30 transition-colors"
              >
                Book a consultation
              </a>
              <a
                href="#infra"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-ink-soft hover:text-ink transition-colors"
              >
                Explore APIs →
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-[12px] text-ink-soft/80">
              <div className="flex items-center gap-2"><Shield className="h-3.5 w-3.5 text-brand" />ISO 27001 aligned</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-brand" />RBI / UIDAI compliant patterns</div>
              <div className="flex items-center gap-2"><Activity className="h-3.5 w-3.5 text-brand" />SOC 2 controls</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-brand" />GDPR ready</div>
            </div>
          </div>

          {/* Right: cinematic verification card */}
          <div className="lg:col-span-5 relative">
            <HeroVisual />
          </div>
        </div>

        {/* Bottom stat strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-border bg-border/60">
          {[
            { k: "API requests processed", v: <><Counter to={2.4} decimals={1} />B+</> },
            { k: "Verification success rate", v: <><Counter to={99.97} decimals={2} />%</> },
            { k: "Enterprise clients", v: <><Counter to={420} suffix="+" /></> },
            { k: "Avg response time", v: <><Counter to={184} suffix=" ms" /></> },
          ].map((s, i) => (
            <div key={i} className="bg-white p-6">
              <div className="text-[12px] uppercase tracking-[0.14em] text-ink-soft/70">{s.k}</div>
              <div className="mt-2 text-3xl font-semibold tracking-tight text-ink font-display">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative h-[520px]">
      {/* Main verification panel */}
      <div className="absolute inset-0 rounded-2xl glass p-5 glow-ring">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="grid h-7 w-7 place-items-center rounded-md bg-ink text-white text-[10px] font-semibold">ID</div>
            <div>
              <div className="text-[12px] font-medium text-ink">Verification session</div>
              <div className="text-[10px] text-ink-soft font-mono">ses_8f9a3b21c0e7</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-dot" /> Live
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-border bg-white/80 p-4">
          <div className="flex items-center justify-between">
            <div className="text-[11px] uppercase tracking-[0.12em] text-ink-soft/70">Applicant</div>
            <div className="text-[10px] font-mono text-ink-soft/70">IN · Tier-1</div>
          </div>
          <div className="mt-2 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand to-brand-deep grid place-items-center text-white font-semibold text-sm">AR</div>
            <div>
              <div className="text-sm font-medium text-ink">Arjun Ramaswamy</div>
              <div className="text-[11px] text-ink-soft">Onboarding · KYC + KYB</div>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            {[
              { l: "Aadhaar XML", s: "verified" },
              { l: "PAN", s: "verified" },
              { l: "Face match", s: "running" },
              { l: "Liveness", s: "queued" },
            ].map((r, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-border/70 bg-white px-3 py-2">
                <div className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${
                    r.s === "verified" ? "bg-emerald-500"
                    : r.s === "running" ? "bg-brand animate-pulse-dot"
                    : "bg-ink-soft/30"
                  }`} />
                  <span className="text-[12px] text-ink">{r.l}</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-mono text-ink-soft/80">{r.s}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 relative h-1 rounded-full bg-silver overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-[68%] rounded-full bg-gradient-to-r from-brand-deep to-brand" />
            <div className="absolute inset-y-0 w-1/3 -skew-x-12 bg-white/40 animate-shimmer" />
          </div>
          <div className="mt-1.5 flex justify-between text-[10px] font-mono text-ink-soft">
            <span>Risk score · 12 / 100</span><span>ETA 2.1s</span>
          </div>
        </div>
      </div>

      {/* Floating API card */}
      <div className="absolute -left-6 top-6 w-[260px] rounded-xl border border-border bg-ink text-white p-3 shadow-2xl shadow-brand/20 animate-float">
        <div className="flex items-center justify-between text-[10px] font-mono text-white/60">
          <span className="flex items-center gap-1.5">
            <span className="rounded-sm bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 text-[9px]">POST</span>
            /verify/aadhaar
          </span>
          <span>200 · 184ms</span>
        </div>
        <pre className="mt-2 text-[10.5px] leading-[1.55] font-mono text-white/90">
{`{
  "status": "verified",
  "name_match": 0.98,
  "dob_match": true,
  "ref": "axn_91e2"
}`}
        </pre>
      </div>

      {/* Floating face-match badge */}
      <div className="absolute -right-4 bottom-10 w-[210px] rounded-xl glass p-3 animate-float" style={{ animationDelay: "1.2s" }}>
        <div className="text-[10px] uppercase tracking-[0.12em] text-ink-soft/70">Face match</div>
        <div className="mt-2 flex items-end gap-2">
          <div className="text-3xl font-semibold text-ink font-display">99.4<span className="text-base text-ink-soft">%</span></div>
          <div className="text-[10px] text-emerald-600 mb-1.5">+ liveness passed</div>
        </div>
        <div className="mt-2 flex gap-1">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className="h-4 w-1 rounded-sm bg-brand" style={{ opacity: 0.2 + (i / 14) * 0.8 }} />
          ))}
        </div>
      </div>
    </div>
  );
}
