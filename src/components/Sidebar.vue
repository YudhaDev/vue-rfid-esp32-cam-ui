<template>
    <aside>
        <!-- <img src="../assets/logo.svg" alt="vue" /> -->
        <div>
            <h1 class="text-4xl" style="text-align: center;">RFID Helm</h1>
        </div>
        <div class="vertical-linear">
            <RouterLink to="/table-view">
                <div class="nav-item-wrapper">
                    <span class="material-icons flex-item">view_list</span>
                    <p>Tabel Hasil Scan</p>
                </div>
                </RouterLink>
            <RouterLink to="/about-project">
                <div class="nav-item-wrapper">
                    <span class="material-icons flex-item">info</span>
                    <p>Tentang Project</p>
                </div>
                </RouterLink>
            <!-- <RouterLink to="/about-project"><span class="material-icons">info</span></RouterLink> -->
        </div>
    </aside>
</template>

<script setup>
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

    .vertical-linear {
        display: flex;
        flex-direction: column;
        margin-top: 2em;
    }

    .nav-item-wrapper {
        display: flex;

    }
    .flex-item {
        margin-right: 2px;
    }


</style>