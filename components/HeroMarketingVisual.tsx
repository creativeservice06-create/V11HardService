'use client';

import { useEffect, useState } from 'react';
import { Laptop, Phone, Search, ShoppingBag } from 'lucide-react';

const platforms = [
  { key: 'google', label: 'Google Ads', icon: 'https://cdn.simpleicons.org/googleads', className: 'google' },
  { key: 'meta', label: 'Meta Ads', icon: 'https://cdn.simpleicons.org/meta/0866FF', className: 'meta' },
  { key: 'instagram', label: 'Instagram', icon: 'https://cdn.simpleicons.org/instagram/E4405F', className: 'instagram' },
  { key: 'tiktok', label: 'TikTok Ads', icon: 'https://cdn.simpleicons.org/tiktok/ffffff', className: 'tiktok' },
];

const intents = [
  { query: 'instalator bucurești', type: 'Serviciu local', result: 'Intervenție rapidă 24/7' },
  { query: 'curs permis barcă', type: 'Lead generation', result: 'Înscriere directă online' },
  { query: 'ignifugare lemn', type: 'Serviciu B2B', result: 'Firmă specializată + ofertă' },
  { query: 'laptop pentru business', type: 'E-commerce', result: 'Produse relevante + comandă' },
];

function GoogleLogo() {
  return (
    <img
      className="google-official-logo compact"
      src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
      alt=""
    />
  );
}

export default function HeroMarketingVisual() {
  const [platform, setPlatform] = useState(0);
  const [intent, setIntent] = useState(0);

  useEffect(() => {
    const platformTimer = window.setInterval(() => setPlatform(value => (value + 1) % platforms.length), 2500);
    const intentTimer = window.setInterval(() => setIntent(value => (value + 1) % intents.length), 3200);
    return () => {
      window.clearInterval(platformTimer);
      window.clearInterval(intentTimer);
    };
  }, []);

  const currentPlatform = platforms[platform];
  const currentIntent = intents[intent];

  return (
    <div className="hero-device-stage hero-v5-stage hero-v6-stage hero-v7-stage hero-v9-stage" aria-hidden="true">
      <div className="hero-light-cone" />
      <div className="hero-orbit orbit-one" />
      <div className="hero-orbit orbit-two" />

      <div className="platform-cloud-v9" aria-label="Canale de promovare">
        {platforms.map((item, index) => (
          <div key={item.key} className={`platform-chip-v9 p9-${index} ${currentPlatform.key === item.key ? 'active' : ''}`}>
            <img src={item.icon} alt="" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="pro-phone pro-phone-v4 pro-phone-v5 pro-phone-v6 pro-phone-v7 pro-phone-v9">
        <div className="phone-side side-left"/><div className="phone-side side-right"/>
        <div className="pro-phone-screen">
          <div className="dynamic-island"/>
          <div className={`ads-app-head mode-${currentPlatform.className}`}>
            <img className="head-platform-logo" src={currentPlatform.icon} alt="" />
            <div><b>{currentPlatform.label}</b><small>Campaign manager</small></div>
            <span className="status-online">Active</span>
          </div>
          <div className="account-balance premium-dashboard">
            <small>Obiectiv campanie</small>
            <strong>{platform === 0 ? 'Search · Leads' : platform < 3 ? 'Leads · Sales' : 'Traffic · Conversions'}</strong>
            <div className="dashboard-bars"><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>
          </div>
          <div className="ui-kpis"><div><small>Tracking</small><b>Connected</b></div><div><small>Conversii</small><b>Measured</b></div></div>
          <div className="campaign-list">
            <div><span className="dot blue"/>Audiență / intenție <b>ON</b></div>
            <div><span className="dot green"/>Apeluri & lead-uri <b>ON</b></div>
            <div><span className="dot violet"/>Remarketing <b>ON</b></div>
          </div>
        </div>
      </div>

      <div className="hero-search-v7 hero-search-v9 glass-card" key={`intent-${intent}`}>
        <div className="hero-search-v7-head"><GoogleLogo/><span>{currentIntent.type}</span></div>
        <div className="hero-search-v7-field"><Search size={15}/><b>{currentIntent.query}</b></div>
        <small>Clientul caută exact ceea ce oferi</small>
        <strong>{currentIntent.result}</strong>
        <div className="hero-search-v7-dots">{intents.map((_, i) => <i key={i} className={i === intent ? 'active' : ''}/>)}</div>
      </div>

      <div className="hero-ecommerce-v9">
        <div className="hero-ecommerce-icon-v9"><Laptop size={21}/></div>
        <div className="hero-ecommerce-copy-v9">
          <small>MAGAZINE ONLINE</small>
          <b>Shopping & Sales</b>
          <span><ShoppingBag size={10}/> produs → magazin → comandă</span>
        </div>
      </div>

      <div className="hero-call-v7 hero-call-v9"><Phone size={15}/><span>apel / lead</span><i/></div>
    </div>
  );
}
