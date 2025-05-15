import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import axios from 'axios';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import Oruga from '@oruga-ui/oruga-next';
import '@oruga-ui/oruga-next/dist/oruga.css'; // Import Oruga styles

import './assets/tailwind.css'; // Ensure this path is correct

createApp(App).use(Oruga).mount('#app')

// Axios auth interceptor
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Initialize Vue app
const app = createApp(App);

app.component('v-select', vSelect);
app.use(createPinia());
app.use(router);
app.use(Oruga);

app.mount('#app');