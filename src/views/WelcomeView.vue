<template>
    <div class="my-centered" :class="storeToggle.pinia_collapsed_sidebar ? 'my-container-collapsed' : 'my-container-expanded'">
        <h1 class="text-3xl font-bold pb-2">Selamat Datang</h1>
        <p>Di sistem pengecekan dengan menggunakan RFID dan scan Helm. </p>
    </div>
</template>

<script>
import {useStoreToggle} from '../stores/store'

export default {
    setup () {
        const storeToggle = useStoreToggle();

        return {storeToggle}
    }
}

</script>

<style scoped>
    .my-centered {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>