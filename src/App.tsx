import { MotionConfig } from "framer-motion";
import HeroSection from "@/components/animated-hero-demo";
import { PainSection } from "@/components/landing/PainSection";
import { ProductsSection } from "@/components/landing/ProductsSection";
import { CalculatorSection } from "@/components/landing/CalculatorSection";
import { ScheduleSection } from "@/components/landing/ScheduleSection";
import { SocialProofSection } from "@/components/landing/SocialProofSection";
import { FinalCtaSection, Footer } from "@/components/landing/FinalCtaSection";
import "./landing.css";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <HeroSection />
      <PainSection />
      <ProductsSection />
      <CalculatorSection />
      <SocialProofSection />
      <FinalCtaSection />
      <ScheduleSection />
      <Footer />
    </MotionConfig>
  );
}

export default App;
