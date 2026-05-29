const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

async function fetchAllPokemon() {
    const response = await fetch(`${POKEAPI_BASE_URL}/pokemon?limit=10`);
    const data = await response.json();

    displayPokemon(data.results);
}

function displayPokemon(pokemonList) {
    const grid = document.querySelector('.pokemon-grid');

    grid.innerHTML = pokemonList
        .map((pokemon) => {
            const entryNumber = pokemon.url.split('/').filter(Boolean).pop();
            return `<div>${pokemon.name} #${entryNumber.padStart(4, '0')}</div>`;
        })
        .join('');
}

fetchAllPokemon();
