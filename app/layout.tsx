import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Phone } from 'lucide-react';

const siteUrl = 'https://www.hardservicesrl.ro';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#02050a',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Promovare Online: Google Ads, Meta & TikTok | Hard Service',
    template: '%s | Hard Service Marketing',
  },
  description: 'Administrare Google Ads, Facebook & Instagram Ads, TikTok Ads, creare website-uri și magazine online, tracking GA4/GTM, mentenanță și automatizări.',
  applicationName: 'Hard Service Marketing',
  alternates: { canonical: '/' },
  authors: [{ name: 'Hard Service Marketing', url: siteUrl }],
  creator: 'Hard Service Marketing',
  publisher: 'Hard Service Marketing',
  category: 'marketing',
  keywords: [
    'promovare online',
    'Google Ads',
    'administrare Google Ads',
    'Facebook Ads',
    'Instagram Ads',
    'Meta Ads',
    'TikTok Ads',
    'creare site web',
    'magazin online',
    'Google Tag Manager',
    'GA4',
    'tracking conversii',
    'marketing online România',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: siteUrl,
    siteName: 'Hard Service Marketing',
    title: 'Promovare Online: Google Ads, Meta & TikTok | Hard Service',
    description: 'Campanii Google Ads, Facebook, Instagram și TikTok conectate cu website-ul, tracking-ul și conversiile. Tot sistemul de promovare într-un singur loc.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hard Service Marketing | Promovare Online',
    description: 'Google Ads, Meta Ads, TikTok Ads, website-uri, magazine online și tracking orientat spre lead-uri și vânzări.',
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'Hard Service Marketing',
  url: siteUrl,
  telephone: '+40740231358',
  email: 'chirilasadrian@yahoo.com',
  areaServed: { '@type': 'Country', name: 'România' },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+40740231358',
    contactType: 'sales',
    availableLanguage: ['ro'],
    areaServed: 'RO',
  },
  knowsAbout: [
    'Google Ads', 'Meta Ads', 'Facebook Ads', 'Instagram Ads', 'TikTok Ads',
    'Website development', 'E-commerce', 'Google Analytics 4', 'Google Tag Manager',
    'Conversion tracking', 'Technical SEO', 'Marketing automation'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicii Hard Service Marketing',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Administrare Google Ads' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Facebook și Instagram Ads' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'TikTok Ads' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Creare website și landing page' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Magazine online și tracking e-commerce' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GA4, Google Tag Manager și tracking conversii' } },
    ],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: 'Hard Service Marketing',
  inLanguage: 'ro-RO',
  publisher: { '@id': `${siteUrl}/#organization` },
};

const GTM_ID = 'GTM-K2T3M8BJ';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro">
      <head>
        <script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        {children}
         <a
    className="floating-call global-floating-call"
    href="tel:+40740231358"
    aria-label="Sună Hard Service"
  >
    <Phone size={24} />
  </a>
      </body>
    </html>
  );
}
