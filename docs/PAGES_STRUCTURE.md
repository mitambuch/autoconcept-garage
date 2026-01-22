# 📄 STRUCTURE DES PAGES - AUTOCONCEPT

## 🎯 Vue d'ensemble

Le site a **5 pages principales** + **1 layout global** :

```
┌─────────────────────────────────────────┐
│  LAYOUT GLOBAL (toujours visible)       │
│  ┌───────────────────────────────────┐  │
│  │ Header (Logo + Navigation)        │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │ PAGES (contenu variable)          │  │
│  │ - / (Accueil)                     │  │
│  │ - /garage (Le garage)             │  │
│  │ - /equipe (L'équipe)              │  │
│  │ - /services (Nos services)        │  │
│  │ - /occasion (Voitures d'occasion) │  │
│  │ - /contact (Contact)              │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │ Footer (Coordonnées + Liens)      │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

---

## 📱 PAGES DÉTAILLÉES

### 1. PAGE ACCUEIL (`/`)

**Fichier** : `src/app/page.tsx`

**Sections** :
```
┌─────────────────────────────────────┐
│ HeroSection                         │
│ - Photo du garage en background     │
│ - Titre + Sous-titre                │
│ - Bouton CTA "Nous contacter"       │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ IntroSection                        │
│ - Texte d'intro (confiance, etc.)   │
│ - Peut-être 2-3 photos              │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ ServicesPreview                     │
│ - Aperçu des services (4-6 cards)   │
│ - Lien "Voir tous nos services"     │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ CTABanner                           │
│ - "Un souci avec votre voiture ?"   │
│ - Bouton appeler / Bouton contact   │
└─────────────────────────────────────┘
```

**SEO** :
- Title: "Autoconcept | Garage automobile à Serrière, Neuchâtel"
- Description: "Garage indépendant à Serrière (Neuchâtel). Entretien, réparation, diagnostic. Équipe expérimentée, devis transparent."

---

### 2. PAGE LE GARAGE (`/garage`)

**Fichier** : `src/app/garage/page.tsx`

**Sections** :
```
┌─────────────────────────────────────┐
│ PageHeader                          │
│ - Titre "Le garage"                 │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ GarageIntro                         │
│ - Texte de présentation             │
│ - Valeurs : simplicité, clarté      │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ GarageGallery                       │
│ - Photos du garage                  │
│ - Atelier, accueil, etc.            │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ QuoteBlock                          │
│ - "Nous proposons un devis avant    │
│    toutes interventions"            │
└─────────────────────────────────────┘
```

**SEO** :
- Title: "Le garage | Autoconcept Neuchâtel"
- Description: "Découvrez notre garage automobile à Serrière. Plus de 10 ans d'expérience, travail soigné et explications claires."

---

### 3. PAGE L'ÉQUIPE (`/equipe`)

**Fichier** : `src/app/equipe/page.tsx`

**Sections** :
```
┌─────────────────────────────────────┐
│ PageHeader                          │
│ - Titre "L'équipe"                  │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ TeamGrid                            │
│ - 4 cartes membres                  │
│ - Photo + Nom + Rôle + Description  │
└─────────────────────────────────────┘
```

**SEO** :
- Title: "L'équipe | Autoconcept Neuchâtel"
- Description: "Rencontrez l'équipe d'Autoconcept : mécaniciens expérimentés, apprenti passionné et accueil chaleureux."

---

### 4. PAGE NOS SERVICES (`/services`)

**Fichier** : `src/app/services/page.tsx`

**Sections** :
```
┌─────────────────────────────────────┐
│ PageHeader                          │
│ - Titre "Nos services"              │
│ - Sous-titre                        │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ ServicesGrid                        │
│ - 9 services en cards/liste         │
│ - Icône + Titre + Description       │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ CTABanner                           │
│ - "Besoin d'un service ?"           │
│ - Bouton contact                    │
└─────────────────────────────────────┘
```

**SEO** :
- Title: "Nos services | Autoconcept Neuchâtel"
- Description: "Entretien, réparations, pneus, climatisation, diagnostic, préparation expertise. Tous nos services garage à Neuchâtel."

---

### 5. PAGE VOITURES D'OCCASION (`/occasion`)

**Fichier** : `src/app/occasion/page.tsx`

**Sections** :
```
┌─────────────────────────────────────┐
│ PageHeader                          │
│ - Titre "Voitures d'occasion"       │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ OccasionContent                     │
│ - Texte explicatif                  │
│ - Bouton vers AutoScout24 (externe) │
└─────────────────────────────────────┘
```

**SEO** :
- Title: "Voitures d'occasion | Autoconcept Neuchâtel"
- Description: "Véhicules d'occasion sélectionnés par Autoconcept. Consultez nos annonces sur AutoScout24."

---

### 6. PAGE CONTACT (`/contact`)

**Fichier** : `src/app/contact/page.tsx`

**Sections** :
```
┌─────────────────────────────────────┐
│ PageHeader                          │
│ - Titre "Un souci avec votre        │
│   voiture ?"                        │
│ - Texte d'accroche                  │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ ContactInfo                         │
│ - Adresse                           │
│ - Téléphone (cliquable)             │
│ - Email                             │
│ - Horaires (si fournis)             │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ ContactForm                         │
│ - Prénom                            │
│ - Téléphone                         │
│ - Message                           │
│ - Boutons : Envoyer / Être rappelé  │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ MapEmbed (optionnel)                │
│ - Google Maps embed                 │
└─────────────────────────────────────┘
```

**SEO** :
- Title: "Contact | Autoconcept Neuchâtel"
- Description: "Contactez le garage Autoconcept à Serrière. Appelez-nous ou laissez un message. Réponse rapide garantie."

---

## 🧩 COMPOSANTS PARTAGÉS

### Layout (`components/layout/`)

| Composant | Description |
|-----------|-------------|
| `Header.tsx` | Logo + Navigation + Bouton CTA mobile |
| `Footer.tsx` | Coordonnées + Liens rapides + Copyright |
| `Navigation.tsx` | Menu de navigation (desktop + mobile) |

### Sections (`components/sections/`)

| Composant | Utilisé sur |
|-----------|-------------|
| `HeroSection.tsx` | Accueil |
| `PageHeader.tsx` | Toutes les pages internes |
| `ServicesGrid.tsx` | Accueil (preview) + Services |
| `TeamGrid.tsx` | Équipe |
| `ContactForm.tsx` | Contact |
| `CTABanner.tsx` | Accueil + Services |

### UI (`components/ui/`)

| Composant | Description |
|-----------|-------------|
| `Button.tsx` | Boutons avec variants (primary, secondary, outline) |
| `Card.tsx` | Carte générique (service, membre équipe) |
| `Badge.tsx` | Badge/Tag |
| `Container.tsx` | Wrapper avec max-width |

---

## 📊 HIÉRARCHIE SEO

```
H1 (1 par page) :
├── Accueil: "Autoconcept – Garage à Serrière (Neuchâtel)"
├── Garage: "Le garage"
├── Équipe: "L'équipe"
├── Services: "Nos services"
├── Occasion: "Voitures d'occasion"
└── Contact: "Un souci avec votre voiture ?"

H2 (sections principales) :
├── Noms des membres (équipe)
├── Noms des services
└── Coordonnées (contact)
```

---

## ✅ CHECKLIST PAR PAGE

### Accueil
- [ ] Hero avec photo garage
- [ ] Texte d'intro confiance
- [ ] Preview services (4-6)
- [ ] CTA contact
- [ ] Metadata SEO

### Garage
- [ ] Présentation texte
- [ ] Galerie photos
- [ ] Citation devis
- [ ] Metadata SEO

### Équipe
- [ ] 4 membres avec photos
- [ ] Rôle + description chacun
- [ ] Metadata SEO

### Services
- [ ] 9 services listés
- [ ] Icônes pertinentes
- [ ] CTA en bas
- [ ] Metadata SEO

### Occasion
- [ ] Texte explicatif
- [ ] Lien externe AutoScout24
- [ ] Metadata SEO

### Contact
- [ ] Coordonnées complètes
- [ ] Formulaire fonctionnel
- [ ] (Optionnel) Carte Google Maps
- [ ] Metadata SEO
