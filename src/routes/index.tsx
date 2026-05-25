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
