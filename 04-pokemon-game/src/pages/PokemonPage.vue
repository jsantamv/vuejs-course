<template>
  <h1>Quien es ese Pokemon?</h1>

  <PokemonPicture :pokemonId="4" :showpokemon="true"/>
  <PokemonOption/>

</template>

<script>
import PokemonOption from '@/components/PokemonOption';
import PokemonPicture from '@/components/PokemonPicture';
import getPokemonOptions from '@/helpers/getPokemonOptions'


console.log(getPokemonOptions());


export default {
    components: { PokemonOption, PokemonPicture }
}
</script>

<style>

</style>