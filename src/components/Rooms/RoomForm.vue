<template>
  <form id="room-form" @submit.prevent="addRoom">
    <div>
      <label for="room-name">Nom de la salle</label>
      <input type="text" name="room-name" id="room-name" v-model="currentRoom.name">
    </div>
    <div>
      <label for="room-description">Description de la salle</label>
      <textarea name="room-description" id="room-description" rows="10" v-model="currentRoom.description"></textarea>
    </div>
    <div>
      <label for="room-size">Nombre de places dans la salle</label>
      <input type="number" name="room-size" id="room-size" min="0" v-model="currentRoom.size">
    </div>
    <div>
      <button type="reset" @click="reset">Annuler</button>
      <button type="submit">Ajouter</button>
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'RoomForm',
  methods: {
    async addRoom() {
      if (this.currentRoom.question !== '' && this.currentRoom.answer !== '') {
        if (!this.currentRoom.id) {
          await this.$store.dispatch('rooms/add', this.currentRoom);
        }
        this.reset();
      }
    },
    reset() {
      this.$store.commit('rooms/resetEdit');
    },
  },
  computed: {
    ...mapState({
      currentRoom: (state) => state.rooms.editRoom,
    }),
    isEditionMode() {
      return this.currentRoom.id !== null;
    },
  },
};
</script>

<style scoped>

</style>
