import type { MetadataRoute } from 'next';

const siteUrl = 'https://www.hardservicesrl.ro';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/google-ads/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/facebook-instagram-ads/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/tiktok-ads/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/creare-site/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

{
  url: `${siteUrl}/magazin-online/`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.9,
},


    {
  url: `${siteUrl}/tracking-conversii/`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.9,
},
    {
  url: `${siteUrl}/seo-tehnic/`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.9,
},
    
  ];
}
