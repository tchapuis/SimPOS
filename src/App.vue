<template>
  <div id="app" class="flex flex-row">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<style>

</style>
<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: { Navbar },
};
</script>
