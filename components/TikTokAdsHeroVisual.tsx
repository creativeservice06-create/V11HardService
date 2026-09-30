import { ArrowUpRight, Heart, MessageCircle, Send } from 'lucide-react';

const TIKTOK_LOGO =
  'https://cdn.simpleicons.org/tiktok/ffffff';

export default function TikTokAdsHeroVisual() {
  return (
    <div className="tiktok-ads-hero-visual" aria-hidden="true">
      <div className="tiktok-ads-visual-glow" />

      <div className="tiktok-ads-device">
        <div className="tiktok-ads-device-top">
          <span />
          <span />
          <span />
        </div>

        <div className="tiktok-ads-screen">
          <div className="tiktok-ads-topbar">
            <img src={TIKTOK_LOGO} alt="TikTok" />
            <strong>TikTok Ads</strong>
            <ArrowUpRight size={15} />
          </div>

          <div className="tiktok-ads-video">
            <div className="tiktok-ads-video-content">
              <img
                className="tiktok-ads-logo"
                src={TIKTOK_LOGO}
                alt="TikTok"
              />

              <small>HARD SERVICE</small>

              <h3>
                Promovare online
                <br />
                pentru firme
              </h3>

              <p>
                TikTok Ads · Website · Tracking
              </p>

              <span className="tiktok-ads-video-button">
                Află mai multe
              </span>
            </div>
          </div>

          <div className="tiktok-ads-info">
            <div className="tiktok-ads-profile">
              <div>HS</div>

              <section>
                <strong>HARD SERVICE</strong>
                <small>Sponsored</small>
              </section>
            </div>

            <p>
              Campanii TikTok Ads construite pentru obiective reale.
            </p>
          </div>

          <div className="tiktok-ads-actions">
            <div>
              <Heart size={17} />
              <span>Like</span>
            </div>

            <div>
              <MessageCircle size={17} />
              <span>Comentarii</span>
            </div>

            <div>
              <Send size={17} />
              <span>Distribuie</span>
            </div>
          </div>
        </div>
      </div>

      <div className="tiktok-ads-floating-card tiktok-ads-platform-card">
        <img src={TIKTOK_LOGO} alt="TikTok" />

        <div>
          <small>PLATFORMĂ</small>
          <strong>TikTok Ads</strong>
        </div>
      </div>

      <div className="tiktok-ads-floating-card tiktok-ads-conversion-card">
        <div className="tiktok-ads-floating-dot" />

        <div>
          <small>OBIECTIV</small>
          <strong>Lead / Vânzare</strong>
        </div>
      </div>
    </div>
  );
}
