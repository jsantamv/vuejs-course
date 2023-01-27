import getPokemonsOptions, { getPokemons, getPokemonsNames } from "@/helpers/getPokemonOptions";

describe('getPokemonsOptions Helpers', () => {

    test('debe de regresar un arreglo de numeros', () => {
        const pokemons = getPokemons()
        expect(pokemons.length).toEqual(650)
        expect(pokemons[0]).toEqual(1)
        expect(pokemons[500]).toEqual(501)
        expect(pokemons[649]).toEqual(650)
    })

    test('debe de retornar un arreglo de 4 elementos con nombres', async () => {
        const pokemonsEval = [
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
        ]
        const pokemons = await getPokemonsNames([1, 2, 3, 4])
        expect(pokemonsEval).toStrictEqual(pokemons)
    })

    test('getPokemonsOptions debe de retornar una arreglo mezclado', async () => {
        const pokemonsEval = [
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            }
        ]
        const pokemons = await getPokemonsOptions()
        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual(pokemonsEval)

    })
})