<template>
  <div id="app" class="h-screen flex flex-col sm:flex-row">
    <navbar></navbar>
    <router-view class="w-full p-16"/>
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
