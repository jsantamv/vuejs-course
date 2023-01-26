import pokemonApi from "@/api/pokemonApi"

describe('Pokemon API Test', () => {
    test('axios debe de estar configurado con el API de Pokemon', () => {
        const baseUrl = 'https://pokeapi.co/api/v2/pokemon'
        expect(pokemonApi.defaults.baseURL).toBe(baseUrl)
    })
})