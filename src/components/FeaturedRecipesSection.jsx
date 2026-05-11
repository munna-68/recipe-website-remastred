import styles from "./FeaturedRecipesSection.module.css";

export default function FeaturedRecipesSection({ tabs, recipes }) {
  return (
    <section
      className={styles.section}
      aria-labelledby="featured-recipes-heading"
      id="recipes"
    >
      <div className={styles.inner}>
        <div
          className={styles.tabs}
          role="tablist"
          aria-label="Featured recipes filters"
        >
          {tabs.map((tab) => (
            <button
              className={`${styles.tab} ${tab.active ? styles.tabActive : ""}`}
              type="button"
              key={tab.label}
              aria-pressed={tab.active ? "true" : "false"}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {recipes.map((recipe) => (
            <article className={styles.card} key={recipe.description}>
              <div className={styles.imageWrap}>
                <img
                  className={styles.image}
                  src={recipe.image}
                  alt={recipe.alt}
                />
                <span className={styles.pill}>Recipes</span>
              </div>
              <p className={styles.description}>{recipe.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
