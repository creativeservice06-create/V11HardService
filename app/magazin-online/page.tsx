import type { Metadata } from 'next';
import {
  ArrowRight,
  BarChart3,
  Check,
  CreditCard,
  Gauge,
  Package,
  Phone,
  Search,
  ShoppingCart,
  Smartphone,
  Store,
  Tag,
  Truck,
} from 'lucide-react';

import ContactForm from '@/components/ContactForm';
import OnlineStoreHeroVisual from '@/components/OnlineStoreHeroVisual';
import PolicyLink from '@/components/PolicyLink';
import SiteHeader from '@/components/SiteHeader';

const siteUrl = 'https://www.hardservicesrl.ro';
const phoneHref = 'tel:+40740231358';

export const metadata: Metadata = {
  title:
    'Magazin Online | Creare Magazin Online pentru Firme | Hard Service',
  description:
    'Creare magazin online pentru firme: produse, categorii, coș, checkout, Merchant Center, Google Shopping, tracking ecommerce, SEO și website responsive.',
  alternates: {
    canonical: '/magazin-online/',
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: `${siteUrl}/magazin-online/`,
    siteName: 'Hard Service Marketing',
    title:
      'Magazin Online | Creare Magazin Online pentru Firme | Hard Service',
    description:
      'Construim magazine online responsive, pregătite pentru vânzare, promovare, SEO și tracking al comenzilor.',
  },
};

const storeTypes = [
  {
    icon: Store,
    title: 'Magazin online',
    text:
      'Pentru firme care vor să vândă produse online printr-un website propriu, cu catalog și proces de comandă.',
  },
  {
    icon: Smartphone,
    title: 'Magazin responsive',
    text:
      'Interfață adaptată pentru telefon, tabletă și desktop, cu accent pe navigare și cumpărare.',
  },
  {
    icon: ShoppingCart,
    title: 'Catalog & checkout',
    text:
      'Categorii, produse, variante, coș și pagină de finalizare a comenzii organizate logic.',
  },
  {
    icon: BarChart3,
    title: 'Magazin pregătit pentru promovare',
    text:
      'Structură gândită pentru Google Ads, Shopping, Meta Ads, TikTok Ads și măsurarea vânzărilor.',
  },
];

const faqItems = [
  {
    question: 'Cât costă crearea unui magazin online?',
    answer:
      'Costul depinde de numărul de produse și categorii, funcționalități, design, integrări și nivelul de personalizare. Oferta se stabilește în funcție de proiect.',
  },
  {
    question: 'Puteți crea un magazin online de la zero?',
    answer:
      'Da. Putem construi structura magazinului, paginile de categorie și produs, coșul, checkout-ul și elementele necesare pentru promovare și tracking.',
  },
  {
    question: 'Magazinul poate fi promovat prin Google Shopping?',
    answer:
      'Da. Putem pregăti magazinul și configura elementele necesare pentru utilizarea Google Merchant Center și promovarea produselor prin Google Shopping sau Performance Max.',
  },
  {
    question: 'Puteți integra tracking pentru comenzi?',
    answer:
      'Da. În funcție de platformă și configurarea tehnică, putem implementa tracking pentru produse, coș, checkout și achiziții, inclusiv prin GA4 și Google Tag Manager.',
  },
  {
    question: 'Magazinul online este optimizat pentru SEO?',
    answer:
      'Da. Putem construi structura tehnică, categoriile, paginile de produse, heading-urile, meta informațiile, sitemap-ul, legăturile interne și alte elemente importante pentru SEO.',
  },
  {
    question: 'Puteți modifica un magazin online existent?',
    answer:
      'Da. În funcție de platforma și structura existente putem face modificări, optimizări sau reconstrui anumite componente.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/magazin-online/#webpage`,
      url: `${siteUrl}/magazin-online/`,
      name:
        'Magazin Online | Creare Magazin Online pentru Firme | Hard Service',
      description:
        'Creare și dezvoltare magazine online pentru firme.',
      inLanguage: 'ro-RO',
      isPartOf: {
        '@id': `${siteUrl}/#website`,
      },
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/magazin-online/#service`,
      name: 'Creare magazin online',
      serviceType: 'E-commerce website development',
      url: `${siteUrl}/magazin-online/`,
      description:
        'Creare și optimizare magazine online pentru produse, vânzări, promovare și tracking ecommerce.',
      provider: {
        '@id': `${siteUrl}/#organization`,
      },
      areaServed: {
        '@type': 'Country',
        name: 'România',
      },
      audience: {
        '@type': 'BusinessAudience',
        audienceType: 'Firme și magazine online',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${siteUrl}/magazin-online/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Acasă',
          item: siteUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Servicii',
          item: `${siteUrl}/#servicii`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Magazin online',
          item: `${siteUrl}/magazin-online/`,
        },
      ],
    },
  ],
};

