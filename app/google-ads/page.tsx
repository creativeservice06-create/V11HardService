
import {
  ArrowRight,
  BarChart3,
  Check,
  MousePointerClick,
  Phone,
  Search,
  Settings2,
  ShoppingCart,
  Target,
  TrendingUp,
} from 'lucide-react';

import SiteHeader from '@/components/SiteHeader';
import ContactForm from '@/components/ContactForm';

const phoneHref = 'tel:+40740231358';

export const metadata = {
  title: 'Google Ads pentru Firme | Administrare și Optimizare Campanii',
  description:
    'Servicii Google Ads pentru firme: administrare, campanii Search, Performance Max, Shopping, cercetare cuvinte cheie, optimizare, landing pages și tracking al conversiilor.',
  alternates: {
    canonical: '/google-ads/',
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://www.hardservicesrl.ro/google-ads/',
    siteName: 'Hard Service Marketing',
    title: 'Google Ads pentru Firme | Administrare și Optimizare Campanii',
    description:
      'Administrare Google Ads pentru lead-uri și vânzări. Search, Performance Max, Shopping, optimizare și tracking al conversiilor.',
  },
};

const serviceCards = [
  {
    icon: Search,
    title: 'Google Search',
    text:
      'Campanii pentru persoanele care caută deja serviciile sau produsele oferite de afacerea ta.',
    points: [
      'Cuvinte cheie și grupuri de anunțuri',
      'Potrivire între căutare, anunț și landing page',
      'Optimizarea termenilor de căutare',
      'Cuvinte cheie negative',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Performance Max',
    text:
      'Campanii orientate spre obiective de conversie și distribuție în ecosistemul Google, atunci când modelul de business și datele contului justifică utilizarea lor.',
    points: [
      'Configurarea obiectivelor de conversie',
      'Asset-uri și grupuri de asset-uri',
      'Semnale și structură de campanie',
      'Monitorizare și optimizare',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'Google Shopping',
    text:
      'Pentru magazine online care vor să promoveze produse și să urmărească traseul până la achiziție.',
    points: [
      'Merchant Center',
      'Feed de produse',
      'Shopping și Performance Max',
      'Tracking pentru achiziții și valoarea comenzilor',
    ],
  },
  {
    icon: Target,
    title: 'Display & YouTube',
    text:
      'Campanii complementare pentru vizibilitate, remarketing și acoperirea unor segmente suplimentare.',
    points: [
      'Audiențe și remarketing',
      'Asset-uri vizuale',
      'Mesaje adaptate obiectivului',
      'Măsurarea rezultatelor',
    ],
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Analizăm afacerea',
    text:
      'Începem cu serviciile, produsele, zona de activitate, marjele, clienții și obiectivele comerciale.',
  },
  {
    number: '02',
    title: 'Cercetăm căutările',
    text:
      'Identificăm temele de căutare relevante și separăm intențiile care merită buget de cele care pot aduce trafic inutil.',
  },
  {
    number: '03',
    title: 'Construim campaniile',
    text:
      'Structurăm campaniile, grupurile, anunțurile, asset-urile și paginile de destinație în funcție de obiective.',
  },
  {
    number: '04',
    title: 'Configurăm conversiile',
    text:
      'Măsurăm apeluri, formulare, vânzări și alte acțiuni importante pentru afacerea ta.',
  },
  {
    number: '05',
    title: 'Optimizăm continuu',
    text:
      'Analizăm termenii de căutare, costurile, conversiile și comportamentul traficului și ajustăm campaniile.',
  },
];

const faq = [
  {
    q: 'Cât costă administrarea Google Ads?',
    a: 'Costul administrării depinde de structură, numărul de campanii, obiective și volumul de lucru. Pentru fiecare proiect stabilim separat structura de lucru și oferta.',
  },
  {
    q: 'Google Ads aduce rezultate imediat?',
    a: 'Campaniile pot începe să genereze trafic după lansare, dar performanța se evaluează pe baza datelor acumulate, a conversiilor și a optimizării continue. Nu există o garanție universală de rezultate.',
  },
  {
    q: 'Aveți nevoie de un website?',
    a: 'În majoritatea campaniilor este important ca utilizatorul să ajungă într-o pagină relevantă pentru ceea ce a căutat. Putem construi sau optimiza website-ul și landing page-ul atunci când este necesar.',
  },
  {
    q: 'Măsurați apelurile telefonice?',
    a: 'Da. Putem implementa tracking pentru apelurile inițiate de pe website și pentru alte acțiuni importante, în funcție de configurația contului și a site-ului.',
  },
  {
    q: 'Lucrați și cu magazine online?',
    a: 'Da. Pentru magazinele online putem lucra cu Shopping, Performance Max, Merchant Center și tracking pentru produse, checkout, achiziții și valoarea comenzilor.',
  },
  {
    q: 'Puteți administra un cont Google Ads existent?',
    a: 'Da. Putem analiza structura actuală, termenii de căutare, conversiile, bugetele și setările existente și apoi propune modificările necesare.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.hardservicesrl.ro/google-ads/#service',
  name: 'Administrare Google Ads',
  serviceType: 'Google Ads management',
  url: 'https://www.hardservicesrl.ro/google-ads/',
  description:
    'Servicii de administrare, optimizare și tracking pentru campanii Google Ads.',
  provider: {
    '@id': 'https://www.hardservicesrl.ro/#organization',
  },
  areaServed: {
    '@type': 'Country',
    name: 'România',
  },
  audience: {
    '@type': 'BusinessAudience',
    audienceType: 'Firme și afaceri',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Acasă',
      item: 'https://www.hardservicesrl.ro/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Servicii',
      item: 'https://www.hardservicesrl.ro/#servicii',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Google Ads',
      item: 'https://www.hardservicesrl.ro/google-ads/',
    },
  ],
};

export default function GoogleAdsPage() {
  return (
    <main className="service-page google-ads-page">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* HERO */}
      <section className="service-hero">
        <div className="service-hero-grid" />

        <div className="service-hero-copy">
          <div className="eyebrow">
            GOOGLE ADS · SEARCH · PERFORMANCE MAX · SHOPPING
          </div>

          <div className="service-breadcrumb">
            <a href="/">Acasă</a>
            <span>/</span>
            <a href="/#servicii">Servicii</a>
            <span>/</span>
            <strong>Google Ads</strong>
          </div>

          <h1>
            Google Ads pentru firme care vor trafic relevant și conversii
            măsurabile.
          </h1>

          <p className="service-hero-lead">
            Administrăm campanii Google Ads de la cercetarea căutărilor și
            structura contului până la anunțuri, landing pages, tracking și
            optimizare continuă.
          </p>

          <div className="service-hero-actions">
            <a className="primary" href={phoneHref}>
              <Phone size={18} />
              0740 231 358
            </a>

            <a className="secondary" href="#contact">
              Cere o ofertă
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="service-proof">
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

        <div className="google-ads-visual" aria-label="Exemplu vizual Google Ads">
          <div className="ads-dashboard">
            <div className="ads-dashboard-top">
              <div>
                <small>GOOGLE ADS</small>
                <strong>Campanie Search</strong>
              </div>

              <span className="ads-status">ACTIVĂ</span>
            </div>

            <div className="ads-search">
              <Search size={16} />
              <span>serviciul tău + oraș</span>
            </div>

            <div className="ads-result">
              <small>SPONSORIZAT</small>
              <strong>
                Firma ta apare când clientul caută serviciul
              </strong>
              <p>
                Landing page relevant, mesaj clar și acțiune măsurabilă.
              </p>
            </div>

            <div className="ads-metrics">
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

            <p className="ads-note">
              Exemplu vizual. Valorile reale depind de piață, ofertă,
              buget, concurență și configurația campaniei.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section service-intro">
        <div className="section-head">
          <div>
            <div className="eyebrow">CE ESTE GOOGLE ADS</div>
            <h2>
              Apari în Google atunci când oamenii caută ceea ce vinzi.
            </h2>
          </div>

          <p>
            Google Ads permite promovarea în rezultatele de căutare și în
            celelalte canale Google, în funcție de tipul campaniei și de
            obiectivele setate. Pentru Search, reclamele pot ajunge la
            utilizatori care caută activ produse sau servicii relevante.
          </p>
        </div>

        <div className="service-highlight-grid">
          <article>
            <MousePointerClick />
            <h3>Intenție activă</h3>
            <p>
              Nu pornești doar de la interese generale. În Search poți lucra cu
              oameni care introduc deja căutări legate de produsul sau serviciul
              tău.
            </p>
          </article>

          <article>
            <Target />
            <h3>Control pe structură</h3>
            <p>
              Campaniile pot fi separate pe servicii, categorii, locații,
              obiective și alte criterii relevante pentru business.
            </p>
          </article>

          <article>
            <BarChart3 />
            <h3>Măsurare</h3>
            <p>
              Nu ne uităm doar la trafic. Urmărim acțiunile care contează:
              apeluri, formulare, vânzări și alte conversii.
            </p>
          </article>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow">CE ADMINISTRĂM</div>
            <h2>Campanii Google Ads construite în funcție de business.</h2>
          </div>

          <p>
            Alegem tipul de campanie în funcție de obiectiv, produs, serviciu,
            date și traseul utilizatorului până la conversie.
          </p>
        </div>

        <div className="service-grid google-ads-service-grid">
          {serviceCards.map(({ icon: Icon, title, text, points }) => (
            <article className="service-card service-card-v3" key={title}>
              <div className="service-icon">
                <Icon />
              </div>

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
          ))}
        </div>
      </section>

      {/* KEYWORDS */}
      <section className="section service-split-section">
        <div className="service-split-card">
          <div>
            <div className="eyebrow">CERCETARE ȘI STRUCTURĂ</div>

            <h2>
              Nu toate căutările merită același buget.
            </h2>

            <p>
              O componentă importantă a administrării Google Ads este analiza
              intenției din spatele căutărilor. Separăm temele relevante de
              căutările care pot consuma buget fără să aibă legătură cu
              obiectivul comercial.
            </p>

            <ul className="service-check-list">
              <li>
                <Check size={16} />
                Cercetare de cuvinte cheie
              </li>
              <li>
                <Check size={16} />
                Structură pe servicii și categorii
              </li>
              <li>
                <Check size={16} />
                Negative keywords
              </li>
              <li>
                <Check size={16} />
                Analiză search terms
              </li>
            </ul>
          </div>

          <div className="service-mini-panel">
            <small>EXEMPLU DE STRUCTURĂ</small>

            <div className="keyword-line">
              <span>serviciu principal</span>
              <b>Search</b>
            </div>

            <div className="keyword-line">
              <span>serviciu + oraș</span>
              <b>Search</b>
            </div>

            <div className="keyword-line muted">
              <span>gratuit / curs / job</span>
              <b>NEGATIV</b>
            </div>

            <div className="keyword-line muted">
              <span>informațional irelevant</span>
              <b>NEGATIV</b>
            </div>
          </div>
        </div>
      </section>

      {/* TRACKING */}
      <section className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow">TRACKING</div>
            <h2>
              Google Ads este mai util atunci când știi ce produce.
            </h2>
          </div>

          <p>
            Legăm campaniile de website și de măsurarea conversiilor, astfel
            încât optimizarea să se bazeze pe acțiuni reale, nu doar pe
            afișări și clickuri.
          </p>
        </div>

        <div className="tracking-grid">
          <article>
            <span>01</span>
            <h3>Apeluri</h3>
            <p>
              Măsurăm acțiunile de contact relevante pentru campaniile care
              generează telefonic solicitări.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Formulare</h3>
            <p>
              Conectăm formularele cu tracking-ul astfel încât lead-urile să
              poată fi analizate în contextul campaniilor.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Vânzări</h3>
            <p>
              Pentru e-commerce, urmărim evenimentele necesare pentru analiza
              comenzilor și a valorii acestora.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>GA4 & GTM</h3>
            <p>
              Folosim Google Analytics și Google Tag Manager atunci când
              configurația proiectului cere măsurare și integrare avansată.
            </p>
          </article>
        </div>
      </section>

      {/* LANDING PAGE */}
      <section className="section">
        <div className="service-dark-panel">
          <div>
            <div className="eyebrow">PAGINA DE DESTINAȚIE</div>

            <h2>
              Reclama și pagina trebuie să continue aceeași promisiune.
            </h2>

            <p>
              Un click din Google Ads nu este rezultatul final. Utilizatorul
              trebuie să ajungă într-o pagină relevantă pentru ceea ce a
              căutat, cu informații clare și o acțiune ușor de realizat.
            </p>
          </div>

          <div className="service-flow">
            <span>Căutare</span>
            <i>→</i>
            <span>Anunț</span>
            <i>→</i>
            <span>Landing page</span>
            <i>→</i>
            <span>Lead / Vânzare</span>
          </div>

          <div className="service-panel-tags">
            <span>CTA clar</span>
            <span>Conținut relevant</span>
            <span>Mobile-first</span>
            <span>Tracking</span>
          </div>
        </div>
      </section>

      {/* OPTIMIZATION */}
      <section className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow">OPTIMIZARE CONTINUĂ</div>
            <h2>
              Campaniile nu se termină la momentul publicării.
            </h2>
          </div>

          <p>
            După lansare apar date noi. Analizăm ce caută utilizatorii, ce
            anunțuri funcționează, ce conversii apar și unde există pierderi
            sau oportunități de optimizare.
          </p>
        </div>

        <div className="optimization-grid">
          <div>
            <Settings2 />
            <h3>Termeni de căutare</h3>
            <p>Identificăm căutări relevante și căutări care trebuie excluse.</p>
          </div>

          <div>
            <BarChart3 />
            <h3>Costuri și conversii</h3>
            <p>Urmărim evoluția costurilor și a acțiunilor importante.</p>
          </div>

          <div>
            <Target />
            <h3>Structură și alocare</h3>
            <p>Bugetele și prioritățile se pot modifica în funcție de date.</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow">CUM LUCRĂM</div>
            <h2>De la contul Google Ads la conversie.</h2>
          </div>

          <p>
            Păstrăm procesul clar: analiză, structură, lansare, măsurare și
            optimizare continuă.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* BUSINESS TYPES */}
      <section className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow">PENTRU CINE</div>
            <h2>Google Ads pentru servicii, B2B și magazine online.</h2>
          </div>

          <p>
            Strategia se schimbă în funcție de ceea ce vinzi și de modul în
            care clientul ajunge la decizie.
          </p>
        </div>

        <div className="business-types-grid">
          <article>
            <small>SERVICII LOCALE</small>
            <h3>Apeluri și solicitări</h3>
            <p>
              Potrivit pentru servicii în care clientul caută activ un
              furnizor și poate contacta rapid firma.
            </p>
          </article>

          <article>
            <small>B2B</small>
            <h3>Lead-uri calificate</h3>
            <p>
              Campanii structurate în jurul serviciilor, problemelor rezolvate
              și acțiunilor comerciale relevante.
            </p>
          </article>

          <article>
            <small>E-COMMERCE</small>
            <h3>Produse și vânzări</h3>
            <p>
              Shopping, Performance Max, Merchant Center și măsurarea
              achizițiilor.
            </p>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">ÎNTREBĂRI FRECVENTE</div>
            <h2>Întrebări despre administrarea Google Ads.</h2>
          </div>
        </div>

        <div className="faq-grid">
          {faq.map((item) => (
            <article key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section service-cta">
        <div>
          <div className="eyebrow">HAI SĂ DISCUTĂM</div>

          <h2>
            Ai deja un cont Google Ads sau vrei să pornești de la zero?
          </h2>

          <p>
            Putem analiza situația actuală, obiectivele și pagina de destinație
            și îți propunem o structură potrivită proiectului.
          </p>

          <div className="service-cta-actions">
            <a className="primary" href={phoneHref}>
              <Phone size={18} />
              0740 231 358
            </a>

            <a className="secondary" href="#contact">
              Solicita o ofertă
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="contact-copy">
          <div className="eyebrow">GOOGLE ADS</div>

          <h2>Cere o ofertă pentru administrarea campaniilor tale.</h2>

          <p>
            Spune-ne ce promovezi, ce obiectiv ai și dacă ai deja un cont
            Google Ads. Analizăm proiectul și revenim cu următorii pași.
          </p>

          <a className="contact-phone" href={phoneHref}>
            <Phone size={22} />
            0740 231 358
          </a>
        </div>

        <div className="contact-form-column">
          <ContactForm />
        </div>
      </section>

      <footer>
        <a className="brand brand-v4" href="/">
          <b>HARD SERVICE</b>
          <span>MARKETING</span>
        </a>

        <p>Google Ads · Meta Ads · TikTok Ads · Web · Tracking</p>

        <a href={phoneHref}>0740 231 358</a>
      </footer>
    </main>
  );
}
