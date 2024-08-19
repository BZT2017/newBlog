import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "随记",
    icon: "mdi:notebook-outline",
    children: [
      {
        text: "时光机",
        link: "/docs/life/happyTime.md",
        icon: "bi-joystick"
      },
      {
        text: "分享",
        link: "/docs/share/mini-skateboards.md",
        icon: "streamline-emojis:four-leaf-clover"
      },
    ]
  },
  {
    text: "编程基础",
    icon: "solar:programming-bold",
    children: [
      {
        text: "常用算法",
        link: "/docs/program/algorithm/base.md",
        icon: "hugeicons:algorithm",
      },
      {
        text: "设计模式",
        link: "/docs/program/designPattern.md",
        icon: "material-symbols:pattern",
      },
      {
        text: "常用命令行",
        link: "/docs/program/commands/git.md",
        icon: "ri:slash-commands"
      },
    ]
  },
  {
    text: "团队协作",
    icon: "ant-design:team-outlined",
    children: [
      {
        text: "编码规范",
        link: "/docs/team/codingStandard.md",  
        icon: "game-icons:corset",
      },
      {
        text: "持续集成与持续部署",
        link: "/docs/team/ci-cd/ci-cd.md",  
        icon: "line-md:my-location-loop",
      },
    ]
  },
  {
    text: "知识点",
    icon: "bi-signpost-2",
    children: [
      {
        text: "JS基础",
        link: "/docs/interview/base/初级.md",
        icon: "vscode-icons:file-type-js-official",
      },
      {
        text: "CSS",
        link: "/docs/interview/css.md",
        icon: "vscode-icons:file-type-css",
      },
      {
        text: "Vue",
        link: "/docs/interview/vue/vue.md",
        icon: "vscode-icons:file-type-vue",
      },
      {
        text: "Typescript",
        link: "/docs/interview/typescript.md",
        icon: "devicon:typescript",
      },
      {
        text: "Webpack",
        link: "/docs/interview/webpack.md",
        icon: "logos:webpack",
      },
      {
        text: "移动端",
        link: "/docs/interview/mobileTerminal/wxApp.md",
        icon: "carbon:mobile",
      },
      {
        text: "服务端",
        link: "/docs/interview/nodejs.md",
        icon: "uil:server",
      },
      
    ]
  },
  {
    text: "常用工具",
    icon: "la-toolbox-solid",
    children: [
      {
        text: "lodash",
        link: "https://www.lodashjs.com/",
        icon: "logos:lodash"
      },
      {
        text: "DNS解析",
        link: "https://www.ipaddress.com/",
        icon: "eos-icons:dns"
      },
      {
        text: "Oh, Vue Icons",
        link: "https://oh-vue-icons.js.org/zh/",
        icon: ""
      },
      {
        text: "Iconify",
        link: "https://icon-sets.iconify.design/",
        icon: "simple-icons:iconify"
      },
      {
        text: "在线图片压缩",
        link: "https://tinypng.com/",
        icon: "noto:panda"
      },
      
      
    ]
  }
]);
