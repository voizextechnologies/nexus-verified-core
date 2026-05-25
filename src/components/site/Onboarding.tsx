import { SectionHeader } from "./Products";

const steps = [
  { n: "01", t: "Consultation", d: "Discovery with our solutions team to map verification flows, regulatory scope and data boundaries.", time: "Week 1" },
  { n: "02", t: "API Access", d: "Sandbox keys, environment provisioning, SSO setup and dedicated Slack/Teams bridge.", time: "Week 1" },
  { n: "03", t: "Integration", d: "SDKs for backend, web and mobile. Drop-in journeys or fully composed APIs.", time: "Week 2–3" },
  { n: "04", t: "Testing", d: "Synthetic fixtures, edge-case packs, load testing and regulatory UAT with reviewer queues.", time: "Week 3–4" },
  { n: "05", t: "Go Live", d: "Production cut-over, on-call coverage, fraud baselining and quarterly reviews.", time: "Week 4+" },
];

export function Onboarding() {
  return (
    <section className="relative py-28 bg-silver/40">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Onboarding"
          title={<>From first call to <span className="font-display italic font-normal text-gradient">production traffic</span> in four weeks.</>}
          subtitle="A disciplined onboarding programme run by an assigned solutions architect and a named customer engineer."
        />

        <div className="mt-14 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent" />

          <div className="grid lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-white border border-border shadow-[0_4px_20px_-4px_oklch(0.28_0.12_262/0.2)]">
                  <span className="font-display text-[18px] text-brand-deep">{s.n}</span>
                </div>
                <div className="mt-5">
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-[16px] font-semibold text-ink">{s.t}</h4>
                    <span className="text-[10px] font-mono text-ink-soft/70">{s.time}</span>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-soft pr-2">{s.d}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-14 right-[-12px] h-px">
                    <svg width="100%" height="2"><line x1="0" y1="1" x2="100%" y2="1" stroke="oklch(0.45 0.16 262)" strokeOpacity="0.4" strokeDasharray="4 4" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
