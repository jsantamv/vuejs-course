<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>

    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>

    <button @click="onChangeIronMan">Iron Man</button>
    <button @click="onChangeHulk">Hulk</button>


    <h3>Iroman esta vivo: {{ ironManIsAlive }}</h3>
    <h3>Hulk esta vivo: {{ hulkIsAlive }}</h3>

    <button @click="changeStatus">Cambiar Status</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
// @ is an alias to /src

export default {
  name: 'HomeView',

  setup() {
    const ironman = ref({ name: 'Tony', age: 50 })
    const hulk = reactive({ name: 'Bruce', age: 50 })

    let ironManIsAlive = reactive(false)
    const hulkIsAlive = ref(true)

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value
      ironManIsAlive = !ironManIsAlive
    }

    return {
      ironman,
      hulk,
      ironManIsAlive,
      hulkIsAlive,

      changeStatus, 

      onChangeIronMan: () => {
        ironman.value.name = 'Tony Stark'
        ironman.value.age = 51
      },

      onChangeHulk: () => {
        hulk.name = 'Bruce Baner'
        hulk.age = 45
      }

    }
  }
}
</script>
