<template>
  <form id="room-form" @submit.prevent="addRoom">
    <div class="mb-4">
      <label for="room-name" class="block mb-4">Nom de la salle</label>
      <input type="text" name="room-name" id="room-name" placeholder="Nom" v-model="currentRoom.name" required class="w-full py-2 px-2 border-b appearance-none bg-transparent focus:outline-none focus:border-orange-600">
    </div>
    <div class="mb-4">
      <label for="room-description" class="block mb-4">Description de la salle</label>
      <textarea name="room-description" id="room-description" placeholder="Description" rows="10" v-model="currentRoom.description" required class="w-full py-2 px-2 border-b appearance-none bg-transparent focus:outline-none focus:border-orange-600"></textarea>
    </div>
    <div class="mb-4">
      <label for="room-size" class="block mb-4">Nombre de places dans la salle</label>
      <input type="number" name="room-size" id="room-size" min="0" v-model="currentRoom.size" required class="w-full py-2 px-2 border-b appearance-none bg-transparent focus:outline-none focus:border-orange-600">
    </div>
    <div class="mb-4">
      <label for="room-color" class="block mb-4">Couleur de la salle</label>
      <input type="color" name="room-color" id="room-color" v-model="currentRoom.color" required class="w-full h-8 px-2 border-b appearance-none bg-transparent focus:outline-none focus:border-orange-600">
    </div>
    <div class="flex justify-between py-4">
      <button type="reset" @click="reset" class="hover:text-orange-500 focus:outline-none">Annuler</button>
      <button type="submit" class="bg-orange-600 flex py-2 px-4 text-white shadow hover:bg-orange-500 focus:outline-none">
        <span v-if="isEditionMode">Editer</span>
        <span v-else>Ajouter</span>
      </button>
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'RoomForm',
  methods: {
    async addRoom() {
      if (this.currentRoom.name !== '' && this.currentRoom.description !== '') {
        if (!this.currentRoom.id) {
          await this.$store.dispatch('rooms/add', this.currentRoom);
        } else {
          await this.$store.dispatch('rooms/add', this.currentRoom);
        }
        this.reset();
      }
    },
    reset() {
      this.$store.commit('rooms/resetEdit');
      this.$router.push({ name: 'Rooms' });
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
  beforeCreate() {
    if (this.$route.name === 'EditRooms' && !this.isEditionMode) {
      this.$router.replace({ name: 'NewRooms' });
    }
  },
};
</script>

<style scoped>

</style>
