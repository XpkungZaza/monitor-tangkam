<template>
  <div class="dashboard">
    <div class="container">
      <!-- Stat Cards Grid -->
      <div class="row">
        <div
          v-for="(card, index) in statCards"
          :key="card.title"
          class="col col-12 col-sm-6 col-lg-3"
        >
          <StatCard
            :title="card.title"
            :value="card.value"
            :icon="card.icon"
            :color="card.color"
            :small-text="card.smallText || false"
            :delay="index * 60"
          />
        </div>
      </div>

      <!-- Map Section -->
      <div class="row" style="margin-top: 8px">
        <div class="col col-12">
          <div class="section-card animate-fade-in-up" style="animation-delay: 0.3s">
            <div class="toolbar-title">
              <span class="mdi mdi-map-marker-multiple"></span>
              แผนที่
            </div>
            <div class="map-container">
              <div ref="mapRef" style="width: 100%; height: 100%; z-index: 1;"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="row" style="margin-top: 8px">
        <!-- Bar Chart: Hourly Press Count -->
        <div class="col col-12 col-lg-8">
          <div class="section-card animate-fade-in-up" style="animation-delay: 0.45s">
            <div class="toolbar-title">
              <span class="mdi mdi-chart-bar"></span>
              จำนวนการกดรายชั่วโมง
            </div>
            <div class="section-card__body">
              <apexchart
                type="bar"
                height="350"
                :options="barChartOptions"
                :series="barChartSeries"
              />
            </div>
          </div>
        </div>

        <!-- Pie Chart: Press Ratio -->
        <div class="col col-12 col-lg-4">
          <div class="section-card animate-fade-in-up" style="animation-delay: 0.55s">
            <div class="toolbar-title">
              <span class="mdi mdi-chart-donut"></span>
              อัตราส่วนการกด
            </div>
            <div class="section-card__body">
              <apexchart
                type="donut"
                height="380"
                :options="pieChartOptions"
                :series="pieChartSeries"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import StatCard from '../components/StatCard.vue'

// Import icons
import transportationIcon from '../assets/icon/transportation.png'
import pedestriansIcon from '../assets/icon/pedestrians.png'
import routerDeviceErrorIcon from '../assets/icon/router-device-error.png'
import updateIcon from '../assets/icon/update.png'
import mapIcon from '../assets/icon/map.png'
import pedestrian3Icon from '../assets/icon/pedestrian3.png'
import crosswalkIcon from '../assets/icon/crosswalk.png'
import pedestrian2Icon from '../assets/icon/pedestrian2.png'

const mapRef = ref(null)
let mapInstance = null

const darkStyle = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
  { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212a37" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9ca5b3" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#515c6d" }] },
  { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#17263c" }] },
]

const applyMapTheme = () => {
  if (!mapInstance) return
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
  mapInstance.setOptions({ styles: isDark ? darkStyle : [] })
}

onMounted(() => {
  const initMap = () => {
    if (window.google && window.google.maps && mapRef.value) {
      mapInstance = new window.google.maps.Map(mapRef.value, {
        center: { lat: 18.787747, lng: 98.993128 }, // Chiang Mai coordinates
        zoom: 14,
        mapTypeId: 'terrain',
        disableDefaultUI: false,
      });

      applyMapTheme()
      applyChartTheme()

      // Add a sample marker
      new window.google.maps.Marker({
        position: { lat: 18.787747, lng: 98.993128 },
        map: mapInstance,
        title: 'หน้าตลาดสมเพชรคูเมืองด้านนอก',
      });
    } else {
      setTimeout(initMap, 500);
    }
  };
  initMap();
  applyChartTheme();
  window.addEventListener('theme-changed', handleThemeChange)
});

onUnmounted(() => {
  window.removeEventListener('theme-changed', handleThemeChange)
})

const handleThemeChange = () => {
  applyMapTheme()
  applyChartTheme()
}

const applyChartTheme = () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
  const mode = isDark ? 'dark' : 'light'
  
  barChartOptions.value = {
    ...barChartOptions.value,
    theme: { mode }
  }
  
  pieChartOptions.value = {
    ...pieChartOptions.value,
    theme: { mode }
  }
}

