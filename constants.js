export const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";
export const POKEMON_FETCH_LIMIT = 1025; // set to 1025 to fetch all
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
        },
    electric: {
        strongAgainst: ["water", "flying"],
        weakAgainst: ["electric", "grass", "dragon"],
        noEffectAgainst: ["ground"]
    },
    ice: {
        strongAgainst: ["grass", "ground", "flying", "dragon"],
        weakAgainst: ["fire", "water", "ice", "steel"],
        noEffectAgainst: []
    },
    fighting: {
        strongAgainst: ["normal", "ice", "rock", "dark", "steel"],
        weakAgainst: ["poison", "flying", "psychic", "bug", "fairy"],
        noEffectAgainst: ["ghost"]
    },
    ground: {
        strongAgainst: ["fire", "electric", "poison", "rock", "steel"],
        weakAgainst: ["grass", "bug"],
        noEffectAgainst: ["flying"]
    },
    rock: {
        strongAgainst: ["fire", "ice", "flying", "bug"],
        weakAgainst: ["fighting", "ground", "steel"],
        noEffectAgainst: []
    },
    bug: {
        strongAgainst: ["grass", "psychic", "dark"],
        weakAgainst: ["fire", "fighting", "poison", "flying", "ghost", "steel", "fairy"],
        noEffectAgainst: []
    },
    ghost: {
        strongAgainst: ["psychic", "ghost"],
        weakAgainst: ["dark"],
        noEffectAgainst: ["normal"]
    },
    steel: {
        strongAgainst: ["ice", "rock", "fairy"],
        weakAgainst: ["fire", "water", "electric", "steel"],
        noEffectAgainst: []
    },
    fairy: {
        strongAgainst: ["fighting", "dragon", "dark"],
        weakAgainst: ["fire", "poison", "steel"],
        noEffectAgainst: []
    },
    normal: {
        strongAgainst: [],
        weakAgainst: ["rock", "steel"],
        noEffectAgainst: ["ghost"]
    },
    psychic: {
        strongAgainst: ["fighting", "poison"],
        weakAgainst: ["psychic", "steel"],
        noEffectAgainst: ["dark"]
    },
    dragon: {
        strongAgainst: ["dragon"],
        weakAgainst: ["steel"],
        noEffectAgainst: ["fairy"]
    },
    dark: {
        strongAgainst: ["ghost", "psychic"],
        weakAgainst: ["fighting", "dark", "fairy"],
        noEffectAgainst: []
    }
};