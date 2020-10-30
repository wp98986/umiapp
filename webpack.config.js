/**
 * 不是真实的 webpack 配置，仅为兼容 webstorm 和 intellij idea 代码跳转
 * ref: https://github.com/umijs/umi/issues/1109#issuecomment-423380125
 */

module.exports = {
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src'),
    },
  },
  plugins: [
    // 配置antd-mobile按需加载
    ['import', { libraryName: 'antd-mobile', style: true }], // `style: true` 会加载 less 文件
  ],
};
