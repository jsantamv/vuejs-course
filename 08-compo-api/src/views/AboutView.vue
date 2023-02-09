<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <button @click="onChangeTitle">Cambiar</button>
  </div>
</template>

<script>
import {
  ref,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated
} from 'vue'

export default {
  setup() {

    let title = ref('about')

    onBeforeMount(() => {
      console.log('onBeforeMount')
    })

    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    onErrorCaptured(() => {
      console.log('onErrorCaptured')
    })
    onRenderTracked(() => {
      console.log('onRenderTracked')
    })
    onRenderTriggered(() => {
      console.log('onRenderTriggered')
    })
    onActivated(() => {
      console.log('onActivated')
    })
    onDeactivated(() => {
      console.log('onDeactivated')
    })

    return {
      title,
      onChangeTitle: () => title.value = 'New Titile'

    }

  }
}
</script>

<style>

</style>