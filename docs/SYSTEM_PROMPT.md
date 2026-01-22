# 🎯 SYSTEM PROMPT - AUTOCONCEPT GARAGE

**INSTRUCTIONS CRITIQUES : Lis ce fichier AVANT chaque modification de code.**

---

## 🏢 CONTEXTE DU PROJET

**Client** : Autoconcept — Garage indépendant à Serrière (Neuchâtel)
**Type** : Site vitrine professionnel
**Stack** : Next.js 15 (App Router) + Tailwind CSS + TypeScript
**Objectif** : Présence web locale, SEO optimisé pour "garage Neuchâtel"

---

## 🏗️ ARCHITECTURE DU PROJET

### Structure du projet
```
autoconcept-garage/
├── src/
│   ├── app/                      # App Router (pages)
│   │   ├── layout.tsx            # Layout global
│   │   ├── page.tsx              # Page d'accueil
│   │   ├── garage/
│   │   │   └── page.tsx          # Page "Le garage"
│   │   ├── equipe/
│   │   │   └── page.tsx          # Page "L'équipe"
│   │   ├── services/
│   │   │   └── page.tsx          # Page "Nos services"
│   │   ├── occasion/
│   │   │   └── page.tsx          # Page "Voitures d'occasion"
│   │   └── contact/
│   │       └── page.tsx          # Page "Contact"
│   ├── components/
│   │   ├── layout/               # Composants de structure
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── index.ts
│   │   ├── sections/             # Sections de pages (blocs réutilisables)
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── TeamGrid.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── CTABanner.tsx
│   │   │   └── index.ts
│   │   └── ui/                   # Composants UI atomiques
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       └── index.ts
│   ├── content/                  # Contenus textuels (MD → Composants)
│   │   ├── accueil.md
│   │   ├── garage.md
│   │   ├── equipe.md
│   │   ├── services.md
│   │   └── contact.md
│   ├── data/                     # Données structurées
│   │   ├── team.ts               # Équipe
│   │   ├── services.ts           # Services proposés
│   │   └── siteConfig.ts         # Config globale (nom, adresse, etc.)
│   ├── lib/                      # Utilitaires & helpers
│   │   └── utils.ts
│   └── styles/
│       └── globals.css           # Styles globaux + Tailwind
├── public/
│   ├── images/                   # Images du site
│   │   ├── garage/
│   │   ├── team/
│   │   └── services/
│   └── favicon.ico
├── docs/                         # Documentation projet
│   ├── SYSTEM_PROMPT.md          # Ce fichier
│   ├── CONTENT.md                # Textes validés client
│   ├── PAGES_STRUCTURE.md        # Structure des pages
│   └── CHANGELOG.md              # Historique des modifications
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## 📐 RÈGLES D'ARCHITECTURE STRICTES

### 1. SÉPARATION DES RESPONSABILITÉS

**app/ (Pages)**
- Routing uniquement (App Router)
- Composition de sections
- Metadata SEO
- **AUCUNE** logique métier
- **AUCUN** style inline complexe

**components/layout/ (Structure)**
- Header, Footer, Navigation
- Éléments fixes sur toutes les pages
- Gèrent la structure globale

**components/sections/ (Blocs de contenu)**
- Sections réutilisables (Hero, Services, Team, etc.)
- Peuvent recevoir des props
- Composent des composants UI
- Exemple : `<HeroSection title={...} subtitle={...} />`

**components/ui/ (Atomiques)**
- Petits, simples, réutilisables
- Button, Card, Badge, etc.
- Peu ou pas de logique métier
- Acceptent des variants via props

**content/ (Textes)**
- Fichiers Markdown avec les contenus validés
- Source de vérité pour les textes
- Facile à modifier sans toucher au code

**data/ (Données structurées)**
- Export const uniquement
- Données typées (TypeScript)
- Immutable

---

## 🚨 RÈGLES CRITIQUES - JAMAIS ENFREINDRE

### ❌ INTERDICTIONS ABSOLUES

1. **NE JAMAIS modifier les textes sans validation client**
   - Les textes dans `/content` sont validés
   - Toute modification nécessite accord explicite

2. **NE JAMAIS créer de fichiers dans des dossiers qui n'existent pas**
   - Utilise UNIQUEMENT les dossiers de l'architecture
   - Si besoin d'un nouveau dossier → DEMANDE D'ABORD

3. **NE JAMAIS dupliquer du code existant**
   - Cherche si la fonctionnalité existe déjà
   - Réutilise les composants existants

4. **NE JAMAIS oublier le SEO**
   - Chaque page DOIT avoir ses metadata
   - Utiliser les balises sémantiques (h1, h2, article, section)

5. **NE JAMAIS hardcoder les données de contact**
   - Tout dans `siteConfig.ts`
   - Facilite les modifications futures

---

## ✅ CONVENTIONS

### Nommage
- **Fichiers composants** : PascalCase (`HeroSection.tsx`)
- **Fichiers data/utils** : camelCase (`siteConfig.ts`)
- **Dossiers** : kebab-case ou camelCase selon contexte
- **Composants** : PascalCase (`const HeroSection = () => {}`)
- **Types** : PascalCase avec suffixe si besoin (`TeamMember`, `ServiceItem`)

### TypeScript
- Typage strict obligatoire
- Interfaces pour les props
- Types exportés depuis les fichiers data

### Tailwind
- Utility-first
- Pas de CSS custom sauf nécessité absolue
- Utiliser les classes de base Tailwind
- Configurer les couleurs dans `tailwind.config.ts`

---

## 🎨 DESIGN SYSTEM

### Couleurs (à définir avec le client)
```typescript
// tailwind.config.ts
colors: {
  primary: '#...',      // Couleur principale (probablement bleu/rouge garage)
  secondary: '#...',    // Couleur secondaire
  accent: '#...',       // Accent (CTA, highlights)
  background: '#...',   // Fond
  foreground: '#...',   // Texte principal
}
```

### Typographie
- **Titres** : Font à définir (probablement une sans-serif solide)
- **Corps** : Font à définir (lisible, professionnelle)

---

## 📝 FORMAT DE RÉPONSE OBLIGATOIRE

Quand tu modifies un fichier :

```markdown
## 📁 Fichier modifié : `src/components/sections/HeroSection.tsx`

**Raison** : Ajout du bouton d'appel

**Impact** :
- Aucun impact sur les autres fichiers
- Composant isolé

**Code modifié** :
```tsx
// Ton code ici
```
```

---

## 🎯 OBJECTIF PRINCIPAL

**MODIFICATIONS CHIRURGICALES**

Ce site est SIMPLE. Pas besoin de :
- Animations complexes
- State management
- API routes
- Base de données

Ce qu'il faut :
- Pages statiques bien structurées
- SEO optimisé
- Responsive
- Rapide à charger
- Facile à maintenir

---

## 📌 CHECKLIST AVANT CHAQUE RÉPONSE

```
□ J'ai lu ce fichier SYSTEM_PROMPT.md
□ Je sais EXACTEMENT quel fichier modifier
□ Je respecte les textes validés dans /content
□ Mon code est typé correctement
□ J'ai pensé au SEO (metadata, balises sémantiques)
□ C'est responsive
```

---

**Version** : 1.0
**Projet** : Autoconcept Garage - Site Vitrine
