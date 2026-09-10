import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de confidențialitate | Hard Service",
  description:
    "Politica de confidențialitate și protecția datelor cu caracter personal pentru website-ul Hard Service.",
};

export default function PoliticaConfidentialitate() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#080b10",
        color: "#ffffff",
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

        <h1 style={{ marginBottom: "30px" }}>
          Politica de confidențialitate
        </h1>

        <div id="privacy-policy-content">
          Politica de confidențialitate se încarcă aici.
        </div>
      </div>
    </main>
  );
}
