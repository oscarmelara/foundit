<template>
  <b-container tag="section" id="welcome">
    <b-row align-v="end" class="bg">
      <b-col xl="5" lg="5" md="12" sm="12">
        <p>
          Somos una novedosa plataforma de búsqueda con la última tecnología, que pone en contacto
          los comercios y sus productos con todo el mercado del país. Nuestra herramienta se basa en geolocalización para que los usuarios puedan encontrar los productos y ponerse en contacto con los comercios de interés más cercanos.
        </p>
        <p>
          Los comercios tienen el beneficio de exponer fotografías, precios, ofertas, teléfonos,
          página web, sucursales, entre otros; para darle la facilidad a los potenciales clientes a
          tomar decisiones de compra.
        </p>
        <h1>
          Somos el lado fácil de la vida.
        </h1>
      </b-col>
      <b-col xl="7" lg="7" md="12" sm="12">
        <img class="img-fluid" src="@/assets/images/img_sofa.png" alt="Foundit" />
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="stylus" scoped>
#welcome
  padding 1.5rem 1rem
  h1
    color texto-gris
    Mbold(3.5rem)
   
    span
      color texto-gris2
      display block
      margin-top 15px
      Mregular(1.125rem)
  p
    color texto-gris
    font-weight 600
    font-size 18px
  .bg
    background-image url('../assets/images/LogoFoundit-gris.svg')
    background-position center 30px
    background-repeat no-repeat
    background-size 85% auto
  +below(991px)
    h1
      padding 150px 0 0 0
      text-align center
      br
        display none
    .bg
      background-position center top
  +below(500px)
    h1
      Mbold(3rem)
      padding 80px 0 0 0
</style>
