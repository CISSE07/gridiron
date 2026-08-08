<div align="center">
  <img src="docs/logo.png" alt="GridironHub" width="320" />

  # 🏈 GridironHub

  **La plateforme SaaS tout-en-un pour les clubs de football américain.**

  Gestion d'équipes · Convocations · Statistiques · Rapports IA · Communication

  <sub>Web (React) · Mobile (React Native) · API (Node.js) — monorepo TypeScript</sub>
</div>

---

## 📖 À propos

**GridironHub** centralise dans un seul outil tout ce dont un club de football américain a besoin :
gestion du roster, calendrier et convocations, saisie et analyse des statistiques,
génération de rapports par intelligence artificielle, et communication entre coachs et joueurs.

L'application est pensée pour deux usages complémentaires :

- 🖥️ **Web** — pour les **admins** et **coachs** : gestion complète, tableaux de bord, statistiques.
- 📱 **Mobile** — pour les **joueurs** et **coachs** : profil, calendrier, convocations, notifications.

---

## ✨ Fonctionnalités

| Domaine | Fonctionnalités |
|--------|-----------------|
| 🔐 **Comptes & Rôles** | Authentification, invitations, rôles Admin / Coach / Joueur |
| 🏟️ **Club & Équipes** | Gestion du club, plusieurs équipes, roster et postes |
| 📅 **Matchs & Calendrier** | Planning de saison, convocations avec réponse présent/absent |
| 📊 **Statistiques** | Saisie par match, agrégats joueur & équipe, classements |
| 🤖 **Rapports IA** | Résumés de match et bilans joueurs générés via Claude |
| 💬 **Communication** | Annonces d'équipe, notifications temps réel |
| 💳 **Abonnement** | Plans tarifaires et facturation via Stripe |

### 👥 Rôles & accès

| Rôle | Web | Mobile | Permissions |
|------|-----|--------|-------------|
| **Admin** | Complet | Partiel | Gestion du club, facturation, tous les coachs |
| **Coach** | Complet | Complet | Équipe, matchs, stats, rapports IA |
| **Joueur** | Lecture seule | Complet | Profil, calendrier, convocations, ses stats |

---

## 🛠️ Stack technique

| Composant | Technologie |
|-----------|-------------|
| Frontend Web | React 18 + TypeScript + Vite |
| App Mobile | React Native + Expo |
| Backend | Node.js + Express + TypeScript |
| Base de données | PostgreSQL (Supabase) |
| ORM | Prisma |
| Auth / Storage / Realtime | Supabase |
| IA | Anthropic Claude API |
| Paiements | Stripe |
| Déploiement | Vercel (web) · Railway (api) |

---

## 🏗️ Architecture

Monorepo géré avec **pnpm workspaces** : les types TypeScript sont partagés entre les trois
applications via le package `@gridiron/shared`, sans duplication.

```
gridironhub/
├── apps/
│   ├── web/          → React + Vite        (port 5173)
│   ├── mobile/       → React Native + Expo
│   └── api/          → Node.js + Express    (port 3000)
├── packages/
│   └── shared/       → Types TS partagés (DTOs, enums, constantes)
├── pnpm-workspace.yaml
└── package.json
```

### 🔄 Flux de données

```
Web / Mobile  ──HTTPS (JWT)──▶  API Express
API Express   ──Prisma──▶       PostgreSQL (Supabase)
API Express   ──▶               Claude API   (rapports IA)
API Express   ──▶               Stripe API   (abonnements)
Supabase      ──WebSocket──▶    Notifications temps réel
```

---

## 🚀 Démarrage

### Prérequis

- [Node.js](https://nodejs.org) ≥ 20
- [pnpm](https://pnpm.io) ≥ 9 (`npm i -g pnpm`)
- Un projet [Supabase](https://supabase.com) (gratuit)

### Installation

```bash
# 1. Cloner le dépôt
git clone <url-du-repo> gridironhub
cd gridironhub

# 2. Installer les dépendances (tout le monorepo)
pnpm install

# 3. Configurer l'environnement
cp .env.example .env
#   → renseigner DATABASE_URL, SUPABASE_*, ANTHROPIC_API_KEY, STRIPE_*

# 4. Appliquer le schéma de base de données
pnpm --filter @gridiron/api prisma migrate dev
```

### Lancer en développement

```bash
pnpm dev:api      # API      → http://localhost:3000
pnpm dev:web      # Web      → http://localhost:5173
pnpm dev:mobile   # Mobile   → Expo
```

---

## 📁 Structure du backend (`apps/api`)

Organisation **par fonctionnalité** : chaque module regroupe ses routes, sa logique
métier et sa validation.

```
apps/api/src/
├── index.ts            → point d'entrée
├── app.ts              → configuration Express
├── config/             → variables d'environnement
├── lib/                → clients partagés (Prisma, Supabase, Stripe)
├── middleware/         → auth, gestion d'erreurs
└── modules/
    ├── teams/
    ├── games/
    ├── stats/
    ├── reports/        → intégration Claude
    └── billing/        → intégration Stripe
```

---

## 🗺️ Roadmap (MVP)

- [ ] Authentification & rôles
- [ ] Club, équipes & roster
- [ ] Matchs & convocations
- [ ] Saisie de statistiques
- [ ] Premier rapport IA (résumé de match)

---

## 📄 Licence

MIT — voir [LICENSE](LICENSE)
