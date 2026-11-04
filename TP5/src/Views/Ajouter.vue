<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ajouterEtudiant } from '../data/etudiants.js'

const router = useRouter()
const erreur = ref('')
const formulaire = reactive({
  prenom: '',
  nom: '',
  email: '',
  formation: '',
  annee: '',
  ville: '',
  bio: '',
})

function enregistrerEtudiant() {
  const email = formulaire.email.trim()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    erreur.value = 'Veuillez saisir une adresse e-mail valide.'
    return
  }

  const nouvelEtudiant = ajouterEtudiant({
    prenom: formulaire.prenom.trim(),
    nom: formulaire.nom.trim(),
    email,
    formation: formulaire.formation.trim(),
    annee: formulaire.annee,
    ville: formulaire.ville.trim(),
    bio: formulaire.bio.trim(),
  })

  router.push(`/fiche/${nouvelEtudiant.id}`)
}
</script>

<template>
  <main class="page-container form-page">
    <RouterLink class="back-link" to="/liste">← Retour à la liste</RouterLink>
    <div class="page-heading">
      <div>
        <p class="eyebrow">NOUVEAU PROFIL</p>
        <h1>Ajouter un étudiant</h1>
        <p class="page-description">Renseignez les informations du profil étudiant.</p>
      </div>
    </div>

    <form class="student-form" @submit.prevent="enregistrerEtudiant">
      <div class="form-grid">
        <label class="form-field">
          <span>Prénom <span class="required">*</span></span>
          <input v-model="formulaire.prenom" required maxlength="60" autocomplete="given-name" />
        </label>
        <label class="form-field">
          <span>Nom <span class="required">*</span></span>
          <input v-model="formulaire.nom" required maxlength="60" autocomplete="family-name" />
        </label>
        <label class="form-field form-field-wide">
          <span>Adresse e-mail <span class="required">*</span></span>
          <input
            v-model="formulaire.email"
            type="email"
            required
            maxlength="120"
            autocomplete="email"
            placeholder="prenom.nom@exemple.fr"
          />
        </label>
        <label class="form-field">
          <span>Formation <span class="required">*</span></span>
          <input v-model="formulaire.formation" required maxlength="100" />
        </label>
        <label class="form-field">
          <span>Année <span class="required">*</span></span>
          <select v-model="formulaire.annee" required>
            <option disabled value="">Choisir une année</option>
            <option>1re année</option>
            <option>2e année</option>
            <option>3e année</option>
            <option>4e année</option>
            <option>5e année</option>
          </select>
        </label>
        <label class="form-field form-field-wide">
          <span>Ville <span class="required">*</span></span>
          <input v-model="formulaire.ville" required maxlength="80" autocomplete="address-level2" />
        </label>
        <label class="form-field form-field-wide">
          <span>À propos</span>
          <textarea
            v-model="formulaire.bio"
            rows="4"
            maxlength="300"
            placeholder="Quelques mots sur l’étudiant…"
          />
        </label>
      </div>
      <p v-if="erreur" class="form-error" role="alert">{{ erreur }}</p>
      <div class="form-actions">
        <RouterLink class="button button-secondary" to="/liste">Annuler</RouterLink>
        <button class="button button-primary" type="submit">Créer le profil</button>
      </div>
    </form>
  </main>
</template>
