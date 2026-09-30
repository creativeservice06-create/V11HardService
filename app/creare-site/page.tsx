import type { Metadata } from 'next';
import {
  ArrowRight,
  Check,
  Code2,
  Gauge,
  Layers3,
  Phone,
  Search,
  ShieldCheck,
  Smartphone,
  Target,
} from 'lucide-react';

import ContactForm from '@/components/ContactForm';
import PolicyLink from '@/components/PolicyLink';
import SiteHeader from '@/components/SiteHeader';
import WebsiteHeroVisual from '@/components/WebsiteHeroVisual';

const siteUrl = 'https://www.hardservicesrl.ro';
const phoneHref = 'tel:+40740231358';

export const metadata: Metadata = {
  title:
    'Creare Site Web | Site-uri de Prezentare și Landing Pages | Hard Service',
  description:
    'Creare site web pentru firme: site-uri de prezentare, landing pages și website-uri responsive, rapide și pregătite pentru SEO, promovare și tracking.',
  alternates: {
    canonical: '/creare-site/',
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: `${siteUrl}/creare-site/`,
    siteName: 'Hard Service Marketing',
    title:
      'Creare Site Web | Site-uri de Prezentare și Landing Pages | Hard Service',
    description:
      'Creăm site-uri web pentru firme, cu structură clară, design responsive, SEO tehnic, tracking și orientare spre conversie.',
  },
};

const websiteTypes = [
  {
    icon: Code2,
    title: 'Site de prezentare',
    text:
      'Pentru firme care au nevoie de o prezență online clară, profesionistă și ușor de administrat.',
  },
  {
    icon: Target,
    title: 'Landing pages',
    text:
      'Pagini dedicate pentru campanii Google Ads, Meta Ads, TikTok Ads sau oferte specifice.',
  },
  {
    icon: Smartphone,
    title: 'Website responsive',
    text:
      'Structură și interfață adaptate pentru desktop, tabletă și telefon, fără a sacrifica lizibilitatea.',
  },
  {
    icon: Layers3,
    title: 'Website pentru promovare',
    text:
      'Pagini gândite împreună cu marketingul, tracking-ul și traseul utilizatorului până la contact sau vânzare.',
  },
];

const faqItems = [
  {
    question: 'Cât costă crearea unui site web?',
    answer:
      'Costul depinde de tipul site-ului, numărul de pagini, funcționalități, nivelul de personalizare și integrațiile necesare. Oferta se stabilește în funcție de proiect.',
  },
  {
    question: 'Faceți și site-uri de prezentare pentru firme?',
    answer:
      'Da. Putem construi site-uri de prezentare pentru firme și servicii, cu structură clară, design responsive și pagini pregătite pentru promovare și SEO.',
  },
  {
    question: 'Site-ul este optimizat pentru telefon?',
    answer:
      'Da. Structura este gândită responsive, astfel încât conținutul și elementele de contact să fie ușor de utilizat și pe mobil.',
  },
  {
    question: 'Se poate face SEO din momentul creării site-ului?',
    answer:
      'Da. Putem construi din start structura tehnică, paginile, heading-urile, meta informațiile, sitemap-ul, legăturile interne și alte elemente importante pentru SEO.',
  },
  {
    question: 'Puteți integra Google Analytics și Google Tag Manager?',
    answer:
      'Da. Putem integra GA4, Google Tag Manager și tracking pentru evenimente și conversii, în funcție de obiectivele proiectului.',
  },
  {
    question: 'Puteți modifica un site existent?',
    answer:
      'Da. În funcție de tehnologia și structura site-ului putem face modificări, optimizări sau reconstrucția unor componente.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/creare-site/#webpage`,
      url: `${siteUrl}/creare-site/`,
      name:
        'Creare Site Web | Site-uri de Prezentare și Landing Pages | Hard Service',
      description:
        'Creare site web pentru firme, site-uri de prezentare și landing pages.',
      inLanguage: 'ro-RO',
      isPartOf: {
        '@id': `${siteUrl}/#website`,
      },
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/creare-site/#service`,
      name: 'Creare site web',
      serviceType: 'Website development',
      url: `${siteUrl}/creare-site/`,
      description:
        'Creare și optimizare site-uri web, site-uri de prezentare și landing pages pentru firme.',
      provider: {
        '@id': `${siteUrl}/#organization`,
      },
      areaServed: {
        '@type': 'Country',
        name: 'România',
      },
      audience: {
        '@type': 'BusinessAudience',
        audienceType: 'Firme și afaceri',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${siteUrl}/creare-site/#breadcrumb`,
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
          name: 'Creare site',
          item: `${siteUrl}/creare-site/`,
        },
      ],
    },
  ],
};

