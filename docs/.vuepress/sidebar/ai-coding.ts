import { arraySidebar } from "vuepress-theme-hope";
import { ICONS } from "./constants.js";

export const aiCoding = arraySidebar([
  {
    text: "AI 编程技巧",
    icon: ICONS.TOOL,
    children: [
      {
        text: "⭐️Vibe Coding 实用技巧总结",
        link: "实践经验/Vibe-Coding技巧",
      },
      {
        text: "⭐️Claude Code 使用指南",
        link: "实践经验/Claude-Code使用指南",
      },
      {
        text: "⭐️CLAUDE.md 最佳实践",
        link: "实践经验/CLAUDE.md最佳实践",
      },
      {
        text: "Claude Code 核心命令详解",
        link: "实践经验/Claude-Code命令",
      },
      {
        text: "⭐️AI 编程必备 Skills 推荐",
        link: "实践经验/AI编程必备Skills",
      },
      {
        text: "OpenAI Codex 最佳实践指南",
        link: "实践经验/Codex最佳实践",
      },
      {
        text: "AI 编程选 CLI 还是 IDE？",
        link: "实践经验/CLI还是IDE",
      },
      {
        text: "Claude Code Agent View 多会话管理",
        link: "实践经验/Claude-Code-AgentView",
      },
      {
        text: "AI 编程开放性面试题",
        link: "实践经验/AI编程开放性面试题",
      },
      {
        text: "Spec Coding 规范驱动编程",
        link: "实践经验/规范驱动编程",
      },
    ],
  },
  {
    text: "AI 编程实战",
    icon: ICONS.CODE,
    children: [
      {
        text: "IDEA + Qoder 插件多场景实战",
        link: "实战案例/idea-qoder-plugin",
      },
      {
        text: "Trae + MiniMax 多场景实战",
        link: "实战案例/trae-m2.7",
      },
      {
        text: "Claude Code 接入第三方模型实战",
        link: "实战案例/cc-glm5.1",
      },
      {
        text: "DeepSeek V4 + Claude Code 实战",
        link: "实战案例/deepseek-v4-claude-code",
      },
      {
        text: "MiniMax M3 + Claude Code 实战",
        link: "实战案例/cc-m3",
      },
      {
        text: "IDEA + CC GUI 插件实战",
        link: "项目/Claude-Code-GUI实战",
      },
    ],
  },
]);
