<!-- src/components/PlayerBar.vue -->
<script setup lang="ts"></script>

<template>
  <footer class="player-bar">
    <div class="current-track">
      <div class="cover-art"></div>
      <div class="track-info">
        <div class="name">葬花</div>
        <div class="artist">THT</div>
      </div>
    </div>

    <div class="controls">
      <div class="buttons">⏮ ⏸ ⏭</div>
      <div class="progress">
        <span>0:04</span>
        <div class="bar-bg"><div class="bar-fill"></div></div>
        <span>3:56</span>
      </div>
    </div>

    <div class="volume-and-more">
      <span>🔊</span>
      <div class="volume-bar"></div>
    </div>
  </footer>
</template>

<style scoped>
.player-bar {
  height: 80px;
  background: #1a1a1a;
  border-top: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: white;
  z-index: 200;
}

.current-track { display: flex; align-items: center; gap: 15px; width: 300px; }
.cover-art { width: 50px; height: 50px; background: #333; }
.name { font-weight: bold; }
.artist { font-size: 12px; color: #aaa; }

.controls { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px; }
.bar-bg { width: 400px; height: 4px; background: #444; position: relative; border-radius: 2px; }
.bar-fill { width: 20%; height: 100%; background: #0078d4; border-radius: 2px; }

.volume-and-more { width: 300px; display: flex; justify-content: flex-end; align-items: center; gap: 10px; }
.volume-bar { width: 100px; height: 4px; background: #444; }
</style>
