import { defineUserConfig } from "vuepress";
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { searchProPlugin } from "vuepress-plugin-search-pro";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  plugins: [
    searchProPlugin({
      // 配置选项
      indexContent: true, // 索引全部内容
      customFields: [ // 为分类和标签添加索引
        {
          formatter: "分类：$content",
          getter: (page) => page.frontmatter.category as string | string[] | null,
        },
        {
          formatter: "标签：$content",
          getter: (page) => page.frontmatter.tag as string | string[] | null,
        },
      ],
    }),
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
  markdown: {
    headers: {
      // 用到哪一级就提取哪一级
      level: [2, 3, 4, 5, 6],
    },
  },
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
