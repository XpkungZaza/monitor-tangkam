import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from 'vue3-apexcharts'

import '@mdi/font/css/materialdesignicons.css'
import './styles/main.css'

const app = createApp(App)
app.use(router)
app.use(VueApexCharts)
app.mount('#app')
