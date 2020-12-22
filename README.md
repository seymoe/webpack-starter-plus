# webpack-starter-plus

Suport js、ts、css、sass、less、file.

## 开发过程记录

1. 安装webpack，配置基本的webpack.config.js

```
yarn add webpack webpack-cli --dev
```

2. 每次build会产生不同的bundle文件名，需要进行清理，安装 clean-webpack-plugin 插件
```
yarn add clean-webpack-plugin  --dev
```

3. 单页面web应用都有个 index.html，为了让每次构建出的资源能够自动更新html中的路径，采用 html-webpack-plugin 插件
```
yarn add html-webpack-plugin --dev
```

4. dev-server 配置

5. typescript 配置