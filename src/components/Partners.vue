<template>
  <section id="partners">
    <b-container>
      <b-row align-v="center">
        <b-col xl="5" lg="5" md="12" sm="12" class="partners-title">
          <h2>
            Los comercios
            <br />que ya están
            <span>viviendo el lado fácil de la vida.</span>
          </h2>
        </b-col>
        <b-col xl="7" lg="7" md="12" sm="12">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="partners-slide">
                  <img src="@/assets/images/partners/logo_rocasana.png" alt="Roca sana" />
                  <img src="@/assets/images/partners/logo_hechoencasa.png" alt="Hecho en casa" />
                  <img src="@/assets/images/partners/logo_merch.png" alt="Merch" />
                  <img src="@/assets/images/partners/logo_tentis.png" alt="Ten Tis" />
                  <img src="@/assets/images/partners/logo_martania.png" alt="Martania" />
                </div>
              </div>
            </div>
            <!-- Add Arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts">
import Swiper from "swiper";
import Vue from "vue";

export default Vue.extend({
  mounted() {
    this.sw = new Swiper(".swiper-container", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  },
  data() {
    return {
      sw: null as Swiper | null
    };
  }
});
</script>

<style lang="stylus" scoped>
@import "~swiper/css/swiper.min.css"

#partners
  padding 150px 0
  .partners-title
    text-align right
  h2
    color texto-gris
    display inline-block
    max-width 330px
    Mbold(2.375rem)
    text-align left
    width 100%
    br
      display none
    span
      color texto-gris2
      display block
      Mbold(2.3125rem)
  >>>.swiper-container
    .swiper-button-next,.swiper-button-prev
      color texto-gris2
      transform scale(0.5)
    .partners-slide
      align-items center
      display flex
      justify-content space-evenly
      img
        height 90px
        max-width 20%
        width auto
  +above(1368px)
    .partners-title
      text-align left
  +below(991px)
    padding 100px 0
    h2
      margin-bottom 2.5rem
      max-width unset
      text-align center
  +below(767px)
    >>>.swiper-container
      .partners-slide
        flex-wrap wrap
        img
          margin 0 25px
          max-width unset
  +below(600px)
    padding 50px 0
    h2
      Mbold(1.8rem)
      padding 0 1rem
      span
        Mbold(1.8rem)
  +below(480px)
    h2
      br
        display block
</style>
