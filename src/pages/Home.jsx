import styles from "./Home.module.css";
import SiteHeader from "../components/SiteHeader";
import HeroGrid from "../components/HeroGrid";
import CategoryRow from "../components/CategoryRow";
import ExploreSection from "../components/ExploreSection";
import LatestPostsSection from "../components/LatestPostsSection";
import AboutSection from "../components/AboutSection";
import NewsletterStrip from "../components/NewsletterStrip";
import FeaturedRecipesSection from "../components/FeaturedRecipesSection";
import CookbookPromoSection from "../components/CookbookPromoSection";
import SiteFooter from "../components/SiteFooter";
import {
  aboutSectionAssets,
  categoryCards,
  cookbookImage,
  featuredRecipes,
  featuredTabs,
  footerInfoLinks,
  footerLegalLinks,
  footerRecipeLinks,
  footerSocialIcons,
  headerLogo,
  headerSearchIcon,
  heroCards,
  latestPosts,
  navigationLinks,
  newsletterSocialIcons,
  sidebarCategories,
} from "../data/homePageData";

export default function Home() {
  return (
    <div className={styles.page} id="home">
      <SiteHeader
        logo={headerLogo}
        searchIcon={headerSearchIcon}
        links={navigationLinks}
      />
      <main className={styles.main}>
        <HeroGrid cards={heroCards} />
        <CategoryRow cards={categoryCards} />
        <ExploreSection searchIcon={headerSearchIcon} />
        <LatestPostsSection
          posts={latestPosts}
          categories={sidebarCategories}
        />
        <AboutSection images={aboutSectionAssets} />
        <NewsletterStrip socialIcons={newsletterSocialIcons} />
        <FeaturedRecipesSection tabs={featuredTabs} recipes={featuredRecipes} />
        <CookbookPromoSection cookbookImage={cookbookImage} />
      </main>
      <SiteFooter
        logo={headerLogo}
        socialIcons={footerSocialIcons}
        recipeLinks={footerRecipeLinks}
        infoLinks={footerInfoLinks}
        legalLinks={footerLegalLinks}
      />
    </div>
  );
}
