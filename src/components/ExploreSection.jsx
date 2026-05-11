import styles from "./ExploreSection.module.css";

export default function ExploreSection({ searchIcon }) {
  return (
    <section className={styles.section} aria-labelledby="explore-title">
      <div className={styles.inner}>
        <div className={styles.headingRow} aria-hidden="true">
          <span className={styles.rule} />
          <h2 className={styles.title} id="explore-title">
            Explore Over 2300 Posts!
          </h2>
          <span className={styles.rule} />
        </div>

        <div className={styles.searchRow}>
          <label className={styles.searchField}>
            <img className={styles.searchIcon} src={searchIcon} alt="" />
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search"
            />
          </label>

          <span className={styles.or}>Or</span>

          <button className={styles.viewAllButton} type="button">
            + VIEW ALL RECIPES
          </button>

          <div className={styles.adBox} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
