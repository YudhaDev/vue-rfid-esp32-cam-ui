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
            this.pinia_show_modal_rfid_scanned = true
            setTimeout(() => {
                this.toggleModal();
                this.pinia_show_modal_rfid_scanned = false
            }, 3000)
        }
    }
})

export const useModalToggleScanMasuk = defineStore(
    'modalToggleScanMasuk', {
        state: () => ({
            pinia_show_modal_scan_masuk: false,
        }),
        actions: {
            toggleModal() {
                this.pinia_show_modal_scan_masuk = !this.pinia_show_modal_scan_masuk
            }
        }
    }
)