module.exports = {
  name: 'vant-cli',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/vant-cli/',
    },
  },
  site: {
    title: 'vant-cli',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮',
          },
        ],
      },
    ],
  },
};
