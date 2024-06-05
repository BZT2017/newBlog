import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/docs/life/": [
    {
      text: "时光机",
      children: [
        "happyTime",
        "emo",
      ]
    },
    {
      text: "分享",
      prefix: "share/",
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
  "/docs/interview/": [
    {
      text: "js基础",
      children: [
        "/docs/interview/base/初级.md",
        "/docs/interview/base/中级.md",
        "/docs/interview/base/高级.md",
      ]
    },
    {
      text: "CSS",
      children: [
        "/docs/interview/css.md",
      ]
    },
    {
      text: "vue2",
      children: [
        "/docs/interview/vue.md",
      ]
    },
    {
      text: "vue3",
      children: [
        "/docs/interview/vue3.md",
      ]
    },
    {
      text: "webpack",
      children: [
        "/docs/interview/webpack.md",
      ]
    },
    {
      text: "typescript",
      children: [
        "/docs/interview/typescript.md",
      ]
    },
    {
      text: "微信小程序",
      children: [
        "/docs/interview/wxApp.md",
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
