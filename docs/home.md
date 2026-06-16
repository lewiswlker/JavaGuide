---
icon: "mdi:head-lightbulb-outline"
title: Java 面试指南（JavaGuide 后端通用面试题总结）
description: JavaGuide Java 面试指南，系统整理 Java 八股文和后端面试题，覆盖 Java 基础、集合、并发、JVM、Spring、MySQL、Redis、系统设计与分布式，适用于校招和社招复习。
sitemap:
  changefreq: weekly
  priority: 1
head:
  - - meta
    - name: keywords
      content: Java面试,Java面试指南,Java八股文,Java面试题,Java基础面试,JVM面试,并发面试,线程池面试,Spring面试,MySQL面试,Redis面试,系统设计面试,分布式面试,后端面试
---

<!-- @include: @small-advertisement.snippet.md -->

<!-- markdownlint-disable MD024 -->

JavaGuide 是一份系统化的 **Java 面试指南** 和**后端通用面试复习资料**，内容覆盖 Java 基础、集合、并发编程、JVM、Spring/Spring Boot、MySQL、Redis、分布式、高并发、高可用和系统设计等核心知识点。

如果你正在准备校招、社招或跳槽面试，可以从 [Java 后端面试通关计划](./面试准备/后端面试通关计划.md) 开始，再按下面的模块逐步复习高频 Java 八股文和后端面试题。

