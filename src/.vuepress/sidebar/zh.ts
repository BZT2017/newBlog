import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/docs/life/": [
    {
      text: "时光机",
      children: [
        "happyTime",
        "emo",
      ]
    }
  ],
  "/docs/share/": [
    {
      text: "分享",
      children: "structure",
    },
  ],
  "/docs/program/": [
    {
      text: "算法",
      children: [
        "/docs/program/algorithm/base.md",
        "/docs/program/algorithm/api.md",
        "/docs/program/algorithm/problems.md",
        "/docs/program/algorithm/hw-cd.md",
      ]
    },
    {
      text: "设计模式",
      children: [
        "/docs/program/designPattern.md",
      ]
    },
    {
      text: "常用命令行",
      children: [
        "/docs/program/commands/git.md",
        "/docs/program/commands/npm.md",
        "/docs/program/commands/nvm.md",
        "/docs/program/commands/yarn.md",
      ]
    },
  ],
  "/docs/interview/base": [
    {
      text: "js基础",
      children: [
        "/docs/interview/base/初级.md",
        "/docs/interview/base/中级.md",
        "/docs/interview/base/高级.md",
      ]
    },
  ],
  "/docs/interview/css": [
    {
      text: "CSS",
      children: [
        "/docs/interview/css.md",
      ]
    },
  ],
  "/docs/interview/vue": [
    {
      text: "vue2",
      children: [
        "/docs/interview/vue/vue.md",
      ]
    },
    {
      text: "vue3",
      children: [
        "/docs/interview/vue/vue3.md",
      ]
    },
  ],
  "/docs/interview/webpack": [
    {
      text: "webpack",
      children: [
        "/docs/interview/webpack.md",
      ]
    },
  ],
  "/docs/interview/typescript": [
    {
      text: "typescript",
      children: [
        "/docs/interview/typescript.md",
      ]
    },
  ],
  "/docs/interview": [
    {
      text: "服务端",
      children: [
        "/docs/interview/nodejs.md",
        "/docs/interview/express.md",
      ]
    },
  ],
  "/docs/interview/mobileTerminal": [
    {
      text: "移动端",
      children: [
        "/docs/interview/mobileTerminal/wxApp.md",
      ]
    },
  ],
  "/docs/team/": [
    {
      text: "编码规范",
      children: [
        "/docs/team/codingStandard.md",
      ]
    },
    {
      text: "持续集成与持续部署",
      children: [
        "/docs/team/ci-cd/ci-cd.md",
        "/docs/team/ci-cd/git-flow.md",
        "/docs/team/ci-cd/jenkins.md",
      ]
    },
  ],
});
