<template>
  <div >
    <div class="mb-6 flex justify-between items-center">
      <h1 class="text-3xl">Planning</h1>
    </div>
    <calendar-sidebar class="mb-8"></calendar-sidebar>
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
        id: event.id, start: event.startStr, end: event.endStr, room: event.extendedProps.room, title: event.title,
      };
      this.$store.dispatch('events/edit', payload);
    },
    deleteEvent({ event }) {
      const confirmed = window.confirm(`Veuillez confirmer la suppression de l'évènement : '${event.title}'?`);
      if (!confirmed) {
        return;
      }
      this.$store.dispatch('events/delete', event.id);
    },
    handleDrop(arg) {
      const event = JSON.parse(arg.draggedEl.dataset.event);

      const title = event.text ? `${event.title} - ${event.text}` : `${event.title}`;

      const payload = {
        start: arg.dateStr, end: null, room: event.id, title, color: event.color,
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
        eventColor: '#dd6b20',
        eventOverlap(stillEvent, movingEvent) {
          return stillEvent.extendedProps.room !== movingEvent.extendedProps.room;
        },
      };
    },
  },
};
</script>

<style>
  .fc .fc-button, .fc .fc-button-primary {
    @apply bg-orange-600 border-orange-600 rounded;
  }
  .fc .fc-button-primary:disabled {
    @apply bg-orange-500 border-orange-500;
  }

  .fc .fc-button-primary:not(:disabled):active, .fc .fc-button-primary:not(:disabled).fc-button-active {
    @apply bg-orange-500 border-orange-500;
  }

  .fc .fc-button:hover {
    @apply bg-orange-500 border-orange-500;
  }

  .fc .fc-button-primary:not(:disabled).fc-button-active {
    @apply bg-orange-700 border-orange-700;
  }

  .fc .fc-button-primary:focus, .fc .fc-button-primary:not(:disabled):active:focus, .fc .fc-button-primary:not(:disabled).fc-button-active:focus {
    @apply outline-none shadow-none;
  }
</style>