const statCards = ref([
  {
    title: 'ทางข้ามทั้งหมด',
    value: '20 จุด',
    icon: transportationIcon,
    color: 'indigo',
  },
  {
    title: 'กดข้ามวันนี้',
    value: '0 ครั้ง',
    icon: pedestriansIcon,
    color: 'indigo',
  },
  {
    title: 'สถานะผิดปกติ',
    value: '4 จุด',
    icon: routerDeviceErrorIcon,
    color: 'indigo',
  },
  {
    title: 'อัพเดทล่าสุด',
    value: '2 เดือนที่แล้ว',
    icon: updateIcon,
    color: 'indigo',
    smallText: true,
  },
  {
    title: 'จุดข้ามมากที่สุด',
    value: 'หน้าตลาดสมเพชรคูเมืองด้านนอก',
    icon: mapIcon,
    color: 'purple',
    smallText: true,
  },
  {
    title: 'จำนวนการข้ามมากสุด',
    value: '0 ครั้ง',
    icon: pedestrian3Icon,
    color: 'purple',
  },
  {
    title: 'จุดข้ามน้อยที่สุด',
    value: 'หน้าคณะทันตแพทย์',
    icon: crosswalkIcon,
    color: 'purple',
    smallText: true,
  },
  {
    title: 'จำนวนการข้ามน้อยสุด',
    value: '0 ครั้ง',
    icon: pedestrian2Icon,
    color: 'purple',
  },
])

// Bar Chart — hourly press count
const barChartOptions = ref({
  chart: {
    id: 'hourly-press',
    toolbar: { show: true },
    fontFamily: 'Noto Sans Thai, Roboto, sans-serif',
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      columnWidth: '55%',
    },
  },
  dataLabels: { enabled: false },
  xaxis: {
    categories: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    labels: {
      style: { fontSize: '11px' },
    },
  },
  yaxis: {
    title: { text: 'จำนวนครั้ง' },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.3,
      opacityFrom: 0.9,
      opacityTo: 0.7,
    },
  },
  colors: ['#3b82f6'],
  theme: { mode: 'light' },
  tooltip: {
    y: {
      formatter: (val) => `${val} ครั้ง`,
    },
  },
})

const barChartSeries = ref([
  {
    name: 'จำนวนการกด',
    data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 15)),
  },
])

// Pie/Donut Chart — press ratio
const pieChartOptions = ref({
  chart: {
    fontFamily: 'Noto Sans Thai, Roboto, sans-serif',
  },
  labels: [
    'หน้าตลาดสมเพชร',
    'แยกข่วงสิงห์',
    'หน้าวัดพระสิงห์',
    'หน้าคณะทันตแพทย์',
    'หน้าประตูท่าแพ',
  ],
  colors: ['#3b82f6', '#9333ea', '#f59e0b', '#10b981', '#ef4444'],
  theme: { mode: 'light' },
  legend: {
    position: 'bottom',
    fontSize: '12px',
  },
  dataLabels: {
    enabled: true,
    style: { fontSize: '12px' },
  },
  plotOptions: {
    pie: {
      donut: {
        size: '55%',
        labels: {
          show: true,
          total: {
            show: true,
            label: 'ทั้งหมด',
            fontSize: '14px',
            fontWeight: 600,
          },
        },
      },
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: { height: 300 },
        legend: { position: 'bottom' },
      },
    },
  ],
})

const pieChartSeries = ref([35, 25, 20, 12, 8])
</script>

<style scoped>
.dashboard {
  min-height: calc(100vh - var(--toolbar-height));
}

.map-container {
  height: 500px;
  width: 100%;
  background: #e5e3df;
  position: relative;
  border-radius: 0 0 4px 4px;
  overflow: hidden;
}
</style>
