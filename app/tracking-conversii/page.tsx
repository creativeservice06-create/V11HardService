import type { Metadata } from 'next';

import {
  ArrowRight,
  BarChart3,
  Check,
  Code2,
  Gauge,
  Globe2,
  MousePointerClick,
  Phone,
  Search,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Target,
  Wrench,
} from 'lucide-react';

import ContactForm from '@/components/ContactForm';
import PolicyLink from '@/components/PolicyLink';
import SiteHeader from '@/components/SiteHeader';
import TrackingHeroVisual from '@/components/TrackingHeroVisual';

const siteUrl = 'https://www.hardservicesrl.ro';
const phoneHref = 'tel:+40740231358';

export const metadata: Metadata = {
  title:
    'Tracking Conversii | GA4, Google Tag Manager & Google Ads | Hard Service',
  description:
    'Tracking conversii pentru site-uri și magazine online: GA4, Google Tag Manager, Google Ads, Meta Pixel, TikTok Pixel, formulare, apeluri, lead-uri și ecommerce.',
  alternates: {
    canonical: '/tracking-conversii/',
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: `${siteUrl}/tracking-conversii/`,
    siteName: 'Hard Service Marketing',
    title:
      'Tracking Conversii | GA4, Google Tag Manager & Google Ads | Hard Service',
    description:
      'Configurăm și verificăm trackingul pentru formulare, apeluri, lead-uri, achiziții și campanii de promovare.',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/tracking-conversii/#webpage`,
      url: `${siteUrl}/tracking-conversii/`,
      name:
        'Tracking Conversii | GA4, Google Tag Manager & Google Ads | Hard Service',
      description:
        'Tracking conversii pentru site-uri și magazine online.',
      isPartOf: {
        '@id': `${siteUrl}/#website`,
      },
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/tracking-conversii/#service`,
      name: 'Tracking conversii',
      serviceType: 'Tracking conversii și analytics',
      description:
        'Configurare și verificare GA4, Google Tag Manager, Google Ads, Meta Pixel, TikTok Pixel și tracking ecommerce.',
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
      '@id': `${siteUrl}/tracking-conversii/#breadcrumb`,
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
          name: 'Tracking conversii',
          item: `${siteUrl}/tracking-conversii/`,
        },
      ],
    },
  ],
};

const trackingTypes = [
  {
    icon: MousePointerClick,
    title: 'Formulare și lead-uri',
    text:
      'Măsurăm trimiterile de formulare și acțiunile care reprezintă o solicitare reală.',
  },
  {
    icon: Phone,
    title: 'Clickuri pe telefon',
    text:
      'Urmărim clickurile pe numerele de telefon și le putem configura ca acțiuni de conversie.',
  },
  {
    icon: ShoppingBag,
    title: 'Achiziții online',
    text:
      'Pentru magazine, urmărim evenimentele importante din procesul de cumpărare.',
  },
  {
    icon: BarChart3,
    title: 'Evenimente GA4',
    text:
      'Configurăm evenimente relevante pentru comportamentul utilizatorilor din site.',
  },
  {
    icon: Target,
    title: 'Google Ads',
    text:
      'Conversiile pot fi transmise către Google Ads pentru măsurarea campaniilor.',
  },
  {
    icon: Smartphone,
    title: 'Meta & TikTok',
    text:
      'Configurăm pixelii și evenimentele necesare pentru platformele sociale.',
  },
];

const faqItems = [
  {
    question: 'Ce este trackingul conversiilor?',
    answer:
      'Trackingul conversiilor înseamnă măsurarea acțiunilor importante realizate de utilizatori, cum ar fi trimiterea unui formular, clickul pe telefon sau o achiziție.',
  },
  {
    question: 'Care este diferența dintre GA4 și Google Tag Manager?',
    answer:
      'GA4 este utilizat pentru analizarea datelor și evenimentelor, iar Google Tag Manager ajută la gestionarea tagurilor, triggerelor și implementărilor de tracking.',
  },
  {
    question: 'Se pot urmări apelurile telefonice?',
    answer:
      'Da. Clickurile pe linkuri de tip tel pot fi măsurate ca evenimente și, în funcție de configurație, utilizate ca acțiuni de conversie.',
  },
  {
    question: 'Se poate verifica un tracking deja instalat?',
    answer:
      'Da. Putem verifica tagurile, trigger-ele, evenimentele și conversiile existente pentru a identifica implementări lipsă sau duplicate.',
  },
  {
    question: 'Faceți tracking pentru magazine online?',
    answer:
      'Da. Putem configura măsurarea evenimentelor ecommerce, în funcție de platformă și de structura magazinului.',
  },
  {
    question: 'Trackingul este important pentru Google Ads?',
    answer:
      'Trackingul corect permite măsurarea acțiunilor pe care le urmărește o campanie, astfel încât datele despre conversii să poată fi analizate împreună cu datele de promovare.',
  },
];

