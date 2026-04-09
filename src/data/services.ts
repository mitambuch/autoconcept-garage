/**
 * Données des services Autoconcept
 * Liste complète des prestations du garage
 */

export interface ServiceItem {
  id: string
  title: string
  description: string
  icon: string // Nom de l'icône Lucide
}

export const servicesData: ServiceItem[] = [
  {
    id: 'entretien',
    title: 'Entretien courant',
    description: 'Nous faisons les vidanges, les filtres, les niveaux et les contrôles de base. Ce qu\'il faut pour garder votre voiture en bon état.',
    icon: 'Wrench',
  },
  {
    id: 'reparations',
    title: 'Réparations mécaniques',
    description: 'Freins, échappement, courroies, suspensions… Nous identifions les problèmes et faisons les réparations nécessaires.',
    icon: 'Settings',
  },
  {
    id: 'climatisation',
    title: 'Service de climatisation',
    description: 'Entretien et recharge de votre système de climatisation.', // Description à compléter
    icon: 'Snowflake',
  },
  {
    id: 'pneus',
    title: 'Pneus et jantes',
    description: 'Montage, équilibrage, changement saisonnier. Nous pouvons aussi garder vos roues sur place, si besoin.',
    icon: 'Circle',
  },
  {
    id: 'expertise',
    title: 'Préparation à l\'expertise',
    description: 'Nous vérifions votre voiture avant le contrôle technique, vous conseillons, et prenons en charge les réparations si nécessaire et éventuellement la présentation au SCAN.',
    icon: 'ClipboardCheck',
  },
  {
    id: 'diagnostic',
    title: 'Diagnostic',
    description: 'Un voyant ? Un bruit étrange ? Passez au garage, nous regardons ça avec vous.',
    icon: 'Search',
  },
  {
    id: 'carrosserie',
    title: 'Carrosserie',
    description: 'Pour les travaux extérieurs, nous collaborons avec des partenaires fiables. Nous organisons cela avec vous, en toute simplicité.',
    icon: 'Car',
  },
  {
    id: 'grele',
    title: 'Débosselage grêle',
    description: 'Débosselage suite à un dégât de grêle.',
    icon: 'CloudRain',
  },
  {
    id: 'vitrage',
    title: 'Pare-brise & vitres',
    description: 'Nous remplaçons les pare-brise et les vitres endommagés. Pas de réparation : un remplacement complet pour garantir votre sécurité.',
    icon: 'Square',
  },
  {
    id: 'pret',
    title: 'Véhicule de prêt',
    description: 'Si votre voiture reste quelques jours, nous mettons à disposition un véhicule de remplacement (selon les disponibilités).',
    icon: 'Key',
  },
]

// Services mis en avant sur la page d'accueil (IDs)
export const featuredServicesIds = [
  'entretien',
  'reparations',
  'pneus',
  'diagnostic',
  'expertise',
  'pret',
]
