<template>
  <section class="home">
    <foundit />
    <features />
    <!-- <partners /> -->
    <company />
    <download />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  Features, Foundit, Partners, Company, Download, Stores,
} from '@/components';

export default Vue.extend({
  name: 'home',
  components: {
    Features,
    Foundit,
    Company,
    Download,
  },
});
</script>
