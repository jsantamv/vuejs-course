<template>
  <q-page class="flex column q-pa-md">
    <span class="text-h1">Headline 1 </span>
    <span class="text-h2">Headline 2 </span>
    <span class="text-h3">Headline 3 </span>
    <span class="text-h4">Headline 4 </span>
    <span class="text-h5">Headline 5 </span>
    <span class="text-h6">Headline 6 </span>

    <q-separator />
    <span class="text-subtitle1">subtitle 1</span>
    <span class="text-subtitle2">subtitle 2</span>
    <q-separator />

    <q-separator>
      <p class="text-body1">Nisi mollit ea cupidatat elit nisi.Sit nisi cupidatat sit aliquip.Laboris voluptate eiusmod in
        nisi.</p>
      <p class="text-body2">Nisi mollit ea cupidatat elit nisi.Sit nisi cupidatat sit aliquip.Laboris voluptate eiusmod in
        nisi.</p>
    </q-separator>


    <span class="text-weight-thin">Cupidatat amet fugiat consectetur minim aute nostrud.</span>
    <span class="text-weight-light">Proident mollit sunt laborum pariatur.</span>
    <span class="text-weight-regular">Fugiat pariatur tempor aliqua cillum est est cillum in aliqua.</span>
    <span class="text-weight-medium">Esse laboris nostrud amet tempor.</span>
    <span class="text-weight-bold">Ea enim nostrud minim occaecat eiusmod.</span>
    <span class="text-weight-bolder">Amet sunt ullamco velit culpa in magna aliquip veniam.</span>


    <q-btn color="primary" label="Abrir menu Lateral" class="q-mt-md" @click="toggleSideMenu" />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import useUI from '../composables/useUI'


export default defineComponent({
  name: 'TypographyPage',

  setup() {
    const { toggleSideMenu } = useUI()

    return {
      toggleSideMenu
    }
  }


})
</script>
