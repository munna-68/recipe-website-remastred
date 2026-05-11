import styles from "./CategoryRow.module.css";

export default function CategoryRow({ cards }) {
  return (
    <section className={styles.section} aria-label="Recipe categories">
      <div className={styles.inner}>
        {cards.map((card) => (
          <figure className={styles.item} key={card.label}>
            <img className={styles.image} src={card.image} alt={card.alt} />
            <figcaption className={styles.label}>{card.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
