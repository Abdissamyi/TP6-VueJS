<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="app-shell">
    <NavBar />
    <RouterView />
    <footer class="site-footer">Gestion des étudiants · Démonstration</footer>
  </div>
</template>
