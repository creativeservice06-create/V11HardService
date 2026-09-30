import type { Metadata } from 'next';
import {
  ArrowRight,
  BarChart3,
  Check,
  Layers3,
  Phone,
  Search,
  Settings2,
  ShoppingCart,
  Target,
} from 'lucide-react';

import ContactForm from '@/components/ContactForm';
import GoogleAdsHeroVisual from '@/components/GoogleAdsHeroVisual';
import PolicyLink from '@/components/PolicyLink';
import SiteHeader from '@/components/SiteHeader';

const siteUrl = 'https://www.hardservicesrl.ro';
const phoneHref = 'tel:+40740231358';

export const metadata: Metadata = {
  title:
    'Google Ads pentru Firme | Administrare și Optimizare Campanii | Hard Service',
  description:
    'Administrare Google Ads pentru firme: campanii Search, Performance Max și Shopping, cercetare cuvinte cheie, optimizare, tracking conversii și landing pages.',
  alternates: {
    canonical: '/google-ads/',
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: `${siteUrl}/google-ads/`,
    siteName: 'Hard Service Marketing',
    title:
      'Google Ads pentru Firme | Administrare și Optimizare Campanii | Hard Service',
    description:
      'Administrare Google Ads pentru firme, cu strategie, optimizare, tracking conversii și landing pages.',
  },
};

const serviceItems = [
  {
    icon: Search,
    title: 'Google Search',
    text:
      'Campanii pentru utilizatorii care caută deja serviciile sau produsele tale. Structurăm contul în funcție de ceea ce vinzi și de intenția din spatele căutărilor.',
  },
  {
    icon: Target,
    title: 'Performance Max',
    text:
      'Campanii orientate spre conversii și distribuție în ecosistemul Google, atunci când tipul de business și datele disponibile justifică această abordare.',
  },
  {
    icon: ShoppingCart,
    title: 'Google Shopping',
    text:
      'Pentru magazine online, promovarea produselor prin Merchant Center, Shopping și Performance Max, cu măsurarea achizițiilor.',
  },
  {
    icon: BarChart3,
    title: 'Display & YouTube',
    text:
      'Campanii complementare pentru vizibilitate și remarketing, folosite atunci când au sens pentru obiectivul și strategia proiectului.',
  },
];

const faqItems = [
  {
    question: 'Ce include administrarea Google Ads?',
    answer:
      'Administrarea poate include cercetarea cuvintelor cheie, structurarea campaniilor, anunțurile, negative keywords, monitorizarea termenilor de căutare, optimizarea și tracking-ul conversiilor.',
  },
  {
    question: 'Puteți prelua un cont Google Ads existent?',
    answer:
      'Da. Analizăm structura contului, campaniile, termenii de căutare, conversiile și setările existente înainte de a propune modificări.',
  },
  {
    question: 'Lucrați și cu Google Search?',
    answer:
      'Da. Search este una dintre principalele forme de promovare pentru serviciile și produsele care beneficiază de cerere exprimată prin căutări.',
  },
  {
    question: 'Puteți urmări apelurile și formularele?',
    answer:
      'Da. În funcție de configurația website-ului, putem urmări apeluri, formulare și alte conversii și le putem integra cu Google Ads, GA4 și Google Tag Manager.',
  },
  {
    question: 'Este nevoie de o landing page separată?',
    answer:
      'Nu întotdeauna. Unele campanii pot folosi pagini existente, iar pentru alte servicii poate fi utilă o pagină dedicată, construită special pentru traficul din Google Ads.',
  },
  {
    question: 'Google Ads este potrivit pentru orice firmă?',
    answer:
      'Nu există o structură universală. Strategia trebuie adaptată produsului, serviciului, zonei de activitate, concurenței și modului în care clientul ia decizia de cumpărare.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/google-ads/#webpage`,
      url: `${siteUrl}/google-ads/`,
      name:
        'Google Ads pentru Firme | Administrare și Optimizare Campanii | Hard Service',
      description:
        'Administrare și optimizare Google Ads pentru firme.',
      inLanguage: 'ro-RO',
      isPartOf: {
        '@id': `${siteUrl}/#website`,
      },
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/google-ads/#service`,
      name: 'Administrare Google Ads',
      serviceType: 'Google Ads management',
      url: `${siteUrl}/google-ads/`,
      description:
        'Administrare, optimizare și tracking pentru campanii Google Ads.',
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
      '@id': `${siteUrl}/google-ads/#breadcrumb`,
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
          name: 'Google Ads',
          item: `${siteUrl}/google-ads/`,
        },
      ],
    },
  ],
};

