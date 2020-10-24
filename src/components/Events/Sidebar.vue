<template>
  <div class="calendar-sidebar">
    <section>
      <h2>Salles</h2>

      <div ref="drag">
        <div v-for="room in rooms" :key="room.id" class="room bg-orange-600 border border-gray-700 mb-2 cursor-move" :data-event="JSON.stringify({ title: room.name, id: room.id, create: false })">
          <i>{{ room.name }}</i>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Draggable } from '@fullcalendar/interaction';
import { mapState } from 'vuex';

export default {
  name: 'CalendarSidebar',
  computed: {
    ...mapState({
      rooms: (state) => state.rooms.rooms,
    }),
  },
  mounted() {
    return new Draggable(this.$refs.drag, {
      itemSelector: '.room',
    });
  },
};
</script>

<style scoped>

</style>
