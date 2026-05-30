# Pokédex

## Getting Started

### Prerequisites
- Node.js and npm

### Installation
```bash
npm install
```

### Running the Project
The app must be served over HTTP (not `file://`) due to ES module security restrictions.

Using `http-server`:
```bash
npx http-server
```
Then open `http://localhost:8080` in your browser.

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