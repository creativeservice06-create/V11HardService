'use client';

import { useEffect, useRef } from 'react';

const COOKIE_POLICY_SRC =
  'https://cdn-cookieyes.com/client_data/87acb7d68fe0fd46ac63355ae803884b/cookie-policy/script.js';

export default function CookiePolicyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const loadPolicy = () => {
      // Ștergem o eventuală instanță veche
      const oldScript = document.getElementById('cky-cookie-policy');

      if (oldScript) {
        oldScript.remove();
      }

      // Curățăm conținutul vechi
      container.innerHTML = '';

      // Încărcăm din nou scriptul CookieYes
      const script = document.createElement('script');

      script.id = 'cky-cookie-policy';
      script.type = 'text/javascript';
      script.src = COOKIE_POLICY_SRC;
      script.async = true;

      container.appendChild(script);
    };

    // Lăsăm CookieYes/GTM să se inițializeze
    const timer = window.setTimeout(loadPolicy, 500);

    return () => {
      window.clearTimeout(timer);

      const script = document.getElementById('cky-cookie-policy');

      if (script) {
        script.remove();
      }
    };
  }, []);

  return <div ref={containerRef} />;
}
