export const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";
export const POKEMON_FETCH_LIMIT = 10;
export const TYPE_CHART = {
    fire: {
        strongAgainst: ["bug", "grass", "ice", "steel"],
        weakAgainst: ["fire", "water", "rock", "dragon"],
        noEffectAgainst: []
    },
    water: {
        strongAgainst: ["fire", "ground", "rock"],
        weakAgainst: ["water", "grass", "dragon"],
        noEffectAgainst: []
    },
    grass: {
        strongAgainst: ["water", "ground", "rock"],
        weakAgainst: ["fire", "grass", "poison", "flying", "bug", "dragon", "steel"],
        noEffectAgainst: []
    },
    poison: {
        strongAgainst: ["grass", "fairy"],
        weakAgainst: ["poison", "ground", "rock", "ghost"],
        noEffectAgainst: ["steel"]
    },
    flying: {
        strongAgainst: ["grass", "fighting", "bug"],
        weakAgainst: ["electric", "rock", "steel"],
        noEffectAgainst: []
        }
    };