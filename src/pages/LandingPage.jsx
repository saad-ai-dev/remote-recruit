import { FaqSection } from "../components/landing/FaqSection";
import { FeatureStack } from "../components/landing/FeatureStack";
import { Footer } from "../components/landing/Footer";
import { Hero } from "../components/landing/Hero";
import { PricingSection } from "../components/landing/PricingSection";
import { SupportCta } from "../components/landing/SupportCta";

export function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Hero />
      <FeatureStack />
      <SupportCta />
      <FaqSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
