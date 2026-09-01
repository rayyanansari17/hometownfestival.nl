'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { isNightNow } from '../lib/isNightNow';
import styles from './NightSkyBackground.module.css';

// Dark-mode-only drifting starfield — 3 parallax layers of stars built via
// box-shadow (no canvas/WebGL), each layer looping seamlessly by drawing 4
// tiled copies and translating by exactly one container width/height.

const LAYERS = [
  { size: 1, density: 70, cap: 260, floor: 40, speedX: 4, speedY: 3, opacity: 0.55 },
  { size: 2, density: 35, cap: 130, floor: 20, speedX: 7, speedY: 5, opacity: 0.75 },
  { size: 3, density: 14, cap: 60, floor: 8, speedX: 12, speedY: 9, opacity: 1 },
];

const REFERENCE_AREA = 1920 * 900;

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

// Deterministic placement (no Math.random) so positions stay stable across
// re-renders/resizes.
function buildBoxShadow(count, w, h, layerIndex) {
  const parts = [];
  for (let i = 0; i < count; i++) {
    const x = Math.round((((i * 137.508 + layerIndex * 311.7) % 100) / 100) * w);
    const y = Math.round((((i * 78.233 + layerIndex * 197.3) % 100) / 100) * h);
    const color = i % 6 === 0 ? 'rgba(255,240,170,0.9)' : '#fff';
    parts.push(`${x}px ${y}px ${color}`);
    parts.push(`${x + w}px ${y}px ${color}`);
    parts.push(`${x}px ${y + h}px ${color}`);
    parts.push(`${x + w}px ${y + h}px ${color}`);
  }
  return parts.join(',');
}

export default function NightSkyBackground({ night }) {
  const ref = useRef(null);
  const [size, setSize] = useState(null);
  const [autoNight, setAutoNight] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const effectiveNight = night !== undefined ? night : autoNight;

  useEffect(() => {
    setAutoNight(isNightNow());
    const interval = window.setInterval(() => setAutoNight(isNightNow()), 5 * 60 * 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Keep <html data-theme> in sync so the CSS variables / paper-texture
  // opacity in globals.css switch along with the starfield.
  useEffect(() => {
    document.documentElement.dataset.theme = effectiveNight ? 'dark' : 'light';
  }, [effectiveNight]);

  useEffect(() => {
    if (!effectiveNight) return;
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      setSize((prev) => (prev && prev.w === w && prev.h === h ? prev : { w, h }));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [effectiveNight]);

  const shadows = useMemo(() => {
    if (!size || size.w === 0 || size.h === 0) return null;
    const screens = (size.w * size.h) / REFERENCE_AREA;
    return LAYERS.map((layer, i) => {
      const count = clamp(Math.round(layer.density * screens), layer.floor, layer.cap);
      return buildBoxShadow(count, size.w, size.h, i);
    });
  }, [size]);

  if (!effectiveNight) return null;

  return (
    <div ref={ref} className={styles.wrapper} aria-hidden>
      <div
        className={styles.gradient}
        style={{ background: 'linear-gradient(180deg,#100e1a 0%,#0d1021 40%,#0a0e24 70%)' }}
      />

      {size &&
        shadows &&
        LAYERS.map((layer, i) => {
          const driftXStyle = reducedMotion
            ? undefined
            : {
                animationName: 'night-drift-x',
                animationDuration: `${Math.round(size.w / layer.speedX)}s`,
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
              };
          const driftYStyle = reducedMotion
            ? undefined
            : {
                animationName: 'night-drift-y',
                animationDuration: `${Math.round(size.h / layer.speedY)}s`,
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
              };
          return (
            <div key={i} className={styles.driftLayer} style={driftXStyle}>
              <div className={styles.driftLayer} style={driftYStyle}>
                <div
                  className={styles.star}
                  style={{
                    width: layer.size,
                    height: layer.size,
                    opacity: layer.opacity,
                    boxShadow: shadows[i],
                  }}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
