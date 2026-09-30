import {
  ArrowRight,
  BarChart3,
  Check,
  Code2,
  MousePointerClick,
} from 'lucide-react';

export default function TrackingHeroVisual() {
  return (
    <div className="store-hero-visual" aria-hidden="true">
      <div className="store-visual-glow" />

      <div className="store-browser">
        <div className="store-browser-top">
          <span />
          <span />
          <span />

          <div className="store-browser-url">
            analytics.hardservice.ro
          </div>
        </div>

        <div className="store-screen">
          <div className="store-header">
            <div className="store-brand">
              TRACKING
              <small>CONVERSIONS</small>
            </div>

            <div className="store-nav">
              <span>GA4</span>
              <span>GTM</span>
              <span>Google Ads</span>
            </div>

            <BarChart3 size={17} />
          </div>

          <div className="store-hero-area">
            <div>
              <small>TRACKING CONVERSII</small>

              <h3>
                Măsoară ce contează
                <br />
                pentru business.
              </h3>

              <p>
                Formulare, apeluri, lead-uri, achiziții și evenimente
                importante din site.
              </p>

              <div className="store-button">
                Eveniment verificat
                <Check size={13} />
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
                      'linear-gradient(145deg,#102b42,#07121e)',
                    border: '1px solid #214a69',
                  }}
                >
                  <div
                    style={{
                      width: 72,
                      height: 50,
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        bottom: 2,
                        width: 8,
                        height: 23,
                        borderRadius: 4,
                        background: '#3da9ff',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: 17,
                        bottom: 2,
                        width: 8,
                        height: 34,
                        borderRadius: 4,
                        background: '#55bbff',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: 34,
                        bottom: 2,
                        width: 8,
                        height: 29,
                        borderRadius: 4,
                        background: '#2b92ef',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: 51,
                        bottom: 2,
                        width: 8,
                        height: 43,
                        borderRadius: 4,
                        background: '#65c7ff',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        left: 68,
                        bottom: 2,
                        width: 8,
                        height: 48,
                        borderRadius: 4,
                        background: '#8bd8ff',
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="store-product-info">
                <strong>Conversii măsurate</strong>
                <span>GA4</span>
              </div>
            </div>
          </div>

          <div className="store-feature-row">
            <div>
              <Check size={13} />
              GA4
            </div>

            <div>
              <Check size={13} />
              GTM
            </div>

            <div>
              <Check size={13} />
              Ads
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
            TRACKING
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
                background: '#0b2033',
                border: '1px solid #214d70',
                color: '#58bfff',
              }}
            >
              <MousePointerClick size={22} />
            </div>
          </div>

          <strong>generate_lead</strong>
          <span>Conversie</span>

          <button type="button">
            <Code2 size={12} />
            GTM verificat
          </button>
        </div>
      </div>
    </div>
  );
}
