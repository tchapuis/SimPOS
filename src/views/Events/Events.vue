<template>
  <div>
    <calendar-sidebar></calendar-sidebar>
    <FullCalendar :options="configOptions"></FullCalendar>
  </div>

</template>

<script>
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';
import CalendarSidebar from '@/components/Events/Sidebar.vue';
import { mapState } from 'vuex';

export default {
  name: 'Events',
  components: {
    CalendarSidebar,
    FullCalendar,
  },
  methods: {
    editEvent({ event }) {
      const payload = {
        id: event.id, start: event.startStr, end: event.endStr, room: event.id, title: event.title,
      };
      this.$store.dispatch('events/edit', payload);
    },
    deleteEvent({ event }) {
      const confirmed = window.confirm(`Are you sure you want to delete the event '${event.title}'?`);
      if (!confirmed) {
        return;
      }
      this.$store.dispatch('events/delete', event.id);
    },
    handleDrop(arg) {
      const event = JSON.parse(arg.draggedEl.dataset.event);
      const payload = {
        start: arg.dateStr, end: null, room: event.id, title: event.title,
      };

      this.$store.dispatch('events/add', payload);
    },
  },
  computed: {
    ...mapState({
      events: (state) => state.events.events,
    }),
    configOptions() {
      return {
        locale: frLocale,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        droppable: true,
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek',
        },
        initialView: 'dayGridMonth',
        weekends: false,
        weekNumbers: true,
        eventResize: this.editEvent,
        eventDrop: this.editEvent,
        eventClick: this.deleteEvent,
        drop: this.handleDrop,
        events: this.events,
      };
    },
  },
};
</script>

<style scoped>

</style>
