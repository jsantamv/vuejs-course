

<template>
    <h1 v-if="!pokemon && !errorMessage">Buscando ...</h1>
    <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>

    <template v-else>
        <h3>{{ pokemon.name }}</h3>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    </template>

</template>

<script>
import { watch } from 'vue'
import usePokemon from '@/composables/usePokemon';
import { useRoute } from 'vue-router'

export default {
    setup() {

        const route = useRoute()
        const { pokemon, isLoading, errorMessage, searchPokemon } = usePokemon(route.params.id)

        //necesito ver cual cambia
        //elemento reactivo
        watch(
            () => route.params.id,
            () => searchPokemon(route.params.id)
        )

        return {
            pokemon,
            isLoading,
            errorMessage
        }
    }
}
</script>

<style>

</style>


