'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ChatWidget.module.css';

const GREETING = "Hi! I'm the FEEL assistant — this is a demo chat, so I can't answer for real yet.";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: 'bot', text: GREETING }]);
  const [draft, setDraft] = useState('');
  const listRef = useRef(null);

  useEffect(() => {
    function toggle() {
      setOpen((o) => !o);
    }
    window.addEventListener('feel-chat-toggle', toggle);
    return () => window.removeEventListener('feel-chat-toggle', toggle);
  }, []);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, open]);

  function sendMessage(e) {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: 'user', text }]);
    setDraft('');
  }

  if (!open) return null;

  return (
    <div className={styles.panel} role="dialog" aria-label="FEEL chat assistant">
      <div className={styles.header}>
        <span>FEEL Assistant</span>
        <button type="button" className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Close chat">
          &times;
        </button>
      </div>
      <div className={styles.messages} ref={listRef}>
        {messages.map((m, i) => (
          <div key={i} className={m.from === 'bot' ? styles.botMsg : styles.userMsg}>
            {m.text}
          </div>
        ))}
      </div>
      <form className={styles.inputRow} onSubmit={sendMessage}>
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Type a message…"
          aria-label="Message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