export default function TrackingConversiiPage() {
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
              <strong>Tracking conversii</strong>
            </nav>

            <div className="eyebrow">
              TRACKING · GA4 · GTM · CONVERSII
            </div>

            <h1>
              Tracking conversii pentru firme care vor să știe
              <span> ce aduce rezultate.</span>
            </h1>

            <p>
              Configurăm și verificăm măsurarea formularelor, apelurilor,
              lead-urilor, achizițiilor și evenimentelor importante din site,
              apoi conectăm datele cu instrumentele de analytics și promovare.
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
                GA4 & GTM
              </span>

              <span>
                <Check size={14} />
                Google Ads
              </span>

              <span>
                <Check size={14} />
                Lead-uri & ecommerce
              </span>
            </div>
          </div>

          <TrackingHeroVisual />
        </div>
      </section>

      {/* INTRO */}
      <section className="section store-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">TRACKING CONVERSII</div>

            <h2>
              Nu este suficient să știi câți oameni intră pe site.
            </h2>
          </div>

          <p>
            Este important să poți vedea ce fac după ce ajung: dacă trimit un
            formular, apasă pe telefon, cer o ofertă sau finalizează o
            achiziție.
          </p>
        </div>

        <div className="store-intro-layout">
          <div className="store-intro-copy">
            <p>
              Un tracking bine configurat transformă interacțiunile din site
              în evenimente care pot fi analizate în GA4 și utilizate în
              platformele de promovare.
            </p>

            <p>
              De aceea nu tratăm trackingul doar ca pe instalarea unui script.
              Stabilim ce trebuie măsurat, unde trebuie trimise datele și
              verificăm dacă evenimentele se declanșează corect.
            </p>
          </div>

          <div className="store-objectives">
            <div>
              <span>01</span>
              <strong>Acțiuni</strong>
              <p>Formulare, apeluri, clickuri și achiziții.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Măsurare</strong>
              <p>GA4 și Google Tag Manager configurate clar.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Promovare</strong>
              <p>Google Ads, Meta Ads și TikTok Ads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TIPURI */}
      <section className="section store-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">CE PUTEM MĂSURA</div>

            <h2>
              Tracking adaptat acțiunilor importante pentru afacerea ta.
            </h2>
          </div>

          <p>
            Fiecare business are propriile obiective. Configurația trebuie să
            urmărească acțiunile care au valoare reală pentru firmă.
          </p>
        </div>

        <div className="service-grid service-grid-v3 store-types-grid">
          {trackingTypes.map(({ icon: Icon, title, text }) => (
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
      <section className="section store-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">CE FACEM CONCRET</div>

            <h2>
              De la implementare și configurare până la verificarea
              conversiilor.
            </h2>
          </div>

          <p>
            Analizăm structura existentă sau construim un setup nou, în funcție
            de site, platformă și obiectivele de măsurare.
          </p>
        </div>

        <div className="store-services-list">
          <div>
            <Check size={18} />

            <section>
              <h3>Google Tag Manager</h3>

              <p>
                Configurăm taguri, trigger-e și variabile pentru evenimentele
                care trebuie măsurate.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />

            <section>
              <h3>Google Analytics 4</h3>

              <p>
                Stabilim și verificăm evenimentele și conversiile importante
                pentru site.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />

            <section>
              <h3>Google Ads</h3>

              <p>
                Configurăm conversiile necesare pentru măsurarea acțiunilor
                provenite din campanii.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />

            <section>
              <h3>Meta Pixel & TikTok Pixel</h3>

              <p>
                Verificăm implementarea pixelilor și evenimentelor relevante
                pentru campaniile sociale.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />

            <section>
              <h3>Tracking ecommerce</h3>

              <p>
                Măsurăm pașii importanți din procesul de cumpărare, în funcție
                de platforma magazinului.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />

            <section>
              <h3>Debug & verificare</h3>

              <p>
                Verificăm dacă evenimentele se declanșează corect și dacă nu
                apar conversii duplicate sau inutile.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* STRUCTURA */}
      <section className="section store-section">
        <div className="store-feature">
          <div>
            <div className="eyebrow">STRUCTURA DE TRACKING</div>

            <h2>
              Fiecare acțiune importantă trebuie să ajungă în locul potrivit.
            </h2>

            <p>
              Un utilizator poate apăsa pe telefon, trimite un formular sau
              cumpăra un produs. Evenimentul rezultat trebuie să fie definit,
              transmis și verificat.
            </p>

            <p>
              Configurația poate conecta site-ul cu GA4, Google Ads, Meta Ads
              și TikTok Ads, în funcție de obiectivele proiectului.
            </p>

            <div className="store-feature-points">
              <span>
                <Check size={15} />
                formulare
              </span>

              <span>
                <Check size={15} />
                apeluri
              </span>

              <span>
                <Check size={15} />
                lead-uri
              </span>

              <span>
                <Check size={15} />
                ecommerce
              </span>

              <span>
                <Check size={15} />
                evenimente
              </span>

              <span>
                <Check size={15} />
                conversii Ads
              </span>
            </div>
          </div>

          <div className="store-seo-panel">
            <div>
              <small>EVENT</small>
              <strong>generate_lead</strong>
            </div>

            <div>
              <small>ACTION</small>
              <strong>Formular trimis</strong>
            </div>

            <div>
              <small>PLATFORM</small>
              <strong>GA4 · Google Ads</strong>
            </div>

            <div>
              <small>VERIFICARE</small>
              <strong>Trigger activ</strong>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORME */}
      <section className="section store-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">PLATFORME</div>

            <h2>
              Trackingul face legătura dintre site și promovare.
            </h2>
          </div>

          <p>
            Datele de pe site pot fi analizate și conectate cu platformele
            utilizate pentru promovare, în funcție de setup.
          </p>
        </div>

        <div className="store-commerce-grid">
          <article>
            <BarChart3 size={22} />

            <h3>GA4</h3>

            <p>
              Analizarea traficului, evenimentelor, surselor și conversiilor.
            </p>
          </article>

          <article>
            <Code2 size={22} />

            <h3>Google Tag Manager</h3>

            <p>
              Gestionarea centralizată a tagurilor, triggerelor și
              implementărilor.
            </p>
          </article>

          <article>
            <Target size={22} />

            <h3>Google Ads</h3>

            <p>
              Conversii care pot fi utilizate pentru analiza campaniilor.
            </p>
          </article>

          <article>
            <Smartphone size={22} />

            <h3>Meta & TikTok</h3>

            <p>
              Evenimente și pixeli pentru măsurarea acțiunilor din campanii.
            </p>
          </article>
        </div>
      </section>

      {/* ECOMMERCE */}
      <section className="section store-section">
        <div className="store-tracking-panel">
          <div>
            <div className="eyebrow">TRACKING E-COMMERCE</div>

            <h2>
              Pentru un magazin online urmărim întregul parcurs până la
              achiziție.
            </h2>

            <p>
              Nu contează doar câți oameni intră. Este important să poți
              analiza produsele văzute, adăugarea în coș, checkout-ul și
              comenzile finalizate.
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
              <strong>Achiziție</strong>
            </div>
          </div>

          <div className="store-tech-row">
            <span>GA4</span>
            <span>Google Tag Manager</span>
            <span>Google Ads</span>
            <span>Meta Pixel</span>
            <span>Tracking achiziții</span>
          </div>
        </div>
      </section>

      {/* VERIFICARE */}
      <section className="section store-section">
        <div className="store-feature">
          <div>
            <div className="eyebrow">VERIFICARE & DEBUG</div>

            <h2>
              Trackingul trebuie verificat, nu doar instalat.
            </h2>

            <p>
              Un tag care există în Google Tag Manager nu înseamnă automat că
              măsurarea este corectă. Verificăm ce se întâmplă atunci când
              utilizatorul realizează efectiv acțiunea.
            </p>

            <p>
              Putem analiza implementări existente pentru a identifica
              evenimente lipsă, trigger-e incorecte, conversii duplicate sau
              alte probleme de configurare.
            </p>

            <div className="store-feature-points">
              <span>
                <Check size={15} />
                trigger-e
              </span>

              <span>
                <Check size={15} />
                taguri
              </span>

              <span>
                <Check size={15} />
                evenimente
              </span>

              <span>
                <Check size={15} />
                conversii
              </span>

              <span>
                <Check size={15} />
                duplicări
              </span>

              <span>
                <Check size={15} />
                consent
              </span>
            </div>
          </div>

          <div className="store-seo-panel">
            <div>
              <small>TRIGGER</small>
              <strong>Click telefon</strong>
            </div>

            <div>
              <small>EVENT</small>
              <strong>phone_call</strong>
            </div>

            <div>
              <small>DESTINAȚIE</small>
              <strong>GA4 · Google Ads</strong>
            </div>

            <div>
              <small>STATUS</small>
              <strong>Verificat</strong>
            </div>
          </div>
        </div>
      </section>

      {/* SISTEM */}
      <section className="section store-section">
        <div className="store-triangle">
          <div>
            <span>01</span>

            <h3>Site</h3>

            <p>
              Formulare, apeluri, produse și acțiuni ale utilizatorilor.
            </p>
          </div>

          <div>
            <span>02</span>

            <h3>Tracking</h3>

            <p>
              GA4, Google Tag Manager și evenimente configurate corect.
            </p>
          </div>

          <div>
            <span>03</span>

            <h3>Promovare</h3>

            <p>
              Google Ads, Meta Ads și TikTok Ads conectate la datele relevante.
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
              De la audit și structură până la verificarea conversiilor.
            </h2>
          </div>
        </div>

        <div className="store-process">
          <div>
            <span>01</span>

            <h3>Analizăm</h3>

            <p>
              Site-ul, formularele, telefonul, magazinul și setup-ul existent.
            </p>
          </div>

          <div>
            <span>02</span>

            <h3>Structurăm</h3>

            <p>
              Stabilim evenimentele și conversiile care trebuie urmărite.
            </p>
          </div>

          <div>
            <span>03</span>

            <h3>Configurăm</h3>

            <p>
              Implementăm GA4, GTM și integrările necesare.
            </p>
          </div>

          <div>
            <span>04</span>

            <h3>Verificăm</h3>

            <p>
              Testăm evenimentele și confirmăm că datele sunt transmise corect.
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
              Tracking pentru modele diferite de business.
            </h2>
          </div>

          <p>
            Configurația se adaptează modului în care firma generează lead-uri,
            vinde produse sau primește solicitări.
          </p>
        </div>

        <div className="seo-focus-grid store-business-grid">
          <article>
            <small>SERVICII</small>

            <h3>Lead-uri și apeluri</h3>

            <p>
              Pentru firme unde formularele, telefoanele și cererile de ofertă
              reprezintă conversiile principale.
            </p>
          </article>

          <article>
            <small>E-COMMERCE</small>

            <h3>Magazine online</h3>

            <p>
              Pentru produse, coș, checkout, achiziții și analiza valorii
              comenzilor.
            </p>
          </article>

          <article>
            <small>ADS</small>

            <h3>Campanii de promovare</h3>

            <p>
              Pentru firme care vor să lege datele din site de Google Ads,
              Meta Ads sau TikTok Ads.
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
              Întrebări despre tracking conversii.
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
          <div className="eyebrow">TRACKING CONVERSII</div>

          <h2>
            Nu știi dacă trackingul site-ului tău funcționează corect?
          </h2>

          <p>
            Spune-ne ce vrei să măsori și ce platforme folosești. Putem verifica
            setup-ul existent sau putem construi o structură nouă pentru site
            sau magazin.
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
