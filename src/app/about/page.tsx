import { Metadata } from 'next';
import AboutSection from '@/components/sections/about-section';

export const metadata: Metadata = {
  title: 'About Us | Solnix Media',
  description:
    'Learn about Solnix Media and our mission to empower small and medium businesses with stronger web presence.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return <AboutSection />;
}
