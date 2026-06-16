import { ICONS, createImportantSection } from "./constants.js";

export const csBasics = [
  {
    text: "网络",
    prefix: "计算机网络/",
    icon: ICONS.NETWORK,
    children: [
      {
        text: "面试题",
        icon: ICONS.INTERVIEW,
        children: [
          {
            text: "⭐️计算机网络常见面试题总结（上）",
            link: "计算机网络常见面试题01",
          },
          {
            text: "⭐️计算机网络常见面试题总结（下）",
            link: "计算机网络常见面试题02",
          },
          // { text: "计算机网络知识总结", link: "谢希仁计算机网络总结" },
        ],
      },
      {
        text: "基础",
        icon: ICONS.STAR,
        children: [
          {
            text: "OSI 七层模型与 TCP/IP 四层模型详解",
            link: "OSI与TCPIP模型",
          },
          {
            text: "从输入 URL 到页面展示到底发生了什么？",
            link: "从输入URL到页面展示",
          },
        ],
      },
      {
        text: "应用层",
        icon: ICONS.CODE,
        children: [
          { text: "⭐️应用层常见协议总结", link: "应用层协议" },
          { text: "⭐️HTTP vs HTTPS", link: "HTTP与HTTPS对比" },
          { text: "⭐️有了HTTP，为什么还要RPC？", link: "HTTP与RPC对比" },
          {
            text: "HTTPS 握手里的 RSA 和 ECDHE",
            link: "HTTPS握手RSA与ECDHE",
          },
          { text: "HTTP 1.0 vs HTTP 1.1", link: "HTTP1.0与HTTP1.1对比" },
          { text: "HTTP 常见状态码总结", link: "HTTP状态码" },
          { text: "DNS 域名系统详解", link: "DNS详解" },
        ],
      },
      {
        text: "传输层",
        icon: ICONS.NETWORK,
        children: [
          {
            text: "⭐️TCP 三次握手和四次挥手",
            link: "TCP三次握手四次挥手",
          },
          { text: "TCP TIME_WAIT 详解", link: "TCP-TIME-WAIT详解" },
          {
            text: "TCP Keepalive和HTTP Keep-Alive有什么区别？",
            link: "TCP与HTTP-Keepalive对比",
          },
          {
            text: "TCP 字节流 vs UDP 报文",
            link: "TCP字节流与UDP报文",
          },
          {
            text: "⭐️TCP 如何保证可靠传输？",
            link: "TCP可靠传输",
          },
          {
            text: "能 Ping 通，TCP 就一定能连通吗？",
            link: "Ping通TCP不一定能连",
          },
          {
            text: "TCP 和 UDP 可以使用同一个端口吗？",
            link: "TCP与UDP能否用同一端口",
          },
          {
            text: "一台主机最多能保持多少个 TCP 连接？",
            link: "单机TCP连接上限",
          },
        ],
      },
      {
        text: "网络层",
        icon: ICONS.NETWORK,
        children: [
          { text: "ARP 协议详解", link: "ARP协议" },
          { text: "NAT 协议详解", link: "NAT协议" },
        ],
      },
      {
        text: "安全",
        icon: ICONS.SECURITY,
        children: [{ text: "网络攻击常见手段总结", link: "网络攻击手段" }],
      },
    ],
  },
  {
    text: "操作系统",
    prefix: "操作系统/",
    icon: ICONS.OS,
    children: [
      "操作系统常见面试题01",
      "操作系统常见面试题02",
      {
        text: "Linux",
        icon: ICONS.LINUX,
        children: ["Linux入门", "Shell入门"],
      },
    ],
  },
  {
    text: "数据结构",
    prefix: "数据结构/",
    icon: ICONS.DATA_STRUCTURE,
    collapsible: true,
    children: [
      { text: "线性数据结构", link: "线性数据结构" },
      { text: "树结构", link: "树" },
      { text: "图", link: "图" },
      { text: "堆", link: "堆" },
      { text: "红黑树", link: "红黑树" },
      { text: "布隆过滤器", link: "布隆过滤器" },
    ],
  },
  {
    text: "算法",
    prefix: "算法/",
    icon: ICONS.ALGORITHM,
    collapsible: true,
    children: [
      "经典算法题推荐",
      "数据结构题推荐",
      "字符串算法题",
      "链表算法题",
      "剑指Offer",
      "十大经典排序算法",
    ],
  },
];
