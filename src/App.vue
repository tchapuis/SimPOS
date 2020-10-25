<template>
  <div id="app" class="h-screen flex flex-col sm:flex-row">
    <navbar></navbar>
    <div class="flex flex-col w-full justify-between p-16 container mx-auto">
      <router-view class="w-full mb-2"/>
      <footer class="w-full text-sm text-gray-600 flex justify-between">
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
