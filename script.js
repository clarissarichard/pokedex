const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

async function fetchAllPokemon() {
    const response = await fetch(`${POKEAPI_BASE_URL}/pokemon?limit=10`);
    const data = await response.json();

    displayPokemon(data.results);
}

function displayPokemon(pokemonList) {
    const grid = document.getElementById('pokeGrid');

    grid.innerHTML = pokemonList.map(pokemon => `<div>${pokemon.name}</div>`).join('');
}

fetchAllPokemon();
