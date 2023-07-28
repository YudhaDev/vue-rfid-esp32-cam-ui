<template>
    <aside :class="{'collapsed-navbar': storeToggle.pinia_collapsed_sidebar}">
        <!-- <img src="../assets/logo.svg" alt="vue" /> -->
        <div class="exclude">
            <Router-link to="/"><h1 class="text-4xl " :class="storeToggle.pinia_collapsed_sidebar ? 'my-nav-collapsed' : 'my-nav-expanded'">{{storeToggle.pinia_collapsed_sidebar ? 'R' : 'RFID'}}</h1></Router-link>
            <Router-link to="/"><h1 class="text-4xl " :class="storeToggle.pinia_collapsed_sidebar ? 'my-nav-collapsed' : 'my-nav-expanded'">{{storeToggle.pinia_collapsed_sidebar ? 'H' : 'Helm'}}</h1></Router-link>
            <Router-link to="/"><h1 class="text-4xl " :class="storeToggle.pinia_collapsed_sidebar ? 'my-nav-collapsed' : 'my-nav-expanded'">{{storeToggle.pinia_collapsed_sidebar ? 'D' : 'Detection'}}</h1></Router-link>
        </div>
        <div class="vertical-linear">
            <RouterLink class="rounded-xl" to="/scan">
                <div class="nav-item-wrapper">
                    <span class="material-icons flex-item">barcode_reader</span>
                    <p>{{storeToggle.pinia_collapsed_sidebar ? '' : 'Mulai Scan'}}</p>
                </div>
                </RouterLink>
            <RouterLink class="rounded-xl" to="/table-view">
                <div class="nav-item-wrapper">
                    <span class="material-icons flex-item">view_list</span>
                    <p>{{storeToggle.pinia_collapsed_sidebar ? '' : 'Tabel Hasil Scan'}}</p>
                </div>
                </RouterLink>
            <RouterLink class="rounded-xl" to="/about-project">
                <div class="nav-item-wrapper">
                    <span class="material-icons flex-item">info</span>
                    <p>{{storeToggle.pinia_collapsed_sidebar ? '' : 'Tentang Project'}}</p>
                </div>
                </RouterLink>
            <!-- <button @click="storeToggle.toggleSidebar">klik saya</button> -->
            <!-- <RouterLink to="/about-project"><span class="material-icons">info</span></RouterLink> -->
        </div>
        <div>
            <version_component />
        </div>
    </aside>
</template>

<script>
import { inject, useAttrs } from 'vue';
import version_component from '../components/Version.vue';
import {useStoreToggle} from '../stores/store';


export default {
    components : {
        version_component
    },
    setup() {
        const storeToggle = useStoreToggle();

        return {storeToggle}
    },
    data() { 
        return{
            // collapsed_sidebar: this.global
        }
    },
    methods: {
        sidebarToggle() {
            this.global_collapsed_sidebar =!this.global_collapsed_sidebar
            console.error("sadawdad")
            console.error(this.global_collapsed_sidebar)
        }
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

    .collapsed-navbar {
        width: 5em;
    }

    /* .exclude.router-link-active {
        color: pink;
    } */
    .my-nav-collapsed {
        color: var(--light);
        text-align: center;
    }

    .my-nav-expanded {
        color: var(--light);
        text-align: left;
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