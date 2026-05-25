import { Logo } from "./Nav";

const columns = [
  { t: "Products", l: ["Aadhaar API", "PAN API", "GST API", "Bank verification", "Face Match", "Liveness"] },
  { t: "APIs", l: ["Reference", "SDKs", "Webhooks", "Status", "Changelog"] },
  { t: "Company", l: ["About", "Customers", "Press", "Careers", "Contact"] },
  { t: "Security", l: ["Trust center", "Compliance", "DPA", "Subprocessors", "Responsible disclosure"] },
  { t: "Legal", l: ["Privacy", "Terms", "Cookies", "Acceptable use"] },
];

export function Footer() {
  return (
    <footer className="relative bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="text-[15px] font-semibold tracking-tight">
                Stromont <span className="text-white/50 font-normal">Consulting</span>
              </span>
            </div>
            <p className="mt-5 text-[14px] leading-[1.6] text-white/60 max-w-sm">
              Enterprise identity and verification infrastructure. Built in India,
              architected for global regulated industries.
            </p>
            <div className="mt-6 text-[12.5px] text-white/50 space-y-1">
              <div>Connect@stmc.co.in</div>
              <div>B 63, MTH Road, Chennai, India</div>
            </div>

            <div className="mt-8 flex items-center gap-2">
              {["in", "x", "gh"].map((s) => (
                <a key={s} href="#" className="grid h-8 w-8 place-items-center rounded-full border border-white/15 text-[11px] uppercase font-mono text-white/70 hover:bg-white/5">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-5 gap-8">
            {columns.map((c) => (
              <div key={c.t}>
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">{c.t}</div>
                <ul className="mt-4 space-y-2.5">
                  {c.l.map((it) => (
                    <li key={it}>
                      <a href="#" className="text-[13px] text-white/75 hover:text-white transition-colors">{it}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11.5px] text-white/40">
          <div>© {new Date().getFullYear()} Stromont Consulting Private Limited. All rights reserved.</div>
          <div className="flex items-center gap-2 font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
