import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "后端开发", icon: "mdi:language-java", link: "/home.md" },
  { text: "计算机基础", icon: "mdi:desktop-classic", link: "/计算机基础/" },
  { text: "AI应用开发", icon: "mdi:robot-outline", link: "/AI/" },
  { text: "AI编程", icon: "mdi:code-tags", link: "/AI编程/" },
  {
    text: "知识星球",
    icon: "mdi:earth",
    children: [
      {
        text: "星球介绍",
        icon: "mdi:information-outline",
        link: "/关于作者/zhishixingqiu-two-years.md",
      },
      {
        text: "实战项目",
        icon: "mdi:projector-screen-outline",
        link: "/星球专栏/interview-guide.md",
      },
      {
        text: "星球专栏",
        icon: "mdi:book-open-page-variant-outline",
        link: "/星球专栏/",
      },
      {
        text: "优质主题汇总",
        icon: "mdi:star-outline",
        link: "https://www.yuque.com/snailclimb/rpkqw1/ncxpnfmlng08wlf1",
      },
    ],
  },
  {
    text: "推荐阅读",
    icon: "mdi:book-open-page-variant-outline",
    children: [
      { text: "开源项目", icon: "mdi:github", link: "/开源项目/" },
      {
        text: "技术书籍",
        icon: "mdi:book-open-page-variant-outline",
        link: "/技术书单/",
      },
      {
        text: "程序人生",
        icon: "mdi:code-tags",
        link: "/优质技术文章/",
      },
    ],
  },
  {
    text: "网站相关",
    icon: "mdi:information-outline",
    children: [
      {
        text: "关于作者",
        icon: "mdi:account-edit-outline",
        link: "/关于作者/",
      },
      {
        text: "PDF下载",
        icon: "mdi:file-pdf-box",
        link: "/面试准备/pdf-interview-javaguide.md",
      },
      {
        text: "面试突击",
        icon: "mdi:file-pdf-box",
        link: "https://interview.javaguide.cn/home.html",
      },
      {
        text: "更新历史",
        icon: "mdi:history",
        link: "/timeline/",
      },
    ],
  },
]);
