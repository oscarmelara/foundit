<template>
  <section id="registry">
    <b-container class="form-cont">
      <b-row align-v="center" class="form-cont">
        <b-col sm="12" md="6">
          <h2 class="pl-lg-5">¿Cómo puedo ser parte de Foundit?</h2>
        </b-col>
        <b-col sm="12" md="6">
          <form @submit.prevent="onSubmit">
            <p>Para registrar tu comercio debes de llenar la siguiente información</p>
            <span>*Campos requeridos</span>
            <input
              type="text"
              required
              v-model="form.name"
              placeholder="Nombre*"
              class="input-foundit"
            />
            <input
              type="email"
              required
              v-model="form.email"
              placeholder="correo electrónico*"
              class="input-foundit"
            />
            <input
              type="number"
              required
              v-model="form.phone"
              placeholder="Teléfono*"
              class="input-foundit"
            />
            <input
              type="text"
              required
              v-model="form.company_name"
              placeholder="Nombre de tu comercio*"
              class="input-foundit"
            />
            <div class=" mt-2">
              <p class=" font-weight-normal">
               Una vez llenes el formulario  y hagas clic en en "¡Listo!", te llegará un correo electrónico para continuar el proceso.
              </p>
             
            </div>

            <div class=" d-flex justify-content-start align-items-end">
              <b-button type="submit" variant="outline-foundit-white" pill>
                ¡LISTO!
              </b-button>
              <img
                v-if="onLoading === true"
                style="width:50px"
                src="@/assets/images/loading.gif"
                alt=""
              />
            </div>
            <div class=" mt-3">
              <p v-if="onSuccess === true" show class=" text-success">
                Información enviada con exito
              </p>
              <p v-if="onError === true" show class=" text-danger">* {{ message }}</p>
            </div>
            <div class=" mt-4">
              <p class=" font-weight-normal">
                Si necesitas ayuda para registrarte, contáctanos al <b>7910-4839</b> o al correo electrónico <b>admin@foundit.app</b>
              </p>
             
            </div>
          </form>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  data() {
    return {
      onSuccess: false,
      isErrorEmail: false,
      isErrorCompany: false,
      onLoading: false,
      onError: false,
      message: false,
      messageEmail: '',
      messageCompany: '',
      form: {
        name: '',
        email: '',
        phone: '',
        company_name: '',
      },
    };
  },
  methods: {
    async onSubmit() {
      this.onLoading = true;
      await axios
        .post('https://foundit.app/foundit/api/joinus/', this.form)
        .then((response) => {
          this.reset();
          this.onSuccess = true;
          this.onLoading = false;
          setTimeout(() => this.$router.push({ path: '/' }), 5000);
        })
        .catch((error) => {
          const arrayErrors = error.response.data.error;
          for (const key in arrayErrors) {
            if (arrayErrors.hasOwnProperty(key)) {
              const element = arrayErrors[key][0];
              this.message = element;
            }
          }

          this.onError = true;
          this.onLoading = false;
          setTimeout(() => (this.onError = false), 5000);
        });
    },
    reset() {
      // Reset our form values
      this.form.name = '';
      this.form.email = '';
      this.form.phone = '';
      this.form.company_name = '';
    },
  },
});
</script>

<style lang="stylus" scoped>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button
  -webkit-appearance: none
  margin: 0
input[type=number]
  -moz-appearance:textfield
#registry
  background-color negro
  background-color negro
  background-image linear-gradient(90deg, #292929 -20%, negro 74%)
  height 100vh
  max-height 768px
  relative top left
  z-index 100
  &::after
    content ""
    background-image url('../assets/images/background_form.jpg')
    background-position center
    background-repeat no-repeat
    background-size cover
    opacity 0.2
    top 0
    left 0
    bottom 0
    right 0
    position absolute
    z-index -1
  h2
    color blanco
    line-height 1.3
    max-width 375px
    Mbold(3.75rem)
    width 100%
  form
    margin 0 auto
    max-width 290px
    width 96%
    button
      margin-top 10px
      Mbold(0.875rem)
      padding 13px
      width 220px
    p, span
      Mbold(0.8125rem)
    span
      color texto-gris
      display inline-block
      margin-bottom 20px
    p, input
      color blanco
    p
      margin-bottom 10px
    input
      border-color texto-gris
      &:focus
        border-color blanco
      &::placeholder
        color texto-gris
  .form-cont
    height 100%
  +below(768px)
    height auto
    max-height unset
    padding 5rem 0
    h2
      margin-bottom 2rem
      max-width unset
      Mbold(3rem)
      text-align center
    form
      button
        display block
        margin 32px auto 0 auto
  +below(500px)
    padding 3rem 0
    h2
      Mbold(2.5rem)
</style>
