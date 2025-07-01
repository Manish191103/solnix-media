import { MetadataRoute } from 'next';

// Add the dynamic export for static site generation
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://solnixmedia.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Removed /services and /pricing as dedicated pages do not exist.
    // If these are sections on the homepage, they are covered by the main URL.
    // Add them back if standalone pages are created.
  ];
}
