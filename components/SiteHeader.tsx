'use client';

import { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';

const phoneHref = 'tel:+40740231358';
const links = [
  ['Servicii', '#servicii'],
  ['Cum funcționează', '#cum-functioneaza'],
  ['Proiecte', '#proiecte'],
  ['Prețuri', '#preturi'],
  ['Contact', '#contact'],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`nav-shell nav-shell-v6 ${open ? 'menu-open' : ''}`}>
      <a className="brand brand-v4 brand-v6" href="#top" onClick={() => setOpen(false)}>
        <b>HARD SERVICE</b><span>MARKETING</span>
      </a>

      <nav className="desktop-nav" aria-label="Navigație principală">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>

      <div className="header-actions-v6">
        <a className="call-mini call-mini-v6" href={phoneHref}><Phone size={16}/><span>0740 231 358</span></a>
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          {open ? <X size={21}/> : <Menu size={21}/>} 
        </button>
      </div>

      <div className="mobile-menu-v6">
        <nav aria-label="Navigație mobilă">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
        <a className="mobile-menu-call-v6" href={phoneHref} onClick={() => setOpen(false)}><Phone size={17}/> Sună 0740 231 358</a>
      </div>
    </header>
  );
}
