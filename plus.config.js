module.exports = {
  // 应用类型: app (应用) | library (库)
  appType: 'library',
  // 应用名称
  appName: 'app',
  // 开发语言：js | ts
  languageType: 'ts',
  // 环境
  NODE_ENV: process.env.NODE_ENV || 'development',
  // 输出文件夹
  outDir: './dist'
}
