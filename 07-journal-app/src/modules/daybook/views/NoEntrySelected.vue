<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">No hay nada seleccionado</h1>
    </div>

    <CustomFab icon="fa-plus"/>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        CustomFab: defineAsyncComponent(() => import('../components/CustomFab.vue'))
    }
}
</script>

<style lang="scss" scoped>
div {
    height: 100%;
}
</style>