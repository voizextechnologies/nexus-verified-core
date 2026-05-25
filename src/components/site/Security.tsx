import { SectionHeader } from "./Products";
import { Lock, KeyRound, FileLock2, FileSearch, ServerCog, Eye } from "lucide-react";

const items = [
  { i: Lock, t: "End-to-end encryption", d: "TLS 1.3 in transit, AES-256 at rest, envelope keys rotated per region." },
  { i: KeyRound, t: "API authentication", d: "Scoped keys, JWT + mTLS, signed webhooks, IP allowlists per environment." },
  { i: FileLock2, t: "Secure data handling", d: "Field-level tokenization for Aadhaar, PAN and biometrics. Zero raw retention by default." },
  { i: FileSearch, t: "Immutable audit logs", d: "Append-only ledger of every input, decision, reviewer action and consent artifact." },
  { i: Eye, t: "Access controls", d: "RBAC + ABAC, SSO/SAML, SCIM, just-in-time elevation with full session capture." },
  { i: ServerCog, t: "Infrastructure security", d: "Isolated VPCs, HSM-backed keys, continuous SCA/SAST, quarterly third-party pen tests." },
];

export function Security() {
  return (
    <section id="security" className="relative py-28 bg-silver/40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Security & compliance"
              title={<>Trust isn't a feature — it's the <span className="font-display italic font-normal text-gradient">substrate.</span></>}
              subtitle="Built to meet the controls demanded by banks, regulators and government issuers from day one."
            />
            <ShieldGraphic />
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-px rounded-2xl overflow-hidden border border-border bg-border">
              {items.map((it, i) => {
                const Ic = it.i;
                return (
                  <div key={i} className="bg-white p-6">
                    <div className="grid h-9 w-9 place-items-center rounded-md bg-ink text-white">
                      <Ic className="h-4 w-4" strokeWidth={1.8} />
                    </div>
                    <h4 className="mt-4 text-[15px] font-semibold text-ink">{it.t}</h4>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">{it.d}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-white px-5 py-4">
              {["ISO 27001", "SOC 2 Type II", "PCI DSS", "GDPR", "RBI", "UIDAI"].map((b) => (
                <span key={b} className="rounded-full border border-border bg-silver/60 px-3 py-1 text-[11px] font-mono text-ink-soft">
                  {b}
                </span>
              ))}
              <span className="ml-auto text-[11px] text-ink-soft/70">Compliance reports available under NDA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShieldGraphic() {
  return (
    <div className="mt-10 relative aspect-square max-w-sm">
      <svg viewBox="0 0 320 320" className="w-full h-full">
        <defs>
          <linearGradient id="sg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.68 0.18 255)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="oklch(0.28 0.12 262)" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {/* Concentric rings */}
        {[140, 110, 80, 50].map((r, i) => (
          <circle key={i} cx="160" cy="160" r={r}
            fill="none" stroke="oklch(0.45 0.16 262)" strokeOpacity={0.15 - i * 0.02} strokeDasharray={i % 2 ? "2 6" : "0"} />
        ))}
        {/* Shield */}
        <path
          d="M160 50 L240 80 V160 C240 210 205 250 160 270 C115 250 80 210 80 160 V80 Z"
          fill="url(#sg)"
          stroke="oklch(0.28 0.12 262)"
          strokeWidth="1.5"
          className="animate-draw"
        />
        <path d="M125 165 L150 190 L200 135" fill="none" stroke="oklch(0.28 0.12 262)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {/* Orbiting dots */}
        {[0, 90, 180, 270].map((a, i) => {
          const rad = (a * Math.PI) / 180;
          const x = 160 + 140 * Math.cos(rad);
          const y = 160 + 140 * Math.sin(rad);
          return <circle key={i} cx={x} cy={y} r="4" fill="oklch(0.45 0.16 262)" />;
        })}
      </svg>
    </div>
  );
}
