<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="page-container not-found-page">
    <p class="eyebrow">ERREUR 404</p>
    <h1>Cette page n’existe pas.</h1>
    <p class="page-description">Vérifiez l’adresse ou retournez à l’annuaire.</p>
    <RouterLink class="button button-primary" to="/liste">Retour aux étudiants</RouterLink>
  </main>
</template>
