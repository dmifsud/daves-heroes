import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import createRouter from './pages/routes';
import { createPinia } from 'pinia'
import './style.css'
import './styles/tailwind.css'

import App from './App.vue';

const store = createPinia();
const router = createRouter(createWebHistory());

const app = createApp(App);
app.use(router).use(store).mount('#app');