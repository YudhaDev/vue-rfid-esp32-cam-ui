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
          <th class="bg-blue-100 border text-left px-8 py-4">Foto</th>
          <th class="bg-blue-100 border text-left px-8 py-4">Nomor RFID</th>
          <th class="bg-blue-100 border text-left px-8 py-4">Waktu Scan</th>
          <th class="bg-blue-100 border text-left px-8 py-4">Status</th>
        </tr>
      </thead>
      <tbody>
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
      </tbody>
    </table>

  </div>
</template>

<style lang="scss" scoped>
  img {
    padding: 1rem;
  }
</style>