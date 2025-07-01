import { MetadataRoute } from 'next';

// Add the dynamic export for static site generation
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://solnixmedia.com/sitemap.xml',
  };
}
