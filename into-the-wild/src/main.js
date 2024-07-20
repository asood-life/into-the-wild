import { createApp } from 'vue';
import App from './App.vue';
import EventBus from './EventBus';
import './index.css';

const app = createApp(App);

// add EventBus to global properties for event handling
app.config.globalProperties.$bus = EventBus;

// mount the app to the DOM element
app.mount('#app');
