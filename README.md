# Portfolio Nathan Ramelet - Cosmic Portfolio

Un portfolio Full Stack immersif avec des animations 3D spectaculaires utilisant React Three Fiber et Next.js.

## 🌌 Caractéristiques

- **Background 3D interactif** : Nébula cosmique avec des milliers de particules
- **Navigation innovante** : Menu central en forme de soleil avec satellites orbitaux
- **Design futuriste** : Glassmorphisme, gradients néon et effets de lumière
- **Post-processing** : Bloom, vignette et effets de bruit pour un rendu cinématique
- **Performance optimisée** : Utilisation d'InstancedMesh et optimisations WebGL
- **Responsive** : Adapté à tous les écrans avec dégradation gracieuse sur mobile

## 🚀 Technologies

### Frontend
- **Next.js 14** (App Router)
- **React 18** avec TypeScript
- **React Three Fiber** pour le rendu 3D
- **@react-three/drei** & **@react-three/postprocessing**
- **Framer Motion** pour les animations UI
- **Tailwind CSS** pour le styling

### Backend
- **Prisma** ORM
- **SQLite** (dev) / **PostgreSQL** (prod)

### DevOps
- **Docker** & **Docker Compose**
- **GitHub Actions** CI/CD
- Configuration multi-stage pour optimisation

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/nathanramelet/portfolio-3d.git
cd portfolio-3d

# Installer les dépendances
npm install

# Générer le client Prisma
npx prisma generate

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🛠️ Scripts disponibles

```bash
npm run dev          # Lancer le serveur de développement
npm run build        # Build de production
npm run start        # Lancer en production
npm run lint         # Vérifier le code avec ESLint
```

## 🐳 Docker

```bash
# Build l'image Docker
docker build -t portfolio-nathan .

# Lancer avec Docker Compose
docker-compose up -d
```

## 📁 Structure du projet

```
/
├── app/                    # Pages et routes (Next.js App Router)
├── components/
│   ├── 3d/                 # Composants Three.js (Galaxy, Sun, Stars)
│   ├── ui/                 # Composants UI réutilisables
│   ├── layout/             # Layout components (Footer, Nav)
│   └── sections/           # Sections de page (Hero, Timeline, Projects)
├── lib/                    # Utilitaires et configurations
│   └── stores/             # Zustand stores
├── data/                   # Données mockées
├── styles/                 # Styles globaux
├── prisma/                 # Schema Prisma
└── public/                 # Assets statiques
```

## 🎨 Palette de couleurs "Nebula"

- **Space Black**: `#030014` - Background principal
- **Deep Violet**: `#1a0b2e` - Base nébuleuse
- **Electric Cyan**: `#00f0ff` - Accents et étoiles chaudes
- **Neon Magenta**: `#ff00aa` - Highlights
- **Electric Purple**: `#7000ff` - Accents principaux
- **Sun Gold**: `#fdb813` - Navigation centrale

## 🌟 Fonctionnalités principales

### GalaxyBackground
Background 3D persistant avec :
- 5000+ particules en InstancedMesh
- Effet parallaxe basé sur la souris
- Shader personnalisé pour la nébuleuse
- Post-processing (Bloom, Noise, Vignette)

### SunNavigation
Menu central innovant :
- Sphere 3D émissive avec glow
- Satellites HTML orbitaux
- Animations au hover
- Scroll smooth vers les sections

### TimelineSection
Parcours professionnel :
- Layout alterné desktop
- Ligne de constellation animée
- Cards glassmorphism
- Tags technologiques colorés

### ProjectGrid
Showcase projets :
- Grid responsive (1/2/3 colonnes)
- Images avec overlay
- Badges "Featured"
- Liens GitHub & Demo

## 📱 Responsive Design

- **Mobile** (< 768px) : Effets 3D simplifiés, layout colonne unique
- **Tablet** (768px - 1024px) : Layout 2 colonnes, effets moyens
- **Desktop** (> 1024px) : Tous les effets, layout 3 colonnes

## 🔧 Configuration

### Variables d'environnement

Créer un fichier `.env.local` :

```env
DATABASE_URL="file:./dev.db"
```

### Tailwind Config

Le thème "Nebula" est configuré dans `tailwind.config.ts` avec des couleurs personnalisées, animations et effets.

## 🚢 Déploiement

### Vercel (Recommandé)
```bash
vercel --prod
```

### Docker
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 📄 Licence

MIT License - Nathan Ramelet © 2025

## 📧 Contact

- **Email**: nathan.ramelet@email.com
- **GitHub**: [@nathanramelet](https://github.com/nathanramelet)
- **LinkedIn**: [Nathan Ramelet](https://linkedin.com/in/nathanramelet)

---

**Engineered with ❤️ using Next.js & React Three Fiber**
















