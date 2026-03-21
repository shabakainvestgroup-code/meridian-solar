# Meridian Solar — Guide de démarrage

## Prérequis

- Node.js 18+ installé
- npm ou yarn
- Compte Resend (gratuit sur resend.com) pour les emails

---

## Installation

```bash
# 1. Aller dans le dossier du projet
cd meridian-solar

# 2. Installer les dépendances
npm install

# 3. Copier le fichier d'environnement
cp .env.local.example .env.local
```

## Configuration email (Resend)

Éditez `.env.local` :

```env
RESEND_API_KEY=re_votre_clé_resend_ici
CONTACT_EMAIL=contact@votre-domaine.ma
FROM_EMAIL=noreply@votre-domaine.ma
```

**Étapes Resend :**
1. Créez un compte sur https://resend.com
2. Allez dans API Keys → Créer une nouvelle clé
3. Vérifiez votre domaine dans Domains (ou utilisez `onboarding@resend.dev` pour les tests)

## Démarrer en développement

```bash
npm run dev
# → http://localhost:3000
```

## Build de production

```bash
npm run build
npm start
```

## Déploiement Vercel (recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Configurer les variables d'environnement dans le dashboard Vercel :
# RESEND_API_KEY, CONTACT_EMAIL, FROM_EMAIL
```

---

## Structure du projet

```
src/
├── app/
│   ├── page.tsx              → Accueil
│   ├── services/page.tsx     → Services
│   ├── realisations/page.tsx → Réalisations
│   ├── a-propos/page.tsx     → À propos
│   ├── devis/page.tsx        → Formulaire devis
│   ├── contact/page.tsx      → Contact
│   └── api/devis/route.ts    → API envoi email
└── components/
    ├── Navbar.tsx            → Navigation
    ├── Footer.tsx            → Pied de page
    └── DevisForm.tsx         → Formulaire réactif
```

## Personnalisation rapide

- **Téléphone** : rechercher `+212 6 00 00 00 00` et remplacer partout
- **Email** : remplacer `contact@meridiansolar.ma`
- **Adresse** : chercher `Avenue Mohammed VI`
- **Couleurs** : modifier `tailwind.config.ts` (emerald + amber/gold)
- **Logo** : remplacer le `<Sun>` dans `Navbar.tsx` par votre logo SVG
