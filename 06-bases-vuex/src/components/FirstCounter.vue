<template>
    <h1>Counter - vuex</h1>

    <h1>Formas de llamar el STATE</h1>

    <h2>Direct access: {{ $store.state.count }}</h2>
    <h2>Computed: {{ countComputed }}</h2>

    <br>
    <h1>mapState</h1>
    <h2>mapState: {{ count }}</h2>
</template>

<script>

//map state para mapear todo el state del store

import { mapState } from 'vuex'

export default {
    computed: {
        countComputed() {
            return this.$store.state.count
        }
    },
    ...mapState({
        count: state => state.count,
        // lastMutation: state => state.lastMutation
        lastMutation: 'lastMutation'
    })
}
</script>
