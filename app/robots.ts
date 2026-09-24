import { MetadataRoute } from 'next';
import { FIRM_DATA } from '@/lib/site-data';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${FIRM_DATA.baseUrl}/sitemap.xml`,
  };
}
