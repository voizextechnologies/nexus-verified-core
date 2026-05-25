import { SectionHeader } from "./Products";
import {
  Banknote, Building, Coins, ShieldPlus, RadioTower, ShoppingBag,
  Truck, Landmark, Server,
} from "lucide-react";

const industries = [
  { i: Banknote, n: "Banking", d: "End-to-end KYC for account opening, lending and corporate onboarding." },
  { i: Building, n: "NBFC & Lending", d: "Sub-minute borrower verification with risk-tiered journeys." },
  { i: Coins, n: "Fintech", d: "Wallet, payments and trading platforms onboarding at internet scale." },
  { i: ShieldPlus, n: "Insurance", d: "Policy issuance, claims KYC and intermediary verification." },
  { i: RadioTower, n: "Telecom", d: "SIM activation, MNP and reseller onboarding with UIDAI-aligned consent." },
  { i: ShoppingBag, n: "E-commerce", d: "Seller verification, returns fraud and high-value buyer checks." },
  { i: Truck, n: "Logistics", d: "Driver, fleet and last-mile partner KYC + background screening." },
  { i: Landmark, n: "Government", d: "Citizen-service onboarding with full audit and accessibility." },
  { i: Server, n: "Enterprise SaaS", d: "Embed verification inside HR, procurement and vendor systems." },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <SectionHeader
            eyebrow="Industries served"
            title={<>Trusted across <span className="font-display italic font-normal text-gradient">regulated sectors.</span></>}
            subtitle="Stromont operates inside the compliance perimeter of the institutions that move money, identity and critical services."
          />
          <a href="#contact" className="text-[13px] text-ink-soft hover:text-ink underline-offset-4 hover:underline">
            Talk to industry team →
          </a>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-px rounded-2xl overflow-hidden border border-border bg-border">
          {industries.map((it, i) => {
            const Ic = it.i;
            // Asymmetric: featured spans 6, others 4 or 3
            const span = i === 0 ? "col-span-12 md:col-span-6 lg:col-span-5"
              : i === 1 ? "col-span-12 md:col-span-6 lg:col-span-4"
              : i === 2 ? "col-span-12 md:col-span-6 lg:col-span-3"
              : "col-span-6 md:col-span-4 lg:col-span-3";
            return (
              <div key={it.n} className={`group bg-white p-6 hover:bg-silver/40 transition-colors ${span}`}>
                <div className="flex items-start justify-between">
                  <Ic className="h-5 w-5 text-brand-deep" strokeWidth={1.5} />
                  <span className="text-[10px] font-mono text-ink-soft/50">0{i + 1}</span>
                </div>
                <h4 className="mt-6 text-[16px] font-semibold text-ink">{it.n}</h4>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-soft">{it.d}</p>
                <div className="mt-4 flex items-center text-[11px] text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                  View use cases →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
