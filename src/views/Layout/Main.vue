<template>
  <section id="app">
    <header>
      <stores />

      <b-navbar class=" d-flex justify-content-center align-items-center" toggleable="lg">
        <b-navbar-brand to="/">
          <img id="logo" src="@/assets/images/logo.svg" alt="Foundit" />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      </b-navbar>
    </header>
    <router-view />
    <footer>
      <b-row>
        <b-col sm="12">
          <img src="@/assets/images/logo.svg" alt="Foundit" />
        </b-col>
        <b-col sm="12" class="contact mb-2">
          Síguenos
          <span class="aux" />
          <a rel="noopener noreferrer" href="https://www.facebook.com/foundit.sv/" target="_blank">
            <img class="icons" src="@/assets/images/icons/fb.svg" alt="Facebook" />
          </a>
          <a rel="noopener noreferrer" href="https://www.instagram.com/foundit_sv/" target="_blank">
            <img class="icons" src="@/assets/images/icons/in.svg" alt="Instagram" />
          </a>
          <span class="aux" />
          <span class="aux" />
          <a href="mailto:admin@foundit.app">admin@foundit.app</a>
        </b-col>
      </b-row>
      <div class="copy">Foundit 2019 Todos los derechos reservados</div>
    </footer>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Stores } from '@/components';

export default Vue.extend({
  // eslint-disable-next-line vue/no-unused-components
  components: { Stores },
});
</script>

<style lang="stylus" scoped>
#app
  background-color fondo
  Mregular()
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color casi-negro
  min-width 360px
  margin 0 auto
  overflow hidden
  footer
    background-color negro
    color texto-gris
    Mbold(0.83rem)
    padding 4rem 0 0 0
    text-align center
    a
      color blanco
    .aux
      display none
    .contact
      padding 3rem 0 1rem 0
      img
        margin 0 5px
        &:last-child
          margin-left 0
      a
        margin 0 0 0 5px
    .copy
      background-color casi-negro
      Msemibold(0.62rem)
      padding 1rem 0
    .icons
      height 35px
      width 35px
    +below(420px)
      padding 2rem 0 0 0
      .aux
        display block
        height 1px
        margin-top 10px
        width 100%
      .contact
        padding 1rem 0 0 0
        img
          &:last-child
            margin-left 0
        a
          margin 0
  header
    height auto
    nav
      background-color fondo
      padding 0.5rem 1rem 0.7rem 2.5rem
    .navbar-toggler
      display none
    #logo
      height auto
      width 115px
    .nav-item
      padding 0 2rem
      a
        color texto-gris2
        Obold(0.69rem)
        &.router-link-exact-active
          color texto-gris
          text-decoration underline
  +below(991px)
    header
      .nav-item
        padding 0
</style>
