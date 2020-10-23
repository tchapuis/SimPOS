<template>
  <div>
    <div class="flex flex-row-reverse">
      <router-link :to="{name: 'NewRooms'}" class="bg-orange-600 flex py-2 px-4 text-white shadow focus:outline-none hover:bg-orange-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <span>Ajouter</span>
      </router-link>
    </div>
    <table class="table-auto w-full text-left">
      <thead class="text-gray-500">
        <tr>
          <th class="py-3">Name</th>
          <th class="py-3">Size</th>
          <th class="py-3">status</th>
          <th class="py-3"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="room in rooms" :key="room.id">
          <td class="py-3">{{ room.name }}</td>
          <td class="py-3">{{ room.size }}</td>
          <td class="py-3">{{ room.size }}</td>
          <td class="py-3">
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'RoomList',
  computed: {
    ...mapState({
      rooms: (state) => state.rooms.rooms,
    }),
  },
};
</script>

<style scoped>
  thead {
    border-bottom: 1px solid;
    @apply border-gray-200;
  }
</style>
