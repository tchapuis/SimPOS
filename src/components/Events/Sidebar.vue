<template>
  <div class="calendar-sidebar">
    <section>
      <h2 class="mb-2">Salles disponibles</h2>
      <div ref="drag" class="flex flex-wrap">
        <div v-for="room in rooms" :key="room.id" class="room p-2 mb-2 bg-orange-600 cursor-move rounded w-1/4 mr-2" :style="{backgroundColor: room.color}" :data-event="JSON.stringify({ title: room.name, id: room.id, room: room.id, color: room.color, text: eventText, create: false })">
          <i>{{ room.name }}</i>
        </div>
        <div class="w-full mt-4">
          <label for="event-text" class="block mb-2">Intitulé</label>
          <input type="text" name="event-text" id="event-text" v-model="eventText" placeholder="Intitulé" class="w-full py-2 px-2 border-b appearance-none bg-transparent focus:outline-none focus:border-orange-600">
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
  data() {
    return {
      eventText: '',
    };
  },
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
