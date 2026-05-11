import styles from "./CookbookPromoSection.module.css";

export default function CookbookPromoSection({ cookbookImage }) {
  return (
    <section className={styles.section} aria-labelledby="cookbook-heading">
      <div className={styles.inner}>
        <img
          className={styles.image}
          src={cookbookImage}
          alt="Top Recipes Cookbook cover"
        />

        <div className={styles.content}>
          <p className={styles.script}>Get In Now</p>
          <h2 className={styles.heading} id="cookbook-heading">
            Our Best Seller COOKBOOK
          </h2>
          <p className={styles.body}>
            Dive into a world of culinary delights with our best-selling Top
            Recipes Cookbook. Whether you&apos;re a seasoned chef or just
            starting out, this collection of recipes ..
          </p>

          <form className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="First Name"
            />
            <input className={styles.input} type="email" placeholder="Email" />
            <button className={styles.button} type="button">
              Go
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
