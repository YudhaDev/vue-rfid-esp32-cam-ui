import {defineStore} from 'pinia';

export const useStoreToggle = defineStore('storeToggle', {
    state: () => ({
        pinia_collapsed_sidebar: false,
    }),
    actions: {
        toggleSidebar() {
            this.pinia_collapsed_sidebar = !this.pinia_collapsed_sidebar
            console.error('errrr')
        }
    }
})
