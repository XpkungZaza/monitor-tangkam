<template>
  <div class="map-view">
    <div class="container">
      <div class="section-card animate-fade-in-up">
        <div class="toolbar-title">
          <span class="mdi mdi-map"></span>
          แผนที่ทางข้าม — เทศบาลนครเชียงใหม่
        </div>
        <div class="map-view__body" style="position: relative;">
          <div ref="mapRef" style="width: 100%; height: 100%; z-index: 1;"></div>
          <div class="map-controls">
            <button
              v-for="ctrl in mapControls"
              :key="ctrl.label"
              class="map-control-btn"
              :class="{ active: ctrl.active }"
              @click="toggleControl(ctrl)"
            >
              <img :src="ctrl.icon" :alt="ctrl.label" width="28" height="28" />
              <span>{{ ctrl.label }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import poiImg from '../assets/img/poi.png'
import terrainImg from '../assets/img/terrain.png'
import trafficImg from '../assets/img/traffic.png'
import overlayImg from '../assets/img/overlay.png'
import infoImg from '../assets/img/info.png'
import darkImg from '../assets/img/dark.png'

const mapControls = ref([
  { id: 'poi', label: 'POI', icon: poiImg, active: false },
  { id: 'terrain', label: 'ภูมิประเทศ', icon: terrainImg, active: true },
  { id: 'traffic', label: 'จราจร', icon: trafficImg, active: false },
  { id: 'overlay', label: 'Overlay', icon: overlayImg, active: false },
  { id: 'info', label: 'ข้อมูล', icon: infoImg, active: false },
  { id: 'dark', label: 'มืด', icon: darkImg, active: false },
])

const mapRef = ref(null)
let map = null
let trafficLayer = null

const darkStyle = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
]

const applyMapTheme = () => {
  if (!map) return
  // If user explicitly activated 'dark' control, override global theme
  const darkControl = mapControls.value.find(c => c.id === 'dark')
  const isGlobalDark = document.documentElement.getAttribute('data-theme') === 'dark'
  
  if (darkControl && darkControl.active) {
    map.setOptions({ styles: darkStyle })
  } else if (isGlobalDark) {
    map.setOptions({ styles: darkStyle })
  } else {
    map.setOptions({ styles: [] })
  }
}

onMounted(() => {
  const initMap = () => {
    if (window.google && window.google.maps && mapRef.value) {
      map = new window.google.maps.Map(mapRef.value, {
        center: { lat: 18.787747, lng: 98.993128 },
        zoom: 14,
        mapTypeId: 'terrain',
        disableDefaultUI: false,
      })
      trafficLayer = new window.google.maps.TrafficLayer()
      applyMapTheme()
    } else {
      setTimeout(initMap, 500)
    }
  }
  initMap()
  window.addEventListener('theme-changed', applyMapTheme)
})

onUnmounted(() => {
  window.removeEventListener('theme-changed', applyMapTheme)
})

function toggleControl(ctrl) {
  ctrl.active = !ctrl.active
  
  if (!map) return

  switch (ctrl.id) {
    case 'terrain':
      if (ctrl.active) map.setMapTypeId('terrain')
      else map.setMapTypeId('roadmap')
      break
    case 'traffic':
      if (ctrl.active) trafficLayer.setMap(map)
      else trafficLayer.setMap(null)
      break
    case 'dark':
      applyMapTheme()
      break
  }
}
</script>

<style scoped>
.map-view__body {
  height: calc(100vh - var(--toolbar-height) - 120px);
  min-height: 500px;
}

.map-controls {
  position: absolute;
  bottom: 24px;
  left: 24px;
  display: flex;
  gap: 8px;
  z-index: 10;
  flex-wrap: wrap;
}

.map-control-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 10px 14px;
  border-radius: var(--radius-md);
  background: var(--bg-card);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-fast);
  font-size: 0.75rem;
  color: var(--text-secondary);
  min-width: 70px;
}

.map-control-btn:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.map-control-btn.active {
  background: var(--indigo);
  color: white;
  box-shadow: 0 4px 12px rgba(63, 81, 181, 0.3);
}

.map-control-btn img {
  border-radius: 4px;
}
</style>
