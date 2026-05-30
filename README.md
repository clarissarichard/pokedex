# Pokédex

## Getting Started

### Prerequisites
- Node.js and npm

### Installation
Install project dependencies:
```bash
npm install
```

### Running the Project
This app must be served over HTTP (not `file://`) due to ES module security restrictions.

1. Run `http-server`:
```bash
npx http-server
```
2. Open `http://localhost:8080` in browser.

### Running Tests
```bash
# Runs tests once
npm test

# Runs watch mode (re-runs on file changes)
npm run test:watch
```

## API
This application uses the [PokéAPI](https://pokeapi.co/api/v2).

## Credits

- **PokéAPI**: Community-maintained Pokémon REST API
- **Pokémon**: © The Pokémon Company

---

**Gotta catch 'em all!** 🔴⚪🎮