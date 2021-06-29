<template>
  <b-container tag="section" id="features">
    <b-row>
      <b-col xl="4" lg="4" md="4" sm="12">
        <div class="cont-img">
          <img class="img-fluid" src="@/assets/images/img_search.png" alt="Search" />
        </div>
        <p>
          <span>Buscador</span>
          Aspiramos a ser la herramienta con la base de datos de productos y comercios más grande
          del país
        </p>
      </b-col>
      <b-col xl="4" lg="4" md="4" sm="12">
        <div class="cont-img">
          <img class="img-fluid" src="@/assets/images/img_wishlist.png" alt="Wishlist" />
        </div>
        <p>
          <span>Wishlist</span>
          Listados de productos favoritos para eventos especiales que luego puedes enviar a
          familiares y amigos.
        </p>
      </b-col>
      <b-col xl="4" lg="4" md="4" sm="12">
        <div class="cont-img">
          <img class="img-fluid" src="@/assets/images/img_products.png" alt="Products" />
        </div>
        <p>
          <span>Vitrinea</span>
          Permite a tus potenciales clientes recorrer los productos de tu negocio de manera virtual.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="stylus" scoped>
#features
  padding 5rem 0
  p
    color texto-gris
    margin 0 auto
    Mregular(0.75rem)
    text-align center
    width 80%
    span
      display block
      Mbold(1.56rem)
  .cont-img
    align-items center
    display flex
    height 230px
    justify-content center
    img
      max-height 100%
      max-width 250px
</style>
