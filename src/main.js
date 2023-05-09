import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from './router.js'


const app = createApp(App)
app.use(router)
.mount('#app')