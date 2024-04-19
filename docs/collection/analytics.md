---
sidebar_label: Analytics
---

# Analytics

身为独立开发者，你一定想狠狠追踪你的用户！分析他们的行为！洞见他们的需求！

那么这页的内容会是你所需要的......

## Web Analytics

### Google Analytics 4

是不是每个领域都有属于自己的恶龙？如果答案是肯定的，那么 Web Analytics 领域的“恶龙”当属 Google Analytics（以下简称 GA）。大厂出品，永久免费（至少现在是），仅凭这两点，GA 就砍下了超过 50%的市场份额，更何况谷歌作为全球最大的搜索引擎，还拥有一个杀手锏能力：能将 Google Search Console 和 GA 数据打通，你能在 GA 里看到来自谷歌搜索的关键字转化等数据，这一点别家可做不到。

缺点当然也有，饱受诟病的一点是 GA 收集过多数据，GDPR 不高兴。

### Umami

开源拖拉机之一，“GA 的轻量替代品，100%GDPR 合规。”支持自托管，提供官方 Docker 镜像，底层是你熟悉的 MySQL 或者 PostgreSQL。如果你只需要简单统计一下访客和访问页面这种东西，不涉及任何进阶需求（比如转化漏斗），那么 Umami 也许是你的不二之选。

### Posthog

这家的 Web Analytics 业务正在 beta 阶段。

## Product Analytics

### MixPanel

MixPanel 侧重提供基于事件驱动的产品分析，它拥有优秀美观的界面设计，通俗易懂的交互（绝对比 GA 那个迷宫强），如果你用过 GA4 的事件分析，你会发现做得实在不怎么样。  
不支持自部署，免费额度比较可观，出海产品放心用，境内产品洗洗睡。

### Posthog

厚厚，又是我，Posthog 是做产品分析起家的公司。

## Session Replay

### Sentry

严格来说 Sentry 的 Replay 功能不能用于追踪用户兴趣，而是用于追踪 bug 发生时的操作，不过也算 replay，所以放在这里。

### Clarity

微软推出的免费 Replay 产品，可追踪用户的兴趣点击热区，界面美观好看，更已加入 Bing AI 加持（虽然怀疑没大用就是了）。

### Posthog
这家已经出现好几次，没错，这家主打一个分析全家桶，什么都有，不过免费版的Replay次数较低，建议看看别家。
