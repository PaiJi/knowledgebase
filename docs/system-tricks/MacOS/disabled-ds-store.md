
# 不要在网络磁盘下生成 .DS_Store


```
defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool TRUE
```
然后重启设备, 查询状态
```angular2html
defaults read com.apple.desktopservices
```

返回 `DSDontWriteNetworkStores = 1`就算成功。
## Sources
> [Studio network solutions](https://support.studionetworksolutions.com/hc/en-us/articles/360000949866-Prevent-creation-of-DS-Store-files-on-network-shares)