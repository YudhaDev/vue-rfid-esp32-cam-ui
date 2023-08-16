<template>
  <div :class="storeToggle.pinia_collapsed_sidebar ? 'my-container-table-collapsed' : 'my-container-table'"
    class="flex-1">
    <!-- <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10"> -->
    <div class="">
      <div>
        <span>
          <p class="center text-3xl text-gray-700 font-bold mb-5">
            Tabel Kehadiran
          </p>
        </span>
      </div>

      <table class="table-auto text-center rounded-3xl w-full">
        <thead>
          <tr>
            <th class="bg-blue-100 border text-left px-8 py-4">ID</th>
            <th class="bg-blue-100 border text-left px-8 py-4">Nama</th>
            <th class="bg-blue-100 border text-left px-8 py-4">Nomor RFID</th>
            <th class="bg-blue-100 border text-left px-8 py-4">Seksi Bagian</th>
            <th class="bg-blue-100 border text-left px-8 py-4">Kehadiran Mingguan</th>
            <th class="bg-blue-100 border text-left px-8 py-4">Tanggal Entry</th>
            <th class="bg-blue-100 border text-left px-8 py-4">Tanggal Update Terakhir</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="id">
            <td>{{ item.id }}</td>
            <td>{{ item.nama }}</td>
            <td>{{ item.rfid_number }}</td>
            <td>{{ item.seksi_bagian }}</td>
            <td>{{ item.kehadiran_mingguan }}</td>
            <td>{{ item.date_created }}</td>
            <td>{{ item.date_updated }}</td>


          </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>

<script>
import { useStoreToggle } from '../stores/store'
import axios from 'axios'

export default {
  data() {
    return {
      data: [],
    }
  },
  setup() {
    const storeToggle = useStoreToggle();

    return { storeToggle }
  },
  mounted(){
    this.getDataKehadiran()
  },
  methods: {
    async getDataKehadiran() {
      try {
        const response = await axios.get("http://127.0.0.1:5000/get-all-kehadiran")
        this.data = response.data;
      } catch (error) {
        console.error("Error dalam mengambil data.", error);
      }
      // console.error(this.data)
    }
  }

}
</script>