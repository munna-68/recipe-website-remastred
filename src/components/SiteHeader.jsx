import styles from "./SiteHeader.module.css";

export default function SiteHeader({ logo, searchIcon, links }) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a
          className={styles.brand}
          href="#home"
          aria-label="Petuk Couple Recipes home"
        >
          <img className={styles.logo} src={logo} alt="Petuk Couple Recipes" />
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.label}
              className={`${styles.link} ${link.current ? styles.linkActive : ""}`}
              href={link.href}
              aria-current={link.current ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={styles.searchButton}
          type="button"
          aria-label="Search recipes"
        >
          <img className={styles.searchIcon} src={searchIcon} alt="" />
          <span>Search</span>
        </button>
      </div>
    </header>
  );
}
