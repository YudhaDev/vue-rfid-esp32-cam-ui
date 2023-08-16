import '../src/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'


import { createRouter, createWebHistory } from 'vue-router'
import TableRFIDView from './views/TableRFIDView.vue'
import AboutProject from './views/AboutProject.vue'
import WelcomeView from './views/WelcomeView.vue'
import ScanView from './views/ScanView.vue'
import ScanPulangView from './views/ScanPulangView.vue'
import KehadiranView from './views/TabelKehadiranVeiw.vue'
import RegisterView from './views/RegisterView.vue'


const router = createRouter({
    history : createWebHistory(),
    routes: [
        {
            path    : '/table-view',
            component: () => TableRFIDView,
            name    : "TableView"
        },
        {
            path    : '/about-project',
            component: () => AboutProject,
            name    : "AboutProject"
        },
        {
            path : '/',
            component: () => WelcomeView,
            name: 'welcome'
        } ,
        {
            path: '/scan',
            component: () => ScanView,
            name: 'scan'
        },
        {
            path: '/scan-pulang',
            component: () => ScanPulangView,
            name: 'scanpulang'
        },
        {
            path: '/kehadiran-view',
            component: () => KehadiranView,
            name: 'kehadiran'
        },
        {
            path: '/register-rfid',
            component: () => RegisterView,
            name: 'register'
        } 
        

    ]
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Membuat global variable
app.config.globalProperties.$my_global = false

app.mount('#app')
