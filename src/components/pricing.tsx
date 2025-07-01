import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  return (
    <section className='py-16 md:py-32'>
      <div className='mx-auto max-w-5xl px-6'>
        <div className='mx-auto max-w-2xl space-y-6 text-center'>
          <h1 className='text-center text-4xl font-semibold lg:text-5xl'>
            Solnix Media Pricing
          </h1>
          <p>
            Get your digital journey started with our transparent, value-driven
            pricing. Whether you&apos;re launching your first project or scaling
            your business, Solnix Media provides the foundation and expertise
            you need to succeed.
          </p>
        </div>

        <div className='mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0'>
          {/* Starter Pack */}
          <div className='rounded-(--radius) flex flex-col justify-between space-y-8 border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10'>
            <div className='space-y-4'>
              <div>
                <h2 className='font-medium'>Starter Pack</h2>
                <span className='my-3 block text-2xl font-semibold'>
                  $500 <span className='text-base font-normal'>/ one-time</span>
                </span>
                <p className='text-muted-foreground text-sm'>
                  Perfect for new projects & startups
                </p>
              </div>

              <Button asChild variant='outline' className='w-full'>
                <Link href='#contact'>Get Started</Link>
              </Button>

              <hr className='border-dashed' />

              <ul className='list-outside space-y-3 text-sm'>
                {[
                  'Initial project consultation',
                  'GitHub repository setup',
                  'CI/CD pipeline configuration',
                  'Automated deployment setup',
                  'Basic cloud infrastructure guidance',
                  'Best practices for code & security',
                  'Documentation for your team',
                  'Email support during onboarding',
                ].map((item, index) => (
                  <li key={index} className='flex items-center gap-2'>
                    <Check className='size-3' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Custom Solutions */}
          <div className='dark:bg-muted rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)] flex flex-col justify-between'>
            <div className='flex flex-col h-full justify-between gap-8'>
              <div className='space-y-4'>
                <div>
                  <h2 className='font-medium'>Custom Solutions</h2>
                  <span className='my-3 block text-2xl font-semibold'>
                    Contact Us
                  </span>
                  <p className='text-muted-foreground text-sm'>
                    Tailored for growing teams & businesses
                  </p>
                </div>

                <Button asChild className='w-full'>
                  <Link href='#contact'>Request a Quote</Link>
                </Button>
              </div>

              <div>
                <div className='text-sm font-medium mb-2'>
                  What we can do for you:
                </div>
                <ul className='mt-2 list-outside space-y-3 text-sm'>
                  {[
                    'Advanced cloud architecture & scaling',
                    'Custom CI/CD workflows',
                    'Multi-environment deployments',
                    'Monitoring & alerting setup',
                    'Security audits & compliance',
                    'Team onboarding & training',
                    'Ongoing support & maintenance',
                    'Integration with 3rd party services',
                    'Migration & modernization projects',
                    'And much more, tailored to your needs',
                  ].map((item, index) => (
                    <li key={index} className='flex items-center gap-2'>
                      <Check className='size-3' />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mx-auto mt-12 max-w-2xl text-center text-muted-foreground text-base'>
          <p>
            Ready to build a strong foundation for your next project?{' '}
            <span className='font-semibold'>Solnix Media</span> is here to help
            you launch, grow, and scale with confidence.{' '}
            <Link href='https://discord.gg/ANZwR594' className='underline'>
              Join our Discord
            </Link>{' '}
            for a free consultation or to discuss your custom requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
