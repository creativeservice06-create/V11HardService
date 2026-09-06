# Hard Service Marketing — V11

V11 păstrează funcționalitatea V10 (SEO, GTM, formular Yahoo, protecție anti-dublare, Next.js 15.5.24), dar ajustează experiența mobilă:

- animația „Cum funcționează” revine la proporțiile V9 / V9 Mobile Fix;
- textele din animație sunt mai mari și mai lizibile fără a mări cadrul animației;
- etapele Caută / Te găsește / Intră pe site / Devine lead / Devine client sunt din nou clickabile;
- meniul și textele generale mărite din V10 sunt păstrate;
- Safari/iPhone: viewport-fit=cover, theme color dark, safe-area pentru header/floating call și fundal dark la overscroll;
- GTM, SEO și mailerul Yahoo nu sunt schimbate.

## Local

```bash
npm install
npm run dev
```

## Environment variables

Nu urca `.env.local` în GitHub. Configurează în Vercel:

- `SMTP_HOST=smtp.mail.yahoo.com`
- `SMTP_PORT=465`
- `SMTP_USER=chirilasadrian@yahoo.com`
- `SMTP_PASS=<Yahoo App Password>`
- `SMTP_FROM=chirilasadrian@yahoo.com`
