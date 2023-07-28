<template>
  <div class="app">
    <div class="">
      <span :class="storeToggle.pinia_collapsed_sidebar? 'button-toggle-sidebar-collapsed' : 'button-toggle-sidebar'" class="material-icons button-toggle-sidebar rounded-r-xl" @click="storeToggle.toggleSidebar">
        navigate_next</span>
    </div>
    <SidebarVue />
    <RouterView v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"> </component>
      </transition>
    </RouterView>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SidebarVue from './components/Sidebar.vue'
import {useStoreToggle} from '../src/stores/store'

const storeToggle = useStoreToggle();

</script>

<style lang="scss">
.button-toggle-sidebar {
  position: absolute;
  z-index: 10;
  color: white;
  background: var(--dark);
  top: 50vh;
  left: 9.5em;
  padding: 0.25em;
  transition: all 0.3s ease;
}

.button-toggle-sidebar-collapsed {
  position: absolute;
  z-index: 10;
  color: white;
  background: var(--dark);
  top: 50vh;
  left: 2.7em;
  padding: 0.25em;
  transition: all 0.3s ease;

}


.my-container-expanded {
  margin-left: 15em;
  min-width: 100vh;
  padding-left: 20em;
  transition: all 0.3s ease;

}

.my-container-collapsed {
  margin-left: 5em;
  min-width: 100vh;
  padding-left: 20em;
  transition: all 0.3s ease;

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
}</style>
