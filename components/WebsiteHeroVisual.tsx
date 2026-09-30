import { ArrowRight, Check, Menu, Phone } from 'lucide-react';

export default function WebsiteHeroVisual() {
  return (
    <div className="website-hero-visual" aria-hidden="true">
      <div className="website-visual-glow" />

      <div className="website-browser">
        <div className="website-browser-top">
          <span />
          <span />
          <span />

          <div className="website-browser-url">
            hardservicesrl.ro
          </div>
        </div>

        <div className="website-browser-screen">
          <div className="website-mini-header">
            <div className="website-mini-brand">
              HARD SERVICE
              <small>MARKETING</small>
            </div>

            <div className="website-mini-nav">
              <span>Servicii</span>
              <span>Proiecte</span>
              <span>Contact</span>
            </div>
          </div>

          <div className="website-mini-hero">
            <div>
              <small>WEBSITE · LANDING PAGE</small>

              <h3>
                Un site construit
                <br />
                pentru afacerea ta.
              </h3>

              <p>
                Clar, rapid, responsive și pregătit pentru promovare.
              </p>

              <div className="website-mini-button">
                Vezi serviciile
                <ArrowRight size={13} />
              </div>
            </div>
          </div>

          <div className="website-mini-sections">
            <div>
              <Check size={13} />
              Responsive
            </div>

            <div>
              <Check size={13} />
              SEO tehnic
            </div>

            <div>
              <Check size={13} />
              Tracking
            </div>
          </div>
        </div>
      </div>

      <div className="website-phone">
        <div className="website-phone-top">
          <span />
        </div>

        <div className="website-phone-screen">
          <div className="website-phone-brand">
            HARD SERVICE
          </div>

          <div className="website-phone-title">
            Site-ul tău,
            <br />
            pe mobil.
          </div>

          <div className="website-phone-line" />

          <div className="website-phone-button">
            <Phone size={13} />
            Contact
          </div>

          <div className="website-phone-menu">
            <Menu size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
