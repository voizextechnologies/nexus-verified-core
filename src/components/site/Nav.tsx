import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { label: "Products", href: "#products" },
  { label: "Infrastructure", href: "#infra" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Security", href: "#security" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 ${
            scrolled
              ? "glass border-white/60"
              : "border-transparent bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5">
            <Logo />
            <span className="text-[15px] font-semibold tracking-tight text-ink">
              Stromont
              <span className="ml-1 text-ink-soft/70 font-normal">Consulting</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-[13px] font-medium text-ink-soft hover:text-ink transition-colors rounded-full hover:bg-silver"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex text-[13px] font-medium text-ink-soft hover:text-ink px-3 py-1.5"
            >
              Sign in
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-1.5 text-[13px] font-medium text-white hover:bg-brand-deep transition-colors"
            >
              Book consultation
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 6h6m0 0L6 3m3 3L6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-brand-deep to-brand text-white shadow-[0_4px_12px_-2px_oklch(0.28_0.12_262/0.5)] ${className}`}>
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path d="M8 1L14 4v4c0 3.5-2.5 6.5-6 7-3.5-.5-6-3.5-6-7V4l6-3z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" fill="oklch(0.45 0.16 262 / 0.4)"/>
        <path d="M5.5 8l2 2 3.5-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}
