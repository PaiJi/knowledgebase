---
sidebar_label: Caddy Server
---

# Caddy Server

## 验证请求头
更多文档你需要去翻：[caddy-docs](https://caddyserver.com/docs/caddyfile/matchers#header)
```bash
example.com {
    @headerCheck {
        #Different header fields within the same set are AND-ed. Multiple values per field are OR'ed.
        header x-auth-token hello
        # or
        header x-auth-token world
    }

    route {
        reverse_proxy @headerCheck 10.0.0.9:3000
        respond 302
    }
}
```
