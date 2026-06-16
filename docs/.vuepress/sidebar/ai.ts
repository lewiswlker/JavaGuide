import { arraySidebar } from "vuepress-theme-hope";
import { ICONS } from "./constants.js";

export const ai = arraySidebar([
  {
    text: "面试题",
    icon: ICONS.INTERVIEW,
    prefix: "面试题/",
    children: [
      { text: "⭐️AI 应用开发面试指南", link: "AI面试指南" },
      { text: "大模型基础面试题总结", link: "大模型面试题" },
      { text: "AI Agent 面试题总结", link: "Agent面试题" },
      { text: "RAG 面试题总结", link: "RAG面试题" },
      {
        text: "AI 系统设计面试题总结",
        link: "AI系统设计面试题",
      },
    ],
  },
  {
    text: "大模型基础",
    icon: ICONS.MACHINE_LEARNING,
    prefix: "大模型基础/",
    children: [
      { text: "万字拆解 LLM 运行机制", link: "大模型运行机制" },
      { text: "大模型 API 调用工程实践", link: "大模型API调用" },
      {
        text: "大模型结构化输出详解",
        link: "结构化输出与函数调用",
      },
      { text: "AI 应用评测体系", link: "大模型评测" },
    ],
  },
  {
    text: "AI Agent",
    icon: ICONS.CHAT,
    prefix: "agent/",
    children: [
      { text: "⭐️AI Agent 核心概念详解", link: "Agent核心概念" },
      { text: "⭐️AI Agent 记忆系统详解", link: "Agent记忆系统" },
      { text: "提示词工程实战指南", link: "提示词工程" },
      { text: "上下文工程实战指南", link: "上下文工程" },
      { text: "万字详解 Agent Skills", link: "Agent-Skills" },
      { text: "万字拆解 MCP 协议", link: "MCP协议" },
      { text: "Harness Engineering 详解", link: "Harness工程" },
      { text: "AI 工作流详解", link: "AI工作流" },
    ],
  },
  {
    text: "RAG",
    icon: ICONS.SEARCH,
    prefix: "rag/",
    children: [
      { text: "⭐️RAG 基础概念详解", link: "RAG基础" },
      {
        text: "RAG 文档处理与切分策略",
        link: "RAG文档处理",
      },
      {
        text: "⭐️RAG 向量索引算法和向量数据库",
        link: "RAG向量存储",
      },
      {
        text: "RAG 知识库文档更新策略",
        link: "RAG知识更新",
      },
      { text: "GraphRAG 详解", link: "GraphRAG详解" },
      { text: "RAG 检索优化", link: "RAG检索优化" },
    ],
  },
  {
    text: "AI 系统设计",
    icon: ICONS.DESIGN,
    prefix: "系统设计/",
    children: [
      {
        text: "AI 应用系统设计",
        link: "AI应用系统设计",
      },
      { text: "大模型网关详解", link: "大模型网关" },
      { text: "AI 语音技术详解", link: "AI语音技术" },
    ],
  },
]);
