import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { createHash } from 'crypto';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const CONTACT_EMAIL = 'chirilasadrian@yahoo.com';

type GlobalContactDedupe = typeof globalThis & {
  __hardServiceContactDedupe?: Map<string, number>;
};

const globalDedupe = globalThis as GlobalContactDedupe;
const contactDedupe = globalDedupe.__hardServiceContactDedupe ?? new Map<string, number>();
globalDedupe.__hardServiceContactDedupe = contactDedupe;
const DEDUPE_WINDOW_MS = 90_000;

function pruneDedupe(now: number) {
  for (const [key, createdAt] of contactDedupe.entries()) {
    if (now - createdAt > DEDUPE_WINDOW_MS) contactDedupe.delete(key);
  }
}

function clean(value: unknown, max = 5000) {
  return String(value ?? '').trim().slice(0, max);
}

function escapeHtml(s: string) {
  return s.replace(/[&<>'"]/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[c] || c));
}

export async function POST(req: Request) {
  let dedupeKeys: string[] = [];
  try {
    const body = await req.json();
    if (clean(body.website)) return NextResponse.json({ ok: true });

    const nume = clean(body.nume, 100);
    const prenume = clean(body.prenume, 100);
    const email = clean(body.email, 200);
    const telefon = clean(body.telefon, 50);
    const mesaj = clean(body.mesaj, 5000);

    if (!nume || !prenume || !email || !telefon || !mesaj) {
      return NextResponse.json({ error: 'Completează toate câmpurile.' }, { status: 400 });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Adresa de email nu este validă.' }, { status: 400 });
    }

    const requestId = clean(req.headers.get('x-idempotency-key') || body.requestId, 120);
    const contentFingerprint = createHash('sha256')
      .update([nume, prenume, email.toLowerCase(), telefon, mesaj].join('|'))
      .digest('hex');
    const requestKey = `request:${requestId || contentFingerprint}`;
    const contentKey = `content:${contentFingerprint}`;
    const now = Date.now();
    pruneDedupe(now);

    // Previne dublarea produsă de double-click, rerandare sau retrimiterea aceluiași POST.
    if (contactDedupe.has(requestKey) || contactDedupe.has(contentKey)) {
      return NextResponse.json({ ok: true, deduplicated: true });
    }
    contactDedupe.set(requestKey, now);
    contactDedupe.set(contentKey, now);
    dedupeKeys = [requestKey, contentKey];

    const host = process.env.SMTP_HOST || 'smtp.mail.yahoo.com';
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER || '';
    const pass = process.env.SMTP_PASS || '';

    if (!user || !pass) {
      dedupeKeys.forEach(key => contactDedupe.delete(key));
      dedupeKeys = [];
      return NextResponse.json({ error: 'Formularul nu este configurat. Completează SMTP_USER și SMTP_PASS în .env.local.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
      connectionTimeout: 20000,
      greetingTimeout: 20000,
      socketTimeout: 30000,
      tls: { servername: host, minVersion: 'TLSv1.2' },
    });

    const safeName = `${nume} ${prenume}`.replace(/[<>\r\n]/g, ' ');
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(telefon);
    const replySubject = encodeURIComponent(`Re: Solicitare Hard Service Marketing — ${safeName}`);
    const replyHref = `mailto:${safeEmail}?subject=${replySubject}`;

    const info = await transporter.sendMail({
      // Yahoo SMTP: expeditorul trebuie să fie contul autentificat.
      from: `"Hard Service Marketing" <${user}>`,
      to: CONTACT_EMAIL,
      envelope: { from: user, to: CONTACT_EMAIL },
      subject: `Solicitare nouă Hard Service Marketing — ${safeName}`,
      messageId: `<${(requestId || contentFingerprint).replace(/[^a-zA-Z0-9._-]/g, '').slice(0, 80)}@hardservicesrl.ro>`,
      text: `Solicitare nouă de pe hardservicesrl.ro\n\nNume: ${safeName}\nEmail client: ${email}\nTelefon: ${telefon}\n\nMesaj:\n${mesaj}\n\nRăspunde clientului la: ${email}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#17212b">
        <div style="padding:18px 22px;background:#07131f;color:#fff;border-radius:14px 14px 0 0">
          <div style="font-size:12px;letter-spacing:.14em;color:#70c8ff">HARD SERVICE / MARKETING</div>
          <h2 style="margin:6px 0 0">Solicitare nouă</h2>
        </div>
        <div style="padding:22px;border:1px solid #e2e8ef;border-top:0;border-radius:0 0 14px 14px">
          <p><b>Nume:</b> ${escapeHtml(safeName)}</p>
          <p><b>Email:</b> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <p><b>Telefon:</b> <a href="tel:${safePhone}">${safePhone}</a></p>
          <p><b>Mesaj:</b></p>
          <div style="padding:16px;background:#f4f7fb;border-radius:10px;line-height:1.55">${escapeHtml(mesaj).replace(/\n/g,'<br>')}</div>
          <div style="margin-top:20px">
            <a href="${replyHref}" style="display:inline-block;background:#07131f;color:#fff;text-decoration:none;padding:12px 18px;border-radius:9px;font-weight:700">Răspunde clientului</a>
          </div>
          <p style="color:#667085;font-size:12px;margin-top:18px">Yahoo SMTP trimite mesajul de pe adresa autentificată. Adresa vizitatorului este inclusă în mesaj pentru răspuns direct.</p>
        </div>
      </div>`,
    });

    return NextResponse.json({ ok: true, messageId: info.messageId });
  } catch (error) {
    dedupeKeys.forEach(key => contactDedupe.delete(key));
    const err = error as { code?: string; response?: string; responseCode?: number; command?: string; message?: string };
    console.error('CONTACT SMTP ERROR', {
      code: err?.code,
      responseCode: err?.responseCode,
      command: err?.command,
      response: err?.response,
      message: err?.message,
    });
    const dev = process.env.NODE_ENV !== 'production';
    return NextResponse.json(
      { error: dev ? `Eroare email: ${err?.response || err?.message || 'necunoscută'}` : 'Nu am putut trimite mesajul. Te rugăm să încerci din nou.' },
      { status: 500 }
    );
  }
}
