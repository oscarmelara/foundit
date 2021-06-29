<template>
  <section id="business">
    <company />
    <registry />
    <partners />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Company, Registry, Partners } from '@/components'

export default Vue.extend({
  components: { Company, Registry, Partners },
})
</script>
