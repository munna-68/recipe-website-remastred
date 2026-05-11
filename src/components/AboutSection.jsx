import styles from "./AboutSection.module.css";

export default function AboutSection({ images }) {
  return (
    <section
      className={styles.section}
      aria-labelledby="about-title"
      id="about"
    >
      <div className={styles.inner}>
        <div className={styles.layout}>
          <article className={styles.textCard}>
            <h2 className={styles.title} id="about-title">
              Hi! I&apos;M Micky
            </h2>
            <p className={styles.script}>Nice To Meet You!</p>
            <p className={styles.body}>
              I am a male web developer, previously a 4th grade teacher, now
              fully immersed in the world of blogging. I living with my wife,
              Bjork, in Minnesota. I cherish my camera, enjoy relaxing lake
              days, and have a fondness for dark chocolate.
            </p>
            <button className={styles.button} type="button">
              Learn More
            </button>
          </article>

          <img
            className={styles.image}
            src={images.firstImage}
            alt="Person preparing vegetables"
          />

          <img
            className={styles.image}
            src={images.secondImage}
            alt="Chef preparing food in the kitchen"
          />
        </div>
      </div>
    </section>
  );
}
