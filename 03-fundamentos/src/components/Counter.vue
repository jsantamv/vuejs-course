<template>
  <h2>Counter !!!</h2>
  <p>{{ counter }} <sup>2</sup> = {{ counter*counter }}</p>

  <p>{{ counter }} <sup>2</sup> = {{ squereCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squereCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squereCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squereCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squereCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squereCounter }}</p>
</template>

<script>
export default {
  data() {
    return {
      counter: 5,
    };
  },
  methods: {
    getSquareValue() {
      console.log("getSquareValue");
      return this.counter;
    },
  },
  computed: {
    squereCounter() {
      console.log("computed squere counter");
      return this.counter * this.counter;
    },
  },
};
</script>

<style>

</style>