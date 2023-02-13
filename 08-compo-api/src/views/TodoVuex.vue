<template>
    <h1>Thanos to do List</h1>
    <h4>Tareas: {{ pending.length }}</h4>

    <hr>
    <h4>Todos: {{ all.length }}</h4>
    <h4>Completados: {{ completed.length }}</h4>
    
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    
    setup() {

        const store = useStore()

        return {
            pending: computed(()=> store.getters['pendingTodos']),
            all: computed(()=> store.getters['all']),
            completed: computed(()=> store.getters['completed']),
        }
    }

}
</script>

<style>

</style>