export default function CreareSitePage() {
  return (
    <main className="website-page">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* HERO */}
      <section className="website-hero">
        <div className="website-hero-grid" />

        <div className="website-hero-inner">
          <div className="website-hero-copy">
            <nav className="website-breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Acasă</a>
              <span>/</span>
              <a href="/#servicii">Servicii</a>
              <span>/</span>
              <strong>Creare site</strong>
            </nav>

            <div className="eyebrow">
              CREARE SITE · WEBSITE · LANDING PAGES · SEO
            </div>

            <h1>
              Creare site web pentru firme care vor
              <span> un site clar, rapid și pregătit pentru promovare.</span>
            </h1>

            <p>
              Construim site-uri de prezentare și landing pages responsive,
              cu structură gândită pentru utilizator, SEO, tracking și
              conversii.
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
                Responsive
              </span>

              <span>
                <Check size={14} />
                SEO tehnic
              </span>

              <span>
                <Check size={14} />
                Tracking & conversii
              </span>
            </div>
          </div>

          <WebsiteHeroVisual />
        </div>
      </section>

      {/* INTRO */}
      <section className="section website-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">CREARE SITE WEB</div>

            <h2>
              Un site bun trebuie să arate bine, dar și să funcționeze.
            </h2>
          </div>

          <p>
            Pentru o firmă, website-ul este punctul în care ajunge clientul
            după ce te găsește în Google, pe Facebook, Instagram, TikTok sau
            printr-o recomandare. De aceea îl construim în jurul informației,
            contactului și obiectivului comercial.
          </p>
        </div>

        <div className="website-intro-layout">
          <div className="website-intro-copy">
            <p>
              Structura, viteza, experiența pe mobil, mesajul și paginile de
              servicii trebuie să se susțină reciproc.
            </p>

            <p>
              Un site modern nu trebuie să fie complicat. Trebuie să fie ușor
              de înțeles, ușor de folosit și suficient de bine construit pentru
              a susține promovarea ulterioară.
            </p>
          </div>

          <div className="website-objectives">
            <div>
              <span>01</span>
              <strong>Prezență</strong>
              <p>O imagine profesionistă pentru firmă.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Conversie</strong>
              <p>Apel, formular, solicitare sau vânzare.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Promovare</strong>
              <p>O bază bună pentru Google Ads, Meta sau TikTok.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TIPURI SITE */}
      <section className="section website-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">CE PUTEM CONSTRUI</div>

            <h2>
              Site-uri adaptate tipului de business.
            </h2>
          </div>

          <p>
            Nu toate firmele au nevoie de același tip de website. Structura
            trebuie să pornească de la ceea ce vinzi și de la ceea ce trebuie
            să facă utilizatorul.
          </p>
        </div>

        <div className="service-grid service-grid-v3 website-types-grid">
          {websiteTypes.map(({ icon: Icon, title, text }) => (
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

      {/* CE INCLUD */}
      <section className="section website-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">CE FACEM CONCRET</div>

            <h2>
              De la structură și design până la lansare și optimizare.
            </h2>
          </div>

          <p>
            Punem accent pe elementele care fac site-ul util atât pentru
            utilizator, cât și pentru promovarea ulterioară.
          </p>
        </div>

        <div className="website-services-list">
          <div>
            <Check size={18} />
            <section>
              <h3>Structură și arhitectură</h3>
              <p>
                Organizăm paginile, meniul și informațiile astfel încât
                utilizatorul să găsească rapid ceea ce caută.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>Design responsive</h3>
              <p>
                Interfața este adaptată pentru desktop, tabletă și telefon,
                cu accent pe lizibilitate și utilizare.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>Landing pages</h3>
              <p>
                Putem crea pagini dedicate pentru campanii și servicii
                specifice, cu mesaj și call-to-action adaptate.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>Formulare și contact</h3>
              <p>
                Integrăm formulare, butoane de apel și elemente de contact
                astfel încât utilizatorul să poată acționa rapid.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>SEO tehnic</h3>
              <p>
                Structură HTML, heading-uri, title, meta description,
                canonical, sitemap și legături interne pregătite pentru
                indexare.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>Tracking și Analytics</h3>
              <p>
                Putem integra GA4, Google Tag Manager și tracking pentru
                apeluri, formulare și alte conversii importante.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* SEO */}
      <section className="section website-section">
        <div className="website-feature">
          <div>
            <div className="eyebrow">SITE PREGĂTIT PENTRU SEO</div>

            <h2>
              SEO începe din structura site-ului, nu după lansare.
            </h2>

            <p>
              Un site poate avea un design foarte bun și totuși să fie greu de
              înțeles pentru motoarele de căutare. De aceea partea tehnică și
              structura paginilor trebuie luate în calcul din momentul
              dezvoltării.
            </p>

            <div className="website-feature-points">
              <span>
                <Check size={15} />
                structură heading-uri
              </span>

              <span>
                <Check size={15} />
                title & meta description
              </span>

              <span>
                <Check size={15} />
                sitemap & robots
              </span>

              <span>
                <Check size={15} />
                internal linking
              </span>

              <span>
                <Check size={15} />
                canonical
              </span>

              <span>
                <Check size={15} />
                structured data
              </span>
            </div>
          </div>

          <div className="website-seo-panel">
            <div>
              <small>PAGINĂ</small>
              <strong>/servicii/</strong>
            </div>

            <div>
              <small>TITLU</small>
              <strong>Servicii pentru firme</strong>
            </div>

            <div>
              <small>H1</small>
              <strong>Servicii de promovare online</strong>
            </div>

            <div>
              <small>LINK INTERN</small>
              <strong>/google-ads/</strong>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="section website-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">PERFORMANȚĂ</div>

            <h2>
              Site-ul trebuie să fie ușor de folosit și pe telefon.
            </h2>
          </div>

          <p>
            O mare parte din traficul primit de firme vine de pe dispozitive
            mobile. De aceea dimensiunea textului, spațierea, imaginile,
            formularele și navigarea trebuie gândite pentru ecrane mici.
          </p>
        </div>

        <div className="website-performance-grid">
          <article>
            <Smartphone />
            <h3>Responsive</h3>
            <p>
              Conținutul și interfața se adaptează la dimensiunea ecranului.
            </p>
          </article>

          <article>
            <Gauge />
            <h3>Viteză</h3>
            <p>
              Imaginile, codul și componentele trebuie gestionate astfel încât
              pagina să rămână rapidă.
            </p>
          </article>

          <article>
            <ShieldCheck />
            <h3>Securitate</h3>
            <p>
              Mentenanța, actualizările și configurația corectă fac parte din
              viața unui website și după lansare.
            </p>
          </article>
        </div>
      </section>

      {/* WEBSITE + MARKETING */}
      <section className="section website-section">
        <div className="website-triangle">
          <div>
            <span>01</span>
            <h3>Website</h3>
            <p>
              Pagina în care ajunge utilizatorul și găsește informația de care
              are nevoie.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Promovare</h3>
            <p>
              Google Ads, Facebook, Instagram și TikTok pot trimite trafic
              relevant către pagini dedicate.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Tracking</h3>
            <p>
              Apelurile, formularele și vânzările pot fi măsurate pentru a
              înțelege ce produce rezultate.
            </p>
          </div>
        </div>

        <div className="website-tech-row">
          <span>Google Ads</span>
          <span>Meta Ads</span>
          <span>TikTok Ads</span>
          <span>GA4</span>
          <span>Google Tag Manager</span>
          <span>SEO</span>
        </div>
      </section>

      {/* PROCES */}
      <section className="section website-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">CUM LUCRĂM</div>

            <h2>
              De la idee și structură la un website pregătit pentru utilizare.
            </h2>
          </div>
        </div>

        <div className="website-process">
          <div>
            <span>01</span>
            <h3>Analizăm</h3>
            <p>
              Business-ul, serviciile, publicul și obiectivul site-ului.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Structurăm</h3>
            <p>
              Paginile, navigarea, conținutul și traseul utilizatorului.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Construim</h3>
            <p>
              Designul și componentele website-ului.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Optimizăm</h3>
            <p>
              Mobile, SEO tehnic, tracking și elementele de conversie.
            </p>
          </div>
        </div>
      </section>

      {/* PENTRU CINE */}
      <section className="section website-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">PENTRU CINE</div>

            <h2>
              Website-uri pentru firme, servicii și proiecte comerciale.
            </h2>
          </div>

          <p>
            Construim structura în funcție de tipul de business și de ceea ce
            trebuie să facă website-ul după lansare.
          </p>
        </div>

        <div className="seo-focus-grid website-business-grid">
          <article>
            <small>SERVICII LOCALE</small>
            <h3>Site de prezentare</h3>
            <p>
              Pagini clare pentru servicii, zone acoperite, telefon, formular
              și informațiile de care are nevoie clientul.
            </p>
          </article>

          <article>
            <small>B2B & SERVICII</small>
            <h3>Website comercial</h3>
            <p>
              Structură orientată spre prezentarea serviciilor, proiectelor și
              cererilor de ofertă.
            </p>
          </article>

          <article>
            <small>PROMOVARE</small>
            <h3>Landing pages</h3>
            <p>
              Pagini construite pentru Google Ads, Meta Ads, TikTok Ads sau
              oferte specifice.
            </p>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="section website-section" id="faq">
        <div className="section-head">
          <div>
            <div className="eyebrow">ÎNTREBĂRI FRECVENTE</div>

            <h2>
              Întrebări despre crearea unui site web.
            </h2>
          </div>
        </div>

        <div className="website-faq">
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
          <div className="eyebrow">CREARE SITE</div>

          <h2>
            Cere o ofertă pentru site-ul firmei tale.
          </h2>

          <p>
            Spune-ne ce tip de site ai nevoie, ce servicii oferi și dacă vrei
            să folosești site-ul și pentru Google Ads, Meta Ads sau TikTok Ads.
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
