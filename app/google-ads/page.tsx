import type { Metadata } from 'next';
import {
  ArrowRight,
  BarChart3,
  Check,
  Layers3,
  MousePointerClick,
  Phone,
  Search,
  Settings2,
  ShoppingCart,
  Target,
  TrendingUp,
} from 'lucide-react';

import ContactForm from '@/components/ContactForm';
import PolicyLink from '@/components/PolicyLink';
import SiteHeader from '@/components/SiteHeader';

const siteUrl = 'https://www.hardservicesrl.ro';
const phoneHref = 'tel:+40740231358';

export const metadata: Metadata = {
  title: 'Google Ads pentru Firme | Administrare și Optimizare Campanii',
  description:
    'Administrare Google Ads pentru firme: Search, Performance Max, Shopping, cuvinte cheie, optimizare, tracking conversii și landing pages.',
  alternates: {
    canonical: '/google-ads/',
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: `${siteUrl}/google-ads/`,
    siteName: 'Hard Service Marketing',
    title: 'Google Ads pentru Firme | Administrare și Optimizare Campanii',
    description:
      'Campanii Google Ads pentru servicii, B2B și magazine online, cu structură, optimizare, landing pages și tracking al conversiilor.',
  },
};

const campaignTypes = [
  {
    icon: Search,
    label: 'SEARCH',
    title: 'Google Search',
    text:
      'Campanii pentru oameni care caută deja produse sau servicii relevante și sunt aproape de o acțiune.',
    points: [
      'Cuvinte cheie și structură pe servicii',
      'Anunțuri și assets relevante',
      'Analiză search terms',
      'Negative keywords',
    ],
  },
  {
    icon: TrendingUp,
    label: 'AUTOMATIZARE',
    title: 'Performance Max',
    text:
      'Campanii orientate spre conversii și distribuție în ecosistemul Google, atunci când obiectivele și datele contului justifică această abordare.',
    points: [
      'Obiective de conversie',
      'Asset-uri și grupuri de asset-uri',
      'Semnale și structură',
      'Monitorizare și optimizare',
    ],
  },
  {
    icon: ShoppingCart,
    label: 'E-COMMERCE',
    title: 'Google Shopping',
    text:
      'Pentru magazine online care vor să promoveze produse și să urmărească traseul până la achiziție.',
    points: [
      'Google Merchant Center',
      'Feed de produse',
      'Shopping / Performance Max',
      'Tracking pentru achiziții',
    ],
  },
  {
    icon: Target,
    label: 'REMARKETING',
    title: 'Display & YouTube',
    text:
      'Campanii complementare pentru vizibilitate, remarketing și acoperirea unor audiențe suplimentare.',
    points: [
      'Audiențe și remarketing',
      'Asset-uri vizuale',
      'Mesaje adaptate obiectivului',
      'Măsurarea rezultatelor',
    ],
  },
];

const optimizationItems = [
  {
    icon: Search,
    title: 'Cuvinte cheie',
    text:
      'Identificăm temele de căutare relevante și separăm intenția comercială de traficul care nu merită buget.',
  },
  {
    icon: MousePointerClick,
    title: 'Anunțuri',
    text:
      'Mesajul anunțului trebuie să continue natural ceea ce a căutat utilizatorul și să ducă spre o acțiune clară.',
  },
  {
    icon: Settings2,
    title: 'Structură',
    text:
      'Separăm campaniile și serviciile astfel încât datele și bugetele să poată fi analizate corect.',
  },
  {
    icon: BarChart3,
    title: 'Costuri & conversii',
    text:
      'Urmărim costurile, conversiile și eficiența, nu doar numărul de clickuri sau afișări.',
  },
  {
    icon: Layers3,
    title: 'Tracking',
    text:
      'Conectăm Google Ads cu website-ul, GA4 și Google Tag Manager atunci când proiectul are nevoie de aceste integrări.',
  },
  {
    icon: Target,
    title: 'Alocarea bugetului',
    text:
      'Prioritățile pot fi ajustate după datele reale din campanii și după valoarea acțiunilor generate.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Analizăm afacerea',
    text:
      'Servicii, produse, zone de acoperire, clienți, obiective și traseul până la contact sau vânzare.',
  },
  {
    number: '02',
    title: 'Cercetăm căutările',
    text:
      'Identificăm termenii relevanți și stabilim structura potrivită pentru campanii și grupuri de anunțuri.',
  },
  {
    number: '03',
    title: 'Construim campaniile',
    text:
      'Setăm campaniile, anunțurile, asset-urile, extensiile și legătura cu paginile de destinație.',
  },
  {
    number: '04',
    title: 'Măsurăm conversiile',
    text:
      'Configurăm măsurarea pentru apeluri, formulare, achiziții și alte acțiuni comerciale importante.',
  },
  {
    number: '05',
    title: 'Optimizăm continuu',
    text:
      'Analizăm datele, termenii de căutare, costurile și conversiile și ajustăm ceea ce nu funcționează suficient de bine.',
  },
];

