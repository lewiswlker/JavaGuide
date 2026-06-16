import { sidebar } from "vuepress-theme-hope";

import { aboutTheAuthor } from "./about-the-author.js";
import { ai } from "./ai.js";
import { aiCoding } from "./ai-coding.js";
import { books } from "./books.js";
import { csBasics } from "./cs-basics.js";
import { highQualityTechnicalArticles } from "./high-quality-technical-articles.js";
import { openSourceProject } from "./open-source-project.js";
import { zhuanlan } from "./zhuanlan.js";
import {
  ICONS,
  createImportantSection,
  createSourceCodeSection,
} from "./constants.js";

export default sidebar({
  // 应该把更精确的路径放置在前边
  "/AI编程/": aiCoding,
  "/AI/": ai,
  "/计算机基础/": csBasics,
  "/开源项目/": openSourceProject,
  "/技术书单/": books,
  "/关于作者/": aboutTheAuthor,
  "/优质技术文章/": highQualityTechnicalArticles,
  "/星球专栏/": zhuanlan,
  // 必须放在最后面
  "/": [
    {
      text: "项目介绍",
      icon: ICONS.STAR,
      collapsible: true,
      prefix: "项目介绍/",
      children: ["intro", "use-suggestion", "contribution-guideline", "faq"],
    },
    {
      text: "面试准备（必看）",
      icon: ICONS.INTERVIEW,
      collapsible: true,
      prefix: "面试准备/",
      children: [
        {
          text: "面试准备知识体系",
          link: "/面试准备/",
        },
        "后端面试通关计划",
        "如何高效准备面试",
        "简历指南",
        "面试重点",
        "pdf-interview-javaguide",
        "Java学习路线",
        "项目经验指南",
        "面试紧张应对",
        "实习经历指南",
      ],
    },
    {
      text: "Java",
      icon: ICONS.JAVA,
      collapsible: true,
      prefix: "java/",
      children: [
        {
          text: "Java 知识体系",
          link: "/java/",
        },
        {
          text: "基础",
          prefix: "基础/",
          icon: ICONS.BASIC,
          children: [
            "Java基础常见面试题01",
            "Java基础常见面试题02",
            "Java基础常见面试题03",
            createImportantSection([
              "为什么Java只有值传递",
              "序列化",
              "泛型与通配符",
              "反射",
              "代理模式",
              "BigDecimal详解",
              "Unsafe详解",
              "SPI机制",
              "语法糖",
            ]),
          ],
        },
        {
          text: "集合",
          prefix: "集合/",
          icon: ICONS.CONTAINER,
          children: [
            "Java集合常见面试题01",
            "Java集合常见面试题02",
            "Java集合使用注意事项",
            createSourceCodeSection([
              "ArrayList源码",
              "LinkedList源码",
              "HashMap源码",
              "ConcurrentHashMap源码",
              "LinkedHashMap源码",
              "CopyOnWriteArrayList源码",
              "ArrayBlockingQueue源码",
              "PriorityQueue源码",
              "DelayQueue源码",
            ]),
          ],
        },
        {
          text: "并发编程",
          prefix: "并发/",
          icon: ICONS.PERFORMANCE,
          children: [
            "Java并发常见面试题01",
            "Java并发常见面试题02",
            "Java并发常见面试题03",
            createImportantSection([
              "乐观锁与悲观锁",
              "CAS详解",
              "JMM内存模型",
              "线程池详解",
              "线程池最佳实践",
              "Java并发集合",
              "AQS详解",
              "原子类",
              "ThreadLocal详解",
              "CompletableFuture详解",
              "虚拟线程",
            ]),
          ],
        },
        {
          text: "IO",
          prefix: "io/",
          icon: ICONS.CODE,
          collapsible: true,
          children: ["IO基础", "IO设计模式", "IO模型", "NIO基础"],
        },
        {
          text: "JVM",
          prefix: "jvm/",
          icon: ICONS.VIRTUAL_MACHINE,
          collapsible: true,
          children: [
            {
              text: "JVM常见面试题总结",
              link: "https://interview.javaguide.cn/java/java-jvm.html",
            },
            "运行时数据区",
            "JVM垃圾回收",
            "类文件结构",
            "类加载过程",
            "类加载器",
            "JVM参数详解",
            "JDK监控与排查工具",
            "JVM实战",
          ],
        },
        {
          text: "新特性",
          prefix: "新特性/",
          icon: ICONS.FEATURED,
          collapsible: true,
          children: [
            "Java8常用新特性",
            "Java8教程",
            "Java9新特性",
            "Java10新特性",
            "Java11新特性",
            "Java12-13新特性",
            "Java14-15新特性",
            "Java16新特性",
            "Java17新特性",
            "Java18新特性",
            "Java19新特性",
            "Java20新特性",
            "Java21新特性",
            "Java22-23新特性",
            "Java24新特性",
            "Java25新特性",
          ],
        },
      ],
    },
    {
      text: "数据库",
      icon: ICONS.DATABASE,
      prefix: "数据库/",
      collapsible: true,
      children: [
        {
          text: "数据库知识体系",
          link: "/数据库/",
        },
        {
          text: "基础",
          icon: ICONS.BASIC,
          children: [
            "basis",
            "nosql",
            "character-set",
            {
              text: "SQL",
              icon: ICONS.SQL,
              prefix: "sql/",
              collapsible: true,
              children: [
                "SQL语法总结",
                "SQL面试题01",
                "SQL面试题02",
                "SQL面试题03",
                "SQL面试题04",
                "SQL面试题05",
              ],
            },
          ],
        },
        {
          text: "MySQL",
          prefix: "mysql/",
          icon: ICONS.MYSQL,
          children: [
            "MySQL常见面试题",
            "MySQL高性能优化规范建议",
            createImportantSection([
              "MySQL索引",
              "MySQL索引失效",
              {
                text: "MySQL三大日志详解",
                link: "MySQL三大日志",
              },
              "事务隔离级别",
              "InnoDB的MVCC实现",
              "SQL在MySQL中如何执行",
              "MySQL查询缓存",
              "MySQL执行计划",
              "MySQL自增主键连续性",
              "数据库时间存储思考",
              "隐式转换导致的索引失效",
            ]),
          ],
        },
        {
          text: "Redis",
          prefix: "redis/",
          icon: ICONS.REDIS,
          children: [
            "缓存基础",
            "Redis常见面试题01",
            "Redis常见面试题02",
            createImportantSection([
              "Redis延时任务",
              "Redis-Stream消息队列",
              "三种常用缓存读写策略",
              "Redis数据结构01",
              "Redis数据结构02",
              "Redis跳表",
              "Redis持久化",
              "Redis内存碎片",
              "Redis常见阻塞问题",
              "Redis集群",
            ]),
          ],
        },
        {
          text: "Elasticsearch",
          prefix: "elasticsearch/",
          icon: ICONS.ELASTICSEARCH,
          collapsible: true,
          children: ["Elasticsearch面试题"],
        },
        {
          text: "MongoDB",
          prefix: "mongodb/",
          icon: ICONS.MONGODB,
          collapsible: true,
          children: ["MongoDB面试题01", "MongoDB面试题02"],
        },
      ],
    },
    {
      text: "开发工具",
      icon: ICONS.TOOL,
      prefix: "开发工具/",
      collapsible: true,
      children: [
        {
          text: "开发工具知识体系",
          link: "/开发工具/",
        },
        {
          text: "Maven",
          icon: ICONS.MAVEN,
          prefix: "maven/",
          children: ["Maven核心概念", "Maven最佳实践"],
        },
        {
          text: "Gradle",
          icon: ICONS.GRADLE,
          prefix: "gradle/",
          children: ["Gradle核心概念"],
        },
        {
          text: "Git",
          icon: ICONS.GIT,
          prefix: "git/",
          children: ["Git入门", "GitHub技巧"],
        },
        {
          text: "Docker",
          icon: ICONS.DOCKER,
          prefix: "docker/",
          children: ["Docker入门", "Docker实战"],
        },
        {
          text: "IDEA",
          icon: ICONS.IDEA,
          link: "https://gitee.com/SnailClimb/awesome-idea-tutorial",
        },
      ],
    },
    {
      text: "常用框架",
      prefix: "系统设计/常用框架/",
      icon: ICONS.COMPONENT,
      collapsible: true,
      children: [
        {
          text: "Spring&Spring Boot",
          icon: ICONS.SPRING_BOOT,
          prefix: "spring/",
          children: [
            "Spring面试题",
            "SpringBoot面试题",
            "Spring常用注解",
            "SpringBoot源码",
            createImportantSection([
              "IoC与AOP",
              "Spring事务",
              "Spring设计模式",
              "SpringBoot自动装配原理",
              "Spring异步",
            ]),
          ],
        },
        "mybatis/MyBatis面试题",
        "netty",
      ],
    },
    {
      text: "系统设计",
      icon: ICONS.DESIGN,
      prefix: "系统设计/",
      collapsible: true,
      children: [
        {
          text: "系统设计知识体系",
          link: "/系统设计/",
        },
        {
          text: "基础知识",
          prefix: "基础/",
          icon: ICONS.BASIC,
          collapsible: true,
          children: [
            "RESTful-API",
            "软件工程",
            "命名规范",
            "重构",
            {
              text: "单元测试指南",
              link: "单元测试指南",
            },
          ],
        },
        {
          text: "认证授权",
          prefix: "安全/",
          icon: ICONS.SECURITY,
          collapsible: true,
          children: [
            "认证授权基础",
            "JWT入门",
            "JWT优缺点",
            "SSO入门",
            "权限系统设计",
          ],
        },
        {
          text: "数据安全",
          prefix: "安全/",
          icon: ICONS.SECURITY,
          collapsible: true,
          children: [
            "加密算法",
            "敏感词过滤",
            "数据脱敏",
            "数据校验",
            "为什么是密码重置而非找回",
          ],
        },
        "system-design-questions",
        {
          text: "⭐设计模式常见面试题总结",
          link: "https://interview.javaguide.cn/system-design/design-pattern.html",
        },
        "schedule-task",
        "web-real-time-message-push",
      ],
    },
    {
      text: "分布式",
      icon: ICONS.DISTRIBUTED,
      prefix: "分布式系统/",
      collapsible: true,
      children: [
        {
          text: "分布式系统知识体系",
          link: "/分布式系统/",
        },
        {
          text: "⭐分布式高频面试题",
          link: "分布式高频面试题",
        },
        {
          text: "理论&算法&协议",
          icon: ICONS.ALGORITHM,
          prefix: "理论与协议/",
          collapsible: true,
          children: [
            { text: "CAP定理与BASE理论详解", link: "CAP与BASE理论" },
            { text: "Paxos算法详解", link: "Paxos算法" },
            { text: "Raft算法详解", link: "Raft算法" },
            { text: "ZAB协议详解", link: "ZAB协议" },
            { text: "Gossip协议详解", link: "Gossip协议" },
            { text: "一致性哈希算法详解", link: "一致性哈希" },
          ],
        },
        {
          text: "API网关",
          icon: ICONS.GATEWAY,
          children: [
            { text: "API网关基础知识总结", link: "API网关基础" },
            {
              text: "Spring Cloud Gateway面试题总结",
              link: "Spring-Cloud-Gateway面试题",
            },
          ],
        },
        {
          text: "分布式ID",
          icon: ICONS.ID,
          children: [
            { text: "分布式ID生成方案详解", link: "分布式ID生成" },
            { text: "分布式ID设计实战指南", link: "分布式ID设计" },
          ],
        },
        {
          text: "分布式锁",
          icon: ICONS.LOCK,
          children: [
            { text: "分布式锁入门介绍", link: "分布式锁入门" },
            {
              text: "分布式锁常见实现方案总结",
              link: "分布式锁实现方案",
            },
          ],
        },
        {
          text: "分布式事务",
          icon: ICONS.TRANSACTION,
          children: [{ text: "分布式事务解决方案总结", link: "分布式事务" }],
        },
        {
          text: "分布式配置中心",
          icon: ICONS.MAVEN,
          children: [
            {
              text: "分布式配置中心面试题总结",
              link: "分布式配置中心",
            },
          ],
        },
        {
          text: "RPC",
          prefix: "rpc/",
          icon: ICONS.RPC,
          collapsible: true,
          children: [
            { text: "RPC基础知识总结", link: "RPC基础" },
            { text: "Dubbo面试题总结", link: "Dubbo面试题" },
          ],
        },
        {
          text: "ZooKeeper",
          prefix: "distributed-process-coordination/zookeeper/",
          icon: ICONS.FRAMEWORK,
          collapsible: true,
          children: [
            { text: "ZooKeeper入门指南", link: "ZooKeeper入门" },
            { text: "ZooKeeper进阶详解", link: "ZooKeeper进阶" },
          ],
        },
      ],
    },
    {
      text: "高性能",
      icon: ICONS.PERFORMANCE,
      prefix: "高性能/",
      collapsible: true,
      children: [
        {
          text: "高性能系统知识体系",
          link: "/高性能/",
        },
        {
          text: "⭐高性能系统设计高频面试题",
          link: "高性能面试题",
        },
        {
          text: "CDN",
          icon: ICONS.CDN,
          children: ["CDN详解"],
        },
        {
          text: "负载均衡",
          icon: ICONS.LOAD_BALANCING,
          children: ["负载均衡"],
        },
        {
          text: "数据库优化",
          icon: ICONS.MYSQL,
          children: [
            "读写分离与分库分表",
            "数据冷热分离",
            "SQL优化",
            "深分页优化",
          ],
        },
        {
          text: "消息队列",
          prefix: "消息队列/",
          icon: ICONS.MQ,
          collapsible: true,
          children: [
            "消息队列基础",
            "Disruptor面试题",
            "Kafka面试题",
            "RocketMQ面试题",
            "RabbitMQ面试题",
          ],
        },
      ],
    },
    {
      text: "高可用",
      icon: ICONS.HIGH_AVAILABLE,
      prefix: "高可用/",
      collapsible: true,
      children: [
        {
          text: "高可用系统知识体系",
          link: "/高可用/",
        },
        {
          text: "⭐高可用系统面试题总结",
          link: "高可用面试题",
        },
        {
          text: "高可用系统设计指南",
          link: "高可用系统设计",
        },
        {
          text: "⭐接口幂等方案总结",
          link: "接口幂等",
        },
        {
          text: "⭐服务限流详解",
          link: "服务限流",
        },
        {
          text: "⭐超时和重试机制详解",
          link: "超时与重试",
        },
        {
          text: "服务降级与熔断详解",
          link: "降级与熔断",
        },
        {
          text: "冗余设计详解",
          link: "冗余设计",
        },
        {
          text: "性能测试入门",
          link: "性能测试入门",
        },
      ],
    },
  ],
});
