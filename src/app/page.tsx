import { Metadata } from "next";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import SolutionSection from "@/components/sections/solution-section";
import PricingSection from "@/components/sections/pricing-section";
import ContactSection from "@/components/sections/contact-section";
import FooterSection from "@/components/sections/footer-section";

export const metadata: Metadata = {
  title: "Solnix Media | Empowering SMBs with Stronger Web Presence",
  description: "Tailored digital solutions and modern components to help small and medium businesses stand out and grow online.",
  alternates: {
    canonical: "/",
  },
};

// Define JSON-LD for structured data
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Solnix Media',
  url: 'https://solnixmedia.com',
  logo: 'https://solnixmedia.com/logo.png',
  sameAs: [
    'https://twitter.com/solnixmedia',
    'https://linkedin.com/company/solnixmedia',
    'https://facebook.com/solnixmedia'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-123-456-7890',
    contactType: 'customer service',
    email: 'contact@solnixmedia.com'
  },
  description: 'Tailored digital solutions and modern components to help small and medium businesses stand out and grow online.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Digital Avenue',
    addressLocality: 'Tech City',
    addressRegion: 'TC',
    postalCode: '12345',
    addressCountry: 'US'
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: '499',
    highPrice: '2999',
    offerCount: '3'
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd)
        }}
      />
      <HeroSection />
      <ServicesSection />
      <SolutionSection />
      <PricingSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}