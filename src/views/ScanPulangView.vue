<template>
    <div class="" :class="storeToggle.pinia_collapsed_sidebar
            ? 'scan-container-collapsed'
            : 'scan-container-expanded'
        ">
        <div class="scan-flex">
            <ModalRFIDRegister />
            <h1>Scan Pulang</h1>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 
            focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 
            mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none 
            dark:focus:ring-blue-800" @click="this.websocketScanPulang">Scan Pulang Disini</button>
        </div>
    </div>
</template>
  
<script>
import io from 'socket.io-client';
import { useStoreToggle } from '../stores/store'
import { useModalToggle } from '../stores/modal_state'
import ModalRFIDRegister from '../components/PopupScanRFID.vue'
import axios from 'axios'

export default {
    setup() {
        const storeToggle = useStoreToggle();
        const modalToggle = useModalToggle();
        return { storeToggle, modalToggle };
    },
    mounted() {
        this.socket = io('http://localhost:5000');
        this.socket.on('rfid_pulang', (data) => {
            this.rfid_socketio = data
            this.modalToggle.rfidScanned("pulang")
        })
        this.socket.on('scan-pulang-sudah', (data) => {
            this.modalToggle.rfidScanned("pulang-sudah")
        })
    },
    data() {
        return {
            isSerialConnected: false,
            receivedData: '',
            port: null,
            rfid_socketio: '',
        }
    },
    components: {
        ModalRFIDRegister,
    },
    methods: {
        websocketScanPulang() {
            this.websocket = new WebSocket("ws://localhost:5203")
            this.modalToggle.toggleModal()
        },


    }
}
</script>
  