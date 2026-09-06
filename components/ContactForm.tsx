'use client';

import { FormEvent, useRef, useState } from 'react';

type DataLayerWindow = Window & { dataLayer?: Array<Record<string, unknown>> };

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const submitting = useRef(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting.current) return;

    submitting.current = true;
    setStatus('sending');
    setMessage('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const requestId = typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `hs-${Date.now()}-${Math.random().toString(36).slice(2)}`;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Idempotency-Key': requestId,
        },
        body: JSON.stringify({ ...data, requestId }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Nu am putut trimite mesajul.');

      setStatus('ok');
      setMessage('Mesajul a fost trimis. Te contactăm cât mai curând.');
      form.reset();

      const w = window as DataLayerWindow;
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: 'generate_lead',
        form_name: 'contact_hard_service',
        form_destination: 'contact',
      });
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'A apărut o eroare.');
    } finally {
      submitting.current = false;
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>Nume<input name="nume" required placeholder="Nume" autoComplete="family-name" /></label>
        <label>Prenume<input name="prenume" required placeholder="Prenume" autoComplete="given-name" /></label>
      </div>
      <div className="form-row">
        <label>Email<input name="email" required type="email" placeholder="email@firma.ro" autoComplete="email" /></label>
        <label>Telefon<input name="telefon" required type="tel" placeholder="07xx xxx xxx" autoComplete="tel" /></label>
      </div>
      <label>Mesaj<textarea name="mesaj" required rows={5} placeholder="Spune-ne ce vrei să promovăm și ce obiectiv ai." /></label>
      <input name="website" className="hp" tabIndex={-1} autoComplete="off" />
      <button type="submit" className="primary wide" disabled={status === 'sending'} aria-busy={status === 'sending'}>
        {status === 'sending' ? 'Se trimite…' : 'Trimite solicitarea →'}
      </button>
      {message && <p className={`form-message ${status}`}>{message}</p>}
    </form>
  );
}
