<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

// 模拟初始状态的本地音乐文件夹列表
const folders = ref([
  { name: 'Music', path: 'C:\\Users\\27576\\Music' },
  { name: 'music', path: 'D:\\Resource\\music' }
])

function closeDialog() {
  emit('update:modelValue', false)
}

function removeFolder(index: number) {
  folders.value.splice(index, 1)
}

function addFolder() {
  // 模拟添加一个新文件夹（未来此按钮可调用原生目录选择器）
  folders.value.push({
    name: 'NewFolder',
    path: 'E:\\Music\\NewFolder'
  })
}
</script>

<template>
  <div v-if="modelValue" class="dialog-overlay" @click.self="closeDialog">
    <div class="dialog-content">
      <h2>从本地曲库创建个人“收藏”</h2>
      <p class="subtitle">现在我们正在查看这些文件夹：</p>
      
      <div class="folder-list">
        <!-- 添加大按钮 -->
        <button class="add-folder-box" @click="addFolder">
          <svg class="plus-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 11.5V5H12.5V11.5H19V12.5H12.5V19H11.5V12.5H5V11.5H11.5Z" fill="currentColor"/>
          </svg>
        </button>

        <!-- 已有文件夹列表 -->
        <div class="folder-item" v-for="(folder, index) in folders" :key="index">
          <div class="folder-info">
            <span class="folder-name">{{ folder.name }}</span>
            <span class="folder-path">{{ folder.path }}</span>
          </div>
          <button class="remove-btn" @click="removeFolder(index)" title="移除">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3 5.71L17.59 5L11.65 10.94L5.71 5L5 5.71L10.94 11.65L5 17.59L5.71 18.3L11.65 12.36L17.59 18.3L18.3 17.59L12.36 11.65L18.3 5.71Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="dialog-actions">
        <button class="done-btn" @click="closeDialog">完成</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.dialog-content {
  background-color: #000;
  border: 1px solid #0078d4;
  width: 400px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
}

.dialog-content h2 {
  color: #fff;
  font-size: 22px;
  font-weight: 400;
  margin: 0 0 12px 0;
}

.subtitle {
  color: #ccc;
  font-size: 14px;
  margin: 0 0 24px 0;
}

.folder-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
  max-height: 50vh;
  overflow-y: auto;
  padding-right: 4px; /* 预留一点空间给潜在的滚动条 */
}

/* 隐藏细微的内部滚动条 */
.folder-list::-webkit-scrollbar {
  width: 4px;
}
.folder-list::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

.add-folder-box {
  background-color: #2d2d2d;
  min-height: 80px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.1s;
}

.add-folder-box:hover {
  background-color: #3d3d3d;
}

.add-folder-box:active {
  background-color: #4d4d4d;
}

.plus-icon {
  width: 32px;
  height: 32px;
  color: #fff;
}

.folder-item {
  background-color: #2d2d2d;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
}

.folder-item:hover {
  background-color: #333333;
}

.folder-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: hidden;
}

.folder-name {
  color: #fff;
  font-size: 15px;
  font-weight: 600;
}

.folder-path {
  color: #aaa;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.remove-btn {
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.remove-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.remove-btn svg {
  width: 12px;
  height: 12px;
}

.dialog-actions {
  display: flex;
  justify-content: flex-end;
}

.done-btn {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 8px 32px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.1s;
}

.done-btn:hover {
  background-color: #555;
}

.done-btn:active {
  background-color: #111;
}
</style>
