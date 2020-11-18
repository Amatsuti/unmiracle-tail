const path = require('path')
const { description } = require('../../package')

module.exports = {
  // Changes vuepress build directory
  dest: 'docs',
  base: process.env.BUILD_ELECTRON ?"/" :"/unmiracle-tail/",

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Unmiracle Tail',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['script', { src: './wasm_exec.js' }],
    ['script', { src: './wasm.js' }]
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
        link: '/config/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/Amatsuti/unmiracle-tail'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'team-edit',
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
  }
}
