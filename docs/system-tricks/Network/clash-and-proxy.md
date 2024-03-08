# Clash 和透明代理

## Maxmind国家代码
MAXMIND使用的国家代码如下

https://dev.maxmind.com/geoip/legacy/codes/iso3166/

## 配置Ubuntu透明代理
Linux下作为透明代理使用需要开启流量转发：

```bash
sysctl -w net.ipv4.ip_forward=1
```

DNS 端口可能被系统占用
```bash
systemctl disable systemd-resolved
```