import {defineStore} from 'pinia';

export const useModalToggle = defineStore('modalToggle', {
    state: () => ({
        pinia_show_modal: false,
        pinia_show_modal_rfid_scanned: false,
    }),
    actions: {
        toggleModal() {
            this.pinia_show_modal = !this.pinia_show_modal
        },
        rfidScanned() {
            this.toggleModal();
        }
    }
})