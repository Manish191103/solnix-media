import { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import SolutionSection from '@/components/sections/solution-section';
import PricingSection from '@/components/sections/pricing-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import CtaBlock from '@/components/ui/cta-block'; // Import CtaBlock
import { MessageCircle } from 'lucide-react'; // Import icon for CTA
import ContactSection from '@/components/sections/contact-section';
import FooterSection from '@/components/sections/footer-section';

export const metadata: Metadata = {
  title: 'Solnix Media | Empowering SMBs with Stronger Web Presence',
  description:
    'Tailored digital solutions and modern components to help small and medium businesses stand out and grow online.',
  alternates: {
    canonical: '/',
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
    'https://facebook.com/solnixmedia',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+917877205765', // Updated with provided phone number
    contactType: 'customer service', // Or 'sales', 'technical support' etc.
    email: 'contact@solnixmedia.com', // Placeholder - User needs to update
  },
  description:
    'Tailored digital solutions and modern components to help small and medium businesses stand out and grow online.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Digital Avenue',
    addressLocality: 'Tech City',
    addressRegion: 'TC',
    postalCode: '12345',
    addressCountry: 'US',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: '499',
    highPrice: '2999',
    offerCount: '3',
  },
};

export default function Home() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <HeroSection />
      <ServicesSection />
      <SolutionSection />
      <PricingSection />
      <TestimonialsSection />
      <CtaBlock
        title="Ready to Elevate Your Business?"
        description="Let's discuss how Solnix Media can help you achieve your digital goals. Schedule a free consultation today!"
        buttonText="Get in Touch"
        buttonLink="/contact"
        buttonIcon={MessageCircle}
      />
      <ContactSection />
      <FooterSection />
    </>
  );
}
