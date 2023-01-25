import pokemonApi from "@/api/pokemonApi"


const getPokemons = () => {
    const pokemonsArr = Array.from(Array(650))
    return pokemonsArr.map((_, index) => index + 1)
}

const getPokemonsOptions = () => {
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
    getPokemonsNames(mixedPokemons.splice(0, 4))
}

const getPokemonsNames = async ([a, b, c, d] = []) => {
    const result = await pokemonApi.get(`\1`)
    console.log(result);
    console.log(a, b, c, d)
}

export default getPokemonsOptions