'use client';

import { useState } from 'react';
import { Menu, Phone, X, ChevronDown } from 'lucide-react';

const phoneHref = 'tel:+40740231358';

const links = [
  ['Cum funcționează', '/#cum-functioneaza'],
  ['Proiecte', '/#proiecte'],
  ['Prețuri', '/#preturi'],
  ['Contact', '/#contact'],
];

const serviceLinks = [
  ['Google Ads', '/google-ads/'],
  ['Facebook & Instagram Ads', '/facebook-instagram-ads/'],
  ['TikTok Ads', '/tiktok-ads/'],
  ['Creare site', '/creare-site/'],
  ['Magazin online', '/magazin-online/'],
  ['Tracking conversii', '/tracking-conversii/'],
  ['SEO tehnic', '/seo-tehnic/'],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenus = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className={`nav-shell nav-shell-v6 ${open ? 'menu-open' : ''}`}>

      {/* LOGO */}
      <a
        className="brand brand-v4 brand-v6"
        href="/"
        onClick={closeMenus}
      >
        <b>HARD SERVICE</b>
        <span>MARKETING</span>
      </a>

      {/* MENIU DESKTOP */}
      <nav className="desktop-nav" aria-label="Navigație principală">

        {/* SERVICII */}
        <div className="nav-services">

          <div className="nav-services-main">

            <a href="/#servicii">
              Servicii
            </a>

            <button
              type="button"
              className="nav-services-toggle"
              aria-label="Deschide meniul Servicii"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen(v => !v)}
            >
              <ChevronDown
                size={15}
                className={servicesOpen ? 'rotate' : ''}
              />
            </button>

          </div>

          {servicesOpen && (
            <div className="services-dropdown">

              {serviceLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenus}
                >
                  {label}
                </a>
              ))}

            </div>
          )}

        </div>

        {/* RESTUL MENIULUI */}
        {links.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}

      </nav>

      {/* TELEFON + BUTON MOBIL */}
      <div className="header-actions-v6">

        <a className="call-mini call-mini-v6" href={phoneHref}>
          <Phone size={16} />
          <span>0740 231 358</span>
        </a>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>

      </div>

      {/* MENIU MOBIL */}
      <div className="mobile-menu-v6">

        <nav aria-label="Navigație mobilă">

          {/* SERVICII MOBIL */}
          <div className="mobile-services">

            <div className="mobile-services-row">

              <a
                href="/#servicii"
                onClick={() => setOpen(false)}
              >
                Servicii
              </a>

              <button
                type="button"
                className="mobile-services-toggle"
                aria-label="Deschide serviciile"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen(v => !v)}
              >
                <ChevronDown
                  size={18}
                  className={servicesOpen ? 'rotate' : ''}
                />
              </button>

            </div>

            {servicesOpen && (
              <div className="mobile-services-dropdown">

                {serviceLinks.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={closeMenus}
                  >
                    {label}
                  </a>
                ))}

              </div>
            )}

          </div>

          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}

        </nav>

        <a
          className="mobile-menu-call-v6"
          href={phoneHref}
          onClick={closeMenus}
        >
          <Phone size={17} /> Sună 0740 231 358
        </a>

      </div>

    </header>
  );
}
