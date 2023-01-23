<template>
    <h2>{{ customTitle }}</h2>
    <p>{{ counter }} <sup>2</sup> = {{ squereCounter }}</p>

    <div>
        <button @click='increaseCounter'>+1</button>
        <button @click="decreaseCounter">-1</button>
    </div>

</template>

<script>
//import { throwStatement } from '@babel/types';

export default {
    props: {
        title: String,
        start: {
            type: Number,
            default: 100,
            //required: true
            validator(value) {
                return value >= 0
            }
        }
    },
    data() {
        return {
            counter: this.start,
        };
    },
    methods: {
        getSquareValue() {
            return this.counter;
        },
        /** Method to Increase counter */
        increaseCounter() { this.counter++ },
        /** Method to Decrease counter */
        decreaseCounter() { this.counter-- },
    },
    computed: {
        squereCounter() {
            return this.counter * this.counter;
        },
        customTitle() { return this.title || 'Counter' }
    },
};
</script>

<style>
button {
    background-color: #64B687;
    border-radius: 5px;
    border: 10px solid white;
    color: white;
    cursor: pointer;
    margin: 0 15px;
    padding: 5px 15px;
    transition: 0, 3s ease-in-out;
}

button:hover {
    background-color: #78c5e4;
    border-radius: 7px;
    transition: 0, 3s ease-in-out;
}
</style>