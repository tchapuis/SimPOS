<template>
  <div id="app" class="h-screen flex flex-col sm:flex-row">
    <navbar></navbar>
    <div class="flex flex-col w-full justify-between">
      <router-view class="w-full p-16"/>
      <footer class="w-full p-16 text-sm text-gray-600 flex justify-between">
        <p><a href="https://github.com/tchapuis/SimPOS/issues" class="underline">Support</a></p>
        <p>Designed by <a href="https://github.com/tchapuis" class="underline">Thomas Chapuis</a>. </p>
      </footer>
    </div>

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
