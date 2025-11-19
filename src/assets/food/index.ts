import breadDark from "./bread-dark.svg";
import breadLight from "./bread-light.svg";
import cheeseDark from "./cheese-dark.svg";
import cheeseLight from "./cheese-light.svg";
import chickenDark from "./chicken-dark.svg";
import chickenLight from "./chicken-light.svg";
import eggDark from "./egg-dark.svg";
import eggLight from "./egg-light.svg";
import garlicDark from "./garlic-dark.svg";
import garlicLight from "./garlic-light.svg";
import lettuceDark from "./lettuce-dark.svg";
import lettuceLight from "./lettuce-light.svg";
import milkDark from "./milk-dark.svg";
import milkLight from "./milk-light.svg";
import onionDark from "./onion-dark.svg";
import onionLight from "./onion-light.svg";
import pastaDark from "./pasta-dark.svg";
import pastaLight from "./pasta-light.svg";
import riceDark from "./rice-dark.svg";
import riceLight from "./rice-light.svg";
import tomatoDark from "./tomato-dark.svg";
import tomatoLight from "./tomato-light.svg";
import beansDark from "./beans-dark.svg";
import beansLight from "./beans-light.svg";
import ramenDark from "./ramen-dark.svg";
import ramenLight from "./ramen-light.svg";

export const FOOD_KEYS = [
  "beans",
  "bread",
  "cheese",
  "chicken",
  "egg",
  "garlic",
  "lettuce",
  "milk",
  "onion",
  "pasta",
  "ramen",
  "rice",
  "tomato",
] as const;

export type FoodKey = (typeof FOOD_KEYS)[number];

export const ICON_MAP_DARK: Record<FoodKey, string> = {
  beans: beansDark,
  bread: breadDark,
  cheese: cheeseDark,
  chicken: chickenDark,
  egg: eggDark,
  garlic: garlicDark,
  lettuce: lettuceDark,
  milk: milkDark,
  onion: onionDark,
  pasta: pastaDark,
  ramen: ramenDark,
  rice: riceDark,
  tomato: tomatoDark,
};

export const ICON_MAP_LIGHT: Record<FoodKey, string> = {
  beans: beansLight,
  bread: breadLight,
  cheese: cheeseLight,
  chicken: chickenLight,
  egg: eggLight,
  garlic: garlicLight,
  lettuce: lettuceLight,
  milk: milkLight,
  onion: onionLight,
  pasta: pastaLight,
  ramen: ramenLight,
  rice: riceLight,
  tomato: tomatoLight,
};

export {
  breadDark,
  breadLight,
  cheeseDark,
  cheeseLight,
  chickenDark,
  chickenLight,
  eggDark,
  eggLight,
  garlicDark,
  garlicLight,
  lettuceDark,
  lettuceLight,
  milkDark,
  milkLight,
  onionDark,
  onionLight,
  pastaDark,
  pastaLight,
  riceDark,
  riceLight,
  tomatoDark,
  tomatoLight,
  beansDark,
  beansLight,
  ramenDark,
  ramenLight,
};
