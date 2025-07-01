'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SolnixLogo({ className }: { className?: string }) {
  const [logoSrc, setLogoSrc] = useState('/Solnix%20TradeMark%20Black.svg');
  const { resolvedTheme } = useTheme();

  // Update logo when theme changes or component mounts
  useEffect(() => {
    setLogoSrc(
      resolvedTheme === 'dark'
        ? '/Solnix%20TradeMark%20White.svg'
        : '/Solnix%20TradeMark%20Black.svg'
    );
  }, [resolvedTheme]);

  return (
    <div className={cn('relative aspect-square', className)}>
      <Image
        src={logoSrc}
        alt='Solnix Logo'
        className='w-full h-auto object-contain'
        width={100}
        height={100}
      />
    </div>
  );
}

export function SolnixLogoIcon({ className }: { className?: string }) {
  return (
    <div className={cn('relative aspect-square', className)}>
      <Image
        src='/Solnix%20TradeMark%20Black.svg'
        alt='Solnix Logo'
        className='w-full h-auto object-contain'
        width={100}
        height={100}
      />
    </div>
  );
}
