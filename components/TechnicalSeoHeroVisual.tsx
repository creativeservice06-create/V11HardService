import {
  ArrowRight,
  Check,
  FileCode2,
  Globe2,
  Search,
} from 'lucide-react';

export default function TechnicalSeoHeroVisual() {
  return (
    <div className="store-hero-visual" aria-hidden="true">
      <div className="store-visual-glow" />

      <div className="store-browser">
        <div className="store-browser-top">
          <span />
          <span />
          <span />

          <div className="store-browser-url">
            site.ro / seo tehnic
          </div>
        </div>

        <div className="store-screen">
          <div className="store-header">
            <div className="store-brand">
              SEO
              <small>TECHNICAL SEO</small>
            </div>

            <div className="store-nav">
              <span>Indexare</span>
              <span>Crawl</span>
              <span>Performance</span>
            </div>

            <Search size={17} />
          </div>

          <div className="store-hero-area">
            <div>
              <small>SEO TEHNIC</small>

              <h3>
                Un site ușor
                <br />
                de înțeles pentru Google.
              </h3>

              <p>
                Indexare, sitemap, canonicals, redirectări, structură și
                performanță.
              </p>

              <div className="store-button">
                Audit tehnic
                <ArrowRight size={13} />
              </div>
            </div>

            <div className="store-product">
              <div className="store-product-image">
                <div
                  style={{
                    width: 120,
                    height: 92,
                    display: 'grid',
                    placeItems: 'center',
                    borderRadius: 14,
                    background:
                      'linear-gradient(145deg,#14202b,#081019)',
                    border: '1px solid rgba(255,255,255,.12)',
                  }}
                >
                  <div
                    style={{
                      width: 73,
                      height: 58,
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        left: 7,
                        top: 5,
                        width: 58,
                        height: 44,
                        border: '1px solid rgba(255,255,255,.18)',
                        borderRadius: 8,
                      }}
                    />

                    <div
                      style={{
                        position: 'absolute',
                        left: 16,
                        bottom: 8,
                        width: 8,
                        height: 17,
                        borderRadius: 4,
                        background: 'rgba(255,255,255,.38)',
                      }}
                    />

                    <div
                      style={{
                        position: 'absolute',
                        left: 29,
                        bottom: 8,
                        width: 8,
                        height: 27,
                        borderRadius: 4,
                        background: 'rgba(255,255,255,.56)',
                      }}
                    />

                    <div
                      style={{
                        position: 'absolute',
                        left: 42,
                        bottom: 8,
                        width: 8,
                        height: 36,
                        borderRadius: 4,
                        background: 'rgba(255,255,255,.78)',
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="store-product-info">
                <strong>Site optimizat</strong>
                <span>Technical SEO</span>
              </div>
            </div>
          </div>

          <div className="store-feature-row">
            <div>
              <Check size={13} />
              Indexare
            </div>

            <div>
              <Check size={13} />
              Sitemap
            </div>

            <div>
              <Check size={13} />
              Performance
            </div>
          </div>
        </div>
      </div>

      <div className="store-phone">
        <div className="store-phone-top">
          <span />
        </div>

        <div className="store-phone-screen">
          <div className="store-phone-brand">
            SEO
          </div>

          <div
            className="store-phone-product"
            style={{
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <div
              style={{
                width: 46,
                height: 46,
                display: 'grid',
                placeItems: 'center',
                borderRadius: 12,
                background: 'rgba(255,255,255,.06)',
                border: '1px solid rgba(255,255,255,.12)',
              }}
            >
              <FileCode2 size={21} />
            </div>
          </div>

          <strong>robots.txt</strong>
          <span>sitemap.xml</span>

          <button type="button">
            <Globe2 size={12} />
            Verificat
          </button>
        </div>
      </div>
    </div>
  );
}
