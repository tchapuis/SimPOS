<template>
  <div></div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    async socialLogin() {
      await this.$store.dispatch('users/login');
      this.$router.replace({ name: 'Randomizer' });
    },
  },
};
</script>

<style scoped>

</style>
