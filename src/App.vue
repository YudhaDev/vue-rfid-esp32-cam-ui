<template>
  <div class="app">
    <SidebarVue />
    <RouterView v-slot="{ Component}">
      <transition name="route" mode="out-in">
        <component :is="Component"> </component>
      </transition>
    </RouterView>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SidebarVue from './components/Sidebar.vue'
</script>

<style lang="scss">
.my-container {
  margin-left: 20em;
  min-width: 100vh;
  padding-left: 20em;
}
:root {
  --primary: #075985;
  --primary-alt: #075985;
  --dark: #1E293B;  
  --dark-alt: #1E293B;
  --light: #F9FAFB;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;
    // background-color: var(--dark);

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
