import styles from "./HeroGrid.module.css";

export default function HeroGrid({ cards }) {
  return (
    <section className={styles.section} aria-label="Featured recipe categories">
      <div className={styles.inner}>
        {cards.map((card) => (
          <article className={styles.card} key={card.label}>
            <div className={styles.media}>
              <img className={styles.image} src={card.image} alt={card.alt} />
              <div className={styles.label}>{card.label}</div>
            </div>
            <div className={styles.bar} aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
}
