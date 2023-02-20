<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="las la-ellipsis-v" aria-label="Menu" @click="toggleSideMenu" />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <!--TODO: <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="sideMenuOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { linksList } from '../router/link-list'


export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup() {
    const store = useStore()
    // console.log(store.getters['ui/isSideMenuOpen']);


    const leftDrawerOpen = ref(false)

    return {
      sideMenuOpen: computed(() => store.getters['ui/isSideMenuOpen']),
      toggleSideMenu(){
        store.commit('ui/toggleSideMenu')
      },

      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
