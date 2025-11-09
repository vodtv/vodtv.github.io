import { h, watch } from 'vue'

import DefaultTheme from 'vitepress/theme'
import { type Theme } from 'vitepress'

import AsideSponsors from './components/AsideSponsors.vue'
import ShareButton from './components/ShareButton.vue'
import notice from './components/notice.vue'
import confetti from './components/confetti.vue' //五彩纸屑
import TeamMembers from './components/TeamMembers.vue'
import googleAnalytics from './composables/googleAnalytics'
import './styles/index.scss'

let homePageStyle: HTMLStyleElement | undefined

export default {
  extends: DefaultTheme,

  enhanceApp: ({ app, router, siteData }) => {
    googleAnalytics({ id: 'G-6QN23XNMXB' })
    app.component('confetti', confetti) // 五彩纸屑
    app.component('TeamMembers', TeamMembers)
    
    // 彩虹背景动画样式
    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === '/'),
        { immediate: true },
      )
    }
  },

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-before': () => h(ShareButton),
      'aside-bottom': () => h(AsideSponsors),
      'layout-top': () => h(notice),
    })
  },

  setup() {

  }
} satisfies Theme

// 彩虹背景动画样式
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return
    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return
    homePageStyle.remove()
    homePageStyle = undefined
  }
}