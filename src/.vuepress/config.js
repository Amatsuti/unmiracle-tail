const path = require('path')
const { description } = require('../../package')

const base = process.env.BUILD_ELECTRON ?"/" :"/unmiracle-tail/"

module.exports = {
  // Changes vuepress build directory
  dest: 'docs',
  base,

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Unmiracle Tail',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Simulator',
        link: '/simulator/'
      },
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        items: [{
          text: "UnmiracleTail",
          items: [{
            text: "スキル",
            link: "/card/skill.html",
          }]
        },{
          text: "Unmiracle",
          items: [{
            text: "クラス",
            link: "/class/",
          }]
        }]
      },
      {
        text: 'GitHub',
        link: 'https://github.com/Amatsuti/unmiracle-tail'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'ガイド',
          collapsable: false,
          children: [
            '',
            'team-edit',
          ]
        }
      ],
      '/config/': [
        {
          title: 'カード',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
      '/class/': [
        {
          title: 'クラス',
          collapsable: false,
          children: [
            '',
            'attack',
          ]
        }
      ],
      '/card/': [
        {
          title: 'スキル',
          collapsable: false,
          children: [
            'skill',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],

  chainWebpack (config) {
    config.resolve.alias
      .set('@', path.join(process.cwd(), 'src/.vuepress'))
    config.module
      .rule('wasm')
      .test(/\.wasm$/)
      .type('javascript/auto')
      .use('arraybuffer-loader')
        .loader('arraybuffer-loader')
  }
}
