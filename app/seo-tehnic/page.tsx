import type { Metadata } from 'next';

import {
  ArrowRight,
  BarChart3,
  Check,
  FileCode2,
  Gauge,
  Globe2,
  Link2,
  ListTree,
  Lock,
  Phone,
  Search,
  Server,
  Settings2,
  ShieldCheck,
  Smartphone,
  Tags,
  Wrench,
} from 'lucide-react';

import ContactForm from '@/components/ContactForm';
import PolicyLink from '@/components/PolicyLink';
import SiteHeader from '@/components/SiteHeader';
import TechnicalSeoHeroVisual from '@/components/TechnicalSeoHeroVisual';

const siteUrl = 'https://www.hardservicesrl.ro';
const phoneHref = 'tel:+40740231358';

export const metadata: Metadata = {
  title:
    'SEO Tehnic pentru Site-uri | Indexare, Sitemap, Performance & Structură | Hard Service',
  description:
    'SEO tehnic pentru site-uri și magazine online: indexare, sitemap, robots.txt, canonicals, redirectări, structură, performanță, mobile, linkuri interne și date structurate.',
  alternates: {
    canonical: '/seo-tehnic/',
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: `${siteUrl}/seo-tehnic/`,
    siteName: 'Hard Service Marketing',
    title:
      'SEO Tehnic pentru Site-uri | Indexare, Sitemap, Performance & Structură | Hard Service',
    description:
      'Optimizăm partea tehnică a site-ului pentru crawl, indexare, structură, performanță și o bază SEO corectă.',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/seo-tehnic/#webpage`,
      url: `${siteUrl}/seo-tehnic/`,
      name:
        'SEO Tehnic pentru Site-uri | Indexare, Sitemap, Performance & Structură | Hard Service',
      description:
        'SEO tehnic pentru site-uri și magazine online.',
      isPartOf: {
        '@id': `${siteUrl}/#website`,
      },
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/seo-tehnic/#service`,
      name: 'SEO tehnic',
      serviceType: 'Optimizare SEO tehnică',
      description:
        'Audit și optimizare tehnică pentru indexare, crawl, structură, performanță și date structurate.',
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
      '@id': `${siteUrl}/seo-tehnic/#breadcrumb`,
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
          name: 'SEO tehnic',
          item: `${siteUrl}/seo-tehnic/`,
        },
      ],
    },
  ],
};

const seoAreas = [
  {
    icon: Search,
    title: 'Indexare și crawl',
    text:
      'Verificăm dacă paginile importante pot fi accesate și indexate corect de motoarele de căutare.',
  },
  {
    icon: FileCode2,
    title: 'Sitemap & robots.txt',
    text:
      'Analizăm sitemap-ul XML și regulile robots.txt pentru a evita blocarea sau omiterea unor pagini importante.',
  },
  {
    icon: Link2,
    title: 'Linkuri și URL-uri',
    text:
      'Optimizăm structura URL-urilor, legăturile interne, redirectările și evitarea linkurilor problematice.',
  },
  {
    icon: Tags,
    title: 'Meta & structură',
    text:
      'Verificăm title, description, heading-urile și structura HTML a paginilor importante.',
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    text:
      'Analizăm experiența pe dispozitive mobile și problemele care pot afecta utilizarea paginii.',
  },
  {
    icon: Gauge,
    title: 'Performanță',
    text:
      'Identificăm probleme tehnice care pot afecta viteza de încărcare și experiența utilizatorului.',
  },
];

const faqItems = [
  {
    question: 'Ce este SEO tehnic?',
    answer:
      'SEO tehnic reprezintă partea de optimizare care ține de crawl, indexare, structură, performanță, URL-uri, sitemap, date structurate și alte elemente tehnice ale site-ului.',
  },
  {
    question: 'SEO tehnic înseamnă doar viteza site-ului?',
    answer:
      'Nu. Viteza este doar o parte. SEO tehnic include și indexarea, sitemap-ul, robots.txt, canonicals, redirectările, structura paginilor, linkurile interne și alte elemente tehnice.',
  },
  {
    question: 'Verificați și Google Search Console?',
    answer:
      'Da. Search Console poate fi folosit pentru a identifica probleme de indexare, pagini excluse, erori și alte informații utile pentru audit.',
  },
  {
    question: 'Puteți optimiza un site construit în Next.js?',
    answer:
      'Da. Putem analiza elemente specifice aplicațiilor web moderne, inclusiv metadata, sitemap, robots.txt, canonical, structured data și structura paginilor.',
  },
  {
    question: 'SEO tehnic garantează poziții mai bune în Google?',
    answer:
      'Nu. SEO tehnic rezolvă problemele și îmbunătățește baza tehnică a site-ului, dar poziționarea depinde și de conținut, relevanță, concurență, autoritate și alți factori.',
  },
  {
    question: 'Faceți audit pentru magazine online?',
    answer:
      'Da. Putem analiza structura categoriilor, produselor, URL-urilor, filtrelor, indexării și elementelor tehnice ale unui magazin online.',
  },
];

