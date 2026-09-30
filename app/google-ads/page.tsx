import type { Metadata } from 'next';
import { ArrowRight, Check, Phone } from 'lucide-react';

import ContactForm from '@/components/ContactForm';
import PolicyLink from '@/components/PolicyLink';
import SiteHeader from '@/components/SiteHeader';

const siteUrl = 'https://www.hardservicesrl.ro';
const phoneHref = 'tel:+40740231358';

export const metadata: Metadata = {
  title: 'Google Ads pentru Firme | Administrare și Optimizare | Hard Service',
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
    title: 'Google Ads pentru Firme | Administrare și Optimizare | Hard Service',
    description:
      'Administrare Google Ads pentru firme, cu strategie, optimizare, tracking al conversiilor și landing pages.',
  },
};

const faqItems = [
  {
    question: 'Ce include administrarea Google Ads?',
    answer:
      'Administrarea Google Ads poate include cercetarea cuvintelor cheie, structurarea campaniilor, configurarea anunțurilor, negative keywords, monitorizarea termenilor de căutare, optimizarea bugetelor și tracking-ul conversiilor.',
  },
  {
    question: 'Lucrați cu campanii Google Search?',
    answer:
      'Da. Google Search este potrivit în special pentru servicii și produse pentru care există cerere exprimată prin căutări. Campaniile sunt structurate în funcție de serviciile, produsele și zonele relevante pentru afacere.',
  },
  {
    question: 'Lucrați și cu Performance Max?',
    answer:
      'Da, atunci când tipul de business, obiectivele și datele disponibile justifică utilizarea acestui tip de campanie.',
  },
  {
    question: 'Puteți administra un cont Google Ads existent?',
    answer:
      'Da. Putem analiza contul existent, campaniile, cuvintele cheie, termenii de căutare, conversiile și structura generală înainte de a propune modificări.',
  },
  {
    question: 'Puteți urmări apelurile și formularele?',
    answer:
      'Da. În funcție de configurația website-ului, putem implementa tracking pentru apeluri, formulare și alte conversii și le putem conecta la Google Ads, GA4 și Google Tag Manager.',
  },
  {
    question: 'Este nevoie de un landing page separat?',
    answer:
      'Nu întotdeauna. Unele campanii pot folosi pagini existente, iar în alte situații o landing page dedicată poate face mai clară legătura dintre căutare, anunț și ofertă.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/google-ads/#webpage`,
      url: `${siteUrl}/google-ads/`,
      name: 'Google Ads pentru Firme | Administrare și Optimizare | Hard Service',
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
        'Servicii de administrare și optimizare Google Ads pentru firme, inclusiv Search, Performance Max, Shopping și tracking al conversiilor.',
      provider: {
        '@id': `${siteUrl}/#organization`,
      },
      areaServed: {
        '@type': 'Country',
        name: 'România',
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
    <main className="google-ads-simple-page">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* HERO */}
      <section className="google-simple-hero">
        <div className="google-simple-hero-inner">
          <nav className="google-simple-breadcrumbs" aria-label="Breadcrumb">
            <a href="/">Acasă</a>
            <span>/</span>
            <a href="/#servicii">Servicii</a>
            <span>/</span>
            <strong>Google Ads</strong>
          </nav>

          <div className="eyebrow">GOOGLE ADS</div>

          <h1>
            Google Ads pentru firme care vor trafic relevant și mai multe
            conversii.
          </h1>

          <p className="google-simple-lead">
            Administrăm campanii Google Ads de la cercetarea cuvintelor
            cheie și structurarea contului până la anunțuri, landing pages,
            tracking și optimizare continuă.
          </p>

          <div className="google-simple-actions">
            <a className="primary" href={phoneHref}>
              <Phone size={17} />
              0740 231 358
            </a>

            <a className="secondary" href="#contact">
              Cere o ofertă
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section google-simple-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">ADMINISTRARE GOOGLE ADS</div>

            <h2>
              Campaniile trebuie să fie legate de ceea ce vrei să obții.
            </h2>
          </div>

          <p>
            Pentru o firmă, scopul unei campanii Google Ads nu este pur și
            simplu să obțină clickuri. Important este ca traficul să fie
            relevant și să ducă spre o acțiune care contează pentru business:
            apel, formular, lead sau vânzare.
          </p>
        </div>

        <div className="google-simple-columns">
          <div>
            <h3>Google Search</h3>

            <p>
              Campanii pentru persoane care caută deja servicii sau produse
              relevante. Structura campaniei pornește de la ceea ce caută
              clientul și de la serviciile pe care vrei să le promovezi.
            </p>
          </div>

          <div>
            <h3>Performance Max</h3>

            <p>
              Campanii orientate spre obiective de conversie și utilizarea mai
              multor suprafețe Google, atunci când acest tip de campanie este
              potrivit pentru proiect.
            </p>
          </div>

          <div>
            <h3>Google Shopping</h3>

            <p>
              Pentru magazine online, produsele pot fi promovate prin
              Merchant Center și campanii Shopping sau Performance Max.
            </p>
          </div>

          <div>
            <h3>Display & YouTube</h3>

            <p>
              Pot fi folosite pentru vizibilitate, remarketing și obiective
              suplimentare, în funcție de strategia proiectului.
            </p>
          </div>
        </div>
      </section>

      {/* CE INCLUD SERVICIILE */}
      <section className="section google-simple-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">CE FACEM CONCRET</div>

            <h2>
              Administrarea Google Ads înseamnă mai mult decât lansarea
              unei campanii.
            </h2>
          </div>

          <p>
            Lucrăm pe întregul traseu dintre căutarea utilizatorului și
            conversie.
          </p>
        </div>

        <div className="google-simple-list">
          <div>
            <Check size={17} />
            <div>
              <strong>Cercetare de cuvinte cheie</strong>
              <p>
                Identificăm căutările relevante pentru produsele sau
                serviciile promovate și separăm intențiile comerciale de
                termenii nerelevanți.
              </p>
            </div>
          </div>

          <div>
            <Check size={17} />
            <div>
              <strong>Structurarea campaniilor</strong>
              <p>
                Organizăm campaniile în funcție de servicii, produse,
                categorii, locații și obiective.
              </p>
            </div>
          </div>

          <div>
            <Check size={17} />
            <div>
              <strong>Anunțuri și assets</strong>
              <p>
                Construim mesaje relevante pentru căutările și ofertele
                promovate.
              </p>
            </div>
          </div>

          <div>
            <Check size={17} />
            <div>
              <strong>Negative keywords</strong>
              <p>
                Excludem termenii care pot genera trafic inutil și consum de
                buget fără relevanță comercială.
              </p>
            </div>
          </div>

          <div>
            <Check size={17} />
            <div>
              <strong>Optimizarea campaniilor</strong>
              <p>
                Analizăm termenii de căutare, costurile, conversiile și
                distribuirea bugetului și facem ajustările necesare.
              </p>
            </div>
          </div>

          <div>
            <Check size={17} />
            <div>
              <strong>Tracking al conversiilor</strong>
              <p>
                Urmărim, în funcție de proiect, apeluri, formulare, lead-uri,
                achiziții și alte acțiuni importante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KEYWORDS */}
      <section className="section google-simple-section">
        <div className="google-simple-feature">
          <div>
            <div className="eyebrow">CUVINTE CHEIE ȘI TERMENI DE CĂUTARE</div>

            <h2>
              Un buget bun începe cu trafic relevant.
            </h2>

            <p>
              Nu toate căutările care conțin un cuvânt cheie sunt la fel de
              utile. Analizăm termenii introduși de utilizatori și urmărim
              dacă intenția este potrivită pentru produsul sau serviciul
              promovat.
            </p>

            <p>
              De aici apar decizii precum adăugarea unor cuvinte cheie
              negative, separarea campaniilor, modificarea potrivirilor sau
              ajustarea mesajelor din anunțuri.
            </p>
          </div>

          <div className="google-simple-example">
            <div>
              <span>RELEVANT</span>
              <strong>serviciul oferit + oraș</strong>
            </div>

            <div>
              <span>RELEVANT</span>
              <strong>serviciu + preț / ofertă</strong>
            </div>

            <div className="muted">
              <span>NEGATIV</span>
              <strong>curs / job / gratuit</strong>
            </div>

            <div className="muted">
              <span>NEGATIV</span>
              <strong>căutare fără intenție comercială</strong>
            </div>
          </div>
        </div>
      </section>

      {/* LANDING PAGE + TRACKING */}
      <section className="section google-simple-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">WEBSITE ȘI CONVERSII</div>

            <h2>
              Reclama, pagina și tracking-ul trebuie să funcționeze împreună.
            </h2>
          </div>

          <p>
            O campanie poate aduce trafic relevant, dar rezultatul depinde și
            de pagina în care ajunge utilizatorul și de capacitatea noastră de
            a măsura ce face după click.
          </p>
        </div>

        <div className="google-simple-columns google-simple-columns-3">
          <div>
            <h3>Landing page</h3>

            <p>
              Pagina trebuie să răspundă rapid la ceea ce a căutat utilizatorul
              și să ofere o acțiune clară: apel, formular, solicitare de ofertă
              sau cumpărare.
            </p>
          </div>

          <div>
            <h3>Tracking</h3>

            <p>
              Putem implementa măsurarea pentru apeluri, formulare și
              achiziții, folosind configurația potrivită pentru website.
            </p>
          </div>

          <div>
            <h3>GA4 & GTM</h3>

            <p>
              Google Analytics 4 și Google Tag Manager pot fi folosite pentru
              măsurarea și gestionarea evenimentelor și conversiilor.
            </p>
          </div>
        </div>
      </section>

      {/* CUM LUCRAM */}
      <section className="section google-simple-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">CUM LUCRĂM</div>

            <h2>
              Un proces simplu, de la analiză la optimizare.
            </h2>
          </div>
        </div>

        <div className="google-simple-process">
          <div>
            <span>01</span>
            <div>
              <h3>Analizăm business-ul</h3>
              <p>
                Servicii, produse, clienți, zone de activitate și obiective.
              </p>
            </div>
          </div>

          <div>
            <span>02</span>
            <div>
              <h3>Stabilim structura</h3>
              <p>
                Cuvinte cheie, campanii, grupuri, anunțuri și pagini de
                destinație.
              </p>
            </div>
          </div>

          <div>
            <span>03</span>
            <div>
              <h3>Configurăm tracking-ul</h3>
              <p>
                Stabilim ce înseamnă conversie și ce acțiuni trebuie măsurate.
              </p>
            </div>
          </div>

          <div>
            <span>04</span>
            <div>
              <h3>Lansăm și monitorizăm</h3>
              <p>
                Urmărim termenii de căutare, costurile și comportamentul
                campaniilor.
              </p>
            </div>
          </div>

          <div>
            <span>05</span>
            <div>
              <h3>Optimizăm</h3>
              <p>
                Ajustăm campaniile pe baza datelor și a conversiilor generate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PENTRU CINE */}
      <section className="section google-simple-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">PENTRU CINE</div>

            <h2>
              Google Ads pentru modele diferite de business.
            </h2>
          </div>

          <p>
            Strategia diferă în funcție de produs, serviciu și felul în care
            clientul ia decizia de cumpărare.
          </p>
        </div>

        <div className="google-simple-columns">
          <div>
            <h3>Servicii locale</h3>
            <p>
              Pentru firme unde clientul caută activ un furnizor și poate
              contacta rapid compania prin telefon sau formular.
            </p>
          </div>

          <div>
            <h3>B2B și servicii</h3>
            <p>
              Pentru servicii cu o decizie mai complexă, unde campania trebuie
              să ducă spre o prezentare clară și o cerere de ofertă.
            </p>
          </div>

          <div>
            <h3>Magazine online</h3>
            <p>
              Pentru promovarea produselor și urmărirea comenzilor prin
              Merchant Center, Shopping, Performance Max și tracking de
              achiziții.
            </p>
          </div>

          <div>
            <h3>Campanii locale</h3>
            <p>
              Pentru servicii care se adresează unor orașe sau zone geografice
              bine definite.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section google-simple-section" id="faq">
        <div className="section-head">
          <div>
            <div className="eyebrow">ÎNTREBĂRI FRECVENTE</div>

            <h2>Întrebări despre administrarea Google Ads.</h2>
          </div>
        </div>

        <div className="google-simple-faq">
          {faqItems.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section google-simple-section">
        <div className="google-simple-cta">
          <div>
            <div className="eyebrow">GOOGLE ADS</div>

            <h2>
              Vrei să pornești o campanie sau ai deja un cont Google Ads?
            </h2>

            <p>
              Trimite-ne câteva informații despre afacerea ta și despre ceea
              ce vrei să promovezi.
            </p>
          </div>

          <a className="primary" href={phoneHref}>
            <Phone size={17} />
            0740 231 358
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="contact-copy">
          <div className="eyebrow">CONTACT</div>

          <h2>
            Cere o ofertă pentru administrarea campaniilor Google Ads.
          </h2>

          <p>
            Completează formularul și spune-ne ce promovezi, în ce zonă
            activezi și dacă ai deja un cont Google Ads.
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
