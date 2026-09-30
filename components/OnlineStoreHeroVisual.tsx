import { ArrowRight, Check, ShoppingCart } from 'lucide-react';

export default function OnlineStoreHeroVisual() {
  return (
    <div className="store-hero-visual" aria-hidden="true">
      <div className="store-visual-glow" />

      <div className="store-browser">
        <div className="store-browser-top">
          <span />
          <span />
          <span />

          <div className="store-browser-url">
            magazinul-tau.ro
          </div>
        </div>

        <div className="store-screen">
          <div className="store-header">
            <div className="store-brand">
              BRAND
              <small>ONLINE STORE</small>
            </div>

            <div className="store-nav">
              <span>Produse</span>
              <span>Categorii</span>
              <span>Contact</span>
            </div>

            <ShoppingCart size={17} />
          </div>

          <div className="store-hero-area">
            <div>
              <small>MAGAZIN ONLINE</small>

              <h3>
                Produsele tale,
                <br />
                într-un singur loc.
              </h3>

              <p>
                Catalog, coș, checkout și promovare pregătite pentru vânzare.
              </p>

              <div className="store-button">
                Vezi produsele
                <ArrowRight size={13} />
              </div>
            </div>

            <div className="store-product">
              <div className="store-product-image">
                <div />
              </div>

              <div className="store-product-info">
                <strong>Produs premium</strong>
                <span>499 lei</span>
              </div>
            </div>
          </div>

          <div className="store-feature-row">
            <div>
              <Check size={13} />
              Responsive
            </div>

            <div>
              <Check size={13} />
              Checkout
            </div>

            <div>
              <Check size={13} />
              Tracking
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
            BRAND
          </div>

          <div className="store-phone-product">
            <div />
          </div>

          <strong>Produs premium</strong>
          <span>499 lei</span>

          <button type="button">
            Adaugă în coș
          </button>
        </div>
      </div>
    </div>
  );
}
