import { SectionHeader } from "./Products";

export function Infrastructure() {
  return (
    <section id="infra" className="relative py-28 bg-ink text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0 bg-grid-fine" style={{ filter: "invert(1)" }} />
      </div>
      <div className="absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(closest-side,oklch(0.68_0.18_255/0.25),transparent)]" />
      <div className="absolute right-[-100px] bottom-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(closest-side,oklch(0.45_0.16_262/0.35),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-brand-glow">
            <span className="h-px w-6 bg-brand-glow/60" /> API infrastructure
          </div>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-[-0.025em] leading-[1.05] text-balance">
            A single pipeline from request <span className="font-display italic font-normal text-white/60">to verdict.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-white/70 text-[16px] leading-[1.6]">
            Every verification flows through the same hardened pipeline — signed at the edge,
            orchestrated across providers, fused into a single decision, and streamed back with
            full audit context.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-6">
          {/* Pipeline diagram */}
          <div className="lg:col-span-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
            <Pipeline />
          </div>

          {/* Code panel */}
          <div className="lg:col-span-4 space-y-4">
            <CodeCard
              method="POST"
              endpoint="/v1/verify/pan"
              body={`{
  "pan": "ABCDE1234F",
  "name": "Arjun Ramaswamy",
  "consent": true
}`}
            />
            <CodeCard
              method="POST"
              endpoint="/v1/face/match"
              body={`{
  "source": "img_8a2…",
  "target": "img_71f…",
  "threshold": 0.92
}`}
              dim
            />
          </div>
        </div>

        {/* Capability strip */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/10 bg-white/10">
          {[
            { k: "Signed mTLS", v: "Edge-to-core mutual TLS with HSM-backed keys." },
            { k: "Idempotent", v: "Safe retries with deterministic request keys." },
            { k: "Streamed verdicts", v: "Webhook + server-sent events for long flows." },
            { k: "Audit-immutable", v: "Append-only ledger of every decision input." },
          ].map((c, i) => (
            <div key={i} className="bg-ink p-5">
              <div className="text-[12px] font-mono text-brand-glow">{c.k}</div>
              <div className="mt-1.5 text-[13.5px] text-white/75 leading-relaxed">{c.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CodeCard({ method, endpoint, body, dim = false }: { method: string; endpoint: string; body: string; dim?: boolean }) {
  return (
    <div className={`rounded-xl border border-white/10 bg-[#0a0d1a] p-4 ${dim ? "opacity-70" : ""}`}>
      <div className="flex items-center justify-between text-[10px] font-mono">
        <span className="flex items-center gap-2">
          <span className="rounded-sm bg-emerald-500/15 text-emerald-300 px-1.5 py-0.5">{method}</span>
          <span className="text-white/70">{endpoint}</span>
        </span>
        <span className="text-white/40">200 OK</span>
      </div>
      <pre className="mt-3 text-[11.5px] leading-[1.6] font-mono text-white/85 overflow-x-auto">{body}</pre>
    </div>
  );
}

function Pipeline() {
  const stages = [
    { t: "Ingest", d: "Edge auth · mTLS · rate-shape" },
    { t: "Orchestrate", d: "Provider routing · fallback graph" },
    { t: "Fuse", d: "Risk · biometrics · document" },
    { t: "Decide", d: "Policy engine · reviewer queue" },
    { t: "Stream", d: "Webhook · audit ledger" },
  ];
  return (
    <div>
      <div className="grid grid-cols-5 gap-3 text-center">
        {stages.map((s, i) => (
          <div key={i} className="relative">
            <div className="mx-auto h-10 w-10 rounded-full border border-white/15 bg-white/[0.04] grid place-items-center text-[12px] font-mono text-brand-glow">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="mt-3 text-[12.5px] font-medium text-white">{s.t}</div>
            <div className="mt-1 text-[10.5px] text-white/55 leading-snug">{s.d}</div>
          </div>
        ))}
      </div>

      {/* Animated flow */}
      <svg viewBox="0 0 800 220" className="mt-6 w-full h-[220px]">
        <defs>
          <linearGradient id="flowG" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.68 0.18 255)" />
            <stop offset="100%" stopColor="oklch(0.45 0.16 262)" />
          </linearGradient>
        </defs>
        {/* Nodes */}
        {[80, 240, 400, 560, 720].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy={40} r="6" fill="url(#flowG)" />
            <circle cx={x} cy={40} r="14" fill="none" stroke="white" strokeOpacity="0.1" />
          </g>
        ))}
        {/* Connecting flow line */}
        <path
          d="M 80 40 C 160 40, 160 130, 240 130 S 320 40, 400 40 S 480 130, 560 130 S 640 40, 720 40"
          fill="none"
          stroke="url(#flowG)"
          strokeWidth="1.5"
          opacity="0.5"
        />
        <path
          d="M 80 40 C 160 40, 160 130, 240 130 S 320 40, 400 40 S 480 130, 560 130 S 640 40, 720 40"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          className="animate-flow"
          opacity="0.85"
        />
        {/* Floating tags */}
        <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="white" opacity="0.5">
          <text x="80" y="180" textAnchor="middle">200 · 12ms</text>
          <text x="240" y="200" textAnchor="middle">routed → axn</text>
          <text x="400" y="180" textAnchor="middle">score 0.04</text>
          <text x="560" y="200" textAnchor="middle">approve</text>
          <text x="720" y="180" textAnchor="middle">webhook ✓</text>
        </g>
      </svg>
    </div>
  );
}
