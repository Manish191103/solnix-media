'use client';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Vortex } from './ui/vortex';
import { PinContainer } from './ui/3d-pin';

export default function ContactEmail() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const err = await res.text();
        setError(err || 'Something went wrong');
      } else {
        setResult('Thank you for reaching out! We will contact you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }
    } catch (err: unknown) {
      setError(
        'Network error: ' +
          (err instanceof Error ? err.message : 'Unknown error')
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Vortex
      backgroundColor='transparent'
      rangeY={800}
      particleCount={200}
      baseHue={120}
      className='flex items-center flex-col justify-center w-full'
    >
      <div className='w-full'>
        {/* Hero section with improved spacing */}
        <section className='py-16 md:py-20'>
          <div className='container px-4 mx-auto'>
            <div className='max-w-3xl mx-auto text-center'>
              <h1 className='text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>
                Get In Touch
              </h1>
              <p className='text-muted-foreground text-lg mb-8 max-w-2xl mx-auto'>
                Have questions about our services or want to start a project? We
                are here to help. Our team is ready to answer your questions and
                provide the solutions you need.
              </p>
            </div>
          </div>
        </section>

        {/* Contact section with form and 3D pin */}
        <div className='container mx-auto px-4 pb-24'>
          <div className='flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center max-w-6xl mx-auto space-y-12 lg:space-y-0'>
            {/* Contact Form with enhanced styling */}
            <div className='w-full order-1 lg:order-1 relative z-10'>
              <div className='bg-background/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200/20 transition-all duration-300 hover:shadow-xl'>
                <h2 className='text-2xl font-semibold mb-6 text-primary'>
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className='space-y-5'>
                    <div>
                      <Label htmlFor='name' className='text-sm font-medium'>
                        Full Name
                      </Label>
                      <Input
                        id='name'
                        name='name'
                        placeholder='Your name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='mt-1'
                      />
                    </div>

                    <div>
                      <Label htmlFor='email' className='text-sm font-medium'>
                        Email Address
                      </Label>
                      <Input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='Your email address'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='mt-1'
                      />
                    </div>

                    <div>
                      <Label htmlFor='phone' className='text-sm font-medium'>
                        Phone Number
                      </Label>
                      <Input
                        id='phone'
                        name='phone'
                        placeholder='Your phone number'
                        value={formData.phone}
                        onChange={handleChange}
                        className='mt-1'
                      />
                    </div>

                    <div>
                      <Label htmlFor='subject' className='text-sm font-medium'>
                        Subject
                      </Label>
                      <Input
                        id='subject'
                        name='subject'
                        placeholder='What is this regarding?'
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className='mt-1'
                      />
                    </div>

                    <div>
                      <Label htmlFor='message' className='text-sm font-medium'>
                        Your Message
                      </Label>
                      <Textarea
                        id='message'
                        name='message'
                        placeholder='Tell us how we can help you'
                        className='min-h-[140px] mt-1'
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button
                      type='submit'
                      className='w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-all'
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                      <Send className='ml-2 h-4 w-4' />
                    </Button>
                  </div>

                  <div className='mt-4 min-h-[24px]'>
                    {result && (
                      <div className='text-green-600 dark:text-green-400 text-sm font-medium p-2 rounded bg-green-50 dark:bg-green-900/20'>
                        {result}
                      </div>
                    )}
                    {error && (
                      <div className='text-red-600 dark:text-red-400 text-sm font-medium p-2 rounded bg-red-50 dark:bg-red-900/20'>
                        {error}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Pin Container with improved mobile responsiveness */}
            <div className='w-full order-2 lg:order-2 flex items-center justify-center relative z-0'>
              <div className='transform hover:scale-105 transition-all duration-300 w-full max-w-sm mx-auto lg:max-w-none'>
                <div className='hidden sm:block'>
                  <PinContainer title='contact.solnixmedia.com' href='/contact'>
                    <div className='flex basis-full flex-col p-6 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] lg:w-[22rem] lg:h-[22rem] bg-black/90 backdrop-blur-md rounded-xl border border-white/10'>
                      <h3 className='max-w-xs !pb-2 !m-0 font-bold text-xl text-white'>
                        Solnix UI
                      </h3>
                      <div className='text-sm !m-0 !p-0 font-normal mb-4'>
                        <span className='text-gray-300'>
                          We are here to help you.
                        </span>
                      </div>
                      <div className='flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 overflow-hidden'>
                        <div className='w-full h-full p-6 flex items-center justify-center'>
                          <div className='text-white text-xl font-bold'>
                            Connect With Us
                          </div>
                        </div>
                      </div>
                    </div>
                  </PinContainer>
                </div>

                {/* Fallback card for very small screens */}

                <div className='block sm:hidden'>
                  <a href='https://solnixmedia.com/contact' className='block'>
                    <div className='bg-black/90 backdrop-blur-md rounded-xl border border-white/10 p-6 mx-4'>
                      <h3 className='font-bold text-xl text-white mb-2'>
                        Solnix UI
                      </h3>
                      <div className='text-sm text-gray-300 mb-4'>
                        We are here to help you.
                      </div>
                      <div className='w-full h-32 rounded-lg bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 overflow-hidden'>
                        <div className='w-full h-full flex items-center justify-center'>
                          <div className='text-white text-lg font-bold'>
                            Connect With Us
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Vortex>
  );
}
