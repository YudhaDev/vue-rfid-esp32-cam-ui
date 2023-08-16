<template>
    <div>

        <div class="" :class="storeToggle.pinia_collapsed_sidebar ? 'scan-container-collapsed' : 'scan-container-expanded'">
            <div class="scan-flex">
                <h1 class="text-3xl font-blod pb-2">Video Stream Kamera</h1>
                <div v-show="shimmer" id="loading-shimer" class="bg-slate-200 my-div animate-pulse mb-3"></div>
                <canvas v-show="canvas" id="video-canvas" class="mb-3" ref="canvas" :width="width"
                    :height="height"></canvas>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 
            focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 
            mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none 
            dark:focus:ring-blue-800" @click="handleClick">Mulai Scan</button>
                <!-- <ScrollingText :text="scrolling_text" :speed="5" /> -->
                <!-- <PersistentTextArea /> -->
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.my-div {
    width: 640px;
    height: 480px;
}
</style>

<script>
import io from 'socket.io-client';
import PersistentTextArea from '../components/PersistentTextArea.vue'
import ModalPopup from '../components/PopupScanRFID.vue'
import { useStoreToggle } from '../stores/store';

export default {
    setup() {
        const storeToggle = useStoreToggle();

        return { storeToggle }
    },
    components: {
        // ScrollingText
        PersistentTextArea,
    },
    data() {
        return {
            socket: null,
            width: 640,  // Change according to the video frame size
            height: 480, // Change according to the video frame size
            websocket_scan: null,
            // scrolling_text : "text scroll"
            text_area_content: "",
            shimmer: true,
            canvas: false
        };
    },
    methods: {
        handleClick() {
            console.error("Mulai scan")
            this.shimmer = false
            this.canvas = true
            this.websocket = new WebSocket("ws://localhost:5201");
            this.websocket.onmessage = (event) => {
                this.consoleOutput += event.data + "\n";
            };
            this.websocket.onclose = (event) => {
                if (event.code !== 1000) {
                    console.error("Websocket closed with code ${event.code}");
                }
            }
        },
        appendString() {
            this.text_area_content += "icikiwir \n"
        }
    },
    created() {
    },
    mounted() {
        console.error("xndrive: menkoneksi ke socketio")
        this.socket = io('http://localhost:5000'); // Replace with your backend server URL
        const canvas = this.$refs.canvas;
        const ctx = canvas.getContext('2d');
        this.socket.on('frame', (data) => {
            const img = new Image();
            img.onload = () => {
                ctx.drawImage(img, 0, 0, this.width, this.height);
            };
            img.src = 'data:image/jpeg;base64,' + data;
        });
    },
};
</script>
  