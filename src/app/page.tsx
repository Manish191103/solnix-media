import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import SolutionSection from "@/components/sections/solution-section";
import PricingSection from "@/components/sections/pricing-section";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import FooterSection from "@/components/sections/footer-section";
export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <SolutionSection />
      <PricingSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}