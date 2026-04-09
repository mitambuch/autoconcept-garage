/**
 * Données de l'équipe Autoconcept
 * Source de vérité pour les informations des membres
 */

export interface TeamMember {
  id: string
  name: string
  role: string
  description: string
  image?: string
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
    id: 'nelson',
    name: 'Nelson',
    role: 'Mécanicien & contact client',
    description: 'Il prend en charge l\'entretien, les réparations et les diagnostics, et s\'occupe aussi de la formation des apprentis. C\'est souvent lui qui répond au téléphone et qui gère la prise de rendez-vous.',
    image: '/images/team/nelson.jpg',
  },
  {
    id: 'cristina',
    name: 'Cristina',
    role: 'Administration & facturation',
    description: 'Elle s\'occupe de la partie administrative et de la facturation du garage.',
    image: '/images/team/femme.jpg',
  },
]
