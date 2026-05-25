import { Mail, MapPin, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute right-[-200px] top-[-100px] h-[500px] w-[500px] rounded-full bg-[radial-gradient(closest-side,oklch(0.68_0.18_255/0.12),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-6 bg-brand/60" /> Talk to us
            </div>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-[-0.025em] text-ink leading-[1.05]">
              Bring verification <span className="font-display italic font-normal text-gradient">in-house.</span>
            </h2>
            <p className="mt-4 text-ink-soft text-[16px] leading-[1.6] max-w-md">
              Tell us about your verification volume, regulatory scope and timelines.
              A solutions architect will respond within one business day.
            </p>

            <div className="mt-10 space-y-5">
              <a href="mailto:Connect@stmc.co.in" className="group flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-md border border-border bg-white">
                  <Mail className="h-4 w-4 text-brand-deep" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-ink-soft/70">Enterprise email</div>
                  <div className="text-[15px] font-medium text-ink group-hover:text-brand transition-colors">
                    Connect@stmc.co.in
                  </div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-md border border-border bg-white">
                  <MapPin className="h-4 w-4 text-brand-deep" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-ink-soft/70">Chennai office</div>
                  <div className="text-[15px] font-medium text-ink">
                    B 63, MTH Road
                  </div>
                  <div className="text-[13px] text-ink-soft">Chennai, Tamil Nadu, India</div>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-xl border border-border bg-silver/40 p-4">
              <div className="text-[11px] uppercase tracking-[0.14em] text-ink-soft/70">Compliance & legal</div>
              <div className="mt-1 text-[13px] text-ink">
                Stromont Consulting Private Limited
              </div>
              <div className="text-[11.5px] text-ink-soft mt-0.5">
                Master Services Agreement, DPA and security questionnaires available on request.
              </div>
            </div>
          </div>

          <form
            className="lg:col-span-7 rounded-2xl border border-border bg-white p-8 shadow-[0_24px_60px_-30px_oklch(0.28_0.12_262/0.25)]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full name" placeholder="Jane Doe" />
              <Field label="Work email" type="email" placeholder="jane@bank.com" />
              <Field label="Company" placeholder="Federal Bank" />
              <Field label="Role" placeholder="Head of Risk" />
              <Select label="Industry" options={["Banking", "NBFC / Lending", "Fintech", "Insurance", "Telecom", "Government", "Other"]} />
              <Select label="Expected volume" options={["< 50k / mo", "50k – 500k", "500k – 5M", "5M+"]} />
            </div>
            <div className="mt-5">
              <label className="text-[11px] uppercase tracking-[0.14em] text-ink-soft/70">What are you building?</label>
              <textarea
                rows={4}
                placeholder="A short note on your verification journey, regions and timelines."
                className="mt-1.5 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-[14px] text-ink placeholder:text-ink-soft/50 focus:outline-none focus:border-ink/40 focus:ring-2 focus:ring-brand/15"
              />
            </div>

            <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
              <div className="text-[11px] text-ink-soft/70">
                By submitting you agree to our processing of your business contact details for this enquiry.
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white hover:bg-brand-deep transition-all hover:gap-3"
              >
                Request consultation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.14em] text-ink-soft/70">{label}</span>
      <input
        {...rest}
        className="mt-1.5 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-[14px] text-ink placeholder:text-ink-soft/50 focus:outline-none focus:border-ink/40 focus:ring-2 focus:ring-brand/15"
      />
    </label>
  );
}

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.14em] text-ink-soft/70">{label}</span>
      <select className="mt-1.5 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-[14px] text-ink focus:outline-none focus:border-ink/40 focus:ring-2 focus:ring-brand/15">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
