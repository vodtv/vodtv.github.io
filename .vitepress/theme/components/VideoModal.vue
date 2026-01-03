<script setup lang="ts">
import { onKeyStroke } from '@vueuse/core'
import { useData } from 'vitepress'
import { watch } from 'vue'

defineProps<{
  text: string
}>()
defineOptions({
  inheritAttrs: false,
})

const { lang } = useData()

const VIDEO_SOURCE = 'https://m.345iptv.com/?act=home'

//https://live.64ma.com/tv/live.html

// SOURCE: https://github.com/rolldown/rolldown/blob/main/docs/.vitepress/theme/components/RolldownVideoModal.vue


const isModalVisible = defineModel({ default: false })

// Scroll lock
watch(
  isModalVisible,
  (value) => {
    if (!globalThis.document) return

    const newOverflowValue = value ? 'hidden' : 'auto'
    document.documentElement.style.overflow = newOverflowValue
  },
  { immediate: true },
)

const openModal = () => {
  isModalVisible.value = true
}

const closeModal = () => {
  isModalVisible.value = false
}

onKeyStroke('Escape', () => {
  if (isModalVisible.value) {
    closeModal()
  }
})
</script>

<template>
  <button class="open-modal-button" @click="openModal">
    {{ text }}
    <svg class="icon-play" aria-labelledby="simpleicons-play-icon" role="img" viewBox="0 0 100 125" fill="#FFFFFF">
      <title id="simpleicons-play-icon" lang="en">Play icon</title>
      <path
        d="M50,3.8C24.5,3.8,3.8,24.5,3.8,50S24.5,96.2,50,96.2S96.2,75.5,96.2,50S75.5,3.8,50,3.8z M71.2,53.3l-30.8,18  c-0.6,0.4-1.3,0.5-1.9,0.5c-0.6,0-1.3-0.1-1.9-0.5c-1.2-0.6-1.9-1.9-1.9-3.3V32c0-1.4,0.8-2.7,1.9-3.3c1.2-0.6,2.7-0.6,3.8,0  l30.8,18c1.2,0.6,1.9,1.9,1.9,3.3S72.3,52.7,71.2,53.3z" />
    </svg>
  </button>
  <Teleport v-if="isModalVisible" to="body">
    <transition name="modal-fade">
      <dialog class="modal-overlay" open aria-modal="true" @click="closeModal">
        <div class="modal-container" @click.stop>
          <div class="modal-content">
            <iframe class="video-iframe" :src="VIDEO_SOURCE" title="YouTube video player" frameborder="0"
              allow="autoplay; picture-in-picture" allowfullscreen webkitallowfullscreen mozallowfullscreen />
          </div>
          
        </div>
      </dialog>
    </transition>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  border: 0;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  display: block;
  box-sizing: border-box;
  border-radius: 8px;
  position: fixed;
  width: 85%;
  height: auto;
  padding: 0.5em;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 40;
}

.modal-header {
  text-align: right;

  .close-button {
    font-size: 20px;
    padding: 5px;
    color: #fff;
    transition: color 0.25s;

    &:hover {
      color: #aaa;
    }
  }
}

.modal-content {
  aspect-ratio: 16 / 9;
  width: 100%;
  overflow: hidden;
  position: relative;

  .video-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
}

.modal-footer {
  padding: 18px;
  text-align: center;
  background-color: var(--vp-c-bg-soft);
  font-weight: bold;
  color: var(--vp-c-text-1);

  & a {
    transition: color 0.25s;
    display: inline;

    &:hover {
      color: var(--vp-c-brand-3);
    }
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.open-modal-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  border: 1px solid transparent;
  background: linear-gradient(var(--vp-c-bg), var(--vp-c-bg)) padding-box,
    linear-gradient(45deg, #ff5d13, #f0db4f) border-box;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;

  &:hover {
    border-color: var(--vp-c-brand-3);
    color: var(--vp-c-brand-1);
  }

  .icon-play {
    display: inline;
    fill: currentColor;
    width: 1.5em;
    margin-top: 0.5em;
    transition: fill 0.25s;
  }
}
</style>
