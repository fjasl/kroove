<!-- src/frame/Sidebar.vue -->
<script setup lang="ts">
import { ref } from 'vue';
import SidebarItem from '../component/SidebarItem.vue';
import SidebarSearch from '../component/SidebarSearch.vue';

// 图标组件
import IconNote from '../assets/icons/IconNote.vue';
import IconHistory from '../assets/icons/IconHistory.vue';
import IconPlaying from '../assets/icons/IconPlaying.vue';
import IconSettings from '../assets/icons/IconSettings.vue';

const isExpanded = ref(false);
const activeId = ref('home');

const menuItems = [
  { id: 'home', icon: IconNote, label: '我的音乐' },
  { id: 'recent', icon: IconHistory, label: '最近播放内容' },
  { id: 'playing', icon: IconPlaying, label: '正在播放' },
];

const toggle = () => (isExpanded.value = !isExpanded.value);
const select = (id: string) => (activeId.value = id);
</script>

<template>
  <aside class="sidebar" :class="{ 'is-expanded': isExpanded }">
    <!-- 汉堡按钮：自成首部占位 -->
    <div class="hamburger-container">
      <div class="hamburger" @click="toggle">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>

    <!-- 搜索栏组件：通过内部视觉边距处理形态 -->
    <SidebarSearch 
      :is-expanded="isExpanded" 
      @toggle-sidebar="toggle"
    />

    <!-- 导航菜单：与上方无缝衔接 -->
    <nav class="nav-links">
      <SidebarItem 
        v-for="item in menuItems" 
        :key="item.id"
        :icon="item.icon"
        :label="item.label"
        :is-active="activeId === item.id"
        @click="select(item.id)"
      />
    </nav>

    <!-- 底部功能按钮 -->
    <footer class="sidebar-footer">
      <SidebarItem 
        :icon="IconSettings" 
        label="设置" 
        :is-active="activeId === 'settings'"
        @click="select('settings')"
      />
    </footer>
  </aside>
</template>

<style scoped>
.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100vh - 80px);
  width: 48px;
  background: rgba(25, 25, 25, 0.9);
  backdrop-filter: blur(30px);
  z-index: 100;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  color: white;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  
  display: flex;
  flex-direction: column;
}

.sidebar.is-expanded {
  width: 280px;
  box-shadow: 10px 0 40px rgba(0, 0, 0, 0.6);
}

.hamburger-container {
  height: 48px;
  flex-shrink: 0;
}

.hamburger {
  height: 48px;
  width: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 4px;
}

.hamburger:hover {
  background: rgba(255, 255, 255, 0.08); /* 统一的 48px 盒悬浮感 */
}

.bar { width: 18px; height: 1px; background: white; }

.nav-links {
  margin-top: 0; /* 修正：移除缝隙，形成连续侧边条 */
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
}

.sidebar-footer {
  margin-top: auto;
}

/* 穿透控制子组件的文字显示 */
.sidebar.is-expanded :deep(.label) { 
  opacity: 1; 
}

.label { 
  opacity: 0; 
  transition: opacity 0.2s;
}
</style>
