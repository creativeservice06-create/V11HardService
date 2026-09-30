import {
  BarChart3,
  Check,
  Code2,
  MousePointerClick,
  Target,
} from 'lucide-react';

export default function TrackingHeroVisual() {
  return (
    <div className="tracking-hero-visual" aria-hidden="true">
      <div className="tracking-visual-glow" />

      <div className="tracking-browser">
        <div className="tracking-browser-top">
          <span />
          <span />
          <span />
          <div className="tracking-browser-url">siteul-tau.ro</div>
        </div>

        <div className="tracking-screen">
          <div className="tracking-screen-header">
            <div>
              <small>CONVERSII</small>
              <strong>Tracking activ</strong>
            </div>

            <div className="tracking-status">
              <span />
              Live
            </div>
          </div>

          <div className="tracking-chart-area">
            <div className="tracking-chart-label">
              <span>Acțiuni măsurate</span>
              <strong>Lead-uri și evenimente</strong>
            </div>

            <div className="tracking-chart">
              <div className="tracking-chart-line line-1" />
              <div className="tracking-chart-line line-2" />
              <div className="tracking-chart-line line-3" />
              <div className="tracking-chart-line line-4" />

              <div className="tracking-chart-path">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          <div className="tracking-events">
            <div className="tracking-event-item">
              <div className="tracking-event-icon">
                <MousePointerClick size={15} />
              </div>
              <div>
                <strong>generate_lead</strong>
                <span>Formular trimis</span>
              </div>
              <Check size={16} />
            </div>

            <div className="tracking-event-item">
              <div className="tracking-event-icon">
                <Target size={15} />
              </div>
              <div>
                <strong>phone_call</strong>
                <span>Click pe telefon</span>
              </div>
              <Check size={16} />
            </div>
          </div>
        </div>
      </div>

      <div className="tracking-stack-card">
        <div className="tracking-stack-icon">
          <BarChart3 size={18} />
        </div>

        <div>
          <strong>GA4 + GTM</strong>
          <span>Măsurare centralizată</span>
        </div>
      </div>

      <div className="tracking-code-card">
        <div className="tracking-code-top">
          <Code2 size={15} />
          <span>EVENT</span>
        </div>

        <code>generate_lead</code>

        <div className="tracking-code-check">
          <Check size={13} />
          Verificat
        </div>
      </div>
    </div>
  );
}
