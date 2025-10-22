---
layout: home
title: vodtv
hero:
  name: VIP 影视导航
  text: 专注 & 洞察 & 分享
  tagline: 让您随时随地享受高质量的观影体验
  image: /logo.png
  actions:    
    - text: 观影体验
      openVideoModal: true
    - theme: brand
      text: ⚠️ 特别提醒
      link: /disclaimer        
features:
  - title: 完全免费
    icon: 🛑
    link: /cdn 
    details: 100%免费使用，无任何付费功能，无会员制度，让每个人都能享受自由观影。
    linkText: 查看节点

  - title: 智能广告过滤
    icon: 🚀
    link: /cdn 
    details: 内置HLS广告切片过滤逻辑，尽可能减少视频播放中的广告干扰，提供更纯净的观影体验。。
    linkText: 查看节点  
    
  - title: 多源聚合
    icon: 🎯
    link: /cdn 
    details: 聚合多个优质视频源，智能搜索，丰富的内容库满足不同用户的观影需求。
    linkText: 查看节点      
---

<confetti />
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.get('uwu') != null) {
    const img = document.querySelector('.VPHero .VPImage.image-src')
    img.src = '/logo.png'
    img.alt = 'vodtv Logo by @hefung'
    img.style.maxWidth = '540px'
  }
})
</script>
