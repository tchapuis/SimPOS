<template>
  <nav class="flex flex-row sm:flex-col p-4 bg-gray-100 justify-between items-center">
    <div>
      <router-link to="/" class="py-4 px-2 sm:mb-4 text-gray-600 hover:text-orange-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </router-link>
      <template v-if="isConnected">
        <hr class="border-gray-600 sm:mb-4">
        <router-link to="/rooms" class="py-4 px-2 sm:mb-4 text-gray-600 hover:text-orange-600" title="Salles">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </router-link>
        <router-link to="/events" class="py-4 px-2 sm:mb-4 text-gray-600 hover:text-orange-600" title="Planning">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </router-link>
      </template>
    </div>
    <div class="mt-auto flex flex-col items-center">
      <router-link v-if="!isConnected" to="/login" class="py-4 px-2 sm:mb-4 text-gray-600 hover:text-orange-600" title="Login">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
        </svg>
      </router-link>
      <template v-else>
        <img :src="userProfile.photoURL" alt="" class="w-10 h-10 rounded-full">
        <button @click="logout" class="py-4 px-2 sm:mb-4 text-gray-600 hover:text-orange-600 focus:outline-none" title="Déconnexion">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </template>
    </div>
  </nav>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  methods: {
    async logout() {
      await this.$store.dispatch('users/logout');
      this.$router.replace({ name: 'Home' }).catch(() => {});
    },
  },
  computed: {
    ...mapState({
      userProfile: (state) => state.users.user,
    }),
    ...mapGetters({
      isConnected: 'users/isConnected',
    }),
  },
};
</script>

<style>
  .router-link-exact-active {
    @apply text-orange-600 !important;
  }
</style>
