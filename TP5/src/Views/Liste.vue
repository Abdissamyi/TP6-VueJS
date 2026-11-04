<script setup>
import { computed, ref } from 'vue'
import CardEtudiant from '../components/CardEtudiant.vue'
import { etudiants } from '../data/etudiants.js'

const recherche = ref('')
const etudiantsFiltres = computed(() => {
  const terme = recherche.value.trim().toLocaleLowerCase('fr')
  if (!terme) return etudiants.value

  return etudiants.value.filter((etudiant) =>
    `${etudiant.prenom} ${etudiant.nom} ${etudiant.formation} ${etudiant.email}`
      .toLocaleLowerCase('fr')
      .includes(terme),
  )
})
</script>

<template>
  <main class="page-container">
    <div class="page-heading">
      <div>
        <p class="eyebrow">ANNUAIRE DU CAMPUS</p>
        <h1>Nos étudiants</h1>
        <p class="page-description">Retrouvez les profils et parcours de votre campus.</p>
      </div>
      <RouterLink class="button button-primary" to="/ajouter">+ Ajouter un étudiant</RouterLink>
    </div>

    <label class="search-box">
      <span class="sr-only">Rechercher un étudiant</span>
      <span aria-hidden="true">⌕</span>
      <input v-model="recherche" type="search" placeholder="Nom, formation ou e-mail…" />
    </label>

    <p class="result-count" aria-live="polite">
      {{ etudiantsFiltres.length }} étudiant{{ etudiantsFiltres.length > 1 ? 's' : '' }}
    </p>
    <section v-if="etudiantsFiltres.length" class="student-grid" aria-label="Liste des étudiants">
      <CardEtudiant
        v-for="etudiant in etudiantsFiltres"
        :key="etudiant.id"
        :etudiant="etudiant"
      />
    </section>
    <div v-else class="empty-state">
      <h2>Aucun résultat</h2>
      <p>Essayez avec un autre nom ou une autre formation.</p>
    </div>
  </main>
</template>
