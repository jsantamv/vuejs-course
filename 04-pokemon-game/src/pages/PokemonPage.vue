<template>
  <h1>Quien es ese Pokemon?</h1>

  <PokemonPicture/>
  <PokemonOption/>

</template>

<script>
import PokemonOption from '@/components/PokemonOption';
import PokemonPicture from '@/components/PokemonPicture';

export default {
    components: { PokemonOption, PokemonPicture }
}
</script>

<style>

</style>