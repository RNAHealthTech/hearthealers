import { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { blogs } from '@/data/blogs';

const BASE_URL = 'https://drjay.hearthealers.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // 1. Static Core Public Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // 2. Dynamic Services & Procedures (Treatments & Conditions)
  const drJayServices = services.filter((service) => service.subdomain === 'drjay');
  const servicePages: MetadataRoute.Sitemap = drJayServices.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // 3. Dynamic Individual Blog Posts
  const drJayBlogs = blogs.filter((blog) => blog.subdomain === 'drjay');
  const blogPages: MetadataRoute.Sitemap = drJayBlogs.map((blog) => ({
    url: `${BASE_URL}/blogs/${blog.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Combine and deduplicate URLs
  const allRoutes = [...staticPages, ...servicePages, ...blogPages];
  const seenUrls = new Set<string>();
  const uniqueSitemap: MetadataRoute.Sitemap = [];

  for (const item of allRoutes) {
    if (!seenUrls.has(item.url)) {
      seenUrls.add(item.url);
      uniqueSitemap.push(item);
    }
  }

  return uniqueSitemap;
}
