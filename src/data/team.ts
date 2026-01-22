/**
 * Données de l'équipe Autoconcept
 * Source de vérité pour les informations des membres
 */

export interface TeamMember {
  id: string
  name: string
  role: string
  description: string
  image?: string // Chemin vers l'image (à ajouter)
}

export const teamData: TeamMember[] = [
  {
    id: 'marc',
    name: 'Marc',
    role: 'Responsable du garage',
    description: 'Mécanicien depuis longtemps, Marc s\'occupe de la gestion du garage, accueille les clients, et travaille aussi sur les véhicules. Il tient à ce que tout soit clair, bien fait, et que les gens repartent en confiance.',
    image: '/images/team/marc.jpg',
  },
  {
    id: 'mecanicien',
    name: 'Exemple n°2', // À remplacer par le vrai nom
    role: 'Mécanicien',
    description: 'Il prend en charge l\'entretien, les réparations et les diagnostics. Méthodique, il aime que les choses fonctionnent comme il faut.',
    image: '/images/team/mecanicien.jpg',
  },
  {
    id: 'apprenti',
    name: 'Exemple n°3', // À remplacer par le vrai nom
    role: 'Apprenti',
    description: 'En formation dans l\'atelier, il participe aux interventions, apprend le métier et donne un coup de main sur pas mal de tâches.',
    image: '/images/team/apprenti.jpg',
  },
  {
    id: 'secretaire',
    name: 'Exemple n°4', // À remplacer par le vrai nom
    role: 'Secrétaire',
    description: 'Elle s\'occupe de l\'accueil, des appels, des rendez-vous et de la partie administrative. C\'est souvent elle qui répond en premier quand vous nous contactez.',
    image: '/images/team/secretaire.jpg',
  },
]
