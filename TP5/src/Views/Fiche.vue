<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { etudiants } from '../data/etudiants.js'

const route = useRoute()
const etudiant = computed(() =>
  etudiants.value.find((profil) => profil.id === String(route.params.id)),
)
const initiales = computed(() =>
  etudiant.value
    ? `${etudiant.value.prenom.charAt(0)}${etudiant.value.nom.charAt(0)}`.toUpperCase()
    : '',
)
</script>

<template>
  <main class="page-container detail-page">
    <RouterLink class="back-link" to="/liste">← Retour à la liste</RouterLink>

    <section v-if="etudiant" class="profile-panel">
      <div class="profile-banner"></div>
      <div class="profile-content">
        <div class="avatar avatar-large" aria-hidden="true">{{ initiales }}</div>
        <p class="eyebrow">PROFIL ÉTUDIANT</p>
        <h1>{{ etudiant.prenom }} {{ etudiant.nom }}</h1>
        <p class="profile-subtitle">{{ etudiant.formation }} · {{ etudiant.annee }}</p>

        <div class="profile-details">
          <div>
            <span class="detail-label">Adresse e-mail</span>
            <a class="detail-value" :href="`mailto:${etudiant.email}`">{{ etudiant.email }}</a>
          </div>
          <div>
            <span class="detail-label">Ville</span>
            <span class="detail-value">{{ etudiant.ville }}</span>
          </div>
          <div class="profile-bio">
            <span class="detail-label">À propos</span>
            <p class="detail-value">{{ etudiant.bio || 'Aucune présentation renseignée.' }}</p>
          </div>
        </div>
        <RouterLink class="button button-secondary" to="/liste">Retour aux étudiants</RouterLink>
      </div>
    </section>

    <section v-else class="empty-state">
      <p class="eyebrow">PROFIL INTROUVABLE</p>
      <h1>Cet étudiant n’existe pas.</h1>
      <p>Il a peut-être été retiré ou le lien est incorrect.</p>
      <RouterLink class="button button-primary" to="/liste">Voir la liste</RouterLink>
    </section>
  </main>
</template>
