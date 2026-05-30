import { describe, expect, it } from "vitest";
import { getPokemonDetails, renderPokemonCard, renderTypeBadges } from "./pokemon.js";

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
        expect(html).toContain('<span class="pokemon-type">fire</span>');
    });
});

describe("tests renderTypeBadges", () => {
    it("renders one badge per type", () => {
        const html = renderTypeBadges(["water", "flying"]);

        expect(html).toContain('<span class="pokemon-type">water</span>');
        expect(html).toContain('<span class="pokemon-type">flying</span>');
    });
});
