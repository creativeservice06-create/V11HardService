'use client';

import type { ReactNode } from 'react';

type PolicyLinkProps = {
  href: string;
  children: ReactNode;
};

export default function PolicyLink({
  href,
  children,
}: PolicyLinkProps) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        window.location.assign(href);
      }}
    >
      {children}
    </a>
  );
}
