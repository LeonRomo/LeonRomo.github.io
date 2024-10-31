import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Leon's Blog",
      description: "A template for Leon's blog",
    }
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
