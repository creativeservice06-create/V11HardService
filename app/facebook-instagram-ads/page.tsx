import type { Metadata } from 'next';
import {
  ArrowRight,
  BarChart3,
  Check,
  Image,
  Layers3,
  MessageCircle,
  Phone,
  ShoppingCart,
  Target,
  Users,
} from 'lucide-react';

import ContactForm from '@/components/ContactForm';
import MetaAdsHeroVisual from '@/components/MetaAdsHeroVisual';
import PolicyLink from '@/components/PolicyLink';
import SiteHeader from '@/components/SiteHeader';

const siteUrl = 'https://www.hardservicesrl.ro';
const phoneHref = 'tel:+40740231358';

export const metadata: Metadata = {
  title:
    'Facebook & Instagram Ads | Meta Ads pentru Firme | Hard Service',
  description:
    'Facebook și Instagram Ads pentru firme prin Meta Ads: campanii de promovare, audiențe, lead-uri, remarketing, Meta Pixel, tracking și optimizare.',
  alternates: {
    canonical: '/facebook-instagram-ads/',
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: `${siteUrl}/facebook-instagram-ads/`,
    siteName: 'Hard Service Marketing',
    title:
      'Facebook & Instagram Ads | Meta Ads pentru Firme | Hard Service',
    description:
      'Campanii Facebook și Instagram Ads pentru lead-uri, vânzări și promovarea serviciilor, cu tracking și optimizare.',
  },
};

const campaignTypes = [
  {
    icon: Users,
    title: 'Lead Ads',
    text:
      'Campanii orientate spre generarea de lead-uri prin formulare și acțiuni de contact, atunci când acest model este potrivit pentru business.',
  },
  {
    icon: ShoppingCart,
    title: 'Campanii pentru vânzări',
    text:
      'Pentru magazine online și produse, folosim structuri orientate spre achiziție, catalog și măsurarea comenzilor.',
  },
  {
    icon: Target,
    title: 'Trafic & conversii',
    text:
      'Campanii pentru promovarea unor pagini, servicii sau acțiuni concrete, în funcție de obiectivul proiectului.',
  },
  {
    icon: MessageCircle,
    title: 'Remarketing',
    text:
      'Revenim către utilizatorii care au interacționat deja cu website-ul sau cu materialele de promovare, atunci când strategia o cere.',
  },
];

const faqItems = [
  {
    question: 'Care este diferența dintre Facebook Ads și Meta Ads?',
    answer:
      'Meta Ads este denumirea mai largă pentru sistemul de publicitate al Meta. Campaniile pot fi difuzate pe Facebook, Instagram și alte plasamente disponibile, în funcție de obiectiv și configurare.',
  },
  {
    question: 'Pot face reclame doar pe Instagram?',
    answer:
      'Da. Campaniile pot fi configurate în funcție de platforme și plasamente, în funcție de obiectivul și structura campaniei.',
  },
  {
    question: 'Puteți administra un cont Meta Ads existent?',
    answer:
      'Da. Putem analiza structura contului, campaniile, audiențele, reclamele, evenimentele și conversiile existente înainte de a face modificări.',
  },
  {
    question: 'Puteți urmări lead-urile și vânzările?',
    answer:
      'Da. În funcție de website și de configurația tehnică, putem implementa și verifica Meta Pixel, evenimentele și tracking-ul pentru formulare sau achiziții.',
  },
  {
    question: 'Ce este Meta Pixel?',
    answer:
      'Meta Pixel este un instrument de măsurare care poate transmite către Meta informații despre acțiunile utilizatorilor pe website, pentru măsurare, audiențe și optimizarea campaniilor.',
  },
  {
    question: 'Este suficientă doar o reclamă?',
    answer:
      'De regulă, nu. Rezultatele depind de ofertă, audiență, mesaj, materialele creative, pagina de destinație, configurarea campaniei și măsurarea conversiilor.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/facebook-instagram-ads/#webpage`,
      url: `${siteUrl}/facebook-instagram-ads/`,
      name:
        'Facebook & Instagram Ads | Meta Ads pentru Firme | Hard Service',
      description:
        'Servicii Facebook, Instagram și Meta Ads pentru firme.',
      inLanguage: 'ro-RO',
      isPartOf: {
        '@id': `${siteUrl}/#website`,
      },
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/facebook-instagram-ads/#service`,
      name: 'Facebook & Instagram Ads',
      serviceType: 'Meta Ads management',
      url: `${siteUrl}/facebook-instagram-ads/`,
      description:
        'Administrare și optimizare campanii Meta Ads pentru Facebook și Instagram.',
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
      '@id': `${siteUrl}/facebook-instagram-ads/#breadcrumb`,
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
          name: 'Facebook & Instagram Ads',
          item: `${siteUrl}/facebook-instagram-ads/`,
        },
      ],
    },
  ],
};

