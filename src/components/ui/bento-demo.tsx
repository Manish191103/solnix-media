import {
  BellIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from '@radix-ui/react-icons';

import { Globe } from '@/components/magicui/globe';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { OrbitingCirclesDemo } from './orbiting-circles-demo';
import { IconCloudDemo } from './icon-cloud-demo';
import { AnimatedBeamDemo } from './animated-beam-demo';
import { Ripple } from '@/components/magicui/ripple';
import { MegaphoneIcon, Palette } from 'lucide-react'; // Added Palette
import { AnimatedGridPattern } from '../magicui/animated-grid-pattern';
import { cn } from '@/lib/utils';

export function BentoDemo() {
  const features = [
    {
      Icon: FileTextIcon,
      name: 'Modern Web Development',
      description:
        'Build responsive, performant websites with the latest technologies and best practices.',
      href: '/',
      cta: 'Learn more',
      background: null,
      content: <OrbitingCirclesDemo />,
      className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
    },
    {
      Icon: InputIcon,
      name: 'SEO Optimization',
      description:
        'Boost your online visibility and drive organic traffic with our expert SEO strategies.',
      href: '/',
      cta: 'Learn more',
      background: null,
      content: <IconCloudDemo />,
      className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
    },
    {
      Icon: GlobeIcon,
      name: 'Global Reach',
      description:
        'Break language barriers and connect with audiences worldwide through seamless multilingual support.',
      href: '/',
      cta: 'Learn more',
      background: null,
      content: <Globe className='absolute right-20 top-30 opacity-60' />,
      className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
    },
    {
      Icon: Palette, // Changed Icon
      name: 'Branding & Identity Design', // Changed name
      description:
        'Craft a unique and memorable brand identity that resonates with your target audience.', // Changed description
      href: '/services/branding', // Changed href
      cta: 'Learn More', // Changed cta
      background: null, // Kept simple background
      content: null, // Kept simple content for now
      className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2', // Kept className for position
    },
    {
      Icon: BellIcon,
      name: 'AI Agents',
      description:
        'Leverage production-ready AI agents to automate tasks, enhance productivity, and drive business growth.',
      href: '/ai-solutions',
      cta: 'Explore AI',
      background: null,
      content: <AnimatedBeamDemo />,
      className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
    },
    {
      Icon: MegaphoneIcon,
      name: 'Digital Marketing',
      description:
        'Drive growth and engagement with our comprehensive digital marketing solutions tailored to your business needs.',
      href: '/marketing',
      cta: 'Get Started',
      background: (
        <AnimatedGridPattern
          numSquares={300}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
            'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
          )}
        />
      ),
      className: 'lg:col-start-1 lg:col-end-4 lg:row-start-4 lg:row-end-5',
    },
  ];

  return (
    <BentoGrid className='lg:grid-rows-3'>
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
