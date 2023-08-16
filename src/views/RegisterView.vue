<template>
  <div
    class=""
    :class="
      storeToggle.pinia_collapsed_sidebar
        ? 'scan-container-collapsed'
        : 'scan-container-expanded'
    "
  >
    <div class="scan-flex">
      <ModalRFIDRegister />
      <h1>Register RFID</h1>
      <form class="space-y-4 md:space-y-6" @submit.prevent="simpanRFIDBaru">
        <div>
          <label
            for="rfid"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Nomer RFID</label
          >
          <input
            v-model="rfid_number"
            type="input"
            name="rfid"
            id="rfid"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="-- -- -- --"
            required="required"
            disabled
          />
        </div>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          @click="this.websocketScanRFIDRegister"
        >
          Scan RFID untuk Register
        </button>
        <div>
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Nama</label
          >
          <input
            v-model="nama"
            type="input"
            name="name"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nama pemilik RFID"
            required="required"
          />
        </div>
        <div>
          <label
            for="seksi-bagian"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Seksi Bagian</label
          >
          <select
            v-model="seksi_bagian"
            id="seksi-bagian"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected value="Sales">Sales</option>
            <option value="ITStaff">IT Staff</option>
            <option value="Kurir">Kurir</option>
            <option value="Kuli">Kuli</option>
          </select>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Simpan
        </button>
      </form>
      <!-- <p>Received data: {{ rfid_socketio }}</p> -->
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';
import { useStoreToggle } from '../stores/store'
import {useModalToggle} from '../stores/modal_state'
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
        this.socket.on('rfid-register', (data) => {
            this.rfid_socketio = data
            this.rfid_number = data
        })
    },
    data() {
        return {
            isSerialConnected: false,
            receivedData: '',
            port: null,
            rfid_socketio: '',
            formData: {

            },
            rfid_number: "",
            nama: "",
            seksi_bagian: ""
        }
    },
    components: {
        ModalRFIDRegister,
    },
    methods: {
        websocketScanRFIDRegister(){
            this.websocket = new WebSocket("ws://localhost:5202")
        },
        async simpanRFIDBaru() {
            try {
                const response = await axios.post('http://localhost:5000/insertRFID', {
                    rfid_number : this.rfid_number,
                    nama : this.nama,
                    seksi_bagian : this.seksi_bagian
                })
                    console.log(this.rfid_number)
                    console.log(this.nama)

                    console.log(this.seksi_bagian)



            } catch (error) {
                console.error(error)
            }
        }
        // scanRFIDRegister() {
        //     this.koneksiAlat()
        // },
        // async koneksiAlat() {
        //     const arrayCOM = ["COM1","COM2","COM3","COM4","COM5","COM6","COM7","COM8","COM9","COM10"];
        //     // for (let index = 0; index < arrayCOM.length; index++) {
        //         try {
        //             let port = await navigator.serial.requestPort();
        //             await port.open({baudRate: 9600});
        //             // port.addEventListener('readable', this.readSerialData);
        //             const reader = port.readable.getReader();
        //             while (true) {
        //                 const {value, done} = await reader.read;
        //                 console.log(value);
        //             }
        //             // break;
        //         } catch (error) {
        //             // this.port = "err"
        //             console.error(error);
        //         }
        //     // }
        // },
        // disconnectSerial() {
        //     navigator.serial.close()
        //     // this.port.close();
        //     this.port.removeEventListener('readable', this.readSerialData)
        //     this.port = null;
        //     this.isSerialConnected = false;
        // },
        // readSerialData () {
        //     console.error("masuk serialData")
        //     const reader = this.port.readable.getReader()
        //     reader.read().then(({value})=> {
        //         if (value) {
        //             this.receivedData = new TextDecoder().decode(value);
        //         }
        //         reader.releaseLock();
        //     })
        // }

    }
}
</script>
