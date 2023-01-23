<template>
  <h2>Counter !!!</h2>  
  <p>{{ counter }} <sup>2</sup> = {{ squereCounter }}</p>

  <div>
    <button>+1</button>
    <button>-1</button>
  </div>

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
      return this.counter;
    },
  },
  computed: {
    squereCounter() {      
      return this.counter * this.counter;
    },
  },
};
</script>

<style>

</style>