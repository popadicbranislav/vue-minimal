import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import routes from '~pages'

import '@unocss/reset/tailwind.css'
import './style.css'
import 'uno.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const app = createApp(App)
const head = createHead()
app.use(head)
app.use(router)
app.mount('#app')
