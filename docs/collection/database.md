---
sidebar_label: Database
---

## MySQL

### ~~PlantScale~~

自 2024 年 4 月起不再提供免费套餐。

## PostgreSQL

## [Xata](https://www.xata.io)
Xata不是传统意义上的纯粹PostgreSQL，他们自称是`serverless data platform for PostgreSQL`。换而言之，你实际使用的是Xata提供的SDK来对数据进行CRUD。他们还提供一些别的功能：你甚至可以把文件存进去，对于图片还提供各种API调用（就是图片CDN常见的那些）。下一档套餐需要 `$20/month`。

### [Supabase](https://supabase.com/database)
传统PostgreSQL，搭配Prisma等ORM食用更佳，免费套餐提供：

```
500 MB database space, 2 Core shared CPU • 1 GB RAM
```


有点捉襟见肘，不过对于没人访问的个人项目再适合不过了！下一档套餐需要 `$25/month`。

### [Neon](https://neon.tech/pricing)
另外一家没有supabase出名的提供免费套餐的商家，下一档套餐需要 `$19/month`。
```
0.5 GiB storage
24/7 for your main compute
Community support
Fixed capacity at 0.25 vCPU
```

## SQLite

### [Turso](https://turso.tech/pricing)

免费套餐拥有 9 GB 存储，但是要注意长时间无连接数据库会休眠。下一档套餐需要 `$8.25/month`。

## Redis

### [Upstash](https://upstash.com/pricing)
免费套餐限制如下：
```
Max commands per second	1,000
Daily command limit 10,000
Max request size 1MB
Max record size 100MB
Max data size 256MB
Max concurrent connections 100
Max monthly bandwidth 500GB
```
