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
  ShoppingBag,
  ShieldCheck,
  Smartphone,
  Target,
  Wrench,
} from 'lucide-react';

import TrackingHeroVisual from '@/components/TrackingHeroVisual';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Tracking Conversii | GA4, GTM, Google Ads & Meta Pixel | Hard Service',
  description:
    'Tracking conversii pentru site-uri și magazine online: GA4, Google Tag Manager, Google Ads, Meta Pixel, TikTok Pixel, formulare, apeluri, lead-uri și ecommerce.',
  alternates: {
    canonical: 'https://www.hardservicesrl.ro/tracking-conversii/',
  },
  openGraph: {
    title: 'Tracking Conversii | GA4, GTM, Google Ads & Meta Pixel | Hard Service',
    description:
      'Măsurăm acțiunile importante din site și conectăm datele cu Google Ads, Meta Ads, TikTok Ads și GA4.',
    url: 'https://www.hardservicesrl.ro/tracking-conversii/',
    siteName: 'Hard Service',
    type: 'website',
  },
};

const trackingSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.hardservicesrl.ro/tracking-conversii/#webpage',
      url: 'https://www.hardservicesrl.ro/tracking-conversii/',
      name: 'Tracking Conversii | GA4, GTM, Google Ads & Meta Pixel | Hard Service',
      description:
        'Tracking conversii pentru site-uri și magazine online: GA4, GTM, Google Ads, Meta Pixel, TikTok Pixel și ecommerce tracking.',
      isPartOf: {
        '@id': 'https://www.hardservicesrl.ro/#website',
      },
    },
    {
      '@type': 'Service',
      name: 'Tracking conversii',
      serviceType: 'Tracking conversii și implementare analytics',
      provider: {
        '@type': 'Organization',
        name: 'HARD SERVICE SRL',
        url: 'https://www.hardservicesrl.ro/',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Romania',
      },
    },
    {
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
          name: 'Tracking conversii',
          item: 'https://www.hardservicesrl.ro/tracking-conversii/',
        },
      ],
    },
  ],
};

