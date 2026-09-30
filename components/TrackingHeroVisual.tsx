import {
  ArrowDown,
  BarChart3,
  Check,
  Code2,
  MousePointerClick,
} from 'lucide-react';

export default function TrackingHeroVisual() {
  return (
    <div className="tracking-hero-visual" aria-hidden="true">
      <div className="tracking-visual-glow" />

      <div className="tracking-main-card">
        <div className="tracking-card-top">
          <div className="tracking-dots">
            <span />
            <span />
            <span />
          </div>

          <div className="tracking-url">analytics / tracking</div>
        </div>

        <div className="tracking-card-body">
          <div className="tracking-card-heading">
            <div>
              <small>TRACKING CONVERSII</small>
              <h3>Măsurare corectă</h3>
            </div>

            <div className="tracking-live">
              <span />
              Activ
            </div>
          </div>

          <div className="tracking-flow-visual">
            <div className="tracking-flow-box">
              <MousePointerClick size={18} />
              <strong>Acțiune</strong>
              <span>Formular / Click</span>
            </div>

            <ArrowDown size={18} className="tracking-arrow" />

            <div className="tracking-flow-box">
              <Code2 size={18} />
              <strong>GTM</strong>
              <span>Eveniment</span>
            </div>

            <ArrowDown size={18} className="tracking-arrow" />

            <div className="tracking-flow-box tracking-flow-main">
              <BarChart3 size={18} />
              <strong>GA4</strong>
              <span>Conversie</span>
            </div>
          </div>

          <div className="tracking-check-row">
            <Check size={15} />
            <span>Eveniment configurat și verificat</span>
          </div>
        </div>
      </div>

      <div className="tracking-floating-card tracking-floating-left">
        <div className="tracking-floating-icon">
          <BarChart3 size={17} />
        </div>

        <div>
          <strong>GA4 + GTM</strong>
          <span>Tracking centralizat</span>
        </div>
      </div>

      <div className="tracking-floating-card tracking-floating-right">
        <div className="tracking-code-symbol">
          &lt;/&gt;
        </div>

        <div>
          <strong>Conversii</strong>
          <span>Lead · apel · vânzare</span>
        </div>
      </div>
    </div>
  );
}
