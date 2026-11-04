<script setup>
import { etudiants } from '../data/etudiants.js'
</script>

<template>
  <main class="page-container home-page">
    <section class="hero-panel">
      <p class="eyebrow">BIENVENUE SUR VOTRE CAMPUS</p>
      <h1>Les parcours commencent par une rencontre.</h1>
      <p class="hero-description">
        Découvrez les étudiants, leurs formations et les projets qui font vivre notre campus.
      </p>
      <div class="hero-actions">
        <RouterLink class="button button-primary" to="/liste">Découvrir les étudiants</RouterLink>
        <RouterLink class="button button-secondary" to="/ajouter">Ajouter un profil</RouterLink>
      </div>
      <div class="hero-stat">
        <strong>{{ etudiants.length }}</strong>
        <span>profils étudiants</span>
      </div>
    </section>

    <section class="home-features" aria-label="À propos de l’annuaire">
      <article>
        <span class="feature-number">01</span>
        <h2>Un annuaire simple</h2>
        <p>Consultez rapidement les profils et les parcours de vos camarades.</p>
      </article>
      <article>
        <span class="feature-number">02</span>
        <h2>Des profils vivants</h2>
        <p>Chaque fiche présente les informations essentielles de l’étudiant.</p>
      </article>
      <article>
        <span class="feature-number">03</span>
        <h2>Une communauté</h2>
        <p>Explorez les différentes formations représentées sur le campus.</p>
      </article>
    </section>
  </main>
</template>
