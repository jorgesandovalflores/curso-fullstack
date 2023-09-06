import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import route from './router'
import App from './MyApp.vue'


createApp(App)
.use(route)
.use(createPinia())
.mount('#app')
