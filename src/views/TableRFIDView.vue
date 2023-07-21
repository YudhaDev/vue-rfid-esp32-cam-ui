<template>
  <div class="main-view">

  </div>
  <div class="grid-clos-12">
  </div>

  <!-- <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10"> -->
  <div class="container bg-gray-200 rounded-3xl mx-auto p-8 m-8">
    <div>
      <span>
        <p class="center text-3xl text-gray-700 font-bold mb-5">
          Tabel Scan RFID dan Kamera
        </p>
      </span>
    </div>

    <table class="table-auto text-center rounded-3xl">
      <thead>
        <tr>
          <th class="bg-blue-100 border text-left px-8 py-4">ID</th>
          <th class="bg-blue-100 border text-left px-8 py-4">Nomor RFID</th>
          <th class="bg-blue-100 border text-left px-8 py-4">Foto</th>
          <th class="bg-blue-100 border text-left px-8 py-4">Waktu Scan</th>
          <!-- <th class="bg-blue-100 border text-left px-8 py-4">Status</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="id">
          <td>{{ item.id }}</td>
          <td>{{ item.rfid_number }}</td>
          <td><img :src=item.img_name width="200" height="100">
          </td>
          <td>{{ item.date_created }}</td>

        </tr>
      </tbody>
      <!-- <tbody>
        <tr class="hover:bg-gray-50">
          <td><img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
              width="100" height="200" class="rounded-3xl"></td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
          <td>Memakai Helm.</td>
        </tr>
        <tr>
          <td><img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
              width="100" height="200"></td>
          <td>The Eagles</td>
          <td>1972</td>
          <td>Memakai Helm.</td>

        </tr>
        <tr>
          <td><img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
              width="100" height="200"></td>
          <td>Earth, Wind, and Fire</td>
          <td>1975</td>
          <td>Memakai Helm.</td>

        </tr>
      </tbody> -->
    </table>

    <div>
      <h1>API DATA</h1>
      <ul>
        <li v-for="item in data">
          {{ item.id }}
        </li>
      </ul>
      <ul>
        <li v-for="item in data" :key="item.id">
          {{ item.rfid_number }}
        </li>
      </ul>
    </div>
    
    <div>
      <h1>
        Python Console:
      </h1>
      <div>
        <pre>
          {{ consoleOutput }}
        </pre>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  img {
    padding: 1rem;
  }
</style>

<script lang="ts">
import axios from "axios";
  export default {
    data() {
      return {
        data : [],
        consoleOutput: ""
      }
    },
    created() {
        this.websocket = new WebSocket("ws://localhost:8000");
        this.websocket.onmessage = (event) => {
          this.consoleOutput += event.data + "\n";
        };
        this.websocket.onclose = (event) => {
          if(event.code !== 1000) {
            console.error("Websocket closed with code ${event.code}");
          }
        }
    },
    beforeDestroy() {
        this.websocket.close();
    },
    mounted() {
      this.getData();
    },
    methods: {
      async getData() {
        console.error("Masuk getData.")
        try {
          const response = await axios.get("http://127.0.0.1:5000/get-all")
          this.data = response.data;
        } catch (error) {
          console.error("Error dalam mengambil data.", error);
        }
      }
    }
  }
</script>