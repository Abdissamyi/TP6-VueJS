<template>
  <header class="site-header">
    <RouterLink class="brand" to="/" aria-label="Accueil - Campus">
      <span class="brand-mark">C</span>
      <span>Campus<span class="brand-accent">Étudiants</span></span>
    </RouterLink>
    <nav aria-label="Navigation principale">
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/liste">Étudiants</RouterLink>
      <RouterLink class="nav-add" to="/ajouter">+ Ajouter</RouterLink>
    </nav>
  </header>
</template>
