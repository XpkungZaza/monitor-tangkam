import { createRouter, createWebHashHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/DashboardView.vue'),
    meta: { title: 'ภาพรวม', icon: 'mdi-view-dashboard', requiresAuth: true },
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('../views/MapView.vue'),
    meta: { title: 'แผนที่', icon: 'mdi-map', requiresAuth: true },
  },
  {
    path: '/marker',
    name: 'Marker',
    component: () => import('../views/MarkerView.vue'),
    meta: { title: 'เซ็นเซอร์', icon: 'mdi-map-marker', requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// Authentication Guard
let isAuthReady = false
const auth = getAuth()

router.beforeEach(async (to, from, next) => {
  // Wait for initial auth state if not ready
  if (!isAuthReady) {
    await new Promise(resolve => {
      const unsubscribe = onAuthStateChanged(auth, () => {
        isAuthReady = true
        unsubscribe()
        resolve()
      })
    })
  }

  const requiresAuth = false // temporarily disable auth
  const currentUser = auth.currentUser

  if (requiresAuth && !currentUser) {
    next('/login')
  } else if (to.path === '/login' && currentUser) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router
