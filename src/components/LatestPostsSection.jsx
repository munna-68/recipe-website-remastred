import styles from "./LatestPostsSection.module.css";

export default function LatestPostsSection({ posts, categories }) {
  return (
    <section className={styles.section} aria-labelledby="latest-posts-heading">
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div>
            <h2 className={styles.heading} id="latest-posts-heading">
              The Latest Posts
            </h2>

            <div className={styles.posts}>
              {posts.map((post) => (
                <article className={styles.post} key={post.title}>
                  <img
                    className={styles.postImage}
                    src={post.image}
                    alt={post.alt}
                  />
                  <div>
                    <p className={styles.date}>{post.date}</p>
                    <h3 className={styles.title}>{post.title}</h3>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                    <button className={styles.readMore} type="button">
                      Continue Reading
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.moreWrap}>
              <button className={styles.moreButton} type="button">
                VIEW MORE RECENT RECIPES
              </button>
            </div>
          </div>

          <aside
            className={styles.sidebar}
            aria-labelledby="sidebar-recipes-heading"
          >
            <h2 className={styles.sidebarHeading} id="sidebar-recipes-heading">
              Recipes
            </h2>
            <ol className={styles.sidebarList}>
              {categories.map((category, index) => (
                <li className={styles.sidebarItem} key={category}>
                  <span className={styles.badge}>{index + 1}</span>
                  <span className={styles.sidebarLabel}>{category}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}
