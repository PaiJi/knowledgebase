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

### [Umami](https://github.com/umami-software/umami)

开源拖拉机之一，“GA 的轻量替代品，100%GDPR 合规。”支持自托管，提供官方 Docker 镜像，底层是你熟悉的 MySQL 或者 PostgreSQL。如果你只需要简单统计一下访客和访问页面这种东西，不涉及任何进阶需求（比如转化漏斗），那么 Umami 也许是你的不二之选。

### [Plausible](https://plausible.io/)

更高级一些的开源产品，和 Umami 一样支持自部署和官方 SaaS，但是注意其部分核心付费功能是不存在于开源代码中的。官方云没有免费套餐，起价 9$一个月。

### [Posthog](https://posthog.com/web-analytics)

这家的 Web Analytics 业务正在 beta 阶段，想吃螃蟹可以上，免费套餐看起来还不错。

### [Prisch](https://pirsch.io/)

基于 Go 开发的分析产品，没有免费套餐，官方的口径是自托管需要购买企业套餐，但他们的源码是开放的，如果你想在没有官方的技术支持的情况下捣鼓这玩意可以一试。

### [Simple Analytics](https://www.simpleanalytics.com/)

又一个打着 Google Analytics 替代品口号的分析产品，免费套餐虽然提供了最大 10 个网站的额度，但关键功能严重缺失：最大只能查看最近 30 天记录，数据至多保留 60 天，没有收集事件功能等等。

### [Fathom Analytics](https://usefathom.com/)

又一个打着 Google Analytics 替代品口号的分析产品，符合 GDPR，不使用第三方 cookies 等等等等，但是没有免费套餐，按照事件数阶梯收费，起步价 15$ 一个月（100000 个事件）。

### [OpenPanel](https://openpanel.dev/)

自称结合了 Plausible 的简洁明了的统计面板和 Mixpanel 的强大能力，现在还是 beta 版不收钱，正式版发布后按照事件数阶梯收费，也会有自部署功能。

## Product Analytics

### MixPanel

MixPanel 侧重提供基于事件驱动的产品分析，它拥有优秀美观的界面设计，通俗易懂的交互（绝对比 GA 那个迷宫强），如果你用过 GA4 的事件分析，你会发现做得实在不怎么样。  
不支持自部署，免费额度比较可观，出海产品放心用，境内产品洗洗睡。

### Posthog

厚厚，又是我，Posthog 是做产品分析起家的公司。

## Session Replay

### [Sentry](https://sentry.io/welcome/)

严格来说 Sentry 的 Replay 功能不能用于追踪用户兴趣，而是用于追踪 bug 发生时的操作，不过也算 replay，所以放在这里。

### Clarity

微软推出的免费 Replay 产品，可追踪用户的兴趣点击热区，界面美观好看，更已加入 Bing AI 加持（虽然怀疑没大用就是了）。

### Posthog

这家已经出现好几次，没错，这家主打一个分析全家桶，什么都有，不过免费版的 Replay 次数较低，建议看看别家。

## Bug Monitor

### [Sentry](https://sentry.io/welcome/)

Sentry 可谓是这个行业的佼佼者，但是自托管实在是性能怪兽，升级时也是地狱般的体验，如果没有足够自信的实力，就用他们的 SaaS 吧，缺点是境内的连通性好像不怎么样。

### [highlight.io](https://github.com/highlight/highlight)

类 Sentry 的开源产品，也有自己的 SaaS 云，从错误监控到会话重播、性能监控等等，看起来功能挺全，支持自部署。但是配置要求还是不低：

```
 at least 8GB of RAM, 4 CPUs, and 64 GB of disk space
```
