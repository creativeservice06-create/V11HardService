import type { Metadata } from 'next';
import {
  ArrowRight,
  BarChart3,
  Check,
  Image,
  MessageCircle,
  Phone,
  ShoppingCart,
  Target,
  Users,
  Video,
} from 'lucide-react';

import ContactForm from '@/components/ContactForm';
import PolicyLink from '@/components/PolicyLink';
import SiteHeader from '@/components/SiteHeader';
import TikTokAdsHeroVisual from '@/components/TikTokAdsHeroVisual';

const siteUrl = 'https://www.hardservicesrl.ro';
const phoneHref = 'tel:+40740231358';

export const metadata: Metadata = {
  title:
    'TikTok Ads pentru Firme | Administrare și Campanii TikTok | Hard Service',
  description:
    'Administrare TikTok Ads pentru firme: campanii video, audiențe, promovare produse și servicii, lead generation, tracking și optimizare.',
  alternates: {
    canonical: '/tiktok-ads/',
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: `${siteUrl}/tiktok-ads/`,
    siteName: 'Hard Service Marketing',
    title:
      'TikTok Ads pentru Firme | Administrare și Campanii TikTok | Hard Service',
    description:
      'Campanii TikTok Ads pentru servicii, lead-uri și e-commerce, cu creative video, tracking și optimizare.',
  },
};

const campaignTypes = [
  {
    icon: Video,
    title: 'Campanii video',
    text:
      'Construim campanii în jurul formatului video vertical și al mesajului pe care vrei să îl transmiți publicului.',
  },
  {
    icon: Users,
    title: 'Audiențe',
    text:
      'Structurăm campaniile în funcție de public, obiectiv și datele disponibile pentru proiect.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    text:
      'Pentru magazine online, campaniile pot fi orientate spre produse, trafic și achiziții, în funcție de configurație.',
  },
  {
    icon: Target,
    title: 'Lead generation',
    text:
      'Pentru servicii, putem construi campanii orientate spre formulare, contacte și alte acțiuni comerciale.',
  },
];

const faqItems = [
  {
    question: 'Ce sunt TikTok Ads?',
    answer:
      'TikTok Ads este sistemul de publicitate TikTok prin care firmele își pot promova produsele, serviciile și conținutul către audiențe relevante.',
  },
  {
    question: 'Trebuie să am deja videoclipuri pentru TikTok Ads?',
    answer:
      'Nu neapărat. Putem stabili împreună ce tip de material este potrivit pentru campanie și ce resurse pot fi folosite sau produse pentru promovare.',
  },
  {
    question: 'TikTok Ads este potrivit pentru orice firmă?',
    answer:
      'Nu există o platformă potrivită în același mod pentru toate business-urile. Strategia trebuie raportată la public, produs, serviciu, obiectiv și tipul de conținut disponibil.',
  },
  {
    question: 'Puteți administra o campanie TikTok Ads existentă?',
    answer:
      'Da. Putem analiza structura contului, campaniile, audiențele, materialele creative și conversiile existente înainte de a face modificări.',
  },
  {
    question: 'Puteți urmări conversiile?',
    answer:
      'Da. În funcție de website și de configurația tehnică, putem implementa și verifica tracking pentru formulare, achiziții și alte acțiuni relevante.',
  },
  {
    question: 'TikTok Ads funcționează doar pentru produse?',
    answer:
      'Nu. Platforma poate fi utilizată și pentru servicii, lead generation, promovarea unor oferte sau creșterea traficului către o pagină relevantă.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/tiktok-ads/#webpage`,
      url: `${siteUrl}/tiktok-ads/`,
      name:
        'TikTok Ads pentru Firme | Administrare și Campanii TikTok | Hard Service',
      description:
        'Servicii de administrare și optimizare TikTok Ads pentru firme.',
      inLanguage: 'ro-RO',
      isPartOf: {
        '@id': `${siteUrl}/#website`,
      },
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/tiktok-ads/#service`,
      name: 'TikTok Ads',
      serviceType: 'TikTok Ads management',
      url: `${siteUrl}/tiktok-ads/`,
      description:
        'Administrare și optimizare campanii TikTok Ads pentru servicii, lead-uri și e-commerce.',
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
      '@id': `${siteUrl}/tiktok-ads/#breadcrumb`,
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
          name: 'TikTok Ads',
          item: `${siteUrl}/tiktok-ads/`,
        },
      ],
    },
  ],
};