export default function SeoTehnicPage() {
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
              <strong>SEO tehnic</strong>
            </nav>

            <div className="eyebrow">
              SEO TEHNIC · INDEXARE · PERFORMANCE
            </div>

            <h1>
              Un site optimizat tehnic este o bază mai bună pentru
              <span> SEO și creștere organică.</span>
            </h1>

            <p>
              Analizăm și optimizăm partea tehnică a site-ului: indexare,
              sitemap, robots.txt, URL-uri, canonicals, structură, performanță,
              mobile și alte elemente care pot afecta accesarea și înțelegerea
              paginilor.
            </p>

            <div className="hero-actions">
              <a className="primary" href={phoneHref}>
                <Phone size={18} />
                0740 231 358
              </a>

              <a className="secondary" href="#contact">
                Solicită un audit
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="hero-proof">
              <span>
                <Check size={14} />
                Indexare
              </span>

              <span>
                <Check size={14} />
                Performance
              </span>

              <span>
                <Check size={14} />
                Structură tehnică
              </span>
            </div>
          </div>

          <TechnicalSeoHeroVisual />
        </div>
      </section>

      {/* INTRO */}
      <section className="section store-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">SEO TEHNIC</div>

            <h2>
              Înainte de conținut și promovare, site-ul trebuie să fie accesibil
              și ușor de înțeles.
            </h2>
          </div>

          <p>
            Un site poate avea pagini bune și conținut relevant, dar problemele
            tehnice pot îngreuna crawl-ul, indexarea sau accesul utilizatorilor
            la informațiile importante.
          </p>
        </div>

        <div className="store-intro-layout">
          <div className="store-intro-copy">
            <p>
              SEO tehnic înseamnă să verificăm fundația pe care este construit
              site-ul: cum sunt organizate paginile, cum sunt descoperite,
              ce versiuni sunt indexabile și cum comunică site-ul cu motoarele
              de căutare.
            </p>

            <p>
              Nu urmărim doar să găsim erori. Scopul este să construim o
              structură tehnică clară și ușor de întreținut pe termen lung.
            </p>
          </div>

          <div className="store-objectives">
            <div>
              <span>01</span>
              <strong>Crawl</strong>
              <p>Google poate accesa paginile importante.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Indexare</strong>
              <p>Paginile corecte pot fi înțelese și indexate.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Structură</strong>
              <p>Site-ul are o arhitectură tehnică coerentă.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ZONE SEO */}
      <section className="section store-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">CE VERIFICĂM</div>

            <h2>
              Optimizăm elementele tehnice care influențează accesarea,
              indexarea și experiența site-ului.
            </h2>
          </div>

          <p>
            Auditul diferă în funcție de site, platformă și structura
            proiectului.
          </p>
        </div>

        <div className="service-grid service-grid-v3 store-types-grid">
          {seoAreas.map(({ icon: Icon, title, text }) => (
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
              De la auditul tehnic până la implementarea modificărilor.
            </h2>
          </div>

          <p>
            Identificăm problemele relevante și lucrăm direct în structura
            site-ului pentru a le corecta atunci când avem accesul necesar.
          </p>
        </div>

        <div className="store-services-list">
          <div>
            <Check size={18} />

            <section>
              <h3>Audit SEO tehnic</h3>

              <p>
                Analizăm structura tehnică, crawl-ul, indexarea, URL-urile și
                problemele care pot afecta site-ul.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />

            <section>
              <h3>Metadata și heading-uri</h3>

              <p>
                Verificăm title, description, H1-H6 și organizarea informației
                în paginile importante.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />

            <section>
              <h3>Canonical & redirectări</h3>

              <p>
                Verificăm versiunile canonice, redirectările și URL-urile care
                pot genera probleme de indexare.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />

            <section>
              <h3>Sitemap & robots.txt</h3>

              <p>
                Analizăm sitemap-ul XML și regulile robots.txt pentru o
                structură clară de acces și indexare.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />

            <section>
              <h3>Structured data</h3>

              <p>
                Verificăm datele structurate și modul în care sunt implementate
                în paginile site-ului.
              </p>
            </section>
          </div>

          <div>
            <Check size={18} />

            <section>
              <h3>Performance & mobile</h3>

              <p>
                Identificăm probleme tehnice care afectează viteza,
                stabilitatea și utilizarea pe dispozitive mobile.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* STRUCTURA */}
      <section className="section store-section">
        <div className="store-feature">
          <div>
            <div className="eyebrow">STRUCTURĂ SEO</div>

            <h2>
              Un site bun pentru SEO începe cu o structură tehnică logică.
            </h2>

            <p>
              Paginile trebuie să fie organizate clar, URL-urile să aibă o
              logică, iar motoarele de căutare să poată descoperi și înțelege
              paginile importante.
            </p>

            <p>
              Analizăm inclusiv legăturile interne, ierarhia paginilor,
              paginile duplicate sau inutile și modul în care sunt prezentate
              informațiile tehnice.
            </p>

            <div className="store-feature-points">
              <span>
                <Check size={15} />
                URL-uri
              </span>

              <span>
                <Check size={15} />
                sitemap
              </span>

              <span>
                <Check size={15} />
                robots.txt
              </span>

              <span>
                <Check size={15} />
                canonical
              </span>

              <span>
                <Check size={15} />
                heading-uri
              </span>

              <span>
                <Check size={15} />
                internal linking
              </span>
            </div>
          </div>

          <div className="store-seo-panel">
            <div>
              <small>CRAWL</small>
              <strong>Accesibil</strong>
            </div>

            <div>
              <small>INDEX</small>
              <strong>Controlat</strong>
            </div>

            <div>
              <small>CANONICAL</small>
              <strong>Corect</strong>
            </div>

            <div>
              <small>SITEMAP</small>
              <strong>Actualizat</strong>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH CONSOLE / PERFORMANCE */}
      <section className="section store-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">MONITORIZARE</div>

            <h2>
              Folosim datele tehnice pentru a găsi probleme care nu sunt
              vizibile dintr-o simplă accesare a site-ului.
            </h2>
          </div>

          <p>
            Search Console, analytics și instrumentele de audit pot ajuta la
            identificarea paginilor excluse, problemelor de indexare și a
            altor erori tehnice.
          </p>
        </div>

        <div className="store-commerce-grid">
          <article>
            <Search size={22} />

            <h3>Google Search Console</h3>

            <p>
              Verificăm indexarea, paginile excluse, sitemap-ul și problemele
              raportate de Google.
            </p>
          </article>

          <article>
            <Gauge size={22} />

            <h3>Performance</h3>

            <p>
              Analizăm elementele tehnice care pot afecta viteza și experiența
              utilizatorului.
            </p>
          </article>

          <article>
            <Link2 size={22} />

            <h3>Internal linking</h3>

            <p>
              Verificăm legăturile dintre pagini și modul în care este
              distribuită navigarea internă.
            </p>
          </article>

          <article>
            <BarChart3 size={22} />

            <h3>Monitorizare</h3>

            <p>
              Problemele tehnice pot fi urmărite și după implementare, nu doar
              la momentul auditului inițial.
            </p>
          </article>
        </div>
      </section>

      {/* MAGAZIN */}
      <section className="section store-section">
        <div className="store-tracking-panel">
          <div>
            <div className="eyebrow">PENTRU MAGAZINE ONLINE</div>

            <h2>
              Magazinele online au nevoie de o structură SEO tehnică atentă.
            </h2>

            <p>
              Categorii, produse, filtre, variante, paginare și URL-uri pot
              crea o structură complexă. De aceea este important să știm ce
              pagini trebuie accesate și indexate și ce pagini nu aduc valoare
              în index.
            </p>
          </div>

          <div className="store-tracking-flow">
            <div>
              <span>01</span>
              <strong>Categorii</strong>
            </div>

            <ArrowRight />

            <div>
              <span>02</span>
              <strong>Produse</strong>
            </div>

            <ArrowRight />

            <div>
              <span>03</span>
              <strong>Filtre</strong>
            </div>

            <ArrowRight />

            <div>
              <span>04</span>
              <strong>Indexare</strong>
            </div>
          </div>

          <div className="store-tech-row">
            <span>URL-uri</span>
            <span>Canonical</span>
            <span>Sitemap</span>
            <span>Internal linking</span>
            <span>Structured data</span>
          </div>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="section store-section">
        <div className="store-feature">
          <div>
            <div className="eyebrow">PERFORMANCE & MOBILE</div>

            <h2>
              Un site trebuie să fie ușor de folosit și pe desktop, și pe
              telefon.
            </h2>

            <p>
              Analizăm elementele tehnice care pot încetini încărcarea,
              afecta interacțiunea sau crea probleme pe dispozitive mobile.
            </p>

            <p>
              Pentru aplicații moderne putem verifica inclusiv modul în care
              sunt generate paginile, imaginile, metadata și resursele
              utilizate de site.
            </p>

            <div className="store-feature-points">
              <span>
                <Check size={15} />
                mobile
              </span>

              <span>
                <Check size={15} />
                imagini
              </span>

              <span>
                <Check size={15} />
                JavaScript
              </span>

              <span>
                <Check size={15} />
                CSS
              </span>

              <span>
                <Check size={15} />
                încărcare
              </span>

              <span>
                <Check size={15} />
                structură
              </span>
            </div>
          </div>

          <div className="store-seo-panel">
            <div>
              <small>MOBILE</small>
              <strong>Responsive</strong>
            </div>

            <div>
              <small>IMAGES</small>
              <strong>Optimized</strong>
            </div>

            <div>
              <small>CODE</small>
              <strong>Curat</strong>
            </div>

            <div>
              <small>PERFORMANCE</small>
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

            <h3>Structură</h3>

            <p>
              URL-uri, categorii, pagini și legături interne organizate logic.
            </p>
          </div>

          <div>
            <span>02</span>

            <h3>Indexare</h3>

            <p>
              Sitemap, robots.txt, canonical și controlul paginilor indexabile.
            </p>
          </div>

          <div>
            <span>03</span>

            <h3>Performance</h3>

            <p>
              Viteză, mobil, imagini și elemente tehnice optimizate.
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
              De la auditul tehnic până la implementarea modificărilor.
            </h2>
          </div>
        </div>

        <div className="store-process">
          <div>
            <span>01</span>

            <h3>Audităm</h3>

            <p>
              Analizăm site-ul, indexarea, structura și principalele probleme
              tehnice.
            </p>
          </div>

          <div>
            <span>02</span>

            <h3>Prioritizăm</h3>

            <p>
              Stabilim ce probleme trebuie rezolvate primele și ce modificări
              au impact tehnic real.
            </p>
          </div>

          <div>
            <span>03</span>

            <h3>Implementăm</h3>

            <p>
              Aplicăm modificările în site atunci când avem accesul necesar.
            </p>
          </div>

          <div>
            <span>04</span>

            <h3>Verificăm</h3>

            <p>
              Recontrolăm structura și modul în care sunt reflectate
              modificările.
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
              SEO tehnic pentru site-uri, magazine și proiecte web moderne.
            </h2>
          </div>

          <p>
            Abordarea diferă în funcție de platformă, structură și complexitatea
            proiectului.
          </p>
        </div>

        <div className="seo-focus-grid store-business-grid">
          <article>
            <small>SITE PREZENTARE</small>

            <h3>Site-uri de firme</h3>

            <p>
              Structură tehnică, indexare, metadata, sitemap, linkuri interne
              și performance.
            </p>
          </article>

          <article>
            <small>E-COMMERCE</small>

            <h3>Magazine online</h3>

            <p>
              Categorii, produse, filtre, URL-uri, canonical și controlul
              paginilor indexabile.
            </p>
          </article>

          <article>
            <small>WEB APPS</small>

            <h3>Site-uri moderne</h3>

            <p>
              Proiecte construite cu tehnologii moderne, unde metadata,
              rendering-ul și structura tehnică trebuie verificate atent.
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
              Întrebări despre SEO tehnic.
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
          <div className="eyebrow">SEO TEHNIC</div>

          <h2>
            Nu știi dacă site-ul tău este configurat corect pentru Google?
          </h2>

          <p>
            Putem analiza partea tehnică a site-ului și identifica problemele
            care pot afecta indexarea, structura, performanța și accesarea
            paginilor importante.
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
