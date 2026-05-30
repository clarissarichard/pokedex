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
        id: String(pokemon.id).padStart(4, "0"),
        photo: pokemon.sprites.front_default,
        types: pokemon.types.map(t => t.type.name)
    };
}

function displayPokemon(pokemonList) {
    const grid = document.querySelector(".pokemon-grid");

    grid.innerHTML = pokemonList
        .map((pokemon) => {
            const typeBadges = pokemon.types
                .map((type) => `<span class="pokemon-type">${type}</span>`)
                .join("");

            return `
                <div class="pokemon-card">
                    <div class="pokemon-id">#${pokemon.id}</div>
                    <div class="pokemon-photo"><img src="${pokemon.photo}" alt="Photo of ${pokemon.name}"></div>
                    <div class="pokemon-name">${pokemon.name}</div>
                    <div class="pokemon-types">${typeBadges}</div>
                </div>
            `;
        })
        .join("");
}

fetchAllPokemon();
