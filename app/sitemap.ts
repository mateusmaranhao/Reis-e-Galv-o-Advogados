import { MetadataRoute } from 'next';
import { FIRM_DATA, SERVICES } from '@/lib/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const staticPages = [
    {
      url: `${FIRM_DATA.baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${FIRM_DATA.baseUrl}/sobre/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${FIRM_DATA.baseUrl}/servicos/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${FIRM_DATA.baseUrl}/contato/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${FIRM_DATA.baseUrl}/politica-de-privacidade/`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${FIRM_DATA.baseUrl}/termos-de-uso/`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${FIRM_DATA.baseUrl}/politica-de-cookies/`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  const servicePages = SERVICES.map((service) => ({
    url: `${FIRM_DATA.baseUrl}/servicos/${service.slug}/`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages];
}
