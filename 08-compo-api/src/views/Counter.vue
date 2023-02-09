<template lang="">
    <div>
        <h2>{{counter}}</h2>

        <button @click="increase">+1</button>
        <button @click="decrease">-1</button>
    </div>
</template>
<script>
import { ref } from 'vue';

export default {
    name: 'Counter',
    props: {},
    emits: [],
    setup() {
        const counter = ref(6)

        const increase = () => {
            counter.value++
        }

        const decrease = () => {
            counter.value++
        }


        return {
            //obj reactivos
            counter,
            //methods
            increase,
            decrease
        }
    }
}
</script>
<style lang="">
    
</style>
