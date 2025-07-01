import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CtaBlockProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonIcon?: React.ElementType; // Optional icon component for the button
}

const CtaBlock: React.FC<CtaBlockProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  buttonIcon: ButtonIconComponent,
}) => {
  return (
    <section className="py-12 md:py-20 bg-background"> {/* Changed background to allow theme switching, was bg-gray-50 dark:bg-gray-800 */}
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Button asChild size="lg" className="rounded-xl px-8 py-3 text-lg">
          <Link href={buttonLink} className="flex items-center gap-2">
            {ButtonIconComponent && <ButtonIconComponent className="h-5 w-5" />}
            {buttonText}
            {!ButtonIconComponent && <ArrowRight className="h-5 w-5" />}
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CtaBlock;
