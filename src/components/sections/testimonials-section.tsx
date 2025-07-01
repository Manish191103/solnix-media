import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; // Assuming Avatar component exists or will be created/imported

interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  avatarSrc?: string;
  avatarFallback: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Jane Doe',
    title: 'CEO, Alpha Solutions',
    quote: "Solnix Media transformed our online presence! Their team is professional, creative, and delivered results beyond our expectations. Highly recommended!",
    avatarFallback: 'JD',
    // avatarSrc: '/path/to/jane.jpg', // Example
  },
  {
    id: 2,
    name: 'John Smith',
    title: 'Marketing Manager, Beta Corp',
    quote: "Working with Solnix Media was a breeze. They understood our needs perfectly and crafted a website that truly represents our brand. The feedback has been amazing.",
    avatarFallback: 'JS',
    // avatarSrc: '/path/to/john.jpg', // Example
  },
  {
    id: 3,
    name: 'Alice Brown',
    title: 'Founder, Gamma Innovations',
    quote: "The SEO services provided by Solnix Media have significantly boosted our visibility. We've seen a tangible increase in leads since partnering with them.",
    avatarFallback: 'AB',
    // avatarSrc: '/path/to/alice.jpg', // Example
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/50 dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Real stories from businesses we've helped thrive.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    {testimonial.avatarSrc && <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} />}
                    <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.title}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
