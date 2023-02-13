<template>
    <h1>Hola Slots</h1>

    <button @click="openModal">abrir modal</button>

    <modal v-if="isOpen" @on:close="closeModal" title="Titulo Title" otherTitle="otro title">
        <template v-slot:header>
            <h2>Titulo del modal</h2>
        </template>

        <template v-slot:body>
            <p>Irure sint Lorem velit tempor fugiat quis aute incididunt quis in ullamco Lorem voluptate ad.</p>
        </template>

        <template v-slot:footer>
            <button @click="closeModal">Salir</button>
        </template>

        <!-- esto hace referencia Scoped Slot -->
        <template v-slot:exposed="{ newTitle }">
            <h2>{{ newTitle }}</h2>
        </template>

    </modal>
</template>

<script>
import Modal from '@/components/Modal.vue'
import { ref } from 'vue';
export default {
    components: { Modal },

    setup() {

        const isOpen = ref(false)

        return {
            isOpen,

            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false

        }
    }
}
</script>

<style scoped>

</style>