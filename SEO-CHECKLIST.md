# SEO checklist — Hard Service Marketing V7

## Implementat în proiect
- Un singur H1, orientat pe „promovare online”.
- Title principal: `Promovare Online: Google Ads, Meta & TikTok | Hard Service`.
- Meta description pentru Google Ads, Facebook/Instagram, TikTok, website, e-commerce și tracking.
- Canonical: `https://www.hardservicesrl.ro/`.
- `robots.ts` și `sitemap.ts` generate de Next.js.
- JSON-LD pentru Organization + WebSite + catalogul principal de servicii.
- Open Graph / Twitter metadata.
- `lang="ro"`, favicon, heading-uri H2/H3 și conținut vizibil pentru servicii locale, B2B și e-commerce.
- Redirect permanent de la hostul non-www la `www.hardservicesrl.ro` prin `next.config.mjs`.

## După publicare
1. Setează `www.hardservicesrl.ro` ca domeniu principal în Vercel.
2. Verifică `https://www.hardservicesrl.ro/robots.txt`.
3. Verifică `https://www.hardservicesrl.ro/sitemap.xml`.
4. Adaugă proprietatea în Google Search Console și trimite sitemap-ul.
5. Inspectează homepage-ul în URL Inspection și solicită indexarea.
6. Nu bloca pagina prin `noindex` sau `robots.txt`.
7. Leagă GA4/GTM și configurează conversiile pentru apel, formular și vânzare.
8. Pentru SEO și mai puternic ulterior, creează pagini dedicate pentru serviciile principale, de exemplu `/google-ads`, `/facebook-instagram-ads`, `/tiktok-ads`, `/creare-site`, `/magazine-online`.

Notă: tag-ul `meta keywords` nu este baza strategiei SEO. Titlul, conținutul util, structura paginii, linkurile, viteza, indexarea și paginile dedicate pe intenții sunt mult mai importante.
