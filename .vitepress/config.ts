import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'node:url';

export default defineConfig({
  lang: 'zh-CN',
  title: 'vodtv.cn',
  description: 'vodtv.cn - 收录和分享优秀影视网站',
  metaChunk: true,
  markdown: {
    theme: { light: 'one-light', dark: 'dracula-soft' },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    config: (md) => {


    }
  },
  sitemap: {
    hostname: 'https://vodtv.github.io',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('bing'))
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://vodtv.github.io/' }],
    ['meta', { name: 'og:locale', content: 'zh-CN' }],
    ['meta', { name: 'og:site_name', content: 'vodtv.cn' }],
    ['meta', { name: 'og:description', content: 'vodtv.cn - 收录和分享优秀影视网站' }],
  ],

  base: '/',
  srcDir: 'docs',
  lastUpdated: true,
  cleanUrls: true,
  locales: {
    root: {
      label: '简体中文',
      lang: 'Zh_CN',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
    },
  },

  themeConfig: {
    logo: { src: '/logo.png', width: 24, height: 24 },
    outline: {
      label: '本页目录',
      level: [2, 3],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vodtv/vodtv.github.io' }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          }
        },
      }
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: { dateStyle: 'full', timeStyle: 'full', hourCycle: 'h24' }
    },
    // 文章翻页
    docFooter: { prev: '上一页', next: '下一页' },

    ///返回顶部文字修改(移动端)
    returnToTopLabel: '返回顶部',

    //侧边栏文字更改(移动端)
    sidebarMenuLabel: '目录',

    // 主题模式切换
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    darkModeSwitchLabel: '主题模式',
    footer: {
      message: '收录和分享优秀影视网站| MIT Licensed',
      copyright: 'Copyright © 2019 - Present vodtv.cn'
    }
  },
  vite: {    
    resolve: {
      alias: [
        {
          find: /^.*\/VPHero\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPHero.vue', import.meta.url),
          ),
        },
      ],
    },
  },
})
