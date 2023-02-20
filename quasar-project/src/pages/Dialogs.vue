<template>
  <q-page class="q-pa-md">

    <span class="text-h3">Dialogs</span>
    <q-separator spaced />

    <template v-if="name">
      <span class="text-h6">{{ name }}</span>
      <q-separator spaced />
    </template>

    <div class="q-pa-md q-gutter-sm">
      <q-btn unelevated label="Alert" color="primary" @click="alert" />
      <q-btn unelevated label="Confirm" color="secondary" @click="confirm" />
      <q-btn unelevated label="Prompt" color="accent" @click="prompt" />
    </div>


  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { defineComponent, ref } from 'vue'

export default defineComponent(
  {
    name: 'dialogs-page',


    setup() {

      const $q = useQuasar()
      const name = ref(null)

      function alert() {
        $q.dialog({
          title: 'Alert',
          message: 'Some message'
        }).onOk(() => {
          // console.log('OK')
        }).onCancel(() => {
          // console.log('Cancel')
        }).onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        })
      }

      function confirm() {
        $q.dialog({
          title: 'Confirm',
          message: 'Would you like to turn on the wifi?',
          cancel: true,
          persistent: true
        }).onOk(() => {
          // console.log('>>>> OK')
        }).onOk(() => {
          // console.log('>>>> second OK catcher')
        }).onCancel(() => {
          // console.log('>>>> Cancel')
        }).onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        })
      }

      function prompt() {
        $q.dialog({
          title: 'Prompt',
          message: 'What is your name?',
          position: 'top',
          prompt: {
            model: '',
            type: 'text' // optional
          },
          cancel: true,
          persistent: true
        }).onOk(data => {
          name.value = data
        }).onCancel(() => {

        }).onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        })
      }

      return { alert, confirm, prompt, name }
    }

  })
</script>

<style></style>