<template>
  <q-page class="q-ma-md">

    <span class="text-h3">Forms</span>
    <q-separator spaced />

    <div class="row justify-center">

      <q-form 
        @submit="onSubmit" 
        @reset="onReset" 
        class="q-gutter-md col-xs-12 col-sm-12 col-md-6 q-pt-xl"
      >

        <q-input 
          filled 
          hint="Email" 
          label="Correo Electronico" 
          no-error-icon
          type="email" 
          v-model="userForm.email" 
          lazy-rules
          :rules="[
            val => val && val.length > 0 || ' Este Campo es obligatio',
            isValidEmail
          ]" />

        <q-input 
          filled 
          hint="Password" 
          label="Password" 
          no-error-icon
          type="password" 
          v-model="userForm.password1" 
          lazy-rules 
          :rules="[val => val !== null && val !== '' || 'Campo Obligatorio']" />

        <q-input 
          filled 
          hint="Re Password" 
          label="Re enter Password" 
          no-error-icon
          type="password" 
          v-model="userForm.password2" 
          lazy-rules 
          :rules="[
            val => val !== null && val !== '' || 'Campo Obligatorio',
            isSamePassword
          ]" />


        <q-checkbox 
          v-model="userForm.conditions" 
          label="Acepto las condiciones" 
          :style="userForm.errorConditions 
            && !userForm.conditions
            && 'color: red'"
        />

        <div class="row justify-end">
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          <q-btn label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>

    
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'



export default defineComponent({
  name: 'Forms-page',

  
  setup() {

    const $q = useQuasar()

    


    const userForm = ref({
      email: '',
      password1: '',
      password2: '',
      conditions: false,
      errorConditions: false,
    })

    return {
      userForm,
      onSubmit() {
        userForm.value.errorConditions = false

        if(!userForm.value.conditions){
          
          $q.notify({
            message: 'Debe de aceptar las condiciones ',
            icon: 'las la-exclamation-circle',
            color: 'red'
          })

          userForm.value.errorConditions = true
          return
        }
      },
      onReset() {
        userForm.value = {
          email: '',
          password1: '',
          password2: '',
          conditions: false,
          errorConditions: false,
        }
      },
      isValidEmail( val ) {
        const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailPattern.test(val) || 'El correo no parece ser válido';
      },
      isSamePassword( val ){
        return (val === userForm.value.password1) || 'Las contrasenas no son iguales'
      }
    }
  }


})
</script>
