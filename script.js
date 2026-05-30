const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";
import { getPokemonDetails, renderPokemonCards } from "./pokemon.js";

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
        id: String(pokemon.id).padStart(4, "0"),
        photo: pokemon.sprites.front_default,
        types: pokemon.types.map(t => t.type.name)
    };
}

function displayPokemon(pokemonList) {
    const grid = document.querySelector(".pokemon-grid");

    grid.innerHTML = renderPokemonCards(pokemonList);
}

fetchAllPokemon();
