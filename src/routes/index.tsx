import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Products } from "@/components/site/Products";
import { Infrastructure } from "@/components/site/Infrastructure";
import { DashboardPreview } from "@/components/site/Dashboard";
import { Security } from "@/components/site/Security";
import { Industries } from "@/components/site/Industries";
import { Onboarding } from "@/components/site/Onboarding";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stromont Consulting — Enterprise Identity & Verification Infrastructure" },
      {
        name: "description",
        content:
          "Stromont Consulting builds enterprise-grade identity verification and KYC infrastructure — Aadhaar, PAN, GST, bank, face match, liveness and AML APIs for banks, fintech, telecom and government. Engineered by Voizex Technologies.",
      },
      { property: "og:title", content: "Stromont Consulting — Enterprise Identity & Verification Infrastructure" },
      {
        property: "og:description",
        content:
          "Enterprise identity & KYC infrastructure for banks, fintech, telecom and government. Engineered by Voizex Technologies.",
      },
      { property: "og:url", content: "https://nexus-verified-core.lovable.app/" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Stromont Consulting" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://nexus-verified-core.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Stromont Consulting Private Limited",
          url: "https://nexus-verified-core.lovable.app/",
          email: "Connect@stmc.co.in",
          address: {
            "@type": "PostalAddress",
            streetAddress: "B 63, MTH Road",
            addressLocality: "Chennai",
            addressCountry: "IN",
          },
          description:
            "Enterprise identity and verification infrastructure — Aadhaar, PAN, GST, bank, face match, liveness and AML APIs.",
          sameAs: ["https://voizex.com"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Stromont Consulting",
          url: "https://nexus-verified-core.lovable.app/",
          publisher: {
            "@type": "Organization",
            name: "Voizex Technologies",
            url: "https://voizex.com",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Products />
        <Infrastructure />
        <DashboardPreview />
        <Security />
        <Industries />
        <Onboarding />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
