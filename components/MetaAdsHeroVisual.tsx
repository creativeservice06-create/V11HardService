import { ArrowUpRight, Heart, MessageCircle, Send } from 'lucide-react';

const META_LOGO =
  'https://cdn.simpleicons.org/meta/0467DF';

const FACEBOOK_LOGO =
  'https://cdn.simpleicons.org/facebook/1877F2';

const INSTAGRAM_LOGO =
  'https://cdn.simpleicons.org/instagram/E4405F';

export default function MetaAdsHeroVisual() {
  return (
    <div className="meta-ads-hero-visual" aria-hidden="true">
      <div className="meta-ads-visual-glow" />

      <div className="meta-ads-campaign">
        <div className="meta-ads-window-top">
          <span />
          <span />
          <span />
        </div>

        <div className="meta-ads-campaign-body">
          <div className="meta-ads-platform-row">
            <div className="meta-ads-meta-brand">
              <img src={META_LOGO} alt="Meta" />
              <strong>Meta Ads</strong>
            </div>

            <div className="meta-ads-platforms">
              <span>
                <img src={FACEBOOK_LOGO} alt="Facebook" />
                Facebook
              </span>

              <span>
                <img src={INSTAGRAM_LOGO} alt="Instagram" />
                Instagram
              </span>
            </div>
          </div>

          <div className="meta-ads-post">
            <div className="meta-ads-post-head">
              <div className="meta-ads-avatar">
                HS
              </div>

              <div>
                <strong>HARD SERVICE</strong>
                <small>Sponsored</small>
              </div>

              <ArrowUpRight size={16} />
            </div>

            <div className="meta-ads-post-visual">
              <div className="meta-ads-post-visual-inner">
                <span>HARD SERVICE</span>
                <strong>
                  Promovare online
                  <br />
                  pentru firme
                </strong>
                <small>
                  Facebook Ads · Instagram Ads · Tracking
                </small>
              </div>
            </div>

            <div className="meta-ads-post-copy">
              <strong>
                Campanii Meta Ads construite pentru obiective reale.
              </strong>

              <p>
                Ajungem la oamenii potriviți și măsurăm acțiunile care contează.
              </p>
            </div>

            <div className="meta-ads-post-actions">
              <span>
                <Heart size={15} />
              </span>

              <span>
                <MessageCircle size={15} />
              </span>

              <span>
                <Send size={15} />
              </span>

              <button type="button">
                Află mai multe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="meta-ads-floating-card meta-ads-platform-card">
        <div className="meta-ads-floating-logos">
          <img src={FACEBOOK_LOGO} alt="Facebook" />
          <img src={INSTAGRAM_LOGO} alt="Instagram" />
        </div>

        <div>
          <small>PLATFORME</small>
          <strong>Facebook + Instagram</strong>
        </div>
      </div>

      <div className="meta-ads-floating-card meta-ads-conversion-card">
        <div className="meta-ads-floating-icon">
          <Send size={16} />
        </div>

        <div>
          <small>OBIECTIV</small>
          <strong>Lead / Vânzare</strong>
        </div>
      </div>
    </div>
  );
}
