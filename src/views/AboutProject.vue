<template>
    <div class=" my-centered" :class="storeToggle.pinia_collapsed_sidebar? 'my-container-collapsed' : 'my-container-expanded'">
        <h1 class="text-3xl font-bold pb-2">About Project</h1>
        <p>Project ini dikerjakan untuk menyelesaikan tugas akhir saya.</p>
    </div>
</template>

<script>
import {useStoreToggle} from '../stores/store';

export default {
    setup() {
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