export default function TrackingConversiiPage() {
  return (
    <main className="tracking-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(trackingSchema),
        }}
      />

      <section className="tracking-hero section-padding">
        <div className="container">
          <div className="tracking-hero-grid">
            <div className="tracking-hero-copy">
              <div className="eyebrow">
                <span>TRACKING & ANALYTICS</span>
              </div>

              <h1>
                Tracking conversii care îți arată ce aduce clienți, nu doar
                trafic.
              </h1>

              <p className="hero-lead">
                Configurăm măsurarea acțiunilor importante din site și magazin
                online, astfel încât să poți vedea ce se întâmplă după un
                click și ce campanii generează lead-uri sau vânzări.
              </p>

              <div className="tracking-hero-actions">
                <a href="#contact" className="btn btn-primary">
                  Cere o configurare
                  <ArrowRight size={17} />
                </a>

                <a href="#ce-masuram" className="btn btn-secondary">
                  Vezi ce măsurăm
                </a>
              </div>

              <div className="tracking-hero-points">
                <div>
                  <Check size={16} />
                  GA4 & Google Tag Manager
                </div>

                <div>
                  <Check size={16} />
                  Google Ads & Meta Ads
                </div>

                <div>
                  <Check size={16} />
                  Formulare, apeluri & ecommerce
                </div>
              </div>
            </div>

            <TrackingHeroVisual />
          </div>
        </div>
      </section>

      <section className="tracking-intro section-padding">
        <div className="container">
          <div className="tracking-section-heading">
            <span className="section-kicker">DE CE CONTEAZĂ</span>
            <h2>
              Fără tracking corect, reclamele pot aduce trafic fără să știi
              ce funcționează.
            </h2>
            <p>
              Trackingul transformă acțiunile utilizatorilor în date
              măsurabile. Astfel poți vedea ce pagini generează interes, ce
              formulare sunt trimise, câte persoane apasă pe telefon și ce
              produse sunt cumpărate.
            </p>
          </div>

          <div className="tracking-intro-grid">
            <article className="tracking-info-card">
              <div className="tracking-info-icon">
                <MousePointerClick size={21} />
              </div>
              <h3>Acțiuni reale</h3>
              <p>
                Urmărim acțiunile importante pentru afacerea ta, nu doar
                numărul de vizitatori.
              </p>
            </article>

            <article className="tracking-info-card">
              <div className="tracking-info-icon">
                <BarChart3 size={21} />
              </div>
              <h3>Date centralizate</h3>
              <p>
                GA4 și Google Tag Manager pot deveni baza pentru măsurarea
                întregului ecosistem digital.
              </p>
            </article>

            <article className="tracking-info-card">
              <div className="tracking-info-icon">
                <Target size={21} />
              </div>
              <h3>Campanii măsurabile</h3>
              <p>
                Conversiile pot fi trimise către platformele de advertising
                pentru analiză și optimizare.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="ce-masuram"
        className="tracking-events-section section-padding"
      >
        <div className="container">
          <div className="tracking-section-heading compact">
            <span className="section-kicker">CE PUTEM MĂSURA</span>
            <h2>Fiecare business are propriile conversii importante.</h2>
            <p>
              Nu toate site-urile au aceleași obiective. Configurăm evenimentele
              în funcție de ceea ce reprezintă efectiv un lead, o cerere sau o
              vânzare pentru firma ta.
            </p>
          </div>

          <div className="tracking-events-grid">
            <article className="tracking-event-card">
              <div className="tracking-card-icon">
                <Phone size={20} />
              </div>
              <h3>Apeluri telefonice</h3>
              <p>
                Clickurile pe numărul de telefon pot fi măsurate ca acțiuni de
                conversie.
              </p>
            </article>

            <article className="tracking-event-card">
              <div className="tracking-card-icon">
                <MousePointerClick size={20} />
              </div>
              <h3>Formulare de contact</h3>
              <p>
                Măsurăm trimiterea formularului, nu doar accesarea paginii de
                contact.
              </p>
            </article>

            <article className="tracking-event-card">
              <div className="tracking-card-icon">
                <Search size={20} />
              </div>
              <h3>Acțiuni din site</h3>
              <p>
                Putem urmări clickuri, butoane, linkuri, descărcări sau alte
                interacțiuni importante.
              </p>
            </article>

            <article className="tracking-event-card">
              <div className="tracking-card-icon">
                <ShoppingBag size={20} />
              </div>
              <h3>Achiziții online</h3>
              <p>
                Pentru ecommerce, putem măsura pașii importanți din procesul de
                cumpărare.
              </p>
            </article>

            <article className="tracking-event-card">
              <div className="tracking-card-icon">
                <Smartphone size={20} />
              </div>
              <h3>Acțiuni mobile</h3>
              <p>
                Verificăm evenimentele și pe mobil, unde comportamentul poate
                fi diferit față de desktop.
              </p>
            </article>

            <article className="tracking-event-card">
              <div className="tracking-card-icon">
                <Globe2 size={20} />
              </div>
              <h3>Evenimente personalizate</h3>
              <p>
                Putem defini evenimente adaptate fluxului specific al
                businessului tău.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="tracking-stack-section section-padding">
        <div className="container">
          <div className="tracking-split">
            <div className="tracking-split-copy">
              <span className="section-kicker">STACK DE TRACKING</span>

              <h2>
                Conectăm site-ul cu instrumentele de măsurare și publicitate.
              </h2>

              <p>
                Structura poate include mai multe platforme, în funcție de
                obiectivele și tehnologia utilizată pe site.
              </p>

              <div className="tracking-stack-list">
                <div>
                  <div className="tracking-list-icon">
                    <BarChart3 size={18} />
                  </div>
                  <div>
                    <strong>Google Analytics 4</strong>
                    <span>
                      Analiza traficului, evenimentelor și conversiilor.
                    </span>
                  </div>
                </div>

                <div>
                  <div className="tracking-list-icon">
                    <Code2 size={18} />
                  </div>
                  <div>
                    <strong>Google Tag Manager</strong>
                    <span>
                      Gestionarea centralizată a tagurilor și evenimentelor.
                    </span>
                  </div>
                </div>

                <div>
                  <div className="tracking-list-icon">
                    <Target size={18} />
                  </div>
                  <div>
                    <strong>Google Ads</strong>
                    <span>
                      Conversii care pot fi folosite pentru evaluarea
                      campaniilor.
                    </span>
                  </div>
                </div>

                <div>
                  <div className="tracking-list-icon">
                    <Smartphone size={18} />
                  </div>
                  <div>
                    <strong>Meta Pixel & TikTok Pixel</strong>
                    <span>
                      Măsurarea acțiunilor provenite din platformele sociale.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="tracking-flow-panel">
              <div className="tracking-flow-header">
                <span>FLUX DE DATE</span>
                <Gauge size={18} />
              </div>

              <div className="tracking-flow">
                <div className="tracking-flow-step">
                  <span className="tracking-flow-number">01</span>
                  <div>
                    <strong>Vizitator</strong>
                    <small>Intră pe site</small>
                  </div>
                </div>

                <div className="tracking-flow-arrow">↓</div>

                <div className="tracking-flow-step">
                  <span className="tracking-flow-number">02</span>
                  <div>
                    <strong>Eveniment</strong>
                    <small>Click, formular, apel, achiziție</small>
                  </div>
                </div>

                <div className="tracking-flow-arrow">↓</div>

                <div className="tracking-flow-step">
                  <span className="tracking-flow-number">03</span>
                  <div>
                    <strong>GA4 / GTM</strong>
                    <small>Colectare și organizare</small>
                  </div>
                </div>

                <div className="tracking-flow-arrow">↓</div>

                <div className="tracking-flow-step">
                  <span className="tracking-flow-number">04</span>
                  <div>
                    <strong>Platformă Ads</strong>
                    <small>Analiză și optimizare</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tracking-work-section section-padding">
        <div className="container">
          <div className="tracking-section-heading compact">
            <span className="section-kicker">CE FACEM CONCRET</span>
            <h2>Implementare, verificare și corectarea problemelor de tracking.</h2>
          </div>

          <div className="tracking-work-grid">
            <article className="tracking-work-card">
              <Settings2 size={21} />
              <h3>Configurare GTM</h3>
              <p>
                Structurăm containerele, tagurile, trigger-ele și variabilele
                necesare pentru măsurare.
              </p>
            </article>

            <article className="tracking-work-card">
              <BarChart3 size={21} />
              <h3>Configurare GA4</h3>
              <p>
                Stabilim evenimentele și conversiile relevante pentru site sau
                magazin.
              </p>
            </article>

            <article className="tracking-work-card">
              <Target size={21} />
              <h3>Google Ads</h3>
              <p>
                Legăm acțiunile relevante de conversiile utilizate în campanii,
                acolo unde configurația permite.
              </p>
            </article>

            <article className="tracking-work-card">
              <Code2 size={21} />
              <h3>Meta & TikTok</h3>
              <p>
                Implementăm și verificăm pixelii și evenimentele necesare
                pentru campanii.
              </p>
            </article>

            <article className="tracking-work-card">
              <ShoppingBag size={21} />
              <h3>Ecommerce tracking</h3>
              <p>
                Pentru magazine online, urmărim evenimente relevante din
                procesul de cumpărare.
              </p>
            </article>

            <article className="tracking-work-card">
              <Wrench size={21} />
              <h3>Debug & verificare</h3>
              <p>
                Verificăm în mod practic dacă tagurile se declanșează și dacă
                datele ajung în platforma potrivită.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="tracking-ecommerce-section section-padding">
        <div className="container">
          <div className="tracking-ecommerce-panel">
            <div>
              <span className="section-kicker">PENTRU MAGAZINE ONLINE</span>

              <h2>
                Trackingul ecommerce trebuie să urmărească întregul parcurs al
                clientului.
              </h2>

              <p>
                Pentru un magazin online, nu este suficient să știi câți oameni
                au intrat. Este important să poți analiza interacțiunile
                relevante din catalog și procesul de cumpărare.
              </p>
            </div>

            <div className="tracking-ecommerce-list">
              <div>
                <Check size={16} />
                Vizualizare produse
              </div>
              <div>
                <Check size={16} />
                Adăugare în coș
              </div>
              <div>
                <Check size={16} />
                Începere checkout
              </div>
              <div>
                <Check size={16} />
                Achiziție
              </div>
              <div>
                <Check size={16} />
                Valoare comandă
              </div>
              <div>
                <Check size={16} />
                Produse și categorii
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tracking-consent-section section-padding">
        <div className="container">
          <div className="tracking-split tracking-split-reverse">
            <div className="tracking-consent-card">
              <div className="tracking-consent-icon">
                <ShieldCheck size={24} />
              </div>

              <h3>Trackingul trebuie verificat, nu doar instalat.</h3>

              <p>
                Pe lângă implementare, verificăm modul în care tagurile se
                comportă în practică, inclusiv în raport cu configurația de
                cookies și consimțământ a site-ului.
              </p>

              <div className="tracking-consent-points">
                <div>
                  <Check size={16} />
                  verificare evenimente
                </div>
                <div>
                  <Check size={16} />
                  verificare trigger-uri
                </div>
                <div>
                  <Check size={16} />
                  verificare conversii
                </div>
                <div>
                  <Check size={16} />
                  verificare duplicări
                </div>
              </div>
            </div>

            <div className="tracking-split-copy">
              <span className="section-kicker">VERIFICARE</span>
              <h2>
                Un tracking bun trebuie să producă date utile, nu doar multe
                evenimente.
              </h2>
              <p>
                Putem verifica implementări existente sau construi o structură
                nouă atunci când setup-ul actual nu este clar, incomplet sau
                produce conversii greșite.
              </p>

              <div className="tracking-mini-checks">
                <div>
                  <Check size={16} />
                  Fără conversii duplicate
                </div>
                <div>
                  <Check size={16} />
                  Fără trigger-uri inutile
                </div>
                <div>
                  <Check size={16} />
                  Evenimente denumite clar
                </div>
                <div>
                  <Check size={16} />
                  Structură ușor de întreținut
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tracking-process-section section-padding">
        <div className="container">
          <div className="tracking-section-heading compact">
            <span className="section-kicker">CUM LUCRĂM</span>
            <h2>De la audit la tracking funcțional.</h2>
          </div>

          <div className="tracking-process-grid">
            <div className="tracking-process-item">
              <span>01</span>
              <h3>Audit</h3>
              <p>
                Verificăm ce există deja și identificăm problemele de
                implementare.
              </p>
            </div>

            <div className="tracking-process-item">
              <span>02</span>
              <h3>Plan</h3>
              <p>
                Stabilim ce acțiuni trebuie măsurate și unde trebuie trimise
                datele.
              </p>
            </div>

            <div className="tracking-process-item">
              <span>03</span>
              <h3>Implementare</h3>
              <p>
                Configurăm tagurile, evenimentele, trigger-ele și conversiile.
              </p>
            </div>

            <div className="tracking-process-item">
              <span>04</span>
              <h3>Testare</h3>
              <p>
                Verificăm dacă acțiunile reale generează evenimentele corecte.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tracking-business-section section-padding">
        <div className="container">
          <div className="tracking-section-heading compact">
            <span className="section-kicker">PENTRU CE TIPURI DE BUSINESS</span>
            <h2>Tracking adaptat modelului tău de vânzare.</h2>
          </div>

          <div className="tracking-business-grid">
            <article>
              <Globe2 size={21} />
              <h3>Firme de servicii</h3>
              <p>
                Formulare, apeluri, cereri de ofertă și alte lead-uri.
              </p>
            </article>

            <article>
              <ShoppingBag size={21} />
              <h3>Magazine online</h3>
              <p>
                Produse, coș, checkout, achiziții și valoarea comenzilor.
              </p>
            </article>

            <article>
              <Target size={21} />
              <h3>Campanii Ads</h3>
              <p>
                Conversii utilizabile pentru analiza campaniilor de promovare.
              </p>
            </article>

            <article>
              <Smartphone size={21} />
              <h3>Site-uri responsive</h3>
              <p>
                Verificarea comportamentului pe desktop și dispozitive mobile.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="tracking-faq-section section-padding">
        <div className="container">
          <div className="tracking-section-heading compact">
            <span className="section-kicker">ÎNTREBĂRI FRECVENTE</span>
            <h2>Întrebări despre tracking conversii.</h2>
          </div>

          <div className="tracking-faq-grid">
            <details>
              <summary>De ce am nevoie de Google Tag Manager?</summary>
              <p>
                GTM permite gestionarea mai organizată a tagurilor și
                evenimentelor fără să modifici de fiecare dată direct codul
                site-ului.
              </p>
            </details>

            <details>
              <summary>GA4 este suficient pentru tracking?</summary>
              <p>
                GA4 este important pentru analiză, dar structura completă poate
                include GTM și platformele de advertising, în funcție de ce
                dorești să măsori.
              </p>
            </details>

            <details>
              <summary>Se pot măsura apelurile?</summary>
              <p>
                Da. Un click pe un link de tip tel poate fi urmărit ca
                eveniment și, în funcție de configurație, folosit ca acțiune
                de conversie.
              </p>
            </details>

            <details>
              <summary>Se poate verifica un tracking existent?</summary>
              <p>
                Da. Putem analiza configurația existentă și identifica
                evenimente lipsă, trigger-e incorecte sau conversii duplicate.
              </p>
            </details>

            <details>
              <summary>Faceți tracking pentru magazine online?</summary>
              <p>
                Da. Putem configura măsurarea evenimentelor ecommerce în
                funcție de platformă și de structura magazinului.
              </p>
            </details>

            <details>
              <summary>Trackingul înlocuiește Google Analytics?</summary>
              <p>
                Nu. Trackingul reprezintă implementarea și colectarea
                evenimentelor, iar GA4 este una dintre platformele în care
                aceste date pot fi analizate.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section id="contact" className="tracking-contact-section section-padding">
        <div className="container">
          <div className="tracking-contact-grid">
            <div className="tracking-contact-copy">
              <span className="section-kicker">CONTACT</span>

              <h2>
                Ai trafic, reclame sau un magazin online, dar nu știi exact ce
                convertește?
              </h2>

              <p>
                Putem verifica structura existentă sau putem construi un
                tracking nou pentru site-ul tău.
              </p>

              <a href="tel:+40740231358" className="tracking-phone-link">
                <Phone size={19} />
                0740 231 358
              </a>
            </div>

            <div className="tracking-contact-form-wrap">
              <ContactForm />

              <aside className="company-details" aria-label="Datele firmei">
                <div className="company-details-header">
                  <div className="company-details-icon">
                    <Globe2 size={18} />
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
          </div>
        </div>
      </section>
    </main>
  );
}
