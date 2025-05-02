import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import './index.css'; // TailwindCSS setup

import axios from 'axios';

// Add a request interceptor for auth
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
console.log("Bootstrapping Vue app...");

app.use(createPinia());
app.use(router);

app.mount('#app');