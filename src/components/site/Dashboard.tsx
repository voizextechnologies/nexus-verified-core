import { SectionHeader } from "./Products";
import {
  LayoutDashboard, Activity, AlertTriangle, Users, FileText,
  Settings, ShieldCheck, ChevronRight,
} from "lucide-react";

export function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Operator console"
          title={<>The control surface your <span className="font-display italic font-normal text-gradient">risk team will live in.</span></>}
          subtitle="Real-time monitoring, granular permissions, immutable audit and live verification logs — in a console designed for regulated operations."
        />

        <div className="mt-14 rounded-2xl border border-border bg-gradient-to-b from-silver/60 to-white p-3 sm:p-5 shadow-[0_40px_120px_-40px_oklch(0.28_0.12_262/0.35)]">
          <div className="rounded-xl border border-border bg-white overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5 bg-silver/40">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.16_25)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.83_0.14_85)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.72_0.16_150)]" />
              </div>
              <div className="text-[11px] font-mono text-ink-soft/70">console.stmc.co.in/verifications</div>
              <div className="text-[11px] font-mono text-ink-soft/70">env · prod</div>
            </div>

            <div className="grid grid-cols-12">
              {/* Sidebar */}
              <aside className="col-span-3 lg:col-span-2 border-r border-border bg-silver/30 p-3 hidden sm:block">
                <div className="text-[10px] uppercase tracking-[0.14em] text-ink-soft/60 px-2">Workspace</div>
                <div className="mt-1 mb-3 flex items-center gap-2 rounded-md bg-white border border-border px-2 py-1.5">
                  <div className="h-5 w-5 rounded bg-gradient-to-br from-brand-deep to-brand" />
                  <span className="text-[12px] font-medium text-ink truncate">Federal Bank</span>
                </div>
                {[
                  { i: LayoutDashboard, l: "Overview", a: true },
                  { i: Activity, l: "Verifications" },
                  { i: AlertTriangle, l: "Fraud alerts", n: 4 },
                  { i: FileText, l: "Audit log" },
                  { i: Users, l: "Team" },
                  { i: ShieldCheck, l: "Policies" },
                  { i: Settings, l: "Settings" },
                ].map((item, i) => {
                  const Ic = item.i;
                  return (
                    <button
                      key={i}
                      className={`group w-full mt-0.5 flex items-center gap-2 rounded-md px-2 py-1.5 text-[12px] ${
                        item.a ? "bg-white text-ink shadow-sm border border-border" : "text-ink-soft hover:bg-white/70"
                      }`}
                    >
                      <Ic className="h-3.5 w-3.5" strokeWidth={1.7} />
                      <span className="flex-1 text-left">{item.l}</span>
                      {item.n && (
                        <span className="rounded-full bg-brand text-white text-[9px] font-mono px-1.5 py-0.5">{item.n}</span>
                      )}
                    </button>
                  );
                })}
              </aside>

              {/* Main */}
              <main className="col-span-12 sm:col-span-9 lg:col-span-10 p-5">
                <div className="flex items-end justify-between flex-wrap gap-3">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.14em] text-ink-soft/60">Overview · last 24h</div>
                    <h3 className="text-xl font-semibold tracking-tight text-ink mt-0.5">Verification operations</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="rounded-md border border-border px-2.5 py-1.5 text-[11px] text-ink-soft">Last 24h ▾</button>
                    <button className="rounded-md bg-ink text-white px-2.5 py-1.5 text-[11px]">Export</button>
                  </div>
                </div>

                {/* KPI strip */}
                <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { k: "Sessions", v: "184,203", d: "+12.4%" },
                    { k: "Approved", v: "98.71%", d: "+0.2pp" },
                    { k: "Fraud flagged", v: "412", d: "-8.1%" },
                    { k: "Median latency", v: "176 ms", d: "stable" },
                  ].map((m, i) => (
                    <div key={i} className="rounded-lg border border-border p-3">
                      <div className="text-[10px] uppercase tracking-[0.12em] text-ink-soft/60">{m.k}</div>
                      <div className="mt-1 text-[18px] font-semibold tracking-tight text-ink font-display">{m.v}</div>
                      <div className="text-[10.5px] text-brand">{m.d}</div>
                    </div>
                  ))}
                </div>

                {/* Chart + activity */}
                <div className="mt-4 grid lg:grid-cols-5 gap-3">
                  <div className="lg:col-span-3 rounded-lg border border-border p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-[12px] font-medium text-ink">API requests</div>
                      <div className="flex gap-3 text-[10px] font-mono text-ink-soft">
                        <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-brand-deep" />Verify</span>
                        <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-brand-glow" />Face</span>
                      </div>
                    </div>
                    <AreaChart />
                  </div>

                  <div className="lg:col-span-2 rounded-lg border border-border p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-[12px] font-medium text-ink">Live activity</div>
                      <span className="flex items-center gap-1.5 text-[10px] font-mono text-ink-soft">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-dot" /> streaming
                      </span>
                    </div>
                    <div className="mt-3 space-y-2">
                      {[
                        { e: "verify.pan", s: "ok", t: "2s" },
                        { e: "face.liveness", s: "ok", t: "6s" },
                        { e: "risk.flag", s: "warn", t: "12s" },
                        { e: "verify.aadhaar", s: "ok", t: "18s" },
                        { e: "verify.bank", s: "ok", t: "24s" },
                      ].map((r, i) => (
                        <div key={i} className="flex items-center justify-between text-[11.5px]">
                          <span className="flex items-center gap-2 font-mono text-ink-soft">
                            <span className={`h-1.5 w-1.5 rounded-full ${
                              r.s === "warn" ? "bg-[oklch(0.78_0.16_55)]" : "bg-emerald-500"
                            }`} />
                            {r.e}
                          </span>
                          <span className="text-ink-soft/70 font-mono">{r.t} ago</span>
                          <ChevronRight className="h-3 w-3 text-ink-soft/40" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AreaChart() {
  // synthetic but believable curve
  const pts = [12, 18, 14, 22, 28, 24, 32, 38, 30, 42, 48, 44, 56, 50, 62, 58, 70, 66, 74];
  const w = 520, h = 140, pad = 8;
  const max = 80;
  const step = (w - pad * 2) / (pts.length - 1);
  const path = pts.map((v, i) => {
    const x = pad + i * step;
    const y = h - pad - (v / max) * (h - pad * 2);
    return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ");
  const area = `${path} L ${w - pad} ${h - pad} L ${pad} ${h - pad} Z`;

  const pts2 = pts.map(v => v * 0.55 + 6);
  const path2 = pts2.map((v, i) => {
    const x = pad + i * step;
    const y = h - pad - (v / max) * (h - pad * 2);
    return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-3 w-full h-[150px]">
      <defs>
        <linearGradient id="ar1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.45 0.16 262)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="oklch(0.45 0.16 262)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((t, i) => (
        <line key={i} x1="0" x2={w} y1={h * t} y2={h * t} stroke="oklch(0.92 0.008 255)" strokeDasharray="3 4" />
      ))}
      <path d={area} fill="url(#ar1)" />
      <path d={path} fill="none" stroke="oklch(0.28 0.12 262)" strokeWidth="2" />
      <path d={path2} fill="none" stroke="oklch(0.68 0.18 255)" strokeWidth="1.5" strokeDasharray="4 4" />
    </svg>
  );
}
