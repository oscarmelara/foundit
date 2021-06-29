<template>
  <b-container tag="section" id="company-initial">
    <b-row align-v="center">
      <b-col class="info-comp pl-lg-5" xl="5" lg="5" md="6" sm="12">
        <b-row>
          <b-col sm="12">
            <h1>Da a conocer todos tus productos:</h1>
          </b-col>
          <b-col sm="12">
            <h2>¡Completamente gratis!</h2>
          </b-col>

          <b-col sm="12">
            <router-link to="/contacto">
              <b-button pill variant="foundit">Registrar mi comercio</b-button>
            </router-link>
          </b-col>
          <b-col sm="12">
            <a href="https://foundit.app/terminos_condiciones.pdf" target="_blank">
              <b-button pill variant="outline-foundit">Términos y condiciones</b-button>
            </a>
          </b-col>
        </b-row>
      </b-col>
      <b-col xl="7" lg="7" md="6" sm="12">
        <img src="@/assets/images/img_registrar_comercio@2x.png" alt="Company" class="img-fluid" />
      </b-col>
    </b-row>
    <b-modal id="modal-r">
      <b-container>
        <h2 class="ml-5 mb-5">Lee los requisitos.</h2>
        <p class=" font-smaller">
          <img class="mr-1 block" src="@/assets/images/tick.png" alt="" /> Envio de menu digital
        </p>
        <p class=" font-smaller">
          <img class="mr-1 block" src="@/assets/images/tick.png" alt="" /> Llenar el formulario para
          la creación de usuarios comercial
        </p>
      </b-container>
    </b-modal>
  </b-container>
</template>

<style lang="stylus" scoped>
#company-initial
  color texto-gris
  padding 4rem 1rem
  h1
    Mbold(1.1875rem)
  h2
    Mbold(3.75rem)
  p,span
    color texto-gris2
    display inline-block
    Mregular(0.75rem)
  .btn
    margin 5px 0
    Mbold(0.875rem)
    padding 15px 20px
    text-align center
    width 220px
  .img-fluid
    display block
    margin 0 auto
    max-width 580px
    width 96%
  +below(767px)
    h2
      Mbold(2rem)
.modal-body
  color texto-gris
  h2
    color texto-gris
    Mbold(3.75rem)
  p
    color texto-gris
  +below(767px)
    .info-comp
      text-align center
      padding 0 1.5rem

  +below(600px)
    padding 1.5rem 0 4rem 0
    h1
      Mbold(1rem)
    h2
      Mbold(3rem)
    p,span
      Mregular(0.7rem)
      line-height 1
    span
      margin 1rem 0
</style>
