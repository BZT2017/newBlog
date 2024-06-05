import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/newBlog/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Tiger",
      description: "Tiger的博客",
    },
    // "/en/": {
    //   lang: "en-US",
    //   title: "Blog",
    //   description: "A blog",
    // },
  },
  markdown:{
    headers:{
      level: [2, 3],
    }
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
