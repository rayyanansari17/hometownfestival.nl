'use client';

import { useEffect, useRef, useState } from 'react';
import { STALL_WHATSAPP, EVENT } from '../lib/site';
import styles from './BookStall.module.css';

const OPEN_HASH = '#book-stall';

function buildMessage(name, contact) {
  return [
    `Hi ${EVENT.name} team! 👋`,
    '',
    `I'd like to book a stall at ${EVENT.name}.`,
    '',
    `Name: ${name}`,
    `Contact: ${contact}`,
    '',
    `Event: Saturday, 10 October 2026 · ${EVENT.venueName}, ${EVENT.city}`,
    '',
    'Please share the stall options and pricing. Thank you!',
  ].join('\n');
}

function isValidContact(value) {
  const digits = value.replace(/\D/g, '');
  const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  return digits.length >= 10 || looksLikeEmail;
}

export default function BookStall() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [error, setError] = useState('');
  const nameRef = useRef(null);

  // The trigger lives in the page's static HTML (a pill next to Buy Tickets),
  // so listen at the document level rather than wiring an onClick.
  useEffect(() => {
    function onClick(e) {
      const trigger = e.target.closest('[data-book-stall]');
      if (!trigger) return;
      e.preventDefault();
      setOpen(true);
    }
    function onHash() {
      if (window.location.hash === OPEN_HASH) {
        setOpen(true);
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }
    document.addEventListener('click', onClick);
    window.addEventListener('hashchange', onHash);
    onHash();
    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('hashchange', onHash);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    nameRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  function submit(e) {
    e.preventDefault();
    const n = name.trim();
    const c = contact.trim();
    if (n.length < 2) return setError('Please enter your name.');
    if (!isValidContact(c)) return setError('Please enter a valid phone number or email.');
    setError('');
    const url = `https://wa.me/${STALL_WHATSAPP}?text=${encodeURIComponent(buildMessage(n, c))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setOpen(false);
    setName('');
    setContact('');
  }

  if (!open) return null;

  return (
    <div className={styles.backdrop} onClick={() => setOpen(false)}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-stall-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className={styles.close} onClick={() => setOpen(false)} aria-label="Close">
          &times;
        </button>
        <h3 id="book-stall-title" className={styles.title}>Book a stall</h3>
        <p className={styles.sub}>
          Leave your details and we&rsquo;ll continue on WhatsApp.
        </p>
        <form onSubmit={submit} noValidate>
          <label className={styles.label}>
            Name
            <input
              ref={nameRef}
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              placeholder="Your name or brand"
            />
          </label>
          <label className={styles.label}>
            Contact
            <input
              className={styles.input}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              autoComplete="tel"
              inputMode="tel"
              placeholder="Phone number or email"
            />
          </label>
          {error && <p className={styles.error} role="alert">{error}</p>}
          <button type="submit" className={styles.submit}>
            Continue on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
