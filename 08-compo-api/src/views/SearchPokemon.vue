<template>
  <h1>Buscar pokemon: {{ pokemonId }}</h1>


  <div class="container">
    <form @submit.prevent="onSubmit">
      <label># Pokomen</label>
      <input type="number" placeholder="Numero del pokemon" v-model="pokemonId" ref="txtSearchId">

    </form>

    <br>
    <span>Presione enter para buscar</span>
  </div>


</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'
export default {

  setup() {
    const router = useRouter()
    const pokemonId = ref(1)
    const txtSearchId = ref()

    onActivated(()=>{
      txtSearchId.value.select()
    })

    return {
      pokemonId,
      txtSearchId,
      onSubmit: () => {        
        router.push({ name: 'pokemon-id', params: { id: pokemonId.value } })
      }
    }
  }



}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

input[type=text],
input[type=number],
select,
textarea {
  width: 30%;
  padding: 12px;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>