<template>
  <div>
    <div v-for="room in rooms" :key="room.id">
      <p>{{ room.name }}</p>
      <p>{{ room.description }}</p>
      <p>{{ room.size }}</p>
    </div>
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

</style>
