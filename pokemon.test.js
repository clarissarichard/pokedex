import { describe, expect, it } from "vitest";
import {
    getBestAttackTypes,
    getPokemonDetails,
    getTypeEffectiveness,
    renderPokemonCard,
    renderTypeBadges
} from "./pokemon.js";

describe("tests PokeAPI", () => {
    it("returns status code of 200", async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1");
        expect(response.status).toBe(200);
        expect(response.ok).toBe(true);
    });
});

describe("tests getPokemonDetails", () => {
    it("normalizes id, photo, and types", () => {
        const apiPokemon = {
            name: "bulbasaur",
            id: 1,
            sprites: {
                front_default: "https://img.pokemondb.net/sprites/home/normal/bulbasaur.png"
            },
            types: [
                { type: { name: "grass" } },
                { type: { name: "poison" } }
            ]
        };

        expect(getPokemonDetails(apiPokemon)).toEqual({
            name: "bulbasaur",
            id: "0001",
            photo: "https://img.pokemondb.net/sprites/home/normal/bulbasaur.png",
            types: ["grass", "poison"]
        });
    });
});

describe("tests renderPokemonCard", () => {
    it("renders HTML of card with name, id, photo, and types", () => {
        const html = renderPokemonCard({
            name: "charmander",
            id: "0004",
            photo: "https://img.pokemondb.net/sprites/home/normal/charmander.png",
            types: ["fire"]
        });

        expect(html).toContain("#0004");
        expect(html).toContain("charmander");
        expect(html).toContain('src="https://img.pokemondb.net/sprites/home/normal/charmander.png"');
        expect(html).toContain('<span class="pokemon-type fire">fire</span>');
        expect(html).toContain("Best against this Pokemon");
    });
});

describe("tests renderTypeBadges", () => {
    it("renders one badge per type", () => {
        const html = renderTypeBadges(["water", "flying"]);

        expect(html).toContain('<span class="pokemon-type water">water</span>');
        expect(html).toContain('<span class="pokemon-type flying">flying</span>');
    });
});

describe("tests getTypeEffectiveness", () => {
    it("calculates 2x strong against correctly", () => {
        expect(getTypeEffectiveness("water", ["fire"])).toBe(2);
    });

    it("calculates 4x strong against correctly", () => {
        expect(getTypeEffectiveness("ice", ["ground", "flying"])).toBe(4);
    });
    
    it("calculates 0.5x weak against correctly", () => {
        expect(getTypeEffectiveness("fire", ["water"])).toBe(0.5);
    });

    it("calculates 0.25x weak against correctly", () => {
        expect(getTypeEffectiveness("grass", ["fire", "flying"])).toBe(0.25);
    });

    it("calculates no effect against correctly", () => {
        expect(getTypeEffectiveness("electric", ["rock"])).toBe(1);
    });
});

describe("tests getBestAttackTypes", () => {
    it("returns best attack types for 2x effectiveness", () => {
        expect(getBestAttackTypes(["grass"])).toEqual(["fire", "poison", "flying", "ice", "bug"]);
    });

    it("returns best attack types for 4x effectiveness", () => {
        expect(getBestAttackTypes(["dragon", "flying"])).toEqual(["ice", "rock", "fairy", "dragon"]);
    });
});