export default function FacebookInstagramAdsPage() {
  return (
    <main className="meta-ads-page">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* HERO */}
      <section className="meta-ads-hero">
        <div className="meta-ads-hero-grid" />

        <div className="meta-ads-hero-inner">
          <div className="meta-ads-hero-copy">
            <nav
              className="meta-ads-breadcrumbs"
              aria-label="Breadcrumb"
            >
              <a href="/">Acasă</a>
              <span>/</span>
              <a href="/#servicii">Servicii</a>
              <span>/</span>
              <strong>Facebook & Instagram Ads</strong>
            </nav>

            <div className="eyebrow">
              META ADS · FACEBOOK · INSTAGRAM
            </div>

            <h1>
              Facebook și Instagram Ads care
              <span> ajung la oamenii potriviți.</span>
            </h1>

            <p>
              Administrăm campanii Meta Ads pentru servicii, lead-uri,
              e-commerce și promovarea ofertelor, de la audiențe și materiale
              creative până la tracking și optimizare.
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
                Facebook & Instagram
              </span>

              <span>
                <Check size={14} />
                Audiențe & remarketing
              </span>

              <span>
                <Check size={14} />
                Tracking conversii
              </span>
            </div>
          </div>

          <MetaAdsHeroVisual />
        </div>
      </section>

      {/* INTRO */}
      <section className="section meta-ads-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">ADMINISTRARE META ADS</div>

            <h2>
              Reclamele nu sunt doar despre afișări. Sunt despre cui,
              ce mesaj și ce acțiune.
            </h2>
          </div>

          <p>
            Facebook și Instagram permit promovarea către audiențe diferite,
            folosind obiective, materiale și plasamente adaptate business-ului.
            Structura campaniei trebuie să plece de la ceea ce vrei să obții.
          </p>
        </div>

        <div className="meta-ads-intro-layout">
          <div className="meta-ads-intro-copy">
            <p>
              Pentru un serviciu poate fi important un lead. Pentru un magazin
              online, o achiziție. Pentru o ofertă nouă, poate fi nevoie de
              trafic și remarketing.
            </p>

            <p>
              De aceea construim campaniile Meta în funcție de obiectiv,
              audiență, ofertă și traseul utilizatorului după interacțiunea cu
              reclama.
            </p>
          </div>

          <div className="meta-ads-objectives">
            <div>
              <span>01</span>
              <strong>Lead-uri</strong>
              <p>Formulare și solicitări de contact.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Vânzări</strong>
              <p>Produse, catalog și achiziții.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Remarketing</strong>
              <p>Revenire către utilizatori interesați.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TIPURI DE CAMPANII */}
      <section className="section meta-ads-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">TIPURI DE CAMPANII</div>

            <h2>
              Campanii Facebook și Instagram construite în funcție de obiectiv.
            </h2>
          </div>

          <p>
            Alegerea obiectivului și a structurii depinde de business, ofertă,
            audiență și acțiunea pe care vrei să o obții.
          </p>
        </div>

        <div className="service-grid service-grid-v3 meta-ads-campaign-grid">
          {campaignTypes.map(({ icon: Icon, title, text }) => (
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
      <section className="section meta-ads-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">CE FACEM CONCRET</div>

            <h2>
              Administrarea Meta Ads de la audiență până la conversie.
            </h2>
          </div>

          <p>
            Construim și optimizăm campania pe toate componentele care pot
            influența rezultatul.
          </p>
        </div>

        <div className="meta-ads-services-list">
          <div>
            <Check size={18} />
            <section>
              <h3>Structura campaniilor</h3>
              <p>
                Organizăm campaniile în funcție de obiectiv, produs, serviciu,
                audiență și etapa din procesul de cumpărare.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>Audiențe</h3>
              <p>
                Lucrăm cu audiențe relevante pentru business și cu segmente
                diferite în funcție de nivelul de interes.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>Materiale creative</h3>
              <p>
                Reclamele au nevoie de imagini, video sau mesaje potrivite
                pentru formatul Facebook și Instagram.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>Copy pentru reclame</h3>
              <p>
                Mesajul trebuie să fie clar, relevant pentru public și
                conectat cu oferta sau pagina promovată.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>Remarketing</h3>
              <p>
                Construim strategii pentru utilizatorii care au interacționat
                deja cu site-ul sau cu conținutul atunci când proiectul
                beneficiază de această abordare.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>Tracking și optimizare</h3>
              <p>
                Analizăm rezultatele campaniilor și urmărim conversiile,
                inclusiv prin Meta Pixel și alte integrări relevante.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* AUDIENTE */}
      <section className="section meta-ads-section">
        <div className="meta-ads-feature">
          <div>
            <div className="eyebrow">AUDIENȚE</div>

            <h2>
              Mesajul potrivit pentru publicul potrivit.
            </h2>

            <p>
              Facebook și Instagram permit lucrul cu audiențe diferite în
              funcție de obiectiv și de datele disponibile. Nu folosim aceeași
              structură pentru fiecare business.
            </p>

            <div className="meta-ads-feature-points">
              <span>
                <Check size={15} />
                audiențe relevante
              </span>

              <span>
                <Check size={15} />
                custom audiences
              </span>

              <span>
                <Check size={15} />
                remarketing
              </span>

              <span>
                <Check size={15} />
                segmentare
              </span>
            </div>
          </div>

          <div className="meta-ads-audience-box">
            <div>
              <span>PUBLIC NOU</span>
              <strong>Oameni potriviți pentru ofertă</strong>
            </div>

            <div>
              <span>INTERACȚIUNE</span>
              <strong>Utilizatori care au interacționat</strong>
            </div>

            <div>
              <span>REMARKETING</span>
              <strong>Vizitatori și clienți existenți</strong>
            </div>
          </div>
        </div>
      </section>

      {/* CREATIVE */}
      <section className="section meta-ads-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">CREATIVE</div>

            <h2>
              Facebook și Instagram sunt platforme vizuale. Reclama trebuie
              să arate și să sune corect.
            </h2>
          </div>

          <p>
            Imaginea, video-ul, headline-ul și mesajul trebuie adaptate
            formatului și publicului, nu doar copiate de la o campanie la alta.
          </p>
        </div>

        <div className="meta-ads-creative-grid">
          <div>
            <Image />
            <h3>Imagine</h3>
            <p>
              Vizualuri clare, potrivite pentru oferta și formatul campaniei.
            </p>
          </div>

          <div>
            <MessageCircle />
            <h3>Mesaj</h3>
            <p>
              Texte concise, orientate către nevoia și obiectivul utilizatorului.
            </p>
          </div>

          <div>
            <Target />
            <h3>Ofertă</h3>
            <p>
              Utilizatorul trebuie să înțeleagă rapid ce primește și ce trebuie
              să facă mai departe.
            </p>
          </div>
        </div>
      </section>

      {/* WEBSITE + TRACKING */}
      <section className="section meta-ads-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              WEBSITE · META PIXEL · CONVERSII
            </div>

            <h2>
              Campania trebuie legată de ceea ce se întâmplă după click.
            </h2>
          </div>

          <p>
            Meta Ads devine mult mai ușor de analizat atunci când website-ul,
            evenimentele și conversiile sunt configurate corect.
          </p>
        </div>

        <div className="meta-ads-triangle">
          <div>
            <span>01</span>
            <h3>Reclamă</h3>
            <p>
              Mesaj și creativ adaptate publicului și obiectivului.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Landing page</h3>
            <p>
              Pagina trebuie să continue oferta prezentată în reclamă.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Tracking</h3>
            <p>
              Măsurăm interacțiunile și conversiile importante pentru business.
            </p>
          </div>
        </div>

        <div className="meta-ads-tech-row">
          <span>Meta Pixel</span>
          <span>GA4</span>
          <span>Google Tag Manager</span>
          <span>Tracking formulare</span>
          <span>Tracking achiziții</span>
        </div>
      </section>

      {/* OPTIMIZARE */}
      <section className="section meta-ads-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">OPTIMIZARE</div>

            <h2>
              Campaniile se optimizează pe baza datelor, nu doar a impresiilor.
            </h2>
          </div>

          <p>
            Analizăm publicul, reclamele, costurile și conversiile și ajustăm
            campaniile în funcție de ceea ce observăm în cont.
          </p>
        </div>

        <div className="meta-ads-process">
          <div>
            <span>01</span>
            <h3>Analizăm</h3>
            <p>
              Oferta, publicul, produsele și obiectivul campaniei.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Testăm</h3>
            <p>
              Audiențe, mesaje, materiale și structuri potrivite proiectului.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Măsurăm</h3>
            <p>
              Lead-uri, vânzări și alte conversii relevante.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Optimizăm</h3>
            <p>
              Bugete, audiențe, reclame și priorități pe baza datelor.
            </p>
          </div>
        </div>
      </section>

      {/* PENTRU CINE */}
      <section className="section meta-ads-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">PENTRU CINE</div>

            <h2>
              Facebook & Instagram Ads pentru modele diferite de business.
            </h2>
          </div>

          <p>
            Strategia se schimbă în funcție de ce vinzi, cui vinzi și care este
            următoarea acțiune pe care vrei să o obții.
          </p>
        </div>

        <div className="seo-focus-grid meta-ads-business-grid">
          <article>
            <small>SERVICII LOCALE</small>
            <h3>Lead-uri și contacte</h3>
            <p>
              Campanii pentru servicii în care utilizatorul trebuie să ajungă
              rapid la formular, telefon sau ofertă.
            </p>
          </article>

          <article>
            <small>B2B & SERVICII</small>
            <h3>Promovare și lead generation</h3>
            <p>
              Mesaje și audiențe construite în jurul serviciului și al publicului
              comercial urmărit.
            </p>
          </article>

          <article>
            <small>E-COMMERCE</small>
            <h3>Produse și vânzări</h3>
            <p>
              Catalog, reclame pentru produse, remarketing și tracking pentru
              achiziții.
            </p>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="section meta-ads-section" id="faq">
        <div className="section-head">
          <div>
            <div className="eyebrow">ÎNTREBĂRI FRECVENTE</div>

            <h2>
              Întrebări despre Facebook, Instagram și Meta Ads.
            </h2>
          </div>
        </div>

        <div className="meta-ads-faq">
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
          <div className="eyebrow">META ADS</div>

          <h2>
            Cere o ofertă pentru Facebook și Instagram Ads.
          </h2>

          <p>
            Spune-ne ce promovezi, cui te adresezi și ce vrei să obții din
            campanie. Analizăm proiectul și revenim cu următorii pași.
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
