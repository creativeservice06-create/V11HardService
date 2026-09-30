import { Search, Phone, MousePointerClick } from 'lucide-react';

function GoogleLogo() {
  return (
    <img
      src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
      alt="Google"
      className="google-ads-logo"
    />
  );
}

export default function GoogleAdsHeroVisual() {
  return (
    <div className="google-ads-hero-visual" aria-hidden="true">
      <div className="google-ads-visual-glow" />

      <div className="google-ads-browser">
        <div className="google-ads-browser-top">
          <span />
          <span />
          <span />
        </div>

        <div className="google-ads-browser-content">
          <div className="google-ads-brand-row">
            <GoogleLogo />
            <span>Google Search</span>
          </div>

          <div className="google-ads-search">
            <Search size={18} />
            <span>serviciu marketing online</span>
          </div>

          <div className="google-ads-result">
            <div className="google-ads-sponsored">Sponsorizat</div>

            <div className="google-ads-result-url">
              hardservicesrl.ro
            </div>

            <h3>
              Promovare online pentru firme
            </h3>

            <p>
              Google Ads, Meta Ads, TikTok Ads, website și tracking
              într-un singur sistem.
            </p>

            <div className="google-ads-result-link">
              Aflați mai multe
              <MousePointerClick size={14} />
            </div>
          </div>

          <div className="google-ads-result secondary">
            <div className="google-ads-result-url">
              hardservicesrl.ro/google-ads/
            </div>

            <h3>
              Administrare Google Ads
            </h3>

            <p>
              Campanii Search, optimizare, tracking conversii și
              pagini de destinație.
            </p>
          </div>
        </div>
      </div>

      <div className="google-ads-floating-card google-ads-call-card">
        <Phone size={17} />
        <div>
          <small>CONVERSIE</small>
          <strong>Apel / Lead</strong>
        </div>
      </div>

      <div className="google-ads-floating-card google-ads-search-card">
        <Search size={16} />
        <div>
          <small>INTENȚIE</small>
          <strong>Căutare relevantă</strong>
        </div>
      </div>
    </div>
  );
}
