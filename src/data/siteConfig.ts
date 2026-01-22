/**
 * Configuration globale du site
 * Toutes les informations de contact et métadonnées centralisées
 */

export const siteConfig = {
  // Informations de base
  name: 'Autoconcept',
  tagline: 'Garage à Serrière (Neuchâtel)',
  description: 'Garage indépendant à Serrière (Neuchâtel). Entretien, réparation, diagnostic automobile. Équipe expérimentée, devis transparent.',
  
  // Contact
  contact: {
    phone: '032 721 02 02',
    phoneClean: '+41327210202',
    email: 'info@ac-rms.ch',
    address: {
      street: 'Quai Philippe-Suchard 18',
      city: 'Neuchâtel',
      district: 'Serrière',
      postalCode: '2000',
      country: 'Suisse',
    },
  },

  // Liens externes
  links: {
    autoscout: '', // Lien AutoScout24 à compléter
    googleMaps: '', // Lien Google Maps à compléter
  },

  // Horaires (à compléter avec le client)
  hours: {
    weekdays: 'Lun-Ven: 07h30 - 12h00, 13h30 - 18h00',
    saturday: 'Sam: Sur rendez-vous',
    sunday: 'Dim: Fermé',
  },

  // SEO
  seo: {
    titleTemplate: '%s | Autoconcept Neuchâtel',
    defaultTitle: 'Autoconcept | Garage automobile à Serrière, Neuchâtel',
    siteUrl: 'https://autoconcept-ne.ch', // À confirmer
  },

  // Navigation
  navigation: [
    { name: 'Accueil', href: '/#' },
    { name: 'Le garage', href: '/#garage' },
    { name: 'L\'équipe', href: '/#equipe' },
    { name: 'Nos services', href: '/#services' },
    { name: 'Occasion', href: '/#occasion' },
    { name: 'Contact', href: '/#contact' },
  ],
} as const

export type SiteConfig = typeof siteConfig
