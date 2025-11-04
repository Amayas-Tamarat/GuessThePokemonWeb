# 🎮 GuessPokemon

**GuessPokemon** is a fun web game inspired by *Wordle*, but for Pokémon fans!  
Each day (or round), players try to guess the hidden Pokémon. After every incorrect guess, a new hint appears — like the Pokémon’s **type**, **generation**, **color**, or **habitat** — until you guess it right or run out of tries.

---

## 🌟 Concept

- 🧩 **Core Idea:** Guess the Pokémon name within a limited number of attempts.  
- 💡 **Hints:** Each failed attempt reveals an extra clue — e.g., type, generation, or partial sprite.  
- 🧠 **Two Modes:**
  - **Guest Mode:** No login, local progress saved in browser.
  - **Account Mode:** Login to save stats and streaks in the cloud (Firebase).

- 🔁 **Future Expansion Ideas:**
  - Daily Pokémon challenge shared by everyone.
  - Leaderboards and player stats.
  - “Endless mode” to keep playing random Pokémon.

---

## 🧱 Tech Stack

| Layer | Technology | Purpose |
|-------|-------------|----------|
| **Frontend** | React + Vite (TypeScript) | Fast, modern web app setup |
| **Styling** | Tailwind CSS | Responsive, minimal UI styling |
| **Data Layer** | Apollo Client (GraphQL) | Easy data queries (mock → API) |
| **Mock API (offline)** | Local GraphQL schema | Playable without network |
| **Backend (later)** | Firebase Auth + Firestore | User accounts and progress storage |
| **Pokémon Data Source** | [PokéAPI GraphQL](https://graphql-pokeapi.vercel.app/) | Public Pokémon data API |
| **Hosting** | Vercel | Free static site deployment |

---

## 🚀 Getting Started (Development)

### 1. Clone the repo
```bash
git clone
```

### 3. Install dependencies
```bash
cd GuessPokemon
npm install
```

### 4. Start the development server
```bash
npm run dev