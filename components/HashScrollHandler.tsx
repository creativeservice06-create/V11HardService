'use client';

import { useEffect } from 'react';

export default function HashScrollHandler() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;

      if (!hash) return;

      const id = decodeURIComponent(hash.substring(1));
      const element = document.getElementById(id);

      if (!element) return;

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

    // Prima încercare
    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToHash);
    });

    // Repetăm după ce elementele/animațiile desktop s-au stabilizat
    const timeout = window.setTimeout(scrollToHash, 500);

    return () => window.clearTimeout(timeout);
  }, []);

  return null;
}
