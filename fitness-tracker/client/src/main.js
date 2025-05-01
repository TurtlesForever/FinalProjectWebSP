import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import './index.css'; // if you are using TailwindCSS

import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const app = createApp(App);
console.log("Bootstrapping Vue app...");
createApp(App).mount('#app');

app.use(createPinia());
app.use(router);

app.mount('#app');