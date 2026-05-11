import brandLogo from "../assets/brand-logo.png";
import searchIcon from "../assets/search-icon.png";
import socialIconsDark from "../assets/social-icons-dark.jpg";
import socialIconsLight from "../assets/social-icons-light.jpg";
import heroBbq from "../assets/hero-bbq.jpg";
import heroRamen from "../assets/hero-ramen.jpg";
import heroChickpeaStew from "../assets/hero-chickpea-stew.jpg";
import heroPotPie from "../assets/hero-pot-pie.jpg";
import categoryDinner from "../assets/category-dinner.jpg";
import categorySalad from "../assets/category-salad.jpg";
import categoryLeftover from "../assets/category-leftover.jpg";
import categoryJuice from "../assets/category-juice.jpg";
import categorySteak from "../assets/category-steak.jpg";
import categoryRice from "../assets/category-rice.jpg";
import breadLoaf from "../assets/bread-loaf.jpg";
import postSearedSteak from "../assets/post-seared-steak.jpg";
import postLemonGarlicSalmon from "../assets/post-lemon-garlic-salmon.jpg";
import postHomemadeLemonade from "../assets/post-homemade-lemonade.jpg";
import aboutPrepCabbage from "../assets/about-prep-cabbage.jpg";
import aboutCookingMan from "../assets/about-cooking-man.jpg";
import featuredSpicyBeef from "../assets/featured-spicy-beef.jpg";
import featuredKimchiFriedRice from "../assets/featured-kimchi-fried-rice.jpg";
import featuredCreamySalmon from "../assets/featured-creamy-salmon.jpg";
import cookbookCover from "../assets/cookbook-cover.jpg";

export const headerLogo = brandLogo;
export const headerSearchIcon = searchIcon;
export const newsletterSocialIcons = socialIconsLight;
export const footerSocialIcons = socialIconsDark;
export const cookbookImage = cookbookCover;

export const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Recipes", href: "#recipes", current: true },
  { label: "Contact", href: "#contact" },
];

export const heroCards = [
  {
    label: "Barbecue Recipes",
    image: heroBbq,
    alt: "Barbecue skewers and grilled meats",
  },
  {
    label: "Special Ramen Recipes",
    image: heroRamen,
    alt: "A bowl of ramen with chopsticks",
  },
  {
    label: "Chickpea Stew Recipes",
    image: heroChickpeaStew,
    alt: "A bowl of chickpea stew",
  },
  {
    label: "Pot Pie Recipes",
    image: heroPotPie,
    alt: "A vegetable pot pie with flaky crust",
  },
];

export const categoryCards = [
  { label: "Dinner", image: categoryDinner, alt: "Dinner bowl" },
  { label: "Salad", image: categorySalad, alt: "Salad bowl" },
  { label: "Leftover", image: categoryLeftover, alt: "Leftover recipe bowl" },
  { label: "Juice", image: categoryJuice, alt: "Glass of juice" },
  { label: "Steak", image: categorySteak, alt: "Steak on a plate" },
  { label: "Rice", image: categoryRice, alt: "Rice bowl" },
  { label: "Dough", image: breadLoaf, alt: "Fresh bread loaf" },
];

export const latestPosts = [
  {
    date: "February 24, 2024",
    title: "The Perfect Seared Steak",
    excerpt:
      "The recipe should include a list of all necessary ingredients, step-by-step cooking instructions, and any useful tips for preparing this dish. The steak should be cooked to the desired level of doneness, with a perfectly seared crust and a juicy, tender center. The recipe should also include suggestions for seasoning the steak and any accompaniments that pair well with the dish....",
    image: postSearedSteak,
    alt: "The perfect seared steak on a wooden board",
  },
  {
    date: "February 22, 2024",
    title: "One-Pan Lemon Garlic Salmon",
    excerpt:
      "In the hustle and bustle of daily life, finding time to cook a nutritious meal that's also easy to prepare can be a challenge. However, there are certain recipes that not only fit the bill but also deliver on flavor, healthiness, and convenience. However, there are certain recipes that not only fit the bill but also deliver on flavor, healthiness, and convenience. On such dish is the....",
    image: postLemonGarlicSalmon,
    alt: "One-pan lemon garlic salmon with lemon slices",
  },
  {
    date: "February 21, 2024",
    title: "Homemade Lemonade with Fresh Mint",
    excerpt:
      "When the sun beats down and the temperature rises, there's nothing quite like a cold, refreshing glass of lemonade to cool you off and revive your spirits. But why settle for store-bought versions laden with artificial flavors and excessive sugar when you can easily whip up a batch of homemade lemonade? Add a touch of fresh mint to the mix, and you have a delightful twist....",
    image: postHomemadeLemonade,
    alt: "Glass of homemade lemonade with lemon and mint",
  },
];

export const sidebarCategories = [
  "Slow Cooker Recipes",
  "Gluten-Free Recipes",
  "One-Pot Meals",
  "Breakfast Recipes",
  "Baking and Dessert Recipes",
  "Asian-Inspired Recipes",
  "Cocktail and Mocktail Recipes",
  "Family-Friendly Dinners",
  "Most Popular Recipes",
];

export const featuredTabs = [
  { label: "Quick And Easy", active: true },
  { label: "Popular", active: false },
  { label: "Fast Foods", active: false },
];

export const featuredRecipes = [
  {
    image: breadLoaf,
    alt: "Fresh baked French bread loaf",
    description:
      "Pain Français (French Bread) freshly baked bread, perfect for any meal or snack.",
  },
  {
    image: featuredSpicyBeef,
    alt: "Spicy beef stew in a bowl",
    description:
      "Spicy Beef Stew (A warming and nutritious stew, ideal for a filling dinner)",
  },
  {
    image: featuredKimchiFriedRice,
    alt: "Kimchi fried rice in a bowl",
    description:
      "Kimchi Fried Rice (a flavorful fried rice dish with a mix of Kimchi)",
  },
  {
    image: featuredCreamySalmon,
    alt: "Creamy salmon with spinach",
    description:
      "Creamy Salmon with Spinach fillets in a rich and creamy spinach sauce.",
  },
];

export const footerRecipeLinks = [
  "Breakfast Recipes",
  "Dinner Ideas",
  "Quick Meals",
  "Healthy Recipes",
  "Desserts",
  "Favorites",
  "Vegetarian",
];

export const footerInfoLinks = [
  "About Us",
  "Contact",
  "Newsletter",
  "FAQ",
  "Privacy Policy",
  "Terms & Conditions",
];

export const footerLegalLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Cookies Settings",
];

export const aboutSectionAssets = {
  firstImage: aboutPrepCabbage,
  secondImage: aboutCookingMan,
};
