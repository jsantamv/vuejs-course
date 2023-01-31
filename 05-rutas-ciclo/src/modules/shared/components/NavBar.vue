<template>
  <div class="topnav">
    <!-- <router-link :to="{ name: 'home' }">Pokemon List</router-link>
    <router-link :to="{ name: 'pokemon-id', params: { id: '12' } }">Pokemon Por Id</router-link>
    <router-link :to="{ name: 'about' }">About</router-link> -->

    <CustomLink v-for="link in links" :key="link.to" :link="link" />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  data() {
    return {
      links: [
        { to: '/', name: 'Pokemons' },
        { to: 'pokemonid/50', name: 'Por Id' },
        { to: '/about', name: 'about' },
        { to: 'https//google.com', name: 'Google' }
      ]
    }
  },
  components: {
    CustomLink: defineAsyncComponent(() => import('./CustomLinks.vue'))
  }
}
</script>

<style scoped>
/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
  align-content: center;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
/* .router-link-exact-active {
  background-color: #04AA6D;
  color: white;
} */
</style>