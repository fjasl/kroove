import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePlayerStore = defineStore('player', () => {
  const isPlaying = ref(false)
  const isShuffle = ref(false)
  const isRepeat = ref(false)
  const volume = ref(70)
  const isMuted = ref(false)

  const currentTime = ref(9) // 0:09
  const duration = ref(236)  // 3:56
  
  const isFullScreen = ref(false) // 全屏页面是否展开

  const togglePlay = () => (isPlaying.value = !isPlaying.value)
  const toggleMute = () => (isMuted.value = !isMuted.value)
  const toggleFullScreen = () => (isFullScreen.value = !isFullScreen.value)

  return {
    isPlaying,
    isShuffle,
    isRepeat,
    volume,
    isMuted,
    currentTime,
    duration,
    isFullScreen,
    togglePlay,
    toggleMute,
    toggleFullScreen
  }
})
