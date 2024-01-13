import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import gsap from 'gsap';
import App from './App.vue'
import router from './router'

const app = createApp(App)
 
app.config.globalProperties.$gsap = gsap;
app.use(createPinia())
app.use(router)

app.mount('#app')
 