<template>
    <div :class="storeToggle.pinia_collapsed_sidebar ? 'my-container-table-collapsed' : 'my-container-table'" class="flex-1">
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
              <th class="bg-blue-100 border text-left px-8 py-4">Nomor RFID</th>
              <th class="bg-blue-100 border text-left px-8 py-4">Kehadiran Mingguan</th>
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
      </div>
    </div>
  </template>

<script>
import {useStoreToggle} from '../stores/store'

export default{
    setup() {
        const storeToggle = useStoreToggle();

        return {storeToggle}
    },

}
</script>