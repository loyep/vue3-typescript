import { createApp } from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'

const app = createApp({
  router,
  store,
  render: (h: Function) => h(App)
})

app.mount('#app')
