import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import axios from 'axios'
import './css/tailwind.scss'


let app;

if (!app) {
  app = createApp(App).use(store);
  app.config.globalProperties.$axios = axios;
  app.mount("#app");
}