export default function MagazinOnlinePage() {
  return (
    <main className="store-page">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* HERO */}
      <section className="store-hero">
        <div className="store-hero-grid" />

        <div className="store-hero-inner">
          <div className="store-hero-copy">
            <nav className="store-breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Acasă</a>
              <span>/</span>
              <a href="/#servicii">Servicii</a>
              <span>/</span>
              <strong>Magazin online</strong>
            </nav>

            <div className="eyebrow">
              MAGAZIN ONLINE · E-COMMERCE · SHOPPING · TRACKING
            </div>

            <h1>
              Creare magazin online pentru firme care vor
              <span> să vândă, nu doar să aibă un site.</span>
            </h1>

            <p>
              Construim magazine online cu produse, categorii, coș și checkout,
              responsive și pregătite pentru SEO, Google Shopping, promovare și
              tracking al comenzilor.
            </p>

            <div className="hero-actions">
              <a className="primary" href={phoneHref}>
                <Phone size={18} />
                0740 231 358
              </a>

              <a className="secondary" href="#contact">
                Solicită o ofertă
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="hero-proof">
              <span>
                <Check size={14} />
                Produse & categorii
              </span>

              <span>
                <Check size={14} />
                Checkout
              </span>

              <span>
                <Check size={14} />
                SEO & tracking
              </span>
            </div>
          </div>

          <OnlineStoreHeroVisual />
        </div>
      </section>

      {/* INTRO */}
      <section className="section store-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">CREARE MAGAZIN ONLINE</div>

            <h2>
              Un magazin online trebuie să fie construit în jurul cumpărării.
            </h2>
          </div>

          <p>
            Utilizatorul trebuie să găsească produsul, să înțeleagă oferta,
            să poată adăuga în coș și să finalizeze comanda fără pași inutili.
            În același timp, magazinul trebuie să poată fi promovat și măsurat.
          </p>
        </div>

        <div className="store-intro-layout">
          <div className="store-intro-copy">
            <p>
              Structura categoriilor, paginile de produs, filtrarea, coșul,
              checkout-ul și elementele de contact contribuie toate la
              experiența de cumpărare.
            </p>

            <p>
              De aceea tratăm magazinul online ca pe o parte a întregului
              sistem de vânzare, nu doar ca pe un catalog de produse.
            </p>
          </div>

          <div className="store-objectives">
            <div>
              <span>01</span>
              <strong>Produse</strong>
              <p>Catalog clar și ușor de navigat.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Comenzi</strong>
              <p>Coș și checkout fără pași inutili.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Promovare</strong>
              <p>Google Shopping, Meta și TikTok.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENTE */}
      <section className="section store-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">CE PUTEM CONSTRUI</div>

            <h2>
              Un magazin online construit pentru produsul și modelul tău de
              vânzare.
            </h2>
          </div>

          <p>
            Structura se adaptează numărului de produse, categoriilor,
            publicului și modului în care vrei să vinzi.
          </p>
        </div>

        <div className="service-grid service-grid-v3 store-types-grid">
          {storeTypes.map(({ icon: Icon, title, text }) => (
            <article className="service-card service-card-v3" key={title}>
              <div className="service-icon">
                <Icon />
              </div>

              <h3>{title}</h3>

              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CE INCLUDE */}
      <section className="section store-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">CE FACEM CONCRET</div>

            <h2>
              De la produse și categorii până la checkout și tracking.
            </h2>
          </div>

          <p>
            Punem accent pe elementele care influențează navigarea, cumpărarea
            și promovarea magazinului.
          </p>
        </div>

        <div className="store-services-list">
          <div>
            <Check size={18} />
            <section>
              <h3>Categorii și produse</h3>
              <p>
                Organizăm catalogul astfel încât utilizatorul să poată găsi
                rapid produsele și informațiile de care are nevoie.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>Coș și checkout</h3>
              <p>
                Construim un flux clar de la alegerea produsului până la
                finalizarea comenzii.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>Plată și livrare</h3>
              <p>
                Structura magazinului poate fi pregătită pentru metodele de
                plată și livrare necesare proiectului.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>Design responsive</h3>
              <p>
                Magazinul este gândit pentru cumpărare și navigare pe telefon,
                tabletă și desktop.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>SEO pentru categorii și produse</h3>
              <p>
                Structură de URL-uri, heading-uri, title, meta informații,
                legături interne, sitemap și pagini de categorie organizate
                pentru indexare.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>Tracking ecommerce</h3>
              <p>
                Putem măsura pașii importanți ai procesului de cumpărare,
                inclusiv produse, coș, checkout și achiziții.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* SEO */}
      <section className="section store-section">
        <div className="store-feature">
          <div>
            <div className="eyebrow">SEO PENTRU MAGAZIN ONLINE</div>

            <h2>
              Structura magazinului influențează și felul în care este găsit în
              Google.
            </h2>

            <p>
              Un magazin cu sute sau mii de produse trebuie organizat astfel
              încât motoarele de căutare și utilizatorii să poată înțelege
              relația dintre categorii, produse și paginile importante.
            </p>

            <p>
              Din acest motiv, SEO trebuie luat în calcul înainte ca magazinul
              să fie publicat, nu adăugat la final ca o etapă separată.
            </p>

            <div className="store-feature-points">
              <span>
                <Check size={15} />
                categorii bine structurate
              </span>

              <span>
                <Check size={15} />
                URL-uri clare
              </span>

              <span>
                <Check size={15} />
                title & meta
              </span>

              <span>
                <Check size={15} />
                internal linking
              </span>

              <span>
                <Check size={15} />
                sitemap
              </span>

              <span>
                <Check size={15} />
                structured data
              </span>
            </div>
          </div>

          <div className="store-seo-panel">
            <div>
              <small>CATEGORIE</small>
              <strong>/incaltaminte/barbati/</strong>
            </div>

            <div>
              <small>PRODUS</small>
              <strong>/produs/pantofi-piele/</strong>
            </div>

            <div>
              <small>FILTRARE</small>
              <strong>Mărime · Culoare · Preț</strong>
            </div>

            <div>
              <small>INTERNAL LINK</small>
              <strong>Produse similare</strong>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE SHOPPING */}
      <section className="section store-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">GOOGLE SHOPPING & MERCHANT CENTER</div>

            <h2>
              Magazinul online trebuie pregătit și pentru promovarea
              produselor.
            </h2>
          </div>

          <p>
            Pentru e-commerce, website-ul și promovarea produselor sunt strâns
            legate. Structura produselor și feed-ul trebuie să poată susține
            campaniile din Google.
          </p>
        </div>

        <div className="store-commerce-grid">
          <article>
            <Search />
            <h3>Google Shopping</h3>
            <p>
              Promovarea produselor în rezultatele comerciale Google, atunci
              când magazinul și feed-ul sunt pregătite.
            </p>
          </article>

          <article>
            <Package />
            <h3>Merchant Center</h3>
            <p>
              Produsele și informațiile lor trebuie să fie transmise corect
              către ecosistemul Google.
            </p>
          </article>

          <article>
            <BarChart3 />
            <h3>Performance Max</h3>
            <p>
              Pentru anumite magazine, Performance Max poate fi utilizat
              împreună cu produsele și obiectivele de conversie.
            </p>
          </article>
        </div>
      </section>

      {/* TRACKING */}
      <section className="section store-section">
        <div className="store-tracking-panel">
          <div>
            <div className="eyebrow">TRACKING E-COMMERCE</div>

            <h2>
              Nu contează doar câți oameni intră în magazin.
            </h2>

            <p>
              Important este ce fac după ce ajung: ce produse văd, ce adaugă în
              coș, unde abandonează și ce comenzi finalizează.
            </p>
          </div>

          <div className="store-tracking-flow">
            <div>
              <span>01</span>
              <strong>Produs</strong>
            </div>

            <ArrowRight />

            <div>
              <span>02</span>
              <strong>Coș</strong>
            </div>

            <ArrowRight />

            <div>
              <span>03</span>
              <strong>Checkout</strong>
            </div>

            <ArrowRight />

            <div>
              <span>04</span>
              <strong>Comandă</strong>
            </div>
          </div>

          <div className="store-tech-row">
            <span>GA4</span>
            <span>Google Tag Manager</span>
            <span>Google Ads</span>
            <span>Merchant Center</span>
            <span>Tracking achiziții</span>
          </div>
        </div>
      </section>

      {/* PROMOVARE */}
      <section className="section store-section">
        <div className="store-triangle">
          <div>
            <span>01</span>
            <h3>Magazin</h3>
            <p>
              Produse, categorii, coș și checkout.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Promovare</h3>
            <p>
              Google Shopping, Google Ads, Meta Ads și TikTok Ads.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Măsurare</h3>
            <p>
              Tracking pentru produse, checkout și achiziții.
            </p>
          </div>
        </div>
      </section>

      {/* PROCES */}
      <section className="section store-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">CUM LUCRĂM</div>

            <h2>
              De la structură și produse până la lansare și promovare.
            </h2>
          </div>
        </div>

        <div className="store-process">
          <div>
            <span>01</span>
            <h3>Analizăm</h3>
            <p>
              Produsele, categoriile, publicul și modelul de vânzare.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Structurăm</h3>
            <p>
              Categoriile, produsele, navigarea și fluxul de cumpărare.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Construim</h3>
            <p>
              Magazinul, paginile și funcționalitățile necesare.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Măsurăm</h3>
            <p>
              Tracking ecommerce, promovare și conversii.
            </p>
          </div>
        </div>
      </section>

      {/* PENTRU CINE */}
      <section className="section store-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">PENTRU CINE</div>

            <h2>
              Magazine online pentru produse și modele diferite de business.
            </h2>
          </div>

          <p>
            Structura magazinului se adaptează volumului de produse, modelului
            de vânzare și obiectivelor comerciale.
          </p>
        </div>

        <div className="seo-focus-grid store-business-grid">
          <article>
            <small>RETAIL</small>
            <h3>Produse și categorii</h3>
            <p>
              Magazine pentru firme care vor să își vândă produsele direct
              online.
            </p>
          </article>

          <article>
            <small>BRANDURI</small>
            <h3>Experiență de cumpărare</h3>
            <p>
              Structură și prezentare orientate spre produs, ofertă și
              conversie.
            </p>
          </article>

          <article>
            <small>PROMOVARE</small>
            <h3>Magazine pregătite pentru Ads</h3>
            <p>
              Website, Merchant Center, tracking și pagini pregătite pentru
              promovare.
            </p>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="section store-section" id="faq">
        <div className="section-head">
          <div>
            <div className="eyebrow">ÎNTREBĂRI FRECVENTE</div>

            <h2>
              Întrebări despre crearea unui magazin online.
            </h2>
          </div>
        </div>

        <div className="store-faq">
          {faqItems.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="contact-copy">
          <div className="eyebrow">MAGAZIN ONLINE</div>

          <h2>
            Cere o ofertă pentru magazinul tău online.
          </h2>

          <p>
            Spune-ne ce produse vinzi, câte produse ai aproximativ și dacă vrei
            ca magazinul să fie pregătit și pentru Google Shopping, Meta Ads sau
            TikTok Ads.
          </p>

          <a className="contact-phone" href={phoneHref}>
            <Phone size={22} />
            0740 231 358
          </a>
        </div>

        <div className="contact-form-column">
          <ContactForm />

          <aside className="company-details" aria-label="Datele firmei">
            <div className="company-details-header">
              <div className="company-details-icon" aria-hidden="true">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21h18" />
                  <path d="M5 21V3h10v18" />
                  <path d="M15 9h4v12" />
                  <path d="M8 6h1m2 0h1M8 9h1m2 0h1M8 12h1m2 0h1" />
                  <path d="M9 21v-5h3v5M17 12v1m0 3v1" />
                </svg>
              </div>

              <div>
                <p className="company-details-label">DATELE FIRMEI</p>
                <h3>HARD SERVICE SRL</h3>
              </div>
            </div>

            <dl className="company-details-grid">
              <div>
                <dt>CUI</dt>
                <dd>5451133</dd>
              </div>

              <div>
                <dt>Data înființării</dt>
                <dd>
                  <time dateTime="1994-03-17">17.03.1994</time>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <footer>
        <a className="brand brand-v4" href="/">
          <b>HARD SERVICE</b>
          <span>MARKETING</span>
        </a>

        <p>
          Google Ads · Facebook & Instagram Ads · TikTok Ads · Web · Tracking
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            margin: '10px 0 16px',
            fontSize: '12px',
            opacity: 0.7,
          }}
        >
          <PolicyLink href="/politica-confidentialitate">
            Politică de confidențialitate
          </PolicyLink>

          <span>·</span>

          <PolicyLink href="/politica-cookie-uri">
            Politică de cookie-uri
          </PolicyLink>
        </div>

        <a href={phoneHref}>0740 231 358</a>
      </footer>
    </main>
  );
}
