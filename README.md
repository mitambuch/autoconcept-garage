# 🚗 Autoconcept Garage

> Site vitrine pour garage automobile — Serrière, Neuchâtel

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwindcss)

---

## 🎯 À propos

Site vitrine professionnel pour **Autoconcept**, garage indépendant situé à Serrière (Neuchâtel, Suisse).

**Objectifs :**
- Présence web locale optimisée SEO
- Présentation claire des services
- Formulaire de contact fonctionnel
- Site rapide et responsive

---

## 🚀 Démarrage rapide

```bash
# Installation
pnpm install

# Développement
pnpm dev

# Build production
pnpm build

# Démarrer en production
pnpm start
```

Site accessible sur `http://localhost:3000`

---

## 📂 Structure du projet

```
src/
├── app/                    # Pages (App Router)
│   ├── layout.tsx          # Layout global
│   ├── page.tsx            # Accueil
│   ├── garage/             # Page garage
│   ├── equipe/             # Page équipe
│   ├── services/           # Page services
│   ├── occasion/           # Page véhicules occasion
│   └── contact/            # Page contact
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Sections réutilisables
│   └── ui/                 # Composants atomiques
├── data/                   # Données structurées
│   ├── siteConfig.ts       # Config globale
│   ├── team.ts             # Équipe
│   └── services.ts         # Services
├── lib/                    # Utilitaires
└── styles/                 # CSS global
```

---

## 📋 Documentation

| Fichier | Description |
|---------|-------------|
| `SYSTEM_PROMPT.md` | Instructions pour l'IA (workflow dev) |
| `CONTENT.md` | Textes validés par le client |
| `PAGES_STRUCTURE.md` | Structure détaillée des pages |

---

## ✅ TODO

### Phase 1 : Structure ✅
- [x] Architecture Next.js 15
- [x] Composants de base
- [x] Pages principales
- [x] Données structurées

### Phase 2 : Contenu
- [ ] Photos du garage
- [ ] Photos de l'équipe
- [ ] Compléter les infos manquantes (tel, lien AutoScout)
- [ ] Vrais noms des employés

### Phase 3 : Finition
- [ ] Design final (couleurs, typo)
- [ ] Formulaire fonctionnel (backend)
- [ ] SEO avancé (sitemap, robots.txt)
- [ ] Tests responsive
- [ ] Déploiement

---

## 🔧 Personnalisation

### Couleurs
Modifier dans `tailwind.config.ts` :
```typescript
colors: {
  primary: '#1e3a5f',    // Bleu principal
  secondary: '#dc2626',  // Rouge accent
}
```

### Informations de contact
Modifier dans `src/data/siteConfig.ts`

### Contenu des pages
Voir `CONTENT.md` pour les textes validés

---

## 📄 License

Propriétaire — © 2025 Autoconcept

---

**Built with Next.js • Deployed on Vercel**
