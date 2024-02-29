import { VueElement, createApp,ref } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

import './assets/main.less'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

app.config.globalProperties.$axios = axios


// let getAxiosData = ref([])
// axios.get('http://localhost:8080/api/xuser/viewuser').then(respones => {
//     getAxiosData.value = respones.data
//     console.log('第一次数据',getAxiosData.value)
// })