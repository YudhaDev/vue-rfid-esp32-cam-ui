import '../src/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'


import { createRouter, createWebHistory } from 'vue-router'
import TableRFIDView from './views/TableRFIDView.vue'
import AboutProject from './views/AboutProject.vue'

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
        }
    ]
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
