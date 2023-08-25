import {defineStore} from 'pinia';

export const useModalToggle = defineStore('modalToggle', {
    state: () => ({
        pinia_show_modal: false,
        pinia_show_modal_rfid_scanned_register: false,
        pinia_show_modal_rfid_scanned_register_terdaftar: false,
        pinia_show_modal_rfid_scanned_pulang: false,
        pinia_show_modal_rfid_scanned_pulang_sudah: false,
        
    }),
    actions: {
        toggleModal() {
            this.pinia_show_modal = !this.pinia_show_modal
        },
        rfidScanned(mode) {
            switch (mode) {
                case "register":
                    console.error("Masuk register state")
                    this.pinia_show_modal_rfid_scanned_register = true
                    break;
        
                case "pulang":
                    this.pinia_show_modal_rfid_scanned_pulang = true 
                    break;
                case "pulang-sudah":
                    this.pinia_show_modal_rfid_scanned_pulang = true 
                    this.pinia_show_modal_rfid_scanned_pulang_sudah = true
                    break;
                case "register-terdaftar":
                    this.pinia_show_modal_rfid_scanned_register_terdaftar= true
                    break;
                default:
                    break;
            }

            setTimeout(() => {
                this.resetState()
            }, 3000)
        },
        resetState(){
            this.pinia_show_modal= false
            this.pinia_show_modal_rfid_scanned_register= false
            this.pinia_show_modal_rfid_scanned_pulang= false
            this.pinia_show_modal_rfid_scanned_register_terdaftar= false
            this.pinia_show_modal_rfid_scanned_pulang_sudah= false
        }
    }
})

export const useModalToggleScanMasuk = defineStore(
    'modalToggleScanMasuk', {
        state: () => ({
            pinia_show_modal_scan_masuk: false,
            pinia_show_modal_scan_masuk_rfid_detected: false,
            pinia_show_modal_scan_masuk_overtime: false,
            pinia_kehadiran_value: "0",
            pinia_kehadiran_value_show: false,
            pinia_3s_msg: false,
            pinia_welcome_show: false,
            pinia_cobalagi_show: false,
            pinia_sudahscan_show: false


        }),
        actions: {
            toggleModal() {
                this.pinia_show_modal_scan_masuk = !this.pinia_show_modal_scan_masuk
            },
            showOvertime(){
                this.pinia_show_modal_scan_masuk_overtime = true
                this.pinia_3s_msg = true
                this.closeNotice()
            },
            rfidDetected(){
                this.pinia_show_modal_scan_masuk_rfid_detected = true
                this.closeNotice()
            },
            sudahScanHariIni() {
                this.pinia_show_modal_scan_masuk_rfid_detected = false
                this.pinia_sudahscan_show= true
                this.closeNotice()
            },
            kehadiranValueShow(value_kehadiran) {
                this.pinia_kehadiran_value = value_kehadiran
                this.pinia_kehadiran_value_show = true
                this.pinia_3s_msg = true
                this.closeNotice()
            },
            closeNotice(){
                setTimeout(() => {
                    this.resetState()
                }, 3000)
            },
            showWelcome(value){
                if (value=="helm terdeteksi") {
                    this.pinia_show_modal_scan_masuk_rfid_detected= true
                    this.pinia_show_modal_scan_masuk = true
                    this.pinia_welcome_show= true
                } else {
                    this.pinia_show_modal_scan_masuk_rfid_detected= true
                    this.pinia_show_modal_scan_masuk = true
                    this.pinia_cobalagi_show= true
                }

                setTimeout(() => {
                    this.resetState()
                }, 6000)
            },
            resetState(){
                this.pinia_show_modal_scan_masuk= false,
                this.pinia_show_modal_scan_masuk_rfid_detected= false,
                this.pinia_show_modal_scan_masuk_overtime= false,
                this.pinia_kehadiran_value= "0",
                this.pinia_kehadiran_value_show= false
                this.pinia_3s_msg= false
                this.pinia_welcome_show= false
                this.pinia_cobalagi_show= false
                this.pinia_sudahscan_show= false
            }
        }
    }
)