import { TYPE_CHART } from "./constants.js";

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
        .map((type) => `<span class="pokemon-type ${type}">${type}</span>`)
        .join("");
}

export function getTypeEffectiveness(attackType, defendTypes) {
    const attack = TYPE_CHART[attackType];
    let multiplier = 1;

    if (!attack) {
        console.warn(`Unknown attack type: ${attackType}`);
        return 1;
    }

    for (const defendType of defendTypes) {
        if (!TYPE_CHART[defendType]) {
            console.warn(`Unknown defend type: ${defendType}`);
            continue;
        }
        
        if (attack.strongAgainst.includes(defendType)) {
            multiplier = multiplier * 2; // double damage
        }
        else if (attack.weakAgainst.includes(defendType)) {
            multiplier = multiplier * 0.5; // half damage
        }
        else if (attack.noEffectAgainst.includes(defendType)) {
            multiplier = 0; // no effect
        }
    }
    return multiplier;
}

export function getBestAttackTypes(defendTypes) {
    const bestTypes = [];
    for (const attackType of Object.keys(TYPE_CHART)) {
        const effectiveness = getTypeEffectiveness(attackType, defendTypes);
        if (effectiveness > 1) {
            bestTypes.push(attackType);
        }
    }
    return bestTypes;
}

export function renderPokemonCard(pokemon) {
    return `
        <div class="pokemon-card">
            <div class="pokemon-id">#${pokemon.id}</div>
            <div class="pokemon-photo"><img src="${pokemon.photo}" alt="Photo of ${pokemon.name}"></div>
            <div class="pokemon-name">${pokemon.name}</div>
            <div class="pokemon-types">${renderTypeBadges(pokemon.types)}</div>
            <div class="pokemon-effectiveness">
                ${getBestAttackTypes(pokemon.types).length > 0 ? `<p>Best against this Pokemon:</p><div>${renderTypeBadges(getBestAttackTypes(pokemon.types))}</div>` : `<p>No effective types found.</p>`}
            </div>
        </div>
    `;
}

export function renderPokemonCards(pokemonList) {
    return pokemonList.map((pokemon) => renderPokemonCard(pokemon)).join("");
}