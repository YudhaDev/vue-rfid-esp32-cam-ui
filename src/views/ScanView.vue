<template>
    <div class="my-container">
        <canvas ref="canvas" :width="width" :height="height"></canvas>
        <button @click="handleClick">Mulai Scan</button>
        <!-- <ScrollingText :text="scrolling_text" :speed="5" /> -->
        <PersistentTextArea />
        
    </div>
</template>
  
<script>
import io from 'socket.io-client';
// import ScrollingText from '../components/ScrollingText.vue';
import PersistentTextArea from '../components/PersistentTextArea.vue'

export default {
    components: {
        // ScrollingText
        PersistentTextArea
    },
    data() {
        return {
            socket: null,
            width: 640,  // Change according to the video frame size
            height: 480, // Change according to the video frame size
            websocket_scan: null,
            // scrolling_text : "text scroll"
            text_area_content: ""
        };
    },
    methods: {
        handleClick() {
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
  