const faqItems = [
  {
    question: 'Ce înseamnă administrare Google Ads?',
    answer:
      'Administrarea Google Ads înseamnă mai mult decât lansarea unei campanii. Include analiza obiectivelor, structurarea contului, cuvinte cheie, anunțuri, negative keywords, monitorizare, optimizare și măsurarea conversiilor.',
  },
  {
    question: 'Google Ads este potrivit pentru orice firmă?',
    answer:
      'Nu există o structură identică pentru toate afacerile. Google Ads poate fi util pentru servicii locale, firme B2B și magazine online, însă tipul campaniei și strategia trebuie adaptate produsului, pieței și obiectivului comercial.',
  },
  {
    question: 'Cât costă administrarea Google Ads?',
    answer:
      'Costul administrării depinde de obiective, numărul de campanii, complexitatea contului și volumul de lucru. Oferta se stabilește în funcție de proiect și este separată de bugetul plătit către Google pentru difuzarea reclamelor.',
  },
  {
    question: 'Aveți nevoie de un website sau landing page?',
    answer:
      'În majoritatea proiectelor, pagina în care ajunge utilizatorul este o parte importantă a campaniei. Putem utiliza pagina existentă sau putem construi ori optimiza o landing page dedicată.',
  },
  {
    question: 'Puteți urmări apelurile și formularele?',
    answer:
      'Da. Pentru proiectele în care configurația tehnică permite, putem implementa tracking pentru apeluri, formulare și alte conversii importante și le putem conecta cu Google Ads, GA4 și Google Tag Manager.',
  },
  {
    question: 'Puteți prelua un cont Google Ads existent?',
    answer:
      'Da. Putem analiza structura actuală, campaniile, termenii de căutare, conversiile și setările existente și putem propune o reorganizare sau optimizare acolo unde este necesar.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/google-ads/#webpage`,
      url: `${siteUrl}/google-ads/`,
      name: 'Google Ads pentru Firme | Administrare și Optimizare Campanii',
      description:
        'Serviciu de administrare și optimizare Google Ads pentru firme.',
      inLanguage: 'ro-RO',
      isPartOf: {
        '@id': `${siteUrl}/#website`,
      },
      about: {
        '@id': `${siteUrl}/google-ads/#service`,
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
      '@id': `${siteUrl}/google-ads/#breadcrumbs`,
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
      <section className="google-page-hero" id="top">
        <div className="google-page-hero-grid" />
        <div className="google-page-glow" />

        <div className="google-page-copy">
          <div className="eyebrow">
            GOOGLE ADS · SEARCH · PERFORMANCE MAX · SHOPPING
          </div>

          <nav className="google-breadcrumbs" aria-label="Breadcrumb">
            <a href="/">Acasă</a>
            <span>/</span>
            <a href="/#servicii">Servicii</a>
            <span>/</span>
            <strong>Google Ads</strong>
          </nav>

          <h1>
            Google Ads pentru firme —
            <span> administrare, optimizare și conversii măsurabile.</span>
          </h1>

          <p>
            Construim și administrăm campanii Google Ads în funcție de ceea ce
            vrei să obții: apeluri, formulare, lead-uri sau vânzări. De la
            cercetarea cuvintelor cheie și structura campaniilor până la
            landing page și tracking.
          </p>

          <div className="hero-actions">
            <a className="primary" href={phoneHref}>
              <Phone size={18} />
              0740 231 358
            </a>

            <a className="secondary" href="#contact">
              Cere o ofertă
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="hero-proof">
            <span>
              <Check size={14} />
              Search & Performance Max
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

        <div className="google-ads-visual">
          <div className="google-search-window">
            <div className="google-window-top">
              <span />
              <span />
              <span />
              <small>EXEMPLU VIZUAL</small>
            </div>

            <div className="google-search-bar">
              <Search size={16} />
              <span>serviciul tău + oraș</span>
            </div>

            <div className="google-ad-result">
              <small>SPONSORIZAT</small>

              <h3>
                Firma ta poate apărea
                <br />
                când clientul caută serviciul
              </h3>

              <p>
                Mesaj clar, pagină relevantă și acțiune ușor de realizat.
              </p>

              <div className="google-result-link">
                hardservicesrl.ro
              </div>
            </div>

            <div className="google-mini-metrics">
              <div>
                <small>CLICKURI</small>
                <b>—</b>
              </div>

              <div>
                <small>CONVERSII</small>
                <b>—</b>
              </div>

              <div>
                <small>COST / CONV.</small>
                <b>—</b>
              </div>
            </div>

            <p className="google-demo-note">
              Exemplu vizual. Performanța reală depinde de piață, ofertă,
              concurență, buget și configurația campaniei.
            </p>
          </div>
        </div>
      </section>

      {/* NAVIGARE RAPIDA */}
      <div className="google-page-nav-wrap">
        <nav className="google-page-nav" aria-label="Navigare Google Ads">
          <a href="#campanii">Campanii</a>
          <a href="#keywords">Cuvinte cheie</a>
          <a href="#tracking">Tracking</a>
          <a href="#optimizare">Optimizare</a>
          <a href="#proces">Cum lucrăm</a>
          <a href="#faq">Întrebări</a>
        </nav>
      </div>

      {/* INTRO */}
      <section className="section" id="campanii">
        <div className="section-head">
          <div>
            <div className="eyebrow">ADMINISTRARE GOOGLE ADS</div>

            <h2>
              Campanii construite în jurul intenției de căutare și a
              obiectivului comercial.
            </h2>
          </div>

          <p>
            Google Ads nu înseamnă doar să cumperi clickuri. Structura
            campaniei, relevanța anunțului, pagina de destinație și măsurarea
            conversiilor trebuie să funcționeze împreună.
          </p>
        </div>

        <div className="google-feature-grid">
          <article>
            <div className="google-feature-icon">
              <MousePointerClick />
            </div>

            <h3>Intenție activă</h3>

            <p>
              În Search lucrăm cu utilizatori care introduc căutări relevante
              pentru produsele sau serviciile pe care le oferi.
            </p>
          </article>

          <article>
            <div className="google-feature-icon">
              <Target />
            </div>

            <h3>Structură clară</h3>

            <p>
              Serviciile, categoriile și obiectivele pot fi separate astfel
              încât datele să fie ușor de interpretat și optimizat.
            </p>
          </article>

          <article>
            <div className="google-feature-icon">
              <BarChart3 />
            </div>

            <h3>Măsurare</h3>

            <p>
              Urmărim acțiunile importante pentru business: apeluri, formulare,
              lead-uri, comenzi și alte conversii.
            </p>
          </article>
        </div>

        <div className="google-callout">
          <strong>Important:</strong>
          <span>
            bugetul plătit către Google pentru difuzarea reclamelor este
            separat de costul administrării campaniilor.
          </span>
        </div>
      </section>

      {/* TIPURI DE CAMPANII */}
      <section className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow">TIPURI DE CAMPANII</div>

            <h2>
              Folosim tipul de campanie potrivit pentru produs, serviciu și
              obiectiv.
            </h2>
          </div>

          <p>
            Nu toate proiectele au nevoie de aceeași combinație. Alegerea se
            face după modul în care oamenii caută, cumpără și contactează
            business-ul.
          </p>
        </div>

        <div className="service-grid service-grid-v3">
          {campaignTypes.map(
            ({ icon: Icon, label, title, text, points }) => (
              <article
                className="service-card service-card-v3 google-campaign-card"
                key={title}
              >
                <div className="service-icon">
                  <Icon />
                </div>

                <small className="google-card-label">{label}</small>

                <h3>{title}</h3>

                <p>{text}</p>

                <ul>
                  {points.map((point) => (
                    <li key={point}>
                      <Check size={14} />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            )
          )}
        </div>
      </section>

      {/* KEYWORDS */}
      <section className="section" id="keywords">
        <div className="google-split-panel">
          <div>
            <div className="eyebrow">CERCETARE ȘI STRUCTURĂ</div>

            <h2>
              Nu toate căutările merită același buget.
            </h2>

            <p>
              Una dintre cele mai importante părți ale administrării Google Ads
              este să înțelegi ce caută utilizatorii și ce intenție are fiecare
              căutare. Cuvintele cheie, potrivirile și negative keywords
              influențează direct relevanța traficului.
            </p>

            <div className="google-check-list">
              <div>
                <Check size={16} />
                <span>Cercetare de cuvinte cheie</span>
              </div>

              <div>
                <Check size={16} />
                <span>Structură pe servicii și categorii</span>
              </div>

              <div>
                <Check size={16} />
                <span>Negative keywords</span>
              </div>

              <div>
                <Check size={16} />
                <span>Analiză search terms</span>
              </div>
            </div>
          </div>

          <div className="google-keyword-panel">
            <small>EXEMPLU DE STRUCTURĂ</small>

            <div>
              <span>serviciu principal</span>
              <b>SEARCH</b>
            </div>

            <div>
              <span>serviciu + oraș</span>
              <b>SEARCH</b>
            </div>

            <div className="muted">
              <span>gratuit / curs / job</span>
              <b>NEGATIV</b>
            </div>

            <div className="muted">
              <span>căutare nerelevantă</span>
              <b>NEGATIV</b>
            </div>
          </div>
        </div>
      </section>

      {/* LANDING PAGE */}
      <section className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow">LANDING PAGE</div>

            <h2>
              Reclama și pagina de destinație trebuie să spună aceeași poveste.
            </h2>
          </div>

          <p>
            Un click nu este conversia. După ce utilizatorul ajunge pe site,
            pagina trebuie să fie relevantă, ușor de înțeles și să ofere o
            acțiune clară.
          </p>
        </div>

        <div className="google-flow-panel">
          <div className="google-flow">
            <div>
              <small>01</small>
              <strong>Căutare</strong>
              <span>intenție</span>
            </div>

            <i>→</i>

            <div>
              <small>02</small>
              <strong>Anunț</strong>
              <span>mesaj</span>
            </div>

            <i>→</i>

            <div>
              <small>03</small>
              <strong>Landing page</strong>
              <span>relevanță</span>
            </div>

            <i>→</i>

            <div>
              <small>04</small>
              <strong>Lead / Vânzare</strong>
              <span>conversie</span>
            </div>
          </div>

          <div className="google-flow-tags">
            <span>CTA clar</span>
            <span>Mobile-first</span>
            <span>Conținut relevant</span>
            <span>Formular</span>
            <span>Apel</span>
            <span>Tracking</span>
          </div>
        </div>
      </section>

      {/* TRACKING */}
      <section className="section" id="tracking">
        <div className="section-head">
          <div>
            <div className="eyebrow">TRACKING GOOGLE ADS</div>

            <h2>
              Măsurăm ce produce campania, nu doar cât trafic trimite.
            </h2>
          </div>

          <p>
            Conectăm campaniile cu website-ul și cu acțiunile care contează
            pentru business, în funcție de configurația tehnică a proiectului.
          </p>
        </div>

        <div className="google-tracking-grid">
          <article>
            <Phone />
            <small>CONTACT</small>
            <h3>Apeluri</h3>
            <p>
              Putem măsura interacțiunile de apel relevante pentru campaniile
              care generează solicitări telefonice.
            </p>
          </article>

          <article>
            <Layers3 />
            <small>LEAD</small>
            <h3>Formulare</h3>
            <p>
              Lead-urile trimise prin formular pot fi urmărite și asociate cu
              sursa traficului și campania.
            </p>
          </article>

          <article>
            <ShoppingCart />
            <small>VÂNZARE</small>
            <h3>Achiziții</h3>
            <p>
              Pentru magazine online putem urmări pașii principali până la
              achiziție și valoarea comenzii.
            </p>
          </article>

          <article>
            <BarChart3 />
            <small>ANALIZĂ</small>
            <h3>GA4 & GTM</h3>
            <p>
              Google Analytics 4 și Google Tag Manager pot completa măsurarea
              atunci când proiectul necesită o configurare mai avansată.
            </p>
          </article>
        </div>
      </section>

      {/* OPTIMIZARE */}
      <section className="section" id="optimizare">
        <div className="section-head">
          <div>
            <div className="eyebrow">OPTIMIZARE CONTINUĂ</div>

            <h2>
              Campania nu se termină când apeși „Publică”.
            </h2>
          </div>

          <p>
            După lansare apar date noi. Le analizăm pentru a vedea ce funcționează,
            unde se pierde buget și ce merită testat sau ajustat.
          </p>
        </div>

        <div className="google-optimization-grid">
          {optimizationItems.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" id="proces">
        <div className="section-head">
          <div>
            <div className="eyebrow">CUM LUCRĂM</div>

            <h2>
              De la prima analiză până la optimizarea continuă.
            </h2>
          </div>

          <p>
            Procesul este construit astfel încât promovarea, pagina și
            măsurarea să funcționeze împreună.
          </p>
        </div>

        <div className="google-process-grid">
          {processSteps.map(({ number, title, text }) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* BUSINESS TYPES */}
      <section className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow">PENTRU CINE</div>

            <h2>
              Google Ads pentru servicii locale, B2B și magazine online.
            </h2>
          </div>

          <p>
            Strategia se schimbă în funcție de produs, ciclul de vânzare și
            acțiunea pe care vrei să o obții de la utilizator.
          </p>
        </div>

        <div className="google-business-grid">
          <article>
            <small>SERVICII LOCALE</small>
            <h3>Apeluri și solicitări</h3>
            <p>
              Pentru servicii unde clientul caută activ un furnizor și poate
              contacta rapid firma.
            </p>
          </article>

          <article>
            <small>B2B & SERVICII</small>
            <h3>Lead-uri comerciale</h3>
            <p>
              Campanii construite în jurul serviciului, problemei rezolvate și
              acțiunii comerciale relevante.
            </p>
          </article>

          <article>
            <small>E-COMMERCE</small>
            <h3>Produse și vânzări</h3>
            <p>
              Shopping, Performance Max, Merchant Center și tracking pentru
              produse și achiziții.
            </p>
          </article>
        </div>
      </section>

      {/* HARD SERVICE ADVANTAGE */}
      <section className="section">
        <div className="ecosystem-card ecosystem-card-v6 google-ecosystem-card">
          <div>
            <div className="eyebrow">GOOGLE ADS + WEBSITE + TRACKING</div>

            <h2>
              Google Ads funcționează mai bine când restul sistemului este
              pregătit.
            </h2>

            <p>
              O campanie bună poate aduce utilizatorul pe site, dar rezultatul
              final depinde și de landing page, viteză, mesaj, formular,
              apeluri și măsurarea conversiilor.
            </p>

            <div className="ecosystem-tags ecosystem-tags-v6">
              <span>Google Search</span>
              <span>Performance Max</span>
              <span>Shopping</span>
              <span>Landing Pages</span>
              <span>GA4</span>
              <span>Google Tag Manager</span>
              <span>Tracking conversii</span>
              <span>Website</span>
            </div>

            <div className="ecosystem-mini-flow-v5">
              <span>Căutare</span>
              <i>→</i>
              <span>Campanie</span>
              <i>→</i>
              <span>Website</span>
              <i>→</i>
              <span>Lead / Vânzare</span>
            </div>

            <a className="primary" href="/#servicii">
              Vezi toate serviciile
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="google-side-stat">
            <strong>UN SINGUR SISTEM</strong>
            <span>
              promovare · website · măsurare · suport
            </span>

            <div className="google-side-flow">
              <div>ADS</div>
              <div>WEB</div>
              <div>TRACKING</div>
              <div>LEAD</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="section-head">
          <div>
            <div className="eyebrow">ÎNTREBĂRI FRECVENTE</div>

            <h2>
              Întrebări despre administrarea Google Ads.
            </h2>
          </div>

          <p>
            Am inclus aici cele mai frecvente aspecte legate de administrare,
            bugete, tracking și paginile de destinație.
          </p>
        </div>

        <div className="google-faq">
          {faqItems.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="google-final-cta">
          <div>
            <div className="eyebrow">GOOGLE ADS</div>

            <h2>
              Ai deja un cont Google Ads sau vrei să pornești de la zero?
            </h2>

            <p>
              Spune-ne ce promovezi, ce obiectiv ai și dacă există deja un
              cont sau o campanie. Putem analiza proiectul și următorii pași.
            </p>
          </div>

          <div className="google-final-actions">
            <a className="primary" href={phoneHref}>
              <Phone size={18} />
              0740 231 358
            </a>

            <a className="secondary" href="#contact">
              Solicita o ofertă
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="contact-copy">
          <div className="eyebrow">HAI SĂ DISCUTĂM</div>

          <h2>
            Cere o ofertă pentru administrarea campaniilor Google Ads.
          </h2>

          <p>
            Completează formularul și spune-ne ce promovezi, ce urmărești și
            dacă ai deja un cont Google Ads. Solicitarea ajunge direct la noi.
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

      {/* FOOTER */}
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
