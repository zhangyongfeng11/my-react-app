// craco.config.js
const CracoAntDesign = require('craco-antd');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesign,
      options: {
        customizeTheme: {
          // 可选：在这里自定义主题色
          '@primary-color': '#1890ff', // 默认蓝色
        },
      },
    },
  ],
};