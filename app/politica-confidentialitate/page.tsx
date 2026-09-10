import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Politica de confidențialitate | Hard Service",
  description:
    "Politica de confidențialitate și protecția datelor cu caracter personal pentru Hard Service.",
};

export default function PoliticaConfidentialitate() {
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
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              marginTop: 0,
              marginBottom: "35px",
            }}
          >
            Politica de confidențialitate
          </h1>

          <script
            id="cky-privacy-policy"
            type="text/javascript"
            src="https://cdn-cookieyes.com/client_data/87acb7d68fe0fd46ac63355ae803884b/privacy-policy/script.js"
          ></script>
        </div>
      </section>

      <footer>
        <a className="brand brand-v4" href="/#top">
          <b>HARD SERVICE</b>
          <span>MARKETING</span>
        </a>

        <p>Google Ads · Meta Ads · TikTok Ads · Web · Tracking</p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "16px",
          }}
        >
          <a href="/politica-confidentialitate">
            Politică de confidențialitate
          </a>

          <a href="/politica-cookie-uri">
            Politică de cookie-uri
          </a>
        </div>

        <a href="tel:+40740231358">0740 231 358</a>
      </footer>
    </main>
  );
}
