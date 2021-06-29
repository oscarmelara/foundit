<template>
  <b-container tag="section" id="download">
    <b-row align-v="center">
      <b-col sm="12" md="5" lg="5" xl="5" class=" px-4">
        <img src="@/assets/images/img_mockup_app.png" alt="Download" id="download-img" />
      </b-col>
      <b-col sm="12" md="7" lg="7" xl="7">
        <div class="info">
          <h2>¿Cómo funciona?</h2>
        </div>
        <div class=" d-flex flex-wrap">
          <b-col class="d-flex step position-relative flex-wrap" sm="12" md="6">
            <img
              class="arrow position-absolute"
              src="@/assets/images/icons/ic_flecha.png"
              alt="Download"
              id="mg"
            />
            <b-col class=" d-flex justify-content-center align-items-center" sm="12" md="3">
              <img src="@/assets/images/icons/ic_registra@2x.png" alt="Download" id="mg" />
            </b-col>
            <b-col class=" d-flex justify-content-center flex-column" sm="12" md="8">
              <h3>Registra <span>tu comercio</span></h3>
              <p>Llena el formulario <router-link to="/contacto">aqui</router-link></p>
            </b-col>
          </b-col>
          <b-col class="d-flex step flex-wrap" sm="12" md="6">
            <b-col class=" d-flex justify-content-center align-items-center" sm="12" md="3">
              <img src="@/assets/images/icons/ic_ingresa@2x.png" alt="Download" id="img" />
            </b-col>
            <b-col class=" d-flex justify-content-center flex-column" sm="12" md="8">
              <h3>Comienza a ingresar <span>tus productos</span></h3>
            </b-col>
          </b-col>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import Stores from "./Stores.vue";

export default Vue.extend({
  // eslint-disable-next-line vue/no-unused-components
  components: { Stores }
});
</script>

<style lang="stylus" scoped>
.step
  margin-top 1rem
  h3
    color texto-gris
    font-size 1.4rem
    font-weight bolder
    span
      color #B5B5B5!important
      display block
  p
    color texto-gris
    font-size 0.875rem
    margin 0
  img
    width: 3rem
  .arrow
    right 5%
    width auto
    top 30%
  a
    color black
  +below(768px)
    .arrow
      display none
    img
      margin-bottom 1rem


#download
  color texto-gris
  padding 5rem 0 8rem 0
  h2
    Mbold(3.75rem)
  >>>.stores
    padding 0
    img
      margin-left 0
  .info
    max-width: 24rem;
    margin-left 2rem
  #download-img
    display block
    margin 0 auto
    width 100%

  +below(991px)
    .info
      padding 0
      margin-left 0
      max-width none


  +below(768px)
    padding 1rem 0 4rem 0
    text-align center

  +below(600px)
    h2
      font-size 2.5rem
      padding 0 10px
</style>
