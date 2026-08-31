import styles from './PersistentTicket.module.css';

export default function PersistentTicket({
  href = 'https://shop.simpleticket.eu/event/GP41MdAO',
  eyebrow = 'HomeTown Festival',
  label = 'Koop tickets',
  date = '28–29 augustus 2026',
}) {
  return (
    <a href={href} aria-label={label} className={styles.ticket}>
      <span className={styles.text}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <span className={styles.label}>{label}</span>
        <span className={styles.date}>{date}</span>
      </span>
      <span className={styles.stub}>
        <span className={styles.dot} aria-hidden="true" />
      </span>
    </a>
  );
}
