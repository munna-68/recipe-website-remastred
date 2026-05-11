import styles from "./SiteFooter.module.css";

export default function SiteFooter({
  logo,
  socialIcons,
  recipeLinks,
  infoLinks,
  legalLinks,
}) {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img className={styles.logo} src={logo} alt="Petuk Couple Recipes" />

          <div className={styles.follow}>
            <h2 className={styles.followTitle}>Follow Us On</h2>
            <img className={styles.socialIcons} src={socialIcons} alt="" />
          </div>
        </div>

        <div className={styles.links}>
          <nav className={styles.linkColumn} aria-label="Recipe links">
            {recipeLinks.map((link) => (
              <a className={styles.link} href="#recipes" key={link}>
                {link}
              </a>
            ))}
          </nav>

          <nav className={styles.linkColumn} aria-label="Information links">
            {infoLinks.map((link) => (
              <a className={styles.link} href="#contact" key={link}>
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.contact}>
          <p className={styles.contactLabel}>Contact:</p>
          <p className={styles.contactText}>1800 123 4567</p>
          <p className={styles.contactText}>info@journey jive.com</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2023 Relume. All rights reserved.</p>

        <div className={styles.legalLinks}>
          {legalLinks.map((link) => (
            <a key={link} href="#contact">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
