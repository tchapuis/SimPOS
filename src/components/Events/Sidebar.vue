<template>
  <div class="calendar-sidebar">
    <section>
      <h2 class="mb-2">Salles disponibles</h2>
      <div ref="drag" class="flex flex-wrap">
        <div v-for="room in rooms" :key="room.id" class="room p-2 mb-2 bg-orange-600 cursor-move rounded w-1/4 mr-2" :style="{backgroundColor: room.color}" :data-event="JSON.stringify({ title: room.name, id: room.id, color: room.color, create: false })">
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
