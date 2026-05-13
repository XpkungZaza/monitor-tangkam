<template>
  <nav class="sidebar" :class="{ 'sidebar--collapsed': collapsed }">
    <!-- Logo Header -->
    <div class="sidebar__header">
      <img src="/web_logo.png" alt="Logo" class="sidebar__logo-img" />
    </div>

    <!-- Navigation Links -->
    <div class="sidebar__nav">
      <router-link
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        class="sidebar__link"
        :class="{ 'sidebar__link--active': isActive(item.path) }"
      >
        <span class="mdi" :class="item.icon"></span>
        <span v-if="!collapsed" class="sidebar__link-text">{{ item.title }}</span>
        <div v-if="isActive(item.path)" class="sidebar__link-indicator"></div>
      </router-link>
    </div>

    <!-- Collapse Toggle -->
    <div class="sidebar__footer">
      <button class="sidebar__toggle" @click="$emit('toggle')">
        <span class="mdi" :class="collapsed ? 'mdi-arrow-collapse-right' : 'mdi-arrow-collapse-left'"></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

defineProps({
  collapsed: Boolean,
})

defineEmits(['toggle'])

const route = useRoute()

const navItems = [
  { path: '/dashboard', title: 'ภาพรวม', icon: 'mdi-view-dashboard' },
  { path: '/map', title: 'แผนที่', icon: 'mdi-map' },
  { path: '/marker', title: 'เซ็นเซอร์', icon: 'mdi-map-marker' },
]

function isActive(path) {
  return route.path === path
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--sidebar-width);
  background: var(--bg-card);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  z-index: 100;
  transition: width var(--transition-medium);
  overflow: hidden;
}

.sidebar--collapsed {
  width: var(--sidebar-mini-width);
}

/* Header */
.sidebar__header {
  height: var(--toolbar-height);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  padding: 0 10px;
}

.sidebar__logo-img {
  max-width: 100%;
  max-height: 60px;
  object-fit: contain;
  transition: all var(--transition-medium);
}

.sidebar-collapsed .sidebar__logo-img {
  max-width: 40px;
}

/* Navigation */
.sidebar__nav {
  flex: 1;
  padding: 8px 0;
  overflow-y: auto;
  overflow-x: hidden;
}

.sidebar__link {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  gap: 16px;
  color: var(--text-secondary);
  font-size: 1.1rem;
  font-weight: 600;
  position: relative;
  transition: all var(--transition-fast);
  white-space: nowrap;
  overflow: hidden;
  margin: 8px 12px;
  border-radius: 16px;
}

.sidebar__link:hover {
  background: var(--bg-sidebar-hover);
  color: var(--text-primary);
  transform: translateX(4px);
}

.sidebar__link .mdi {
  font-size: 1.5rem;
  flex-shrink: 0;
  width: 28px;
  text-align: center;
  transition: color var(--transition-fast);
}

.sidebar__link--active {
  color: var(--primary);
  background: var(--sidebar-active-bg);
  font-weight: 700;
}

.sidebar__link--active .mdi {
  color: var(--primary);
}

.sidebar__link-indicator {
  display: none;
}

.sidebar__link-text {
  transition: opacity var(--transition-fast);
}

.sidebar--collapsed .sidebar__link-text {
  opacity: 0;
  width: 0;
}

.sidebar--collapsed .sidebar__link {
  justify-content: center;
  padding: 14px;
}

/* Footer / Toggle */
.sidebar__footer {
  border-top: 1px solid var(--border-color);
  background: var(--bg-sidebar);
  flex-shrink: 0;
}

.sidebar__toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px;
  background: transparent;
  color: var(--text-secondary);
  transition: all var(--transition-fast);
}

.sidebar__toggle:hover {
  background: var(--bg-sidebar-hover);
  color: var(--text-primary);
}

.sidebar__toggle .mdi {
  font-size: 1.3rem;
  transition: transform var(--transition-fast);
}

@media (max-width: 960px) {
  .sidebar {
    transform: translateX(-100%);
  }
}
</style>
