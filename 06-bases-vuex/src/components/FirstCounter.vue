<template>
    <h1>Counter - vuex</h1>

    <h1>Formas de llamar el STATE</h1>

    <h2>Direct access: {{ $store.state.counter.count }}</h2>
    <h2>Computed: {{ countComputed }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="incrementRandomInt" :disabled="isLoading">random</button>

    <br>
    <h1>mapState</h1>
    <h2>mapState: {{ count }}</h2>
    <h2>last mutation: {{ lastMutation }}</h2>

    <h2>Direct Getters: {{ $store.getters['counter/squareCount'] }}</h2>

</template>

<script>

//map state para mapear todo el state del store

import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        countComputed() {
            return this.$store.state.counter.count
        },
        ...mapState('counter', ['count', 'lastMutation', 'isLoading'])
        // ...mapState({
        //     count: state => state.count,
        //     lastMutation: state => state.lastMutation
        // })

    },
    methods: {
        increment() {
            this.$store.commit('counter/increment')
        },
        incrementBy() {
            this.$store.commit('counter/incrementBy', 5)
        },        
        ...mapActions('counter',['incrementRandomInt'])
    }
}
</script>

<style scoped>
button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    margin: 2px;
    border: 3px solid rgb(10, 201, 240);
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

button:hover {
    border: 3px solid rgb(10, 201, 240);
    border-radius: 5px;
    background-color: #0b6a0f;

}

button:disabled {
    background-color: #6b7e6c;
}
</style>
