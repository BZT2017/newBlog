import { defineUserConfig } from "vuepress";
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/newBlog/",
  plugins:[
    docsearchPlugin({}),
  ],
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
    headers: {
      // 用到哪一级就提取哪一级
      level: [2, 3, 4, 5, 6],
    },
  },
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