export default function TikTokAdsPage() {
  return (
    <main className="tiktok-ads-page">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* HERO */}
      <section className="tiktok-ads-hero">
        <div className="tiktok-ads-hero-grid" />

        <div className="tiktok-ads-hero-inner">
          <div className="tiktok-ads-hero-copy">
            <nav
              className="tiktok-ads-breadcrumbs"
              aria-label="Breadcrumb"
            >
              <a href="/">Acasă</a>
              <span>/</span>
              <a href="/#servicii">Servicii</a>
              <span>/</span>
              <strong>TikTok Ads</strong>
            </nav>

            <div className="eyebrow">
              TIKTOK ADS · VIDEO · LEAD GENERATION · E-COMMERCE
            </div>

            <h1>
              TikTok Ads care transformă
              <span> atenția în acțiune.</span>
            </h1>

            <p>
              Administrăm campanii TikTok Ads pentru servicii, produse și
              magazine online, de la audiență și conținut video până la
              tracking și optimizare.
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
                Video advertising
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

          <TikTokAdsHeroVisual />
        </div>
      </section>

      {/* INTRO */}
      <section className="section tiktok-ads-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">ADMINISTRARE TIKTOK ADS</div>

            <h2>
              TikTok este o platformă vizuală. Campania trebuie să pornească
              de la conținut și obiectiv.
            </h2>
          </div>

          <p>
            O campanie TikTok Ads nu înseamnă doar promovarea unui videoclip.
            Rezultatul depinde de mesaj, format, audiență, ofertă, pagina în
            care ajunge utilizatorul și modul în care măsurăm acțiunile.
          </p>
        </div>

        <div className="tiktok-ads-intro-layout">
          <div className="tiktok-ads-intro-copy">
            <p>
              Pentru un serviciu, obiectivul poate fi un lead sau o solicitare.
              Pentru e-commerce, poate fi o achiziție. Pentru o ofertă nouă,
              poate fi nevoie de trafic și de o audiență care să fie
              retargetată ulterior.
            </p>

            <p>
              De aceea construim campaniile TikTok în funcție de ceea ce vrei
              să obții, nu doar de numărul de vizualizări.
            </p>
          </div>

          <div className="tiktok-ads-objectives">
            <div>
              <span>01</span>
              <strong>Lead-uri</strong>
              <p>Formulare și solicitări de contact.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Vânzări</strong>
              <p>Produse și achiziții online.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Trafic</strong>
              <p>Vizite către pagini și oferte relevante.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPANII */}
      <section className="section tiktok-ads-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">TIPURI DE CAMPANII</div>

            <h2>
              Campanii TikTok Ads construite în funcție de obiectiv.
            </h2>
          </div>

          <p>
            Alegerea campaniei pornește de la business, public, conținut și
            acțiunea pe care vrei să o obții.
          </p>
        </div>

        <div className="service-grid service-grid-v3 tiktok-ads-campaign-grid">
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
      <section className="section tiktok-ads-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">CE FACEM CONCRET</div>

            <h2>
              De la conținutul video până la optimizarea campaniei.
            </h2>
          </div>

          <p>
            TikTok este diferit de o campanie Search. Materialul creativ și
            modul în care este prezentată oferta au un rol important.
          </p>
        </div>

        <div className="tiktok-ads-services-list">
          <div>
            <Check size={18} />
            <section>
              <h3>Structura campaniilor</h3>
              <p>
                Organizăm campaniile în funcție de obiectiv, produs, serviciu,
                audiență și etapa din traseul utilizatorului.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>Creative video</h3>
              <p>
                Stabilim ce tip de video, mesaj și format se potrivesc
                campaniei și publicului vizat.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>Audiențe</h3>
              <p>
                Lucrăm cu publicuri relevante și cu segmente diferite în
                funcție de obiectiv și date.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>Copy și ofertă</h3>
              <p>
                Mesajul trebuie să fie rapid de înțeles și să ducă natural
                utilizatorul către oferta prezentată.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>Remarketing</h3>
              <p>
                Utilizatorii care au interacționat deja pot fi utilizați în
                strategii de remarketing atunci când proiectul beneficiază de
                această abordare.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />
            <section>
              <h3>Tracking și optimizare</h3>
              <p>
                Analizăm rezultatele și urmărim conversiile relevante pentru
                business.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* CREATIVE */}
      <section className="section tiktok-ads-section">
        <div className="tiktok-ads-feature">
          <div>
            <div className="eyebrow">
              VIDEO CREATIVE
            </div>

            <h2>
              Pe TikTok, primul mesaj trebuie să fie clar din primele secunde.
            </h2>

            <p>
              Conținutul video trebuie adaptat platformei și obiectivului
              campaniei. Nu este suficient ca reclama să arate bine; trebuie să
              transmită rapid ce oferi și de ce merită urmărită.
            </p>

            <div className="tiktok-ads-feature-points">
              <span>
                <Check size={15} />
                format vertical
              </span>

              <span>
                <Check size={15} />
                mesaj clar
              </span>

              <span>
                <Check size={15} />
                CTA
              </span>

              <span>
                <Check size={15} />
                teste creative
              </span>
            </div>
          </div>

          <div className="tiktok-ads-creative-example">
            <div className="tiktok-ads-phone-line">
              <Video size={17} />
              <span>VIDEO AD</span>
            </div>

            <div className="tiktok-ads-creative-screen">
              <small>0:03</small>

              <strong>
                Ce trebuie să știe
                <br />
                clientul?
              </strong>

              <span>
                problemă → soluție → acțiune
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENTE */}
      <section className="section tiktok-ads-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">AUDIENȚE</div>

            <h2>
              Conținutul potrivit trebuie să ajungă la publicul potrivit.
            </h2>
          </div>

          <p>
            Construim campaniile în funcție de produs, serviciu și datele
            disponibile despre public și interacțiunile anterioare.
          </p>
        </div>

        <div className="tiktok-ads-audience-grid">
          <article>
            <Users />
            <h3>Audiență nouă</h3>
            <p>
              Pentru atragerea unor utilizatori care nu au interacționat
              anterior cu brandul.
            </p>
          </article>

          <article>
            <Target />
            <h3>Audiență relevantă</h3>
            <p>
              Segmentare și structură adaptate obiectivului și ofertei.
            </p>
          </article>

          <article>
            <BarChart3 />
            <h3>Remarketing</h3>
            <p>
              Revenire către utilizatorii care au interacționat deja atunci
              când strategia o justifică.
            </p>
          </article>
        </div>
      </section>

      {/* WEBSITE + TRACKING */}
      <section className="section tiktok-ads-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              WEBSITE · TRACKING · CONVERSII
            </div>

            <h2>
              Reclama trebuie să continue logic și după vizualizare.
            </h2>
          </div>

          <p>
            După interacțiunea cu reclama, utilizatorul trebuie să ajungă într-o
            pagină relevantă și să poată face rapid acțiunea pentru care
            promovezi.
          </p>
        </div>

        <div className="tiktok-ads-triangle">
          <div>
            <span>01</span>
            <h3>Video</h3>
            <p>
              Mesaj vizual și ofertă adaptate formatului TikTok.
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
              Măsurăm conversiile importante pentru business.
            </p>
          </div>
        </div>

        <div className="tiktok-ads-tech-row">
          <span>TikTok Pixel</span>
          <span>GA4</span>
          <span>Google Tag Manager</span>
          <span>Tracking formulare</span>
          <span>Tracking achiziții</span>
        </div>
      </section>

      {/* OPTIMIZARE */}
      <section className="section tiktok-ads-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">OPTIMIZARE</div>

            <h2>
              Testăm, măsurăm și păstrăm ceea ce funcționează.
            </h2>
          </div>

          <p>
            Campaniile TikTok pot necesita teste pe creative, audiențe și
            mesaje. Deciziile se iau pe baza datelor disponibile.
          </p>
        </div>

        <div className="tiktok-ads-process">
          <div>
            <span>01</span>
            <h3>Analizăm</h3>
            <p>
              Oferta, publicul, conținutul și obiectivul.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Testăm</h3>
            <p>
              Creative, mesaje și structuri relevante pentru proiect.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Măsurăm</h3>
            <p>
              Lead-uri, trafic, vânzări și alte conversii relevante.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Optimizăm</h3>
            <p>
              Campaniile și bugetele în funcție de rezultate.
            </p>
          </div>
        </div>
      </section>

      {/* PENTRU CINE */}
      <section className="section tiktok-ads-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">PENTRU CINE</div>

            <h2>
              TikTok Ads pentru servicii, B2B și magazine online.
            </h2>
          </div>

          <p>
            Nu toate business-urile folosesc aceeași strategie. Conținutul și
            oferta trebuie adaptate publicului și modului în care acesta ia
            decizia.
          </p>
        </div>

        <div className="seo-focus-grid tiktok-ads-business-grid">
          <article>
            <small>SERVICII</small>
            <h3>Lead-uri și solicitări</h3>
            <p>
              Pentru servicii care pot fi explicate clar și vizual și care au
              un pas simplu de contact.
            </p>
          </article>

          <article>
            <small>B2B</small>
            <h3>Conținut și awareness</h3>
            <p>
              Pentru companii care pot comunica o problemă, o soluție sau o
              ofertă prin conținut video.
            </p>
          </article>

          <article>
            <small>E-COMMERCE</small>
            <h3>Produse și vânzări</h3>
            <p>
              Pentru produse care pot fi prezentate eficient prin video și
              urmărite până la achiziție.
            </p>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="section tiktok-ads-section" id="faq">
        <div className="section-head">
          <div>
            <div className="eyebrow">ÎNTREBĂRI FRECVENTE</div>

            <h2>
              Întrebări despre TikTok Ads.
            </h2>
          </div>
        </div>

        <div className="tiktok-ads-faq">
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
          <div className="eyebrow">TIKTOK ADS</div>

          <h2>
            Cere o ofertă pentru promovarea pe TikTok.
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
