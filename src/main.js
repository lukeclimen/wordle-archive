import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import Vue3Toasity from 'vue3-toastify';

const app = createApp(App);

app.use(createPinia());
app.use(Vue3Toasity, {
  limit: 4
});

app.mount('#app');
