# Meridian Solar 🌞

Expert en installation de panneaux solaires à Marrakech et dans tout le Maroc.

## 🚀 À propos

Meridian Solar est une entreprise spécialisée dans les énergies renouvelables avec :
- **10+ ans d'expertise** en Europe
- **Solutions complètes** : panneaux solaires, systèmes hybrides, pompes à chaleur
- **Service clé en main** : consultation, installation, maintenance
- **Garantie 48 mois** sur tous les produits

**Contact** :
- 📞 +212 755 054 395
- 📧 contact@meridiansolar.ma
- 📍 Bd Moulay Rachid, Business Center Guéliz, Étage 1, Bureau 8, Marrakech 40000

---

## 🛠️ Stack Technique

- **Framework** : Next.js 14.2.5 (React 18 + TypeScript)
- **Styling** : Tailwind CSS + Glassmorphism design
- **Forms** : React Hook Form + WhatsApp Web integration
- **PDF Generation** : jsPDF (client-side)
- **Deployment** : Vercel-ready

---

## 📁 Structure du Projet

```
src/
├── app/
│   ├── (pages principales)
│   │   ├── page.tsx                    # Accueil
│   │   ├── a-propos/page.tsx           # À propos - Expertise de l'équipe
│   │   ├── services/page.tsx           # Services proposés
│   │   ├── realisations/page.tsx       # Projets réalisés
│   │   ├── contact/page.tsx            # Contact + WhatsApp
│   │   ├── simulateur/page.tsx         # Simulateur économies
│   │   ├── devis/page.tsx              # Formulaire devis
│   │
│   ├── (pages légales & ressources)
│   │   ├── conditions-generales/page.tsx
│   │   ├── mentions-legales/page.tsx
│   │   ├── politique-confidentialite/page.tsx
│   │   ├── documentation/page.tsx      # Centre ressources
│   │   ├── phototeque/page.tsx         # Galerie projets
│   │
│   ├── api/
│   │   └── documents/cgv-pdf/route.ts  # API PDF (fallback)
│   │
│   └── layout.tsx                      # Layout global
│
├── components/
│   ├── Navbar.tsx                      # Barre de navigation
│   ├── Footer.tsx                      # Pied de page
│   ├── DevisForm.tsx                   # Formulaire devis + WhatsApp
│   ├── DownloadCGVButton.tsx           # Bouton PDF CGV (jsPDF)
│   └── ...
│
└── styles/
    ├── globals.css                     # Styles globaux
    └── ...
```

---

## ⚡ Fonctionnalités principales

### 1. **Intégration WhatsApp**
Tous les formulaires (contact, devis) génèrent des messages WhatsApp formatés au lieu d'envoyer des emails.

**Lien** : `wa.me/212755054395?text={message_encodé}`

### 2. **Téléchargement PDF**
- CGV téléchargeable directement depuis la page Documentation
- Généré côté client avec jsPDF (pas de dépendances serveur)
- Fichier : `src/components/DownloadCGVButton.tsx`

### 3. **Pages légales complètes**
- ✓ Conditions Générales de Vente
- ✓ Mentions Légales
- ✓ Politique de Confidentialité (RGPD)

### 4. **Centre Documentation**
- 6 ressources téléchargeables
- CGV, guides installation, fiches techniques
- Catalogue produits 2026

### 5. **Photothèque**
- 6 catégories de projets
- Installations résidentielles, commerciales, industrielles
- Systèmes hybrides, pompage agricole

---

## 🚀 Installation & Démarrage

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation

```bash
# Cloner le repo
git clone https://github.com/shabakainvestgroup-code/meridian-solar.git
cd meridian-solar

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Le site est accessible à **http://localhost:3000**

### Build pour production

```bash
npm run build
npm run start
```

---

## 📄 Pages disponibles

| Page | URL | Description |
|------|-----|-------------|
| Accueil | `/` | Page d'accueil avec CTA |
| À propos | `/a-propos` | Expertise de l'équipe, valeurs, milestones |
| Services | `/services` | Services proposés |
| Réalisations | `/realisations` | Projets réalisés |
| Contact | `/contact` | Formulaire contact → WhatsApp |
| Simulateur | `/simulateur` | Calculateur économies |
| Devis | `/devis` | Demande de devis → WhatsApp |
| Documentation | `/documentation` | Centre ressources + PDF CGV |
| Photothèque | `/phototeque` | Galerie projets |
| Conditions Générales | `/conditions-generales` | CGV complètes |
| Mentions Légales | `/mentions-legales` | Informations légales |
| Politique de Confidentialité | `/politique-confidentialite` | RGPD + données personnelles |

---

## 🎨 Design System

**Palette de couleurs** :
- Navy (`#1e3a8a`, `#0f172a`)
- Gold (`#f59e0b`, `#fbbf24`)
- Gradients glassmorphism

**Typographie** :
- Google Font : **Inter** (300/400/600/700/800)

**Responsivité** :
- Mobile-first
- Breakpoints : sm, md, lg, xl, 2xl

---

## 🔧 Variables d'environnement

Créer un fichier `.env.local` :

```env
# Exemple (actuellement tous les contacts sont en dur)
NEXT_PUBLIC_PHONE=+212755054395
NEXT_PUBLIC_EMAIL=contact@meridiansolar.ma
```

---

## 📦 Dépendances principales

```json
{
  "dependencies": {
    "next": "^14.2.5",
    "react": "^18",
    "react-dom": "^18",
    "lucide-react": "^0.X.X",
    "jspdf": "^4.2.1",
    "react-hook-form": "^X.X.X",
    "tailwindcss": "^3.X.X"
  }
}
```

---

## 🚀 Déploiement

### Sur Vercel (recommandé)

1. Pousser le code sur GitHub
2. Connecter le repo à Vercel
3. Vercel détecte automatiquement Next.js
4. Deploy automatique sur chaque push

### Autres hébergeurs

Le projet est compatible avec n'importe quel hébergeur Node.js :
- AWS
- Heroku
- Railway
- etc.

---

## 📝 Commits récents

**Latest** : `feat: Complete website overhaul with legal pages, PDF downloads, and WhatsApp integration`
- Pages légales complètes
- Documentation center
- PDF CGV téléchargeable
- Intégration WhatsApp
- Photothèque
- Narratif "À propos" refocalisé sur l'équipe

---

## 🤝 Contributing

Les modifications se font via :
1. Créer une branche (`git checkout -b feature/nom`)
2. Commiter les changements (`git commit -m "feat: description"`)
3. Pousser la branche (`git push origin feature/nom`)
4. Créer une Pull Request

---

## 📞 Support

Pour toute question :
- 📧 contact@meridiansolar.ma
- 📞 +212 755 054 395
- 💬 WhatsApp : wa.me/212755054395

---

## 📄 Licence

Propriétaire - Meridian Solar SARL

---

**Dernière mise à jour** : 27 Mars 2026
**Statut** : ✅ Production-ready
