<template>
  <header class="toolbar">
    <!-- Hamburger Button -->
    <button class="toolbar__icon-btn toolbar__hamburger" @click="$emit('toggle-sidebar')" title="เมนู">
      <span class="mdi mdi-menu"></span>
    </button>

    <div class="toolbar__title">
    </div>

    <div class="toolbar__spacer"></div>

    <div class="toolbar__right">
      <button class="toolbar__icon-btn" title="ออกจากระบบ" @click="handleLogout">
        <span class="mdi mdi-logout"></span>
      </button>

      <div class="toolbar__avatar">
        <div class="toolbar__avatar-img">
          <span class="mdi mdi-account-circle"></span>
        </div>
        <span class="toolbar__avatar-status"></span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth, signOut } from '../firebase'

defineEmits(['toggle-sidebar'])

const router = useRouter()
const isFullscreen = ref(false)

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
    isFullscreen.value = true
  } else {
    document.exitFullscreen()
    isFullscreen.value = false
  }
}

async function handleLogout() {
  try {
    await signOut(auth)
    router.push('/login')
  } catch (err) {
    console.error('Logout failed', err)
  }
}
</script>

<style scoped>
.toolbar {
  position: fixed;
  top: 0;
  right: 0;
  left: var(--sidebar-width);
  height: var(--toolbar-height);
  background: var(--toolbar-bg);
  display: flex;
  align-items: center;
  padding: 0 24px;
  z-index: 99;
  box-shadow: var(--shadow-sm);
  transition: left var(--transition-medium), background-color var(--transition-medium);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.sidebar-collapsed .toolbar {
  left: var(--sidebar-mini-width);
}

.toolbar__hamburger {
  margin-right: 16px;
}

.toolbar__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 12px;
}

.toolbar__spacer {
  flex: 1;
}

.toolbar__right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.toolbar__icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  color: white;
  transition: all var(--transition-fast);
}

.toolbar__icon-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.05);
}

.toolbar__icon-btn .mdi {
  font-size: 1.3rem;
}

.toolbar__avatar {
  position: relative;
  cursor: pointer;
}

.toolbar__avatar-img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.4);
  transition: border-color var(--transition-fast);
}

.toolbar__avatar-img:hover {
  border-color: rgba(255, 255, 255, 0.7);
}

.toolbar__avatar-img .mdi {
  font-size: 1.8rem;
}

.toolbar__avatar-status {
  position: absolute;
  bottom: 1px;
  right: 1px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--success);
  border: 2px solid var(--primary);
}

@media (max-width: 960px) {
  .toolbar {
    left: 0;
  }

  .toolbar__menu-btn {
    display: flex;
  }
}
</style>
