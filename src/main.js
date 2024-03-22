import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
//import App from './App.vue'
//import father from './FatherCom.vue'
//import father from './refCom.vue'
//import father from './dataCrossCom/room-page.vue'
import father from './piniaEx/CountTest.vue'
const pinia = createPinia()
createApp(father).use(pinia).mount('#app')
