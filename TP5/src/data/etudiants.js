import { ref } from 'vue'

export const etudiants = ref([
  {
    id: '1001',
    prenom: 'Lina',
    nom: 'Moreau',
    email: 'lina.moreau@example.fr',
    formation: 'Développement web',
    annee: '2e année',
    ville: 'Lyon',
    bio: 'Passionnée par le design d’interfaces et les applications accessibles.',
  },
  {
    id: '1002',
    prenom: 'Adam',
    nom: 'Bernard',
    email: 'adam.bernard@example.fr',
    formation: 'Data science',
    annee: '3e année',
    ville: 'Nantes',
    bio: 'Il aime transformer les données en outils utiles et faciles à comprendre.',
  },
  {
    id: '1003',
    prenom: 'Inès',
    nom: 'Petit',
    email: 'ines.petit@example.fr',
    formation: 'Réseaux et cybersécurité',
    annee: '1re année',
    ville: 'Bordeaux',
    bio: 'Curieuse des infrastructures réseau et des bonnes pratiques de sécurité.',
  },
  {
    id: '1004',
    prenom: 'Noah',
    nom: 'Robert',
    email: 'noah.robert@example.fr',
    formation: 'Développement web',
    annee: '2e année',
    ville: 'Lille',
    bio: 'Il développe des projets web en équipe et apprend Vue.js.',
  },
])

export function ajouterEtudiant(informations) {
  const prochainId = String(
    Math.max(1000, ...etudiants.value.map((etudiant) => Number(etudiant.id) || 0)) + 1,
  )

  const nouvelEtudiant = { id: prochainId, ...informations }
  etudiants.value.push(nouvelEtudiant)
  return nouvelEtudiant
}
