export function getPokemonDetails(pokemon) {
    return {
        name: pokemon.name,
        id: String(pokemon.id).padStart(4, "0"),
        photo: pokemon.sprites.front_default,
        types: pokemon.types.map((t) => t.type.name)
    };
}

export function renderTypeBadges(types) {
    return types
        .map((type) => `<span class="pokemon-type">${type}</span>`)
        .join("");
}

export function renderPokemonCard(pokemon) {
    return `
        <div class="pokemon-card">
            <div class="pokemon-id">#${pokemon.id}</div>
            <div class="pokemon-photo"><img src="${pokemon.photo}" alt="Photo of ${pokemon.name}"></div>
            <div class="pokemon-name">${pokemon.name}</div>
            <div class="pokemon-types">${renderTypeBadges(pokemon.types)}</div>
        </div>
    `;
}

export function renderPokemonCards(pokemonList) {
    return pokemonList.map((pokemon) => renderPokemonCard(pokemon)).join("");
}