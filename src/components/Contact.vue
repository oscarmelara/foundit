<template>
  <b-container tag="section" id="contact-form">
    <b-row align-v="center">
      <b-col md="7"><img src="@/assets/images/img_contact.png" alt="Contact Foundit"></b-col>
      <b-col md="5">
        <form @submit.prevent="send" class="m-auto">
          <h2>¿Aún no encuentras lo que buscas?</h2>
          <span class="d-inline-block mt-2 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </span>

          <input
            type="text"
            required
            v-model="name"
            class="input-foundit"
            placeholder="Nombre Apellido" />
          <input
            type="email"
            required
            v-model="email"
            class="input-foundit"
            placeholder="correo electrónico" />
          <input
            type="text"
            required
            v-model="phone"
            class="input-foundit"
            placeholder="Teléfono" />
          <textarea
            required
            v-model="msg"
            class="my-2 px-3 py-2"
            placeholder="Mensaje" />
          <b-button type="submit" variant="outline-foundit-gray" pill>
            Enviar
          </b-button>
        </form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      msg: '',
    }
  },
  methods: {
    send(): void {
      this.reset()
    },
    reset(): void {
      this.name = ''
      this.email = ''
      this.phone = ''
      this.msg = ''
    },
  },
})
</script>

<style lang="stylus" scoped>
#contact-form
  color texto-gris
  padding 5rem 0
  img
    height auto
    max-width 600px
    width 100%
  form
    max-width 360px
    width 90%
    h2
      color texto-gris
      Mbold(1.8125rem)
    span
      color texto-gris2
      Mregular(0.75rem)
    input,textarea
      border-color texto-gris2
      color texto-gris
      width 80%
      &:focus
        border-color texto-gris
      &::placeholder
        color texto-gris2
    textarea
      border 1px solid texto-gris2
      background-color transparent
      border-radius 19px
      height 100px
      Msemibold(0.83rem)
      resize none
      transition all 0.3s linear
      width 80%
    button
      Mbold(0.875rem)
      padding 0.5rem 3rem
  +below(600px)
    padding 2rem 0
    form
      text-align center
      input,textarea
        width 100%
</style>
