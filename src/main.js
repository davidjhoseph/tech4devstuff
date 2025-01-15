import './css/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from "vuex";
import * as modules from './store'
const app = createApp(App)

const store = createStore({
  modules,
});

app.use(router)
app.use(store);
app.mount('#app')
