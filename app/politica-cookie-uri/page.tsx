import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de cookie-uri | Hard Service",
  description: "Politica de cookie-uri a site-ului Hard Service.",
};

export default function PoliticaCookieUri() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#080b10",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          background: "#ffffff",
          color: "#151515",
          borderRadius: "18px",
          padding: "40px",
        }}
      >
        <a
          href="/"
          style={{
            display: "inline-block",
            marginBottom: "30px",
            color: "#555",
            textDecoration: "none",
          }}
        >
          ← Înapoi la Hard Service
        </a>

        <h1>Politica de cookie-uri</h1>

        <script
          id="cky-cookie-policy"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/87acb7d68fe0fd46ac63355ae803884b/cookie-policy/script.js"
        ></script>
      </div>
    </main>
  );
}
