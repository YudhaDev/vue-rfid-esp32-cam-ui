<template>
    <div class="" :class="storeToggle.pinia_collapsed_sidebar ? 'scan-container-collapsed' : 'scan-container-expanded'">
        <div class="scan-flex">
            <ModalRFIDRegister />
            <h1>
                Register RFID
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
                <div>
                    <label for="rfid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomer
                        RFID</label>
                    <input v-model="formData.rfid_number" type="text" name="rfid" id="rfid"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="-- -- -- --" required="required" disabled>
                </div>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 
            focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 
            mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none 
            dark:focus:ring-blue-800" @click="modalToggle.toggleModal">Scan RFID untuk Register</button>
                <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                    <input v-model="formData.nama" type="text" name="name" id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Nama pemilik RFID" required="required">
                </div>
                <div>
                    <label for="seksi-bagian" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seksi Bagian</label>
                    <select v-model="formData.seksi_bagian" id="seksi-bagian"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected value="US">Sales</option>
                        <option value="CA">IT Staff</option>
                        <option value="FR">Kurir</option>
                        <option value="DE">Kuli</option>
                    </select>
                </div>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 
            focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 
            mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none 
            dark:focus:ring-blue-800" @click="handleClick">Simpan</button>
            </form>
            <p>
                Received data: {{ receivedData }}
            </p>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 
            focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 
            mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none 
            dark:focus:ring-blue-800" @click="this.scanRFIDRegister">tombol test</button>
        </div>

    </div>
</template>

<script>

import { useStoreToggle } from '../stores/store'
import {useModalToggle} from '../stores/modal_state'
import ModalRFIDRegister from '../components/PopupScanRFID.vue'

export default {
    setup() {
        const storeToggle = useStoreToggle();
        const modalToggle = useModalToggle();
        return { storeToggle, modalToggle };
    },
    data() {
        return {
            isSerialConnected: false,
            receivedData: '',
            port: null,
            formData: {
                rfid_number: '',
                nama: '',
                seksi_bagian: ''
            }
        }
    },
    components: {
        ModalRFIDRegister,
    },
    methods: {
        scanRFIDRegister() {
            this.koneksiAlat()
        },
        async koneksiAlat() {
            const arrayCOM = ["COM1","COM2","COM3","COM4","COM5","COM6","COM7","COM8","COM9","COM10"];
            // for (let index = 0; index < arrayCOM.length; index++) {
                try {
                    port = await navigator.serial.requestPort();
                    await port.open({baudRate: 9600});
                    this.port = port
                    this.port.addEventListener('readable', this.readSerialData);
                    // break;
                } catch (error) {
                    // this.port = "err"
                    console.error(error);
                }
            // }
        },
        disconnectSerial() {
            this.port.close();
            this.port = null;
            this.isSerialConnected = false;
        },
        readSerialData () {
            const reader = this.port.readable.getReader()
            reader.read().then(({value})=> {
                if (value) {
                    this.receivedData = new TextDecoder().decode(value);
                }
                reader.releaseLock();
            })
        }

    }
}



</script>