<template>
  <div class="stores">
    <b-container tag="section" id="company-initial">
      <b-row align-v="center" class="mx-auto justify-content-center">
        <img class="found-logo" src="@/assets/images/found_log.png" alt="">
        <h4 class="text-center">Descárgala ya aquí:</h4>
      </b-row>
      <b-row align-v="center" class=" justify-content-center mt-2 mx-auto">
          <a rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=app.foundit.founditapp" target="_blank">
            <img class="play-store" src="@/assets/images/store/google-play-badge.png" />
          </a>
          <a rel="noopener noreferrer" href="https://apps.apple.com/us/app/foundit/id1489485679?l=es&ls=1" target="_blank">
            <img
              class="p-1"
              src="@/assets/images/store/app_store_badge@2x.png"
              alt="AppStore"
            />
          </a>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="stylus" scoped>
.stores

  padding 3rem 0
  .found-logo
    width 8rem
    margin 0 0 0 0
  .play-store
    margin 0 20px 0 0
  img
    width 12rem
  h4
    color texto-gris
    font-weight bold
    font-size 1.7rem
  .row
    max-width: 32rem;
  +below(420px)
    padding 2rem 0
    .found-logo
      margin 0 0 0 0
    .play-store
      margin 0 0 0 0
    img
      margin 5px 1px
</style>
