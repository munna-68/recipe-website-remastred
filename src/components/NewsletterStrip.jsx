import styles from "./NewsletterStrip.module.css";

export default function NewsletterStrip({ socialIcons }) {
  return (
    <section className={styles.section} aria-label="Newsletter signup">
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.followTitle}>Follow Us On</h2>
          <img className={styles.socialIcons} src={socialIcons} alt="" />
        </div>

        <div className={styles.right}>
          <div className={styles.titleRow}>
            <span className={styles.script}>Sign Up</span>
            <h2 className={styles.heading}>For Email Update</h2>
          </div>

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
