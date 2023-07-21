<template>
    <aside>
        <img src="../assets/logo.svg" alt="vue" />
        <div class="vertical-linear">
            <RouterLink to="/table-view"><span class="material-icons">view_list</span></RouterLink>
            <RouterLink to="/about-project"><span class="material-icons">info</span></RouterLink>
        </div>
    </aside>
</template>

<script setup>
</script>

<style class="scss" scoped>
    aside {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        background-color: var(--dark);
        color: var(--light);
        min-height: 100vh;
        padding: 1rem;
        width: calc(4rem);

        transition: 0.2s ease-out;

        @media (max-width: 768px){
            position: fixed;
            z-index: 99;
        }
    }

    .vertical-linear {
        display: flex;
        flex-direction: column;
        margin-top: 40vh;
    }


</style>