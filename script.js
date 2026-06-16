import { POKEAPI_BASE_URL, POKEMON_FETCH_LIMIT } from "./constants.js";
import { getPokemonDetails, renderPokemonCards } from "./pokemon.js";

let allPokemon = [];

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
    allPokemon = pokemonDetails;
    displayPokemon(pokemonDetails);
    searchPokemon();
}

function displayPokemon(pokemonList) {
    const grid = document.querySelector(".pokemon-grid");

    grid.innerHTML = renderPokemonCards(pokemonList);
}

function searchPokemon() {
    const searchInput = document.getElementById("searchBar");
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase().trim();
        const filteredPokemon = allPokemon.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(query)
        );
        displayPokemon(filteredPokemon);
    });
}

fetchAllPokemon();
