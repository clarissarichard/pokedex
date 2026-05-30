import { POKEAPI_BASE_URL, POKEMON_FETCH_LIMIT } from "./constants.js";
import { getPokemonDetails, renderPokemonCards } from "./pokemon.js";

async function fetchAllPokemon() {
    const response = await fetch(`${POKEAPI_BASE_URL}/pokemon?limit=${POKEMON_FETCH_LIMIT}`);
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

function displayPokemon(pokemonList) {
    const grid = document.querySelector(".pokemon-grid");

    grid.innerHTML = renderPokemonCards(pokemonList);
}

fetchAllPokemon();
