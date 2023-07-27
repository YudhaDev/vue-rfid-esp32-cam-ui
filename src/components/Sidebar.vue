<template>
    <aside>
        <!-- <img src="../assets/logo.svg" alt="vue" /> -->
        <div class="exclude">
            <Router-link to="/"><h1 class="text-4xl" style="text-align: left;">RFID</h1></Router-link>
            <Router-link to="/"><h1 class="text-4xl" style="text-align: left;">Helm</h1></Router-link>
            <Router-link to="/"><h1 class="text-4xl" style="text-align: left;">Detection</h1></Router-link>
        </div>
        <div class="vertical-linear">
            <RouterLink class="rounded-xl" to="/scan">
                <div class="nav-item-wrapper">
                    <span class="material-icons flex-item">barcode_reader</span>
                    <p>Mulai Scan</p>
                </div>
                </RouterLink>
            <RouterLink class="rounded-xl" to="/table-view">
                <div class="nav-item-wrapper">
                    <span class="material-icons flex-item">view_list</span>
                    <p>Tabel Hasil Scan</p>
                </div>
                </RouterLink>
            <RouterLink class="rounded-xl" to="/about-project">
                <div class="nav-item-wrapper">
                    <span class="material-icons flex-item">info</span>
                    <p>Tentang Project</p>
                </div>
                </RouterLink>
            <!-- <RouterLink to="/about-project"><span class="material-icons">info</span></RouterLink> -->
        </div>
        <div>
            <version_component />
        </div>
    </aside>
</template>

<script>
import version_component from '../components/Version.vue';

export default {
    components : {
        version_component
    }
}
</script>

<style class="scss" scoped>
    aside {
        display: flex;
        flex-direction: column;
        position: fixed;
        overflow: hidden;
        background-color: var(--dark);
        color: var(--light);
        min-height: 100vh;
        padding: 1rem;
        width: 15em;
        

        transition: 0.2s ease-out;

        @media (max-width: 768px){
            position: fixed;
            z-index: 99;
        }
    }

    .router-link-active {
        color: rgb(24, 24, 24);
        background-color: white;
    }

    .vertical-linear {
        display: flex;
        flex-direction: column;
        margin-top: 2em;
    }

    .nav-item-wrapper {
        display: flex;
        padding: 10px;

    }
    .flex-item {
        margin-right: 2px;
    }


</style>