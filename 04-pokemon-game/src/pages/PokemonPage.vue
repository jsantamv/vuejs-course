<template>
    <h1 v-if="!pokemon">Espere por favor ...</h1>
    <div v-else="pokemon">
        <h1>Quien es ese Pokemon?</h1>
        <PokemonPicture :pokemonId="pokemon.id" :showpokemon="showpokemon" />
        <PokemonOption :pokemons="pokemonArr" @selection-pokemon="checkAnswer" />
    </div>

    <template v-if="showAnswer" class="fade-in">
        <h2 v>{{ message }}</h2>
        <button @click="newGame">
            Nuevo Juego
        </button>
    </template>

</template>

<script>
import PokemonOption from '@/components/PokemonOption';
import PokemonPicture from '@/components/PokemonPicture';
import getPokemonsOptions from '@/helpers/getPokemonOptions';

export default {
    components: { PokemonOption, PokemonPicture },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showpokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonsOptions()
            const rndInt = Math.floor(Math.random() * 4)
            this.pokemon = this.pokemonArr[rndInt]
        },
        checkAnswer(selectedId) {
            this.showpokemon = true
            this.showAnswer = true

            if (selectedId === this.pokemon.id)
                this.message = `Correcto, ${this.pokemon.name}`
            else
                this.message = `Opps, era ${this.pokemon.name}`
        },
        newGame() {
            this.showpokemon = false,
            this.showAnswer = false
            this.pokemonArr = []
            this.pokemon = null
            this.mixPokemonArray()
        }
    },
    mounted() {
        this.mixPokemonArray()
    }

}
</script>

<style>

</style>