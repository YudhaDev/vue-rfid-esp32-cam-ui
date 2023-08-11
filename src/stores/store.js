import {defineStore} from 'pinia';

export const useStoreToggle = defineStore('storeToggle', {
    state: () => ({
        pinia_collapsed_sidebar: false,
    }),
    actions: {
        toggleSidebar() {
            this.pinia_collapsed_sidebar = !this.pinia_collapsed_sidebar
            console.error('Mulai scan')
        }
    }
})

export const usePopupToggle = defineStore('popupToggle', {
    state: () => ({
        pinia_popup_show: false,
    }),
    actions: {
        togglePopup() {
            this.pinia_popup_show = !this.pinia_popup_show
            console.error(this.pinia_popup_show)
        }
    }

})