本站所有内容都已免费开源，欢迎一起[维护完善](http://localhost:8080/项目介绍/contribution-guideline.html)，有帮助的话，欢迎 Star！

- **项目地址**：<https://github.com/Snailclimb/JavaGuide>
- **在线阅读**：<https://javaguide.cn/>

## 面试准备

- [⭐Java 后端面试通关计划（涵盖后端通用体系）](./面试准备/后端面试通关计划.md) (一定要看 :+1:)
- [如何高效准备 Java 面试？](./面试准备/如何高效准备面试.md)
- [Java 后端面试重点总结](./面试准备/面试重点.md)
- [Java 学习路线（最新版，4w+ 字）](./面试准备/Java学习路线.md)
- [程序员简历编写指南](./面试准备/简历指南.md)
- [项目经验指南](./面试准备/项目经验指南.md)
- [面试太紧张怎么办？](./面试准备/面试紧张应对.md)
- [校招没有实习经历怎么办？实习经历怎么写？](./面试准备/实习经历指南.md)

## Java

### 基础

**知识点/面试题总结** : (必看:+1: )：

- [Java 基础常见知识点&面试题总结(上)](./java/基础/Java基础常见面试题01.md)
- [Java 基础常见知识点&面试题总结(中)](./java/基础/Java基础常见面试题02.md)
- [Java 基础常见知识点&面试题总结(下)](./java/基础/Java基础常见面试题03.md)

**重要知识点详解**：

- [为什么 Java 中只有值传递？](./java/基础/为什么Java只有值传递.md)
- [Java 序列化详解](./java/基础/序列化.md)
- [泛型&通配符详解](./java/基础/泛型与通配符.md)
- [Java 反射机制详解](./java/基础/反射.md)
- [Java 代理模式详解](./java/基础/代理模式.md)
- [BigDecimal 详解](./java/基础/BigDecimal详解.md)
- [Java 魔法类 Unsafe 详解](./java/基础/Unsafe详解.md)
- [Java SPI 机制详解](./java/基础/SPI机制.md)
- [Java 语法糖详解](./java/基础/语法糖.md)

### 集合

**知识点/面试题总结**：

- [Java 集合常见知识点&面试题总结(上)](./java/集合/Java集合常见面试题01.md) (必看 :+1:)
- [Java 集合常见知识点&面试题总结(下)](./java/集合/Java集合常见面试题02.md) (必看 :+1:)
- [Java 集合使用注意事项总结](./java/集合/Java集合使用注意事项.md)

**源码分析**：

- [ArrayList 核心源码+扩容机制分析](./java/集合/ArrayList源码.md)
- [LinkedList 核心源码分析](./java/集合/LinkedList源码.md)
- [HashMap 核心源码+底层数据结构分析](./java/集合/HashMap源码.md)
- [ConcurrentHashMap 核心源码+底层数据结构分析](./java/集合/ConcurrentHashMap源码.md)
- [LinkedHashMap 核心源码分析](./java/集合/LinkedHashMap源码.md)
- [CopyOnWriteArrayList 核心源码分析](./java/集合/CopyOnWriteArrayList源码.md)
- [ArrayBlockingQueue 核心源码分析](./java/集合/ArrayBlockingQueue源码.md)
- [PriorityQueue 核心源码分析](./java/集合/PriorityQueue源码.md)
- [DelayQueue 核心源码分析](./java/集合/PriorityQueue源码.md)

### IO

- [IO 基础知识总结](./java/io/IO基础.md)
- [IO 设计模式总结](./java/io/IO设计模式.md)
- [IO 模型详解](./java/io/IO模型.md)
- [NIO 核心知识总结](./java/io/NIO基础.md)

### 并发

**知识点/面试题总结** : (必看 :+1:)

- [Java 并发常见知识点&面试题总结（上）](./java/并发/Java并发常见面试题01.md)
- [Java 并发常见知识点&面试题总结（中）](./java/并发/Java并发常见面试题02.md)
- [Java 并发常见知识点&面试题总结（下）](./java/并发/Java并发常见面试题03.md)

**重要知识点详解**：

- [乐观锁和悲观锁详解](./java/并发/乐观锁与悲观锁.md)
- [CAS 详解](./java/并发/CAS详解.md)
- [JMM（Java 内存模型）详解](./java/并发/JMM内存模型.md)
- **线程池**：[Java 线程池详解](./java/并发/线程池详解.md)、[Java 线程池最佳实践](./java/并发/线程池最佳实践.md)
- [ThreadLocal 详解](./java/并发/ThreadLocal详解.md)
- [Java 并发容器总结](./java/并发/Java并发集合.md)
- [Atomic 原子类总结](./java/并发/原子类.md)
- [AQS 详解](./java/并发/AQS详解.md)
- [CompletableFuture 详解](./java/并发/CompletableFuture详解.md)

### JVM (必看 :+1:)

JVM 这部分内容主要参考 [JVM 虚拟机规范-Java8](https://docs.oracle.com/javase/specs/jvms/se8/html/index.html) 和周志明老师的[《深入理解 Java 虚拟机（第 3 版）》](https://book.douban.com/subject/34907497/) （强烈建议阅读多遍！）。

- **[Java 内存区域](./java/jvm/运行时数据区.md)**
- **[JVM 垃圾回收](./java/jvm/JVM垃圾回收.md)**
- [类文件结构](./java/jvm/类文件结构.md)
- **[类加载过程](./java/jvm/类加载过程.md)**
- [类加载器](./java/jvm/类加载器.md)
- [【待完成】最重要的 JVM 参数总结（翻译完善了一半）](./java/jvm/JVM参数详解.md)
- [【加餐】大白话带你认识 JVM](./java/jvm/JVM入门.md)
- [JDK 监控和故障处理工具](./java/jvm/JDK监控与排查工具.md)

### 新特性

- **Java 8**：[Java 8 新特性总结（翻译）](./java/新特性/Java8教程.md)、[Java8 常用新特性总结](./java/新特性/Java8常用新特性.md)
- [Java 9 新特性概览](./java/新特性/Java9新特性.md)
- [Java 10 新特性概览](./java/新特性/Java10新特性.md)
- [Java 11 新特性概览](./java/新特性/Java11新特性.md)
- [Java 12 & 13 新特性概览](./java/新特性/Java12-13新特性.md)
- [Java 14 & 15 新特性概览](./java/新特性/Java14-15新特性.md)
- [Java 16 新特性概览](./java/新特性/Java16新特性.md)
- [Java 17 新特性概览](./java/新特性/Java17新特性.md)
- [Java 18 新特性概览](./java/新特性/Java18新特性.md)
- [Java 19 新特性概览](./java/新特性/Java19新特性.md)
- [Java 20 新特性概览](./java/新特性/Java20新特性.md)
- [Java 21 新特性概览](./java/新特性/Java21新特性.md)
- [Java 22 & 23 新特性概览](./java/新特性/Java22-23新特性.md)
- [Java 24 新特性概览](./java/新特性/Java24新特性.md)
- [Java 25 新特性概览](./java/新特性/Java25新特性.md)

## 计算机基础

> 计算机基础（计算机网络、操作系统、数据结构与算法）已独立为单独模块，详见 [计算机基础知识总结](./计算机基础/)。

[![Banner](https://oss.javaguide.cn/xingqiu/xingqiu.png)](./关于作者/zhishixingqiu-two-years.md)

## 数据库

### 基础

- [数据库基础知识总结](./数据库/basis.md)
- [NoSQL 基础知识总结](./数据库/nosql.md)
- [字符集详解](./数据库/character-set.md)
- SQL :
  - [SQL 语法基础知识总结](./数据库/sql/SQL语法总结.md)
  - [SQL 常见面试题总结](./数据库/sql/SQL面试题01.md)

### MySQL

**知识点/面试题总结：**

- **[MySQL 常见知识点&面试题总结](./数据库/mysql/MySQL常见面试题.md)** (必看 :+1:)
- [MySQL 高性能优化规范建议总结](./数据库/mysql/MySQL高性能优化规范建议.md)

**重要知识点：**

- [MySQL 索引详解](./数据库/mysql/MySQL索引.md)
- [MySQL 索引失效场景总结](./数据库/mysql/MySQL索引失效.md)
- [MySQL 事务隔离级别图文详解)](./数据库/mysql/事务隔离级别.md)
- [MySQL 三大日志(binlog、redo log 和 undo log)详解](./数据库/mysql/MySQL三大日志.md)
- [InnoDB 存储引擎对 MVCC 的实现](./数据库/mysql/InnoDB的MVCC实现.md)
- [SQL 语句在 MySQL 中的执行过程](./数据库/mysql/SQL在MySQL中如何执行.md)
- [MySQL 查询缓存详解](./数据库/mysql/MySQL查询缓存.md)
- [MySQL 执行计划分析](./数据库/mysql/MySQL执行计划.md)
- [MySQL 自增主键一定是连续的吗](./数据库/mysql/MySQL自增主键连续性.md)
- [MySQL 时间类型数据存储建议](./数据库/mysql/数据库时间存储思考.md)
- [MySQL 隐式转换造成索引失效](./数据库/mysql/隐式转换导致的索引失效.md)

### Redis

**知识点/面试题总结** : (必看:+1: )：

- [Redis 常见知识点&面试题总结(上)](./数据库/redis/Redis常见面试题01.md)
- [Redis 常见知识点&面试题总结(下)](./数据库/redis/Redis常见面试题02.md)

**重要知识点：**

- [3 种常用的缓存读写策略详解](./数据库/redis/三种常用缓存读写策略.md)
- [Redis 能做消息队列吗？怎么实现？](./数据库/redis/Redis-Stream消息队列.md)
- [Redis 5 种基本数据结构详解](./数据库/redis/Redis数据结构01.md)
- [Redis 3 种特殊数据结构详解](./数据库/redis/Redis数据结构02.md)
- [Redis 持久化机制详解](./数据库/redis/Redis持久化.md)
- [Redis 内存碎片详解](./数据库/redis/Redis内存碎片.md)
- [Redis 常见阻塞原因总结](./数据库/redis/Redis常见阻塞问题.md)
- [Redis 集群详解](./数据库/redis/Redis集群.md)

### MongoDB

- [MongoDB 常见知识点&面试题总结(上)](./数据库/mongodb/MongoDB面试题01.md)
- [MongoDB 常见知识点&面试题总结(下)](./数据库/mongodb/MongoDB面试题02.md)

## 搜索引擎

[Elasticsearch 常见面试题总结(付费)](./数据库/elasticsearch/Elasticsearch面试题.md)

![JavaGuide 官方公众号](https://oss.javaguide.cn/github/项目介绍/gongzhonghaoxuanchuan.png)

## 开发工具

### Maven

- [Maven 核心概念总结](./开发工具/maven/Maven核心概念.md)
- [Maven 最佳实践](./开发工具/maven/Maven最佳实践.md)

### Gradle

[Gradle 核心概念总结](./开发工具/gradle/Gradle核心概念.md)（可选，目前国内还是使用 Maven 普遍一些）

### Docker

- [Docker 核心概念总结](./开发工具/docker/Docker入门.md)
- [Docker 实战](./开发工具/docker/Docker实战.md)

### Git

- [Git 核心概念总结](./开发工具/git/Git入门.md)
- [GitHub 实用小技巧总结](./开发工具/git/GitHub技巧.md)

## 系统设计

- [⭐系统设计常见面试题总结](./系统设计/system-design-questions.md)
- [⭐设计模式常见面试题总结](https://interview.javaguide.cn/系统设计/design-pattern.html)

### 基础

- [RestFul API 简明教程](./系统设计/基础/RESTful-API.md)
- [软件工程简明教程](./系统设计/基础/软件工程.md)
- [代码命名指南](./系统设计/基础/命名规范.md)
- [代码重构指南](./系统设计/基础/重构.md)
- [单元测试指南](./系统设计/基础/单元测试指南.md)

### 常用框架

#### Spring/SpringBoot (必看 :+1:)

**知识点/面试题总结** :

- [Spring 常见知识点&面试题总结](./系统设计/常用框架/spring/Spring面试题.md)
- [SpringBoot 常见知识点&面试题总结](./系统设计/常用框架/spring/SpringBoot面试题.md)
- [Spring/Spring Boot 常用注解总结](./系统设计/常用框架/spring/Spring常用注解.md)
- [SpringBoot 入门指南](https://github.com/Snailclimb/springboot-guide)

**重要知识点详解**：

- [IoC & AOP 详解（快速搞懂）](./系统设计/常用框架/spring/IoC与AOP.md)
- [Spring 事务详解](./系统设计/常用框架/spring/Spring事务.md)
- [Spring 中的设计模式详解](./系统设计/常用框架/spring/Spring设计模式.md)
- [SpringBoot 自动装配原理详解](./系统设计/常用框架/spring/SpringBoot自动装配原理.md)

#### MyBatis

[MyBatis 常见面试题总结](./系统设计/常用框架/mybatis/MyBatis面试题.md)

### 安全

#### 认证授权

- [认证授权基础概念详解](./系统设计/安全/认证授权基础.md)
- [JWT 基础概念详解](./系统设计/安全/JWT入门.md)
- [JWT 优缺点分析以及常见问题解决方案](./系统设计/安全/JWT优缺点.md)
- [SSO 单点登录详解](./系统设计/安全/SSO入门.md)
- [权限系统设计详解](./系统设计/安全/权限系统设计.md)

#### 数据安全

- [常见加密算法总结](./系统设计/安全/加密算法.md)
- [敏感词过滤方案总结](./系统设计/安全/敏感词过滤.md)
- [数据脱敏方案总结](./系统设计/安全/数据脱敏.md)
- [为什么前后端都要做数据校验](./系统设计/安全/数据校验.md)
- [为什么忘记密码时只能重置，不能告诉你原密码？](./系统设计/安全/为什么是密码重置而非找回.md)

### 定时任务

[Java 定时任务详解](./系统设计/schedule-task.md)

### Web 实时消息推送

[Web 实时消息推送详解](./系统设计/web-real-time-message-push.md)

## 分布式

- [⭐分布式高频面试题](https://interview.javaguide.cn/分布式系统/distributed-system.html)

### 理论&算法&协议

- [CAP 理论和 BASE 理论解读](./分布式系统/理论与协议/CAP与BASE理论.md)
- [Paxos 算法解读](./分布式系统/理论与协议/Paxos算法.md)
- [Raft 算法解读](./分布式系统/理论与协议/Raft算法.md)
- [ZAB 协议解读](./分布式系统/理论与协议/ZAB协议.md)
- [Gossip 协议详解](./分布式系统/理论与协议/Gossip协议.md)
- [一致性哈希算法详解](./分布式系统/理论与协议/一致性哈希.md)

### RPC

- [RPC 基础知识总结](./分布式系统/rpc/RPC基础.md)
- [Dubbo 常见知识点&面试题总结](./分布式系统/rpc/Dubbo面试题.md)

### ZooKeeper

> 这两篇文章可能有内容重合部分，推荐都看一遍。

- [ZooKeeper 相关概念总结(入门)](./分布式系统/分布式协调/zookeeper/ZooKeeper入门.md)
- [ZooKeeper 相关概念总结(进阶)](./分布式系统/分布式协调/zookeeper/ZooKeeper进阶.md)

### API 网关

- [API 网关基础知识总结](./分布式系统/API网关基础.md)
- [Spring Cloud Gateway 常见知识点&面试题总结](./分布式系统/Spring-Cloud-Gateway面试题.md)

### 分布式 ID

- [分布式 ID 常见知识点&面试题总结](./分布式系统/分布式ID生成.md)
- [分布式 ID 设计指南](./分布式系统/分布式ID设计.md)

### 分布式锁

- [分布式锁介绍](https://javaguide.cn/分布式系统/distributed-lock.html)
- [分布式锁常见实现方案总结](https://javaguide.cn/分布式系统/distributed-lock-implementations.html)

### 分布式事务

[分布式事务常见知识点&面试题总结](./分布式系统/分布式事务.md)

### 分布式配置中心

[分布式配置中心常见知识点&面试题总结](./分布式系统/分布式配置中心.md)

## 高性能

### 数据库优化

- [数据库读写分离和分库分表](./高性能/读写分离与分库分表.md)
- [数据冷热分离](./高性能/数据冷热分离.md)
- [常见 SQL 优化手段总结](./高性能/SQL优化.md)
- [深度分页介绍及优化建议](./高性能/深分页优化.md)

### 负载均衡

[负载均衡常见知识点&面试题总结](./高性能/负载均衡.md)

### CDN

[CDN（内容分发网络）常见知识点&面试题总结](./高性能/CDN详解.md)

### 消息队列

- [消息队列基础知识总结](./高性能/消息队列/消息队列基础.md)
- [Disruptor 常见知识点&面试题总结](./高性能/消息队列/Disruptor面试题.md)
- [RabbitMQ 常见知识点&面试题总结](./高性能/消息队列/RabbitMQ面试题.md)
- [RocketMQ 常见知识点&面试题总结](./高性能/消息队列/RocketMQ面试题.md)
- [Kafka 常见知识点&面试题总结](./高性能/消息队列/Kafka面试题.md)

## 高可用

[高可用系统设计指南](./高可用/高可用系统设计.md)

### 冗余设计

[冗余设计详解](./高可用/冗余设计.md)

### 限流

[服务限流详解](./高可用/服务限流.md)

### 降级&熔断

[降级&熔断详解](./高可用/降级与熔断.md)

### 超时&重试

[超时&重试详解](./高可用/超时与重试.md)

### 集群

相同的服务部署多份，避免单点故障。

### 灾备设计和异地多活

**灾备** = 容灾 + 备份。

- **备份**：将系统所产生的所有重要数据多备份几份。
- **容灾**：在异地建立两个完全相同的系统。当某个地方的系统突然挂掉，整个应用系统可以切换到另一个，这样系统就可以正常提供服务了。

**异地多活** 描述的是将服务部署在异地并且服务同时对外提供服务。和传统的灾备设计的最主要区别在于“多活”，即所有站点都是同时在对外提供服务的。异地多活是为了应对突发状况比如火灾、地震等自然或者人为灾害。

## Star 趋势

![Stars](https://api.star-history.com/svg?repos=Snailclimb/JavaGuide&type=Date)

## 公众号

如果大家想要实时关注我更新的文章以及分享的干货的话，可以关注我的公众号“**JavaGuide**”。

![JavaGuide 官方公众号](https://oss.javaguide.cn/github/项目介绍/gongzhonghaoxuanchuan.png)
