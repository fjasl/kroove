<!-- src/components/MainContent.vue -->
<script setup lang="ts"></script>

<template>
  <main class="main-content">
    <header class="content-header">
      <h1>我的音乐</h1>
      <nav class="tabs">
        <span class="active">歌曲</span>
        <span>歌手</span>
        <span>专辑</span>
      </nav>
    </header>

    <section class="song-list-placeholder">
      <div v-for="i in 10" :key="i" class="list-item">
        🎵 示例歌曲名称 - 艺术家名称 {{ i }}
      </div>
    </section>
  </main>
</template>

<style scoped>
.main-content {
  flex: 1;
  background: #000;
  color: #fff;
  padding: 40px;
  overflow-y: auto;
}

h1 { font-size: 42px; font-weight: 300; margin-bottom: 20px; }

.tabs { display: flex; gap: 30px; margin-bottom: 30px; border-bottom: 1px solid #333; }
.tabs span { padding-bottom: 10px; cursor: pointer; color: #aaa; }
.tabs span.active { color: #fff; border-bottom: 2px solid #0078d4; }

.song-list-placeholder { display: flex; flex-direction: column; gap: 10px; }
.list-item { padding: 15px; background: #111; border-radius: 4px; }
</style>
