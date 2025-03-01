import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
