import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import './index.css'; // if you are using TailwindCSS

const app = createApp(App);
console.log("Bootstrapping Vue app...");
createApp(App).mount('#app');

app.use(createPinia());
app.use(router);

app.mount('#app');