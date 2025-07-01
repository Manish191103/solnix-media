import type { Metadata } from 'next';
import Script from 'next/script'; // Import next/script
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Solnix Media | Empowering SMBs with Stronger Web Presence',
  description:
    'Tailored digital solutions and modern components to help small and medium businesses stand out and grow online.',
  keywords:
    'web development, SMB solutions, digital marketing, website design, online presence',
  authors: [{ name: 'Solnix Media Team' }],
  creator: 'Solnix Media',
  publisher: 'Solnix Media',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Solnix Media | Empowering SMBs with Stronger Web Presence',
    description:
      'Tailored digital solutions and modern components to help small and medium businesses stand out and grow online.',
    url: 'http://localhost:3000',
    siteName: 'Solnix Media',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solnix Media | Empowering SMBs with Stronger Web Presence',
    description:
      'Tailored digital solutions and modern components to help small and medium businesses stand out and grow online.',
    creator: '@solnixmedia',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link
          rel='preload'
          href='https://cdn.magicui.design/ocean-small.webm'
          as='video'
          type='video/webm'
        />
        {/* DNS prefetch for external domains */}
        <link rel='dns-prefetch' href='https://cdn.simpleicons.org' />
        <link rel='dns-prefetch' href='https://cdn.magicui.design' />

        {/* Favicon */}
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />

        {/* Google Search Console Verification - Replace YOUR_VERIFICATION_STRING with your actual GSC string */}
        <meta name="google-site-verification" content="YOUR_VERIFICATION_STRING" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* Google Tag (gtag.js) using next/script */}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-WDGHMRKXSK'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WDGHMRKXSK');
          `}
        </Script>
      </body>
    </html>
  );
}
