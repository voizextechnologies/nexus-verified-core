import {
  Fingerprint, FileText, Receipt, Landmark, Phone, Mail,
  ScanLine, ScanFace, Eye, ShieldAlert, Workflow, SearchCheck,
  Building2, UserCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Product = {
  icon: LucideIcon;
  name: string;
  endpoint: string;
  desc: string;
  status: "Live" | "Beta" | "GA";
  latency: string;
  tag: "Identity" | "Financial" | "Biometric" | "Risk" | "Workflow";
};

const products: Product[] = [
  { icon: Fingerprint, name: "Aadhaar Verification", endpoint: "/v1/verify/aadhaar", desc: "OTP, XML and offline modes with masking, consent and audit trail.", status: "GA", latency: "180ms", tag: "Identity" },
  { icon: FileText, name: "PAN Verification", endpoint: "/v1/verify/pan", desc: "NSDL-grade PAN validation with name match scoring.", status: "GA", latency: "120ms", tag: "Identity" },
  { icon: Receipt, name: "GST Verification", endpoint: "/v1/verify/gst", desc: "GSTIN status, filing history and entity intelligence.", status: "GA", latency: "240ms", tag: "Financial" },
  { icon: Landmark, name: "Bank Account Verification", endpoint: "/v1/verify/bank", desc: "Penny-drop and IFSC validation with beneficiary match.", status: "GA", latency: "1.2s", tag: "Financial" },
  { icon: Phone, name: "Mobile Verification", endpoint: "/v1/verify/mobile", desc: "Number ownership, operator, port history and silent OTP.", status: "GA", latency: "210ms", tag: "Identity" },
  { icon: Mail, name: "Email Verification", endpoint: "/v1/verify/email", desc: "Mailbox existence, disposable detection, deliverability score.", status: "GA", latency: "90ms", tag: "Identity" },
  { icon: ScanLine, name: "OCR & Document Parsing", endpoint: "/v1/docs/parse", desc: "Structured extraction across 1500+ Indian document templates.", status: "GA", latency: "650ms", tag: "Biometric" },
  { icon: ScanFace, name: "Face Match API", endpoint: "/v1/face/match", desc: "1:1 and 1:N matching with sub-second response at scale.", status: "GA", latency: "220ms", tag: "Biometric" },
  { icon: Eye, name: "Liveness Detection", endpoint: "/v1/face/liveness", desc: "Active and passive liveness — anti-spoof, mask, deepfake aware.", status: "GA", latency: "480ms", tag: "Biometric" },
  { icon: ShieldAlert, name: "Fraud Risk Engine", endpoint: "/v1/risk/score", desc: "Device, network and behaviour signals into a unified risk verdict.", status: "Live", latency: "60ms", tag: "Risk" },
  { icon: Workflow, name: "KYC Workflow Automation", endpoint: "/v1/journeys", desc: "Configurable journeys with branching, fallbacks and reviewer queues.", status: "GA", latency: "—", tag: "Workflow" },
  { icon: SearchCheck, name: "AML Screening", endpoint: "/v1/aml/screen", desc: "PEP, sanctions and adverse-media screening with hit explainability.", status: "GA", latency: "320ms", tag: "Risk" },
  { icon: Building2, name: "KYB Verification", endpoint: "/v1/verify/business", desc: "MCA, CIN, beneficial owners, directors and signatory chain.", status: "GA", latency: "1.4s", tag: "Financial" },
  { icon: UserCheck, name: "Digital Onboarding APIs", endpoint: "/v1/onboard", desc: "Drop-in flows for KYC, video KYC and re-KYC in regulated journeys.", status: "GA", latency: "—", tag: "Workflow" },
];

export function Products() {
  return (
    <section id="products" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Product surface"
          title={<>A complete verification stack, <span className="font-display italic font-normal text-gradient">one API contract.</span></>}
          subtitle="Fourteen production endpoints powering identity, financial, biometric and risk decisioning — composed into journeys you control."
        />

        {/* Asymmetric mosaic */}
        <div className="mt-14 grid grid-cols-12 gap-4">
          {products.map((p, i) => {
            // Asymmetry: certain cards span more columns
            const span =
              i === 0 ? "col-span-12 md:col-span-6 lg:col-span-5"
              : i === 1 ? "col-span-12 md:col-span-6 lg:col-span-4"
              : i === 2 ? "col-span-12 md:col-span-6 lg:col-span-3"
              : i === 6 ? "col-span-12 md:col-span-6 lg:col-span-5"
              : i === 9 ? "col-span-12 md:col-span-6 lg:col-span-5"
              : i === 13 ? "col-span-12 md:col-span-6 lg:col-span-7"
              : "col-span-12 sm:col-span-6 lg:col-span-3";
            const feature = i === 0 || i === 6 || i === 9 || i === 13;
            return <ProductCard key={p.name} p={p} className={span} feature={feature} />;
          })}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ p, className = "", feature = false }: { p: Product; className?: string; feature?: boolean }) {
  const Icon = p.icon;
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-ink/20 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-30px_oklch(0.28_0.12_262/0.35)] ${className}`}
    >
      {feature && (
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(closest-side,oklch(0.68_0.18_255/0.18),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
      )}

      <div className="flex items-start justify-between">
        <div className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-gradient-to-br from-white to-silver text-brand-deep">
          <Icon className="h-5 w-5" strokeWidth={1.6} />
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-border bg-white/80 px-2 py-0.5 text-[10px] font-mono text-ink-soft">
          <span className={`h-1.5 w-1.5 rounded-full ${p.status === "Live" ? "bg-brand animate-pulse-dot" : "bg-emerald-500"}`} />
          {p.status}
        </div>
      </div>

      <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-ink">{p.name}</h3>
      <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">{p.desc}</p>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-3">
        <code className="text-[11.5px] font-mono text-ink-soft truncate">{p.endpoint}</code>
        <span className="ml-3 shrink-0 text-[10px] font-mono uppercase tracking-wider text-ink-soft/80">
          p95 · {p.latency}
        </span>
      </div>
    </div>
  );
}

export function SectionHeader({
  eyebrow, title, subtitle, align = "left",
}: { eyebrow: string; title: React.ReactNode; subtitle?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}>
      <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-brand">
        <span className="h-px w-6 bg-brand/60" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-[-0.025em] text-ink leading-[1.05] text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[16px] leading-[1.6] text-ink-soft max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
