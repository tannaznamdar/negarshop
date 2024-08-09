import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./plugins/fontawesome.js"
import "./assets/css/iransans.css"
import i18n from './lang/config.js'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
