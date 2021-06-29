<template>
  <section id="contact">
    <!-- <section id="info-company" class="bgw">
      <div id="bg-contact" />
      <b-tabs content-class="mt-5" class="container custom-foundit-tabs">
        <b-tab active>
          <template v-slot:title>
            <IconCompany />
            Soy un comercio
          </template>

          <h2 class="acc-foundit-title">Panel administrativo</h2>
          <accordion-company class="acc-container m-auto" />
          <h2 class="acc-foundit-title">Aplicación</h2>
          <accordion-company-apply class="acc-container m-auto" />
        </b-tab>
        <b-tab>
          <template v-slot:title>
            <IconUser />
            Soy un usuario
          </template>
          <h2 class="acc-foundit-title">Aplicación</h2>
          <accordion-user class="acc-container m-auto" />
        </b-tab>
      </b-tabs>
    </section>
    <contact /> -->
    <registry />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  Contact,
  Registry,
  AccordionCompany,
  AccordionUser,
  AccordionCompanyApply,
} from '@/components';
import { IconCompany, IconUser } from '@/components/Icons';

export default Vue.extend({
  components: {
    Registry,
  },
});
</script>

//
<style lang="stylus" scoped>
// #info-company
//   padding 0 0 5rem 0
//   .acc-container
//     width 75%
//   #bg-contact
//     background-image url('../assets/images/background_contact.jpg')
//     background-position center
//     background-repeat no-repeat
//     background-size cover
//     display flex
//     height 260px
//   .custom-foundit-tabs
//     margin-top -35px
//     >>>.nav-tabs
//       border-bottom none
//       .nav-link
//         border none !important
//         border-radius 20px 20px 0 0
//         color blanco
//         Mbold(0.9375rem)
//         svg
//           path.custom
//             fill blanco
//         &.active
//           color texto-gris
//           svg
//             path.custom
//               fill texto-gris
//   +below(600px)
//     .acc-container
//       width 100%
//   +below(400px)
//     .custom-foundit-tabs
//       >>>.nav-tabs
//         .nav-link
//           Mbold(0.9rem)
//           padding 6px 5px !important
//
</style>
