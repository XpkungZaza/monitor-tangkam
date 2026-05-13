<template>
  <!-- Main Admin Layout -->
  <div v-if="!isAuthPage" class="admin-layout" :class="{ 'sidebar-collapsed': isSidebarCollapsed }">
    <AppSidebar
      :collapsed="isSidebarCollapsed"
      @toggle="toggleSidebar"
    />
    <div class="admin-layout__main">
      <AppToolbar @toggle-sidebar="toggleSidebar" />
      <main class="admin-layout__content">
        <router-view v-slot="{ Component }">
          <transition name="page-fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>
  </div>

  <!-- Auth Layout for Login/Register -->
  <div v-else class="auth-layout">
    <router-view />
  </div>

  <!-- Global Theme Toggle -->
  <button class="theme-toggle-btn" @click="toggleTheme" title="Switch Theme">
    <span class="mdi" :class="themeMode === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night'"></span>
  </button>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import AppSidebar from './components/AppSidebar.vue'
import AppToolbar from './components/AppToolbar.vue'

const route = useRoute()
const isAuthPage = computed(() => route.path === '/login')
const isSidebarCollapsed = ref(false)
const themeMode = ref(localStorage.getItem('theme-mode') || 'light')

// Watch theme changes and apply to document
watch(themeMode, (newMode) => {
  localStorage.setItem('theme-mode', newMode)
  document.documentElement.setAttribute('data-theme', newMode)
  window.dispatchEvent(new Event('theme-changed'))
}, { immediate: true })

function toggleTheme() {
  themeMode.value = themeMode.value === 'dark' ? 'light' : 'dark'
}

function toggleSidebar() {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}
</script>

<style scoped>
.auth-layout {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff512f 0%, #f09819 100%);
}

.admin-layout {
  display: flex;
  min-height: 100vh;
}

.admin-layout__main {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: var(--sidebar-width);
  transition: margin-left var(--transition-medium);
  min-width: 0;
}

.admin-layout.sidebar-collapsed .admin-layout__main {
  margin-left: var(--sidebar-mini-width);
}

.admin-layout__content {
  flex: 1;
  padding-top: var(--toolbar-height);
  background: var(--bg-page);
  min-height: calc(100vh - var(--toolbar-height));
  transition: background var(--transition-medium);
}

/* Theme Toggle Button */
.theme-toggle-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: transform 0.2s ease, background 0.3s ease;
}

.theme-toggle-btn:hover {
  transform: scale(1.1);
}

.theme-toggle-btn .mdi {
  font-size: 1.5rem;
}

/* Page transition */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 960px) {
  .admin-layout__main {
    margin-left: 0;
  }
}
</style>
