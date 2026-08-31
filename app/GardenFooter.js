'use client';

import { useEffect, useRef, useState } from 'react';
import { supabase } from '../lib/supabase';
import { isNightNow } from '../lib/isNightNow';
import styles from './GardenFooter.module.css';

const FLOWER_EMOJIS = ['🌸', '🌼', '🌷', '🌻', '🌺'];
const GRASS_TOP_PCT = 66; // % from top where grass begins

export default function GardenFooter({
  night, // optional override; if omitted, computed from the visitor's local clock
  siteName = 'HomeTown Festival',
  organizer = 'HomeTown Festival',
  city = 'Maasland',
  instagramUrl = 'https://www.instagram.com/hometownfestival/',
  instagramHandle = '@hometownfestival',
}) {
  const [autoNight, setAutoNight] = useState(false);
  const [flowers, setFlowers] = useState([]);
  const [justPlanted, setJustPlanted] = useState(false);
  const grassRef = useRef(null);

  const effectiveNight = night !== undefined ? night : autoNight;

  useEffect(() => {
    setAutoNight(isNightNow());
    const interval = window.setInterval(() => setAutoNight(isNightNow()), 5 * 60 * 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    let active = true;
    supabase
      .from('garden_flowers')
      .select('id, x, y, flower_emoji, created_at')
      .order('created_at', { ascending: true })
      .limit(5000)
      .then(({ data }) => {
        if (active && data) setFlowers(data);
      });

    const channel = supabase
      .channel('garden-footer')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'garden_flowers' },
        (payload) => {
          setFlowers((prev) => {
            const f = payload.new;
            if (prev.some((p) => p.id === f.id)) return prev;
            return [...prev, f];
          });
        }
      )
      .subscribe();

    return () => {
      active = false;
      supabase.removeChannel(channel);
    };
  }, []);

  async function plant(e) {
    const grass = grassRef.current;
    if (!grass) return;
    const rect = grass.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    const flower_emoji = FLOWER_EMOJIS[Math.floor(Math.random() * FLOWER_EMOJIS.length)];

    const optimistic = {
      id: `local-${Date.now()}-${Math.random().toString(36).slice(2)}`,
      x,
      y,
      flower_emoji,
      created_at: new Date().toISOString(),
    };
    setFlowers((prev) => [...prev, optimistic]);
    setJustPlanted(true);
    window.setTimeout(() => setJustPlanted(false), 2600);

    const { data, error } = await supabase
      .from('garden_flowers')
      .insert({ x, y, flower_emoji })
      .select('id, x, y, flower_emoji, created_at')
      .single();
    if (!error && data) {
      setFlowers((prev) => prev.map((f) => (f.id === optimistic.id ? data : f)));
    }
  }

  return (
    <footer className={styles.footer} aria-label="Community garden">
      <div className={styles.stage}>
        {/* SKY */}
        <div
          className={styles.sky}
          style={{
            background: effectiveNight
              ? 'linear-gradient(180deg,#0a0e24 0%,#141a3a 55%,#1c234a 100%)'
              : 'linear-gradient(180deg,#bfe8ff 0%,#e6f6ff 55%,#f3fbff 100%)',
          }}
        />

        {/* BLEND: melt whatever sits above into the sky */}
        <div
          className={styles.skyBlend}
          style={{
            background: `linear-gradient(180deg, ${
              effectiveNight ? '#0a0e24' : '#ffffff'
            } 0%, ${effectiveNight ? 'rgba(10,14,36,0)' : 'rgba(191,232,255,0)'} 100%)`,
          }}
        />

        {/* SUN / MOON */}
        {effectiveNight ? (
          <div className={styles.moon}>
            <div className={styles.moonShadow} />
          </div>
        ) : (
          <div className={styles.sun} />
        )}

        {/* STARS (night) */}
        {effectiveNight &&
          Array.from({ length: 46 }).map((_, i) => {
            const left = (i * 137.5) % 100;
            const top = (i * 53.7) % 58;
            return (
              <span
                key={i}
                className={styles.star}
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: i % 7 === 0 ? 3 : 2,
                  height: i % 7 === 0 ? 3 : 2,
                  animation: `twinkle ${2 + (i % 4)}s ease-in-out ${i * 0.13}s infinite`,
                }}
              />
            );
          })}

        {/* CLOUDS (day) */}
        {!effectiveNight &&
          [
            { top: '20%', dur: '48s', scale: 1 },
            { top: '32%', dur: '70s', scale: 0.7 },
            { top: '14%', dur: '90s', scale: 1.2 },
          ].map((c, i) => (
            <div
              key={i}
              className={styles.cloud}
              style={{
                top: c.top,
                animation: `float-cloud ${c.dur} linear ${i * -12}s infinite`,
                transform: `scale(${c.scale})`,
              }}
            >
              <div className={styles.cloudBody}>
                <div className={styles.cloudBump1} />
                <div className={styles.cloudBump2} />
              </div>
            </div>
          ))}

        {/* BIRDS (day) */}
        {!effectiveNight &&
          [0, 1, 2].map((i) => (
            <svg
              key={i}
              className={styles.bird}
              width="26"
              height="14"
              viewBox="0 0 26 14"
              style={{
                top: `${22 + i * 7}%`,
                animation: `bird-fly ${18 + i * 5}s linear ${i * -6}s infinite`,
              }}
            >
              <path
                d="M1 8 Q6.5 1 13 7 Q19.5 1 25 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          ))}

        {/* MOUNTAINS */}
        <svg className={styles.mountains} viewBox="0 0 1200 400" preserveAspectRatio="none">
          <path
            d="M0 400 L0 240 L180 120 L340 260 L520 90 L720 250 L900 140 L1080 250 L1200 180 L1200 400 Z"
            fill={effectiveNight ? '#20305a' : '#9fb7a6'}
            opacity="0.7"
          />
          <path
            d="M0 400 L0 300 L220 200 L430 320 L640 210 L860 320 L1080 230 L1200 300 L1200 400 Z"
            fill={effectiveNight ? '#182848' : '#7ba087'}
            opacity="0.85"
          />
        </svg>

        {/* TREE LINE */}
        <svg className={styles.treeLine} viewBox="0 0 1200 120" preserveAspectRatio="none">
          {Array.from({ length: 26 }).map((_, i) => {
            const x = (i / 25) * 1200;
            const h = 60 + ((i * 37) % 45);
            return (
              <polygon
                key={i}
                points={`${x},120 ${x - 22},120 ${x},${120 - h} ${x + 22},120`}
                fill={effectiveNight ? '#123021' : '#3f7d4f'}
              />
            );
          })}
        </svg>

        {/* GRASS (plantable) */}
        <div
          ref={grassRef}
          onClick={plant}
          role="button"
          aria-label="Plant your flower"
          className={styles.grass}
          style={{
            height: `${100 - GRASS_TOP_PCT}%`,
            top: `${GRASS_TOP_PCT}%`,
            background: effectiveNight
              ? 'linear-gradient(180deg,#22412c 0%,#16311f 100%)'
              : 'linear-gradient(180deg,#7cc367 0%,#4e9e48 100%)',
          }}
        >
          {flowers.map((f) => (
            <span
              key={f.id}
              className={styles.flower}
              style={{
                left: `${f.x}%`,
                top: `${f.y}%`,
                filter: effectiveNight ? 'drop-shadow(0 0 6px rgba(255,240,170,0.9))' : 'none',
              }}
            >
              {f.flower_emoji}
            </span>
          ))}
        </div>

        {/* plant hint / confirmation */}
        <div className={styles.hintWrap}>
          {justPlanted ? (
            <p className={`${styles.hintBadge} ${styles.hintBadgePlanted}`}>
              🌸 planted! thanks for showing up
            </p>
          ) : (
            <p className={styles.hintBadge}>🌱 Tap the grass to plant a flower</p>
          )}
        </div>

        {/* footer info */}
        <div className={styles.infoWrap}>
          <div className={styles.infoInner}>
            <div>
              <p className={styles.siteName}>{siteName}</p>
              <p className={styles.siteSub}>
                Organized by {organizer} · {city} · {flowers.length} flowers planted
              </p>
            </div>
            <div className={styles.socialRow}>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {instagramHandle}
              </a>
              <span>
                © {new Date().getFullYear()} {organizer}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
