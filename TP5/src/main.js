import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Accueil from './Views/Accueil.vue'
import Liste from './Views/Liste.vue'
import Ajouter from './Views/Ajouter.vue'
import Fiche from './Views/Fiche.vue'
import NotFound from './Views/NotFound.vue'
import { etudiants } from './data/etudiants.js'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Accueil },
    { path: '/liste', component: Liste },
    { path: '/ajouter', component: Ajouter },
    { path: '/fiche', redirect: `/fiche/${etudiants.value[0].id}` },
    { path: '/fiche/:id', component: Fiche },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ],
})

createApp(App).use(router).mount('#app')
