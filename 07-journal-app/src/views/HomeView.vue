<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div>
      <h1>Hola Mundo</h1>
      <button @click="goToDayBook" class="btn btn-primary m-2">Primary</button>
      <button @click="goToDayBook" class="btn btn-secondary m-2">Secondary</button>
      <button @click="goToDayBook" class="btn btn-success m-2">Success</button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goToDayBook() {
        this.$router.push({name: 'daybook'})
      }
    }
  }
</script>