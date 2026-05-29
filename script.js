const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

async function fetchAllPokemon() {
    const response = await fetch(`${POKEAPI_BASE_URL}/pokemon?limit=10`);
    const data = await response.json();
    const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();
            return getPokemonDetails(details);
        })
    );
    displayPokemon(pokemonDetails);
}

function getPokemonDetails(pokemon) {
    return {
        name: pokemon.name,
        id: pokemon.id,
        photo: pokemon.sprites.front_default,
    };
}

function displayPokemon(pokemonList) {
    const grid = document.querySelector('.pokemon-grid');

    grid.innerHTML = pokemonList
        .map((pokemon) => {
          return `<div>${pokemon.name} #${String(pokemon.id).padStart(4, '0')} <br><img src="${pokemon.photo}" alt="Photo of ${pokemon.name}"></div>`;
        })
        .join('');
}

fetchAllPokemon();
