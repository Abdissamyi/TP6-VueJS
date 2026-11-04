<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  etudiant: {
    type: Object,
    required: true,
  },
})

const initiales = computed(() =>
  `${props.etudiant.prenom.charAt(0)}${props.etudiant.nom.charAt(0)}`.toUpperCase(),
)
</script>

<template>
  <article class="student-card">
    <div class="student-card-top">
      <div class="avatar" aria-hidden="true">{{ initiales }}</div>
      <span class="student-year">{{ etudiant.annee }}</span>
    </div>
    <h2>{{ etudiant.prenom }} {{ etudiant.nom }}</h2>
    <p class="student-program">{{ etudiant.formation }}</p>
    <p class="student-email">{{ etudiant.email }}</p>
    <div class="student-card-bottom">
      <span class="student-city">{{ etudiant.ville }}</span>
      <RouterLink class="text-link" :to="`/fiche/${etudiant.id}`">
        Voir la fiche <span aria-hidden="true">→</span>
      </RouterLink>
    </div>
  </article>
</template>
