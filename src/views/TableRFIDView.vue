<template>
  <div :class="storeToggle.pinia_collapsed_sidebar ? 'my-container-table-collapsed' : 'my-container-table'" class="flex-1">
    <!-- <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10"> -->
    <div class="">
      <div>
        <span>
          <p class="center text-3xl text-gray-700 font-bold mb-5">
            Tabel Scan RFID dan Kamera
          </p>
        </span>
      </div>

      <table class="table-auto text-center rounded-3xl w-full">
        <thead>
          <tr>
            <th class="bg-blue-100 border text-left px-8 py-4">ID</th>
            <th class="bg-blue-100 border text-left px-8 py-4">Nomor RFID</th>
            <th class="bg-blue-100 border text-left px-8 py-4">Foto</th>
            <th class="bg-blue-100 border text-left px-8 py-4">Status</th>
            <th class="bg-blue-100 border text-left px-8 py-4">Waktu Scan</th>
            <!-- <th class="bg-blue-100 border text-left px-8 py-4">Status</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="id">
            <td>{{ item.id }}</td>
            <td>{{ item.rfid_number }}</td>
            <td><img :src=item.img_name width="200" height="100"></td>
            <td>{{ item.status }}</td>
            <td>{{ item.date_created }}</td>

          </tr>
        </tbody>

      </table>

      <!-- <table class="table-auto">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table> -->

      <!-- <div>
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
      </div> -->

      <div>
        <!-- <h1>
          Python Console:
        </h1> -->
        <div>
          <pre>
          {{ consoleOutput }}
        </pre>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
.my-container-table {
  margin-left: 15em;
  padding: 5em;
  transition: all 0.3s ease;

}

.my-container-table-collapsed {
  margin-left: 5em;
  padding: 5em;
  transition: all 0.3s ease;
}
</style>

<style lang="scss" scoped>
img {
  padding: 1rem;
}


</style>

<script lang="ts">
import axios from "axios";
import {useStoreToggle} from '../stores/store'

export default {
  setup () {
    const storeToggle = useStoreToggle();

    return {storeToggle}
  },
  data() {
    return {
      data: [],
      consoleOutput: "",
    }
  },
  created() {
  },
  beforeDestroy() {
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