import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Politica de cookie-uri | Hard Service",
  description: "Politica de cookie-uri a site-ului Hard Service.",
};

const cookiePolicyHtml = `
<style>
  a.cky-banner-element {
    padding: 8px 30px;
    background: #f8f9fa;
    color: #858a8f;
    border: 1px solid #dee2e6;
    box-sizing: border-box;
    border-radius: 2px;
    cursor: pointer;
    display: inline-block;
    margin-top: 10px;
  }

  .cookie-policy-content h1 {
    font-size: 38px;
    margin-bottom: 20px;
  }

  .cookie-policy-content h2 {
    font-size: 26px;
    margin-top: 35px;
    margin-bottom: 15px;
  }

  .cookie-policy-content p {
    line-height: 1.7;
    margin-bottom: 14px;
  }

  .cookie-policy-content a {
    word-break: break-word;
  }

  @media (max-width: 700px) {
    .cookie-policy-content h1 {
      font-size: 30px;
    }

    .cookie-policy-content h2 {
      font-size: 22px;
    }
  }
</style>

<h1 class="cookie-policy-h1">
  Politica de cookie-uri
</h1>

<div class="cookie-policy-date-container">
  <p>Data intrării în vigoare: 10 septembrie 2026</p>
  <p>Ultima actualizare: 10 septembrie 2026</p>
</div>

<h2>Ce sunt cookie-urile?</h2>

<div class="cookie-policy-p">
  <p>
    Această Politică privind cookie-urile explică ce sunt cookie-urile,
    cum le folosim, tipurile de cookie-uri pe care le folosim,
    informațiile pe care le colectăm folosind cookie-uri și modul
    în care sunt utilizate aceste informații, precum și modul în care
    puteți gestiona setările cookie-urilor.
  </p>

  <p>
    Cookie-urile sunt fișiere text mici utilizate pentru a stoca mici
    fragmente de informații. Acestea sunt stocate pe dispozitivul dvs.
    atunci când un site web se încarcă în browser. Aceste cookie-uri
    ajută la funcționarea corectă a site-ului, sporesc securitatea,
    oferă o experiență mai bună utilizatorilor și permit analizarea
    performanței site-ului.
  </p>
</div>

<h2>Cum folosim cookie-urile?</h2>

<div class="cookie-policy-p">
  <p>
    Ca majoritatea serviciilor online, site-ul nostru utilizează atât
    cookie-uri proprii, cât și cookie-uri terțe în diverse scopuri.
    Cookie-urile strict necesare sunt utilizate pentru funcționarea
    corectă și sigură a site-ului.
  </p>

  <p>
    Cookie-urile terțe ne pot ajuta să înțelegem modul în care este
    utilizat site-ul, să măsurăm performanța campaniilor publicitare,
    să menținem serviciile în siguranță și să îmbunătățim experiența
    utilizatorilor.
  </p>

  <p>
    Cookie-urile pentru analiză și publicitate sunt utilizate în
    conformitate cu preferințele de consimțământ ale utilizatorului.
  </p>
</div>

<h2>Tipuri de cookie-uri pe care le folosim</h2>

<div class="cky-audit-table-element"></div>

<h2>Gestionați preferințele privind cookie-urile</h2>

<a class="cky-banner-element">
  Preferințe cookie
</a>

<br /><br />

<div>
  <p>
    Puteți modifica setările cookie-urilor oricând făcând clic pe
    butonul „Preferințe cookie” de mai sus. Acest lucru vă permite să
    redeschideți panoul de consimțământ CookieYes și să vă modificați
    preferințele sau să vă retrageți consimțământul.
  </p>

  <p>
    De asemenea, browserele oferă posibilitatea de a bloca sau șterge
    cookie-urile din setările proprii.
  </p>

  <p>
    Chrome:
    <a
      href="https://support.google.com/accounts/answer/32050"
      target="_blank"
      rel="noopener noreferrer"
    >
      Gestionarea cookie-urilor în Chrome
    </a>
  </p>

  <p>
    Safari:
    <a
      href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
      target="_blank"
      rel="noopener noreferrer"
    >
      Gestionarea cookie-urilor în Safari
    </a>
  </p>

  <p>
    Firefox:
    <a
      href="https://support.mozilla.org/kb/clear-cookies-and-site-data-firefox"
      target="_blank"
      rel="noopener noreferrer"
    >
      Gestionarea cookie-urilor în Firefox
    </a>
  </p>

  <p>
    Dacă utilizați un alt browser, consultați documentația oficială
    a browserului respectiv.
  </p>
</div>
`;

export default function PoliticaCookieUri() {
  return (
    <main>
      <SiteHeader />

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "130px 20px 80px",
          minHeight: "80vh",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            color: "#151515",
            borderRadius: "18px",
            padding: "clamp(24px, 5vw, 50px)",
          }}
        >
          <div
            className="cookie-policy-content"
            dangerouslySetInnerHTML={{
              __html: cookiePolicyHtml,
            }}
          />
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
            margin: "10px 0 16px",
            fontSize: "12px",
            opacity: 0.7,
          }}
        >
          <a href="/politica-confidentialitate">
            Politică de confidențialitate
          </a>

          <span>·</span>

          <a href="/politica-cookie-uri">
            Politică de cookie-uri
          </a>
        </div>

        <a href="tel:+40740231358">
          0740 231 358
        </a>
      </footer>
    </main>
  );
}
