<template>
    <div :v-show="popupToggle.pinia_popup_show" class="my-popup">
        <div class="p-10 bg-white">
            <h1 class="text-3xl">Melebihi batas 56 Jam.</h1>
            <h1 class="text-3xl">Selamat Datang. Silahkan Masuk.</h1>
            <button type="button" class="text-white center bg-blue-700 hover:bg-blue-800 
            focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 
            mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none 
            dark:focus:ring-blue-800" @click="popupToggle.togglePopup">OK</button>
        </div>
    </div>
</template>

<script>
import {usePopupToggle} from '../stores/store'

export default {
  setup () {
    const popupToggle = usePopupToggle();

    return {popupToggle}
  },
  methods: {
    }
  
}
</script>

<style>
.my-popup {
  /* display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99; */
}
</style>