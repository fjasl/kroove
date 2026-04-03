<!-- src/App.vue -->
<script setup lang="ts">
import Sidebar from './frame/Sidebar.vue'
import MainContent from './frame/MainContent.vue'
import PlayerBar from './frame/PlayerBar.vue'
</script>

<template>
  <div class="app-shell">
    <div class="top-layout">
      <!-- 侧边栏预留底座 (48px) -->
      <div class="sidebar-rail">
        <Sidebar />
      </div>
      <!-- 主内容区 -->
      <MainContent />
    </div>
    <!-- 底部播放栏 -->
    <PlayerBar />
  </div>
</template>

<style>
/* 重置全局样式 */
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }
body { background: black; overflow: hidden; }

.app-shell {
  display: grid;
  grid-template-rows: 1fr 80px; /* 上部 1 份，底部 80px */
  height: 100vh;
  width: 100vw;
}

.top-layout {
  display: flex; /* 使用 flex 让主内容占满剩余宽度 */
  overflow: hidden;
  position: relative;
}

.sidebar-rail {
  width: 48px; /* 这个宽度决定了右侧内容从哪里开始 */
  flex-shrink: 0;
  position: relative;
}
</style>
