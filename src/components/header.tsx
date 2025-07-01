'use client';
import Link from 'next/link';
import SolnixLogo from '@/components/solnix-logo';
import { Menu } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from '@/components/ui/sheet';

const menuItems = [
  { name: 'Services', anchorHref: '/#services', pageHref: '/services' },
  { name: 'Solution', anchorHref: '/#solution', pageHref: '/solution' },
  { name: 'Pricing', anchorHref: '/#pricing', pageHref: '/pricing' },
  { name: 'About', anchorHref: '/#about', pageHref: '/about' },
];

export const HeroHeader = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header>
      <nav className='fixed z-20 w-full px-2'>
        <div
          className={cn(
            'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
            isScrolled &&
              'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5'
          )}
        >
          <div className='relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4'>
            <div className='flex w-full justify-between lg:w-auto'>
              <Link
                href='/'
                aria-label='home'
                className='flex items-center space-x-2'
              >
                <SolnixLogo className='w-12 h-12' />
              </Link>

              <Sheet>
                <SheetTrigger asChild>
                  <button
                    aria-label='Open Menu'
                    className='relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden'
                  >
                    <Menu className='size-6' />
                  </button>
                </SheetTrigger>
                <SheetContent side='right' className='p-0 w-80 max-w-full'>
                  <SheetTitle className='sr-only'>Menu</SheetTitle>
                  <div className='flex flex-col h-full items-center justify-between py-10 px-6'>
                    <div className='w-full flex flex-col items-center'>
                      <ul className='mt-40 space-y-10 text-base w-full text-center'>
                        {menuItems.map((item, index) => (
                          <li key={index}>
                            <div className='flex flex-col gap-1'>
                              <Link
                                href={item.anchorHref}
                                className='text-muted-foreground hover:text-accent-foreground block px-2 py-2 rounded-lg duration-150'
                              >
                                <span>{item.name}</span>
                              </Link>
                            </div>
                          </li>
                        ))}
                        <li>
                          <div className='flex justify-center'>
                            <Switch />
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className='w-full flex flex-col items-center gap-3 mb-4'>
                      <Link href='/contact' className='w-full'>
                        <Button className='w-full'>Contact Us</Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div className='absolute inset-0 m-auto hidden size-fit lg:block'>
              <ul className='flex gap-8 text-sm'>
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.anchorHref}
                      className='text-muted-foreground hover:text-accent-foreground block duration-150'
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='hidden lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent'>
              <div className='flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit'>
                <div className='flex items-center gap-2'>
                  <Switch />
                </div>
                <Link href='/contact' className='w-full md:w-auto'>
                  <Button className='w-full md:w-auto'>Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