export default function GoogleAdsPage() {
  return (
    <main className="google-ads-page">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* HERO */}
      <section className="google-ads-hero">
        <div className="google-ads-hero-grid" />
        <div className="google-ads-hero-inner">
          <div className="google-ads-hero-copy">
            <nav
              className="google-ads-breadcrumbs"
              aria-label="Breadcrumb"
            >
              <a href="/">Acasă</a>
              <span>/</span>
              <a href="/#servicii">Servicii</a>
              <span>/</span>
              <strong>Google Ads</strong>
            </nav>

            <div className="eyebrow">
              GOOGLE ADS · SEARCH · PERFORMANCE MAX · SHOPPING
            </div>

            <h1>
              Google Ads care aduce
              <span> clienți relevanți, nu doar clickuri.</span>
            </h1>

            <p>
              Administrăm campanii Google Ads pentru firme, de la cercetarea
              cuvintelor cheie și structurarea contului până la anunțuri,
              landing pages, tracking și optimizare continuă.
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
                Strategie personalizată
              </span>

              <span>
                <Check size={14} />
                Tracking conversii
              </span>

              <span>
                <Check size={14} />
                Optimizare continuă
              </span>
            </div>
          </div>

          <GoogleAdsHeroVisual />
        </div>
      </section>

      {/* INTRO */}
      <section className="section google-ads-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">ADMINISTRARE GOOGLE ADS</div>

            <h2>
              Campaniile bune încep cu ceea ce caută clientul.
            </h2>
          </div>

          <p>
            Google Ads este mai mult decât cumpărarea unor clickuri. Pentru
            rezultate utile trebuie să existe o legătură clară între căutare,
            anunț, pagina de destinație și acțiunea pe care vrei să o obții.
          </p>
        </div>

        <div className="google-ads-intro-layout">
          <div className="google-ads-intro-copy">
            <p>
              Pentru un serviciu local, obiectivul poate fi un apel. Pentru un
              business B2B, poate fi o solicitare de ofertă. Pentru un magazin
              online, poate fi o comandă.
            </p>

            <p>
              De aceea construim campaniile în jurul obiectivului real al
              afacerii, nu în jurul unui număr de clickuri.
            </p>
          </div>

          <div className="google-ads-objectives">
            <div>
              <span>01</span>
              <strong>Apeluri</strong>
              <p>pentru servicii unde contactul telefonic este important.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Lead-uri</strong>
              <p>pentru formulare și solicitări de ofertă.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Vânzări</strong>
              <p>pentru magazine online și achiziții măsurabile.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPANII */}
      <section className="section google-ads-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">TIPURI DE CAMPANII</div>

            <h2>
              Folosim tipul de campanie potrivit pentru business.
            </h2>
          </div>

          <p>
            Nu toate firmele au nevoie de aceeași combinație. Alegerea
            depinde de produs, serviciu, audiență și obiectiv.
          </p>
        </div>

        <div className="service-grid service-grid-v3 google-ads-service-grid">
          {serviceItems.map(({ icon: Icon, title, text }) => (
            <article
              className="service-card service-card-v3"
              key={title}
            >
              <div className="service-icon">
                <Icon />
              </div>

              <h3>{title}</h3>

              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CE FACEM */}
      <section className="section google-ads-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">CE FACEM CONCRET</div>

            <h2>
              Administrarea Google Ads de la structură până la optimizare.
            </h2>
          </div>

          <p>
            Lucrăm pe componentele care influențează traficul, relevanța și
            conversiile.
          </p>
        </div>

        <div className="google-ads-services-list">
          <div>
            <Check size={18} />
            <section>
              <h3>Cercetare de cuvinte cheie</h3>
              <p>
                Identificăm căutările relevante pentru produsele și serviciile
                promovate și separăm intenția comercială de termenii care nu
                justifică buget.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>Structurarea campaniilor</h3>
              <p>
                Organizăm campaniile în funcție de servicii, produse,
                categorii, locații și obiective.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>Anunțuri și assets</h3>
              <p>
                Construim mesaje relevante pentru termenii de căutare și
                pentru oferta prezentată pe website.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>Negative keywords și search terms</h3>
              <p>
                Analizăm ceea ce caută efectiv utilizatorii și excludem
                căutările care pot consuma buget fără relevanță comercială.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>Optimizare continuă</h3>
              <p>
                Ajustăm campaniile, bugetele și prioritățile pe baza datelor
                disponibile și a conversiilor generate.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>Tracking al conversiilor</h3>
              <p>
                Măsurăm, în funcție de proiect, apeluri, formulare, lead-uri,
                achiziții și alte acțiuni importante.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* KEYWORDS */}
      <section className="section google-ads-section">
        <div className="google-ads-feature">
          <div>
            <div className="eyebrow">CUVINTE CHEIE</div>

            <h2>
              Traficul relevant începe cu intenția corectă.
            </h2>

            <p>
              Două căutări care conțin același cuvânt nu au neapărat aceeași
              intenție. De aceea analizăm termenii de căutare și construim
              structura campaniilor în jurul modului în care oamenii caută.
            </p>

            <div className="google-ads-feature-points">
              <span>
                <Check size={15} />
                cercetare de cuvinte cheie
              </span>

              <span>
                <Check size={15} />
                negative keywords
              </span>

              <span>
                <Check size={15} />
                analiză search terms
              </span>

              <span>
                <Check size={15} />
                structură pe servicii
              </span>
            </div>
          </div>

          <div className="google-ads-search-examples">
            <div>
              <small>CAUTARE RELEVANTĂ</small>
              <strong>serviciu marketing online</strong>
            </div>

            <div>
              <small>INTENȚIE COMERCIALĂ</small>
              <strong>firmă Google Ads București</strong>
            </div>

            <div className="negative">
              <small>EXCLUDERE</small>
              <strong>curs Google Ads gratuit</strong>
            </div>
          </div>
        </div>
      </section>

      {/* LANDING + TRACKING */}
      <section className="section google-ads-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">WEBSITE · LANDING PAGE · TRACKING</div>

            <h2>
              Reclama este doar prima parte a traseului.
            </h2>
          </div>

          <p>
            După click, utilizatorul trebuie să ajungă într-o pagină relevantă
            și să poată face rapid acțiunea pentru care ai plătit traficul.
          </p>
        </div>

        <div className="google-ads-triangle">
          <div>
            <span>01</span>
            <h3>Reclama</h3>
            <p>
              Mesajul trebuie să corespundă căutării și ofertei.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Landing page</h3>
            <p>
              Pagina trebuie să continue mesajul și să ofere o acțiune clară.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Tracking</h3>
            <p>
              Măsurăm ce se întâmplă după click: apel, formular sau vânzare.
            </p>
          </div>
        </div>

        <div className="google-ads-tech-row">
          <span>GA4</span>
          <span>Google Tag Manager</span>
          <span>Google Ads Conversion Tracking</span>
          <span>Tracking apeluri</span>
          <span>Tracking formulare</span>
        </div>
      </section>

      {/* PROCES */}
      <section className="section google-ads-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">CUM LUCRĂM</div>

            <h2>
              De la analiza business-ului la optimizarea campaniilor.
            </h2>
          </div>
        </div>

        <div className="google-ads-process">
          <div>
            <span>01</span>
            <h3>Analizăm</h3>
            <p>
              Serviciile, produsele, piața, zona de activitate și obiectivele.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Construim</h3>
            <p>
              Cuvintele cheie, structura, campaniile și mesajele.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Măsurăm</h3>
            <p>
              Conversiile și acțiunile care contează pentru business.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Optimizăm</h3>
            <p>
              Campaniile și bugetele pe baza datelor reale din cont.
            </p>
          </div>
        </div>
      </section>

      {/* PENTRU CINE */}
      <section className="section google-ads-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">PENTRU CINE</div>

            <h2>
              Google Ads pentru modele diferite de business.
            </h2>
          </div>

          <p>
            Strategia se schimbă în funcție de ceea ce vinzi și de felul în
            care clientul ajunge la decizia de cumpărare.
          </p>
        </div>

        <div className="seo-focus-grid google-ads-business-grid">
          <article>
            <small>SERVICII LOCALE</small>
            <h3>Apeluri și solicitări</h3>
            <p>
              Campanii Search pentru servicii pe care oamenii le caută atunci
              când au nevoie de un furnizor.
            </p>
          </article>

          <article>
            <small>B2B & SERVICII</small>
            <h3>Lead-uri și cereri de ofertă</h3>
            <p>
              Campanii și landing pages construite pentru servicii cu o
              decizie comercială mai complexă.
            </p>
          </article>

          <article>
            <small>E-COMMERCE</small>
            <h3>Produse și comenzi</h3>
            <p>
              Merchant Center, Shopping, Performance Max și tracking pentru
              achiziții și valoarea comenzilor.
            </p>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="section google-ads-section" id="faq">
        <div className="section-head">
          <div>
            <div className="eyebrow">ÎNTREBĂRI FRECVENTE</div>

            <h2>
              Întrebări despre administrarea Google Ads.
            </h2>
          </div>
        </div>

        <div className="google-ads-faq">
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
          <div className="eyebrow">GOOGLE ADS</div>

          <h2>
            Cere o ofertă pentru administrarea campaniilor tale.
          </h2>

          <p>
            Spune-ne ce promovezi, în ce zonă activezi și dacă ai deja un cont
            Google Ads. Analizăm proiectul și revenim cu următorii pași.
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

        <p>Google Ads · Meta Ads · TikTok Ads · Web · Tracking</p>

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
