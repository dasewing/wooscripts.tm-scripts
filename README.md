# tm-scripts

个人 Tampermonkey 用户脚本集合。

## 安装

1. 先在浏览器中安装 [Tampermonkey](https://www.tampermonkey.net/) 扩展。
2. 点击下面任意脚本的"安装"链接，在 Tampermonkey 弹出的页面中确认安装即可。安装后的脚本会自动检查更新。

## 脚本

### SeedHub：种子标题替换与二维码复制

- [安装](https://raw.githubusercontent.com/dasewing/tm-scripts/main/scripts/seedhub-opti.user.js)
- 支持：SeedHub 电影页、二维码跳转页
- 功能：把种子列表里的链接文字替换为完整标题；在二维码页点击"识别二维码"，自动解码出链接并复制。

### Bilibili：批量复制视频链接

- [安装](https://raw.githubusercontent.com/dasewing/tm-scripts/main/scripts/bilibili-video-dl-url-maker.user.js)
- 支持：Bilibili 各页面
- 功能：右下角"复制视频链接"一键复制当前页全部视频地址；"选择视频"可在弹层中勾选后再复制。

### 京东：搜索结果优化

- [安装](https://raw.githubusercontent.com/dasewing/tm-scripts/main/scripts/jd-search-result-optimizer.user.js)
- 支持：京东搜索结果页
- 功能：自动隐藏带"京喜自营"标签的商品卡片。

### 电商商品页：精简链接复制

- [安装](https://raw.githubusercontent.com/dasewing/tm-scripts/main/scripts/ebiz-item-link-copy.user.js)
- 支持：淘宝、天猫、闲鱼、京东的商品页
- 功能：商品页右下角显示"复制商品链接"按钮，自动去掉跟踪参数，只保留商品本身需要的参数。

### CLM：种子收藏与访问管理

- [安装](https://raw.githubusercontent.com/dasewing/tm-scripts/main/scripts/clm-torrent-library.user.js)
- 支持：CLM 搜索页与详情页、PikPak 网盘页
- 功能：种子可收藏、备注、隐藏、一键复制磁链；左下角"种子库"集中管理所有记录；在 PikPak 创建云下载任务时可直接从种子库选择磁链填入。

### 微信文章链接自动跳转

- [安装](https://raw.githubusercontent.com/dasewing/tm-scripts/main/scripts/weixin-article-link-auto-redirector.user.js)
- 支持：虎嗅、36Kr 文章页
- 功能：自动跳转到页面中引用的微信公众号原文。

---

开发者说明（脚本机制、构建方式、发布流程）见 [docs/DEV-LOG.md](./docs/DEV-LOG.md)。
