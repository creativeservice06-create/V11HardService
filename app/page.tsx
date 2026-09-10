import { ArrowRight, Check, Code2, Layers3, Megaphone, Phone, ShoppingCart, Sparkles, Target, Wrench } from 'lucide-react';
import MarketingJourney from '@/components/MarketingJourney';
import HeroMarketingVisual from '@/components/HeroMarketingVisual';
import ContactForm from '@/components/ContactForm';
import SiteHeader from '@/components/SiteHeader';
import HashScrollHandler from '@/components/HashScrollHandler';
import PolicyLink from '@/components/PolicyLink';

const phoneHref='tel:+40740231358';
const services=[
{icon:Target,title:'Google Ads',text:'Campanii pentru utilizatori care caută activ serviciile sau produsele tale și sunt aproape de decizia de cumpărare.',points:['Search, Performance Max, Display și YouTube','Structură de cuvinte cheie, anunțuri și extensii','Optimizare bugete, licitații și conversii','Tracking pentru apeluri, formulare și vânzări']},
{icon:Megaphone,title:'Meta Ads · Facebook & Instagram',text:'Campanii vizuale și de lead generation pe Facebook și Instagram, construite pentru audiența potrivită și pentru remarketing.',points:['Lead Ads, trafic, vânzări și remarketing','Audiențe personalizate și Lookalike','Testare de creative, texte și plasamente','Meta Pixel și măsurarea conversiilor']},
{icon:Sparkles,title:'TikTok Ads',text:'Promovare video pentru servicii și magazine care vor să ajungă la utilizatori prin conținut dinamic și campanii orientate spre acțiune.',points:['Campanii de trafic, lead-uri și conversii','Targetare, audiențe și optimizare','TikTok Pixel și evenimente','Integrare cu landing page sau magazin']},
{icon:Code2,title:'Website-uri & Landing Pages',text:'Construim sau optimizăm pagina pe care ajunge clientul, astfel încât reclama să continue într-o experiență clară și convingătoare.',points:['Site-uri responsive, rapide și moderne','Landing pages dedicate campaniilor','CTA-uri de apel și formulare eficiente','SEO tehnic și structură orientată spre conversie']},
{icon:ShoppingCart,title:'Magazine online',text:'Magazine online pregătite pentru promovare, tracking și vânzare, de la căutarea produsului până la comandă.',points:['Catalog, produse, coș și checkout','Tracking achiziții și valoarea comenzilor','Google Shopping / Performance Max','Integrare Meta și TikTok pentru remarketing']},
{icon:Wrench,title:'Tracking, mentenanță & automatizări',text:'Legăm toate componentele tehnice astfel încât să vezi sursa rezultatelor și să nu pierzi solicitările venite din campanii.',points:['GA4, GTM, Google Ads, Meta Pixel, TikTok Pixel','Conversii pentru apeluri, formulare și vânzări','Mentenanță, actualizări și securitate','Automatizări pentru lead-uri, email și fluxuri interne']},
];
const plans=[
{name:'START',price:'200 RON',cadence:'/ săptămână',subtitle:'Pentru afaceri la început de drum',features:['Administrare Google Ads / Facebook Ads','Setare structură campanie','Optimizare săptămânală','Raport lunar performanță']},
{name:'SILVER',price:'350 RON',cadence:'/ săptămână',subtitle:'Pentru firme care vor creștere controlată',featured:true,features:['Google Ads / Facebook Ads','Administrare și actualizare site','Tracking conversii','Optimizare landing page','Suport și mentenanță']},
{name:'PROFESIONAL',price:'400 RON',cadence:'/ săptămână',subtitle:'Pentru business-uri care vor scalare',features:['Google Ads + Facebook Ads','Modificări și optimizare site','Tracking avansat','Strategie lunară personalizată','Optimizare SEO','Suport telefonic']},
{name:'PERSONALIZAT',price:'Ofertă',cadence:'personalizată',subtitle:'Soluție completă, în funcție de obiective',features:['Creare site / magazin online','Strategie marketing completă','Google + Meta + TikTok Ads','Optimizare continuă','Audit online & recomandări','Suport extins']},
];
const projects=['somag.ro','permismoto.ro','carnetbarca.ro','serviciinonstop.ro','meddev.md','hardservicesrl.ro','instalatori-nonstop.ro','andhothot.com','andracoletarie.ro','zeroplagiat.ro','emailatcazibaie.ro','ignifugare.eu'];

export default function Home(){return <main>
  <HashScrollHandler />
<SiteHeader/>
<section className="hero hero-v4 hero-v5" id="top"><div className="hero-grid"/><div className="hero-glow"/><div className="hero-copy"><div className="eyebrow">PROMOVARE ONLINE · GOOGLE ADS · META · TIKTOK</div><h1>Promovare online care face afacerea ta <span>ușor de găsit</span> și de contactat.</h1><p>Administrare Google Ads, Facebook & Instagram Ads și TikTok Ads, conectate cu website-ul, magazinele online și tracking-ul conversiilor. De la căutarea clientului până la apel, formular sau vânzare.</p><div className="hero-actions"><a className="primary" href={phoneHref}><Phone size={18}/> 0740 231 358</a><a className="secondary" href="#contact">Solicită o ofertă <ArrowRight size={18}/></a></div><div className="hero-proof"><span><Check size={14}/> Strategie personalizată</span><span><Check size={14}/> Tracking real</span><span><Check size={14}/> Totul într-un singur loc</span></div></div><HeroMarketingVisual/></section>
<MarketingJourney/>
<section className="section measurement-section"><div className="section-head"><div><div className="eyebrow">MĂSURĂM CE CONTEAZĂ</div><h2>Tracking de conversii pentru campaniile care aduc clienți.</h2></div><p>Configurăm tracking-ul pentru acțiuni reale: apeluri, formulare, comenzi și sursa conversiei. Astfel bugetul poate fi optimizat pe rezultate, nu pe impresii.</p></div><div className="measurement-grid"><article><div className="measure-icon"><Phone/></div><small>CONTACT</small><h3>Apeluri</h3><p>Vedem când un utilizator venit din reclamă apasă butonul de apel și ce campanie l-a adus.</p><div className="signal-line"><span/><i/><i/><i/></div></article><article><div className="measure-icon"><Layers3/></div><small>LEAD</small><h3>Formulare</h3><p>Solicitările de ofertă sunt urmărite ca evenimente și pot fi folosite pentru optimizarea automată a campaniilor.</p><div className="signal-line"><span/><i/><i/><i/></div></article><article><div className="measure-icon"><ShoppingCart/></div><small>VÂNZARE</small><h3>Comenzi</h3><p>Pentru e-commerce urmărim produsul, coșul, checkout-ul, achiziția și valoarea conversiei.</p><div className="signal-line"><span/><i/><i/><i/></div></article></div></section>
<section className="section" id="servicii"><div className="section-head"><div><div className="eyebrow">SERVICII COMPLETE</div><h2>Servicii de promovare online, website și tracking într-un singur loc.</h2></div><p>Promovarea este doar o parte. Website-ul, tracking-ul, mentenanța și automatizările trebuie să funcționeze împreună.</p></div><div className="service-grid service-grid-v3">{services.map(({icon:Icon,title,text,points})=><article className="service-card service-card-v3" key={title}><div className="service-icon"><Icon/></div><h3>{title}</h3><p>{text}</p><ul>{points.map(p=><li key={p}><Check size={14}/>{p}</li>)}</ul></article>)}</div></section>
<section className="section ecosystem-section"><div className="ecosystem-card ecosystem-card-v6"><div><div className="eyebrow">AVANTAJUL HARD SERVICE</div><h2>Tot sistemul tău de promovare, într-un singur loc.</h2><p>Strategia, Google Ads, Meta, TikTok, website-ul, landing page-urile, magazinele online, tracking-ul, SEO-ul tehnic, mentenanța și automatizările sunt coordonate împreună. Nu mai ai nevoie de furnizori separați pentru fiecare etapă.</p><div className="ecosystem-tags ecosystem-tags-v6"><span>Google Search & Performance Max</span><span>Facebook & Instagram Ads</span><span>TikTok Ads</span><span>Website & Landing Pages</span><span>Magazine online & Merchant Center</span><span>GA4 & Google Tag Manager</span><span>Meta Pixel & TikTok Pixel</span><span>SEO tehnic</span><span>Mentenanță & securitate</span><span>Automatizări lead-uri</span></div><div className="ecosystem-mini-flow-v5"><span>Campanie</span><i>→</i><span>Website</span><i>→</i><span>Tracking</span><i>→</i><span>Lead / Vânzare</span></div><a className="primary" href="#contact">Discută proiectul tău <ArrowRight size={17}/></a></div><div className="ecosystem-visual-v6"><div className="ecosystem-orbit ecosystem-orbit-v6"><div className="core core-v6">HS<small>MARKETING</small></div>{['ADS','WEB','SHOP','TRACKING','SEO','AUTO'].map((x,i)=><span className={`eco e${i}`} key={x}>{x}</span>)}</div><div className="ecosystem-caption-v6"><b>UN SINGUR SISTEM</b><span>promovare · website · măsurare · suport</span></div></div></div></section>
<section className="section seo-focus-section" aria-labelledby="seo-focus-title"><div className="section-head"><div><div className="eyebrow">PENTRU TIPUL TĂU DE BUSINESS</div><h2 id="seo-focus-title">Promovare online pentru servicii locale, companii B2B și magazine online.</h2></div><p>Strategia diferă în funcție de intenția clientului. Alegem canalele, pagina de destinație și tracking-ul potrivit pentru modul în care oamenii caută și cumpără.</p></div><div className="seo-focus-grid"><article><small>SERVICII LOCALE</small><h3>Google Ads pentru cereri și apeluri.</h3><p>Campanii Search pentru căutări cu intenție ridicată, pagini locale clare și măsurarea apelurilor sau formularelor.</p></article><article><small>B2B & SERVICII</small><h3>Lead generation cu mesaj și targetare relevante.</h3><p>Google, Meta și TikTok conectate cu landing pages, formulare, remarketing și automatizări pentru solicitările primite.</p></article><article><small>E-COMMERCE</small><h3>Promovare produse și măsurarea vânzărilor.</h3><p>Google Shopping / Performance Max, Meta și TikTok cu tracking pentru produs, coș, checkout și valoarea comenzilor.</p></article></div></section>
<section className="section" id="proiecte"><div className="section-head"><div><div className="eyebrow">PROIECTE</div><h2>Experiență construită în proiecte reale.</h2></div><p>Website-uri și proiecte pentru care am lucrat pe zona de dezvoltare, promovare sau optimizare.</p></div><div className="project-marquee"><div>{[...projects,...projects].map((p,i)=><span key={`${p}-${i}`}>{p}</span>)}</div></div></section>
<section className="section" id="preturi"><div className="section-head"><div><div className="eyebrow">PREȚURI</div><h2>Pachete de administrare și promovare online.</h2></div><p>Tarife orientative. Costul final se stabilește în funcție de obiective, numărul campaniilor și volumul de lucru.</p></div><div className="pricing-grid">{plans.map(plan=><article className={`price-card ${plan.featured?'featured':''}`} key={plan.name}>{plan.featured&&<span className="recommended">RECOMANDAT</span>}<small>{plan.name}</small><h3>{plan.price} <span>{plan.cadence}</span></h3><p>{plan.subtitle}</p><ul>{plan.features.map(f=><li key={f}><Check size={14}/>{f}</li>)}</ul><a href="#contact" className={plan.featured?'primary':'secondary'}>Solicită ofertă</a></article>)}</div></section>
<section className="section contact-section" id="contact"><div className="contact-copy"><div className="eyebrow">HAI SĂ DISCUTĂM</div><h2>Cere o ofertă pentru promovarea afacerii tale online.</h2><p>Îți putem propune o structură clară pentru promovare, website și măsurarea rezultatelor. Completează formularul, iar solicitarea ajunge direct la noi.</p></div><div className="contact-form-column">
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
  <a className="brand brand-v4" href="#top">
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
</main>}
