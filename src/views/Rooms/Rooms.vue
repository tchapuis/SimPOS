<template>
  <div>
    <room-form></room-form>
    <room-list></room-list>
  </div>
</template>

<script>
import RoomForm from '@/components/Rooms/RoomForm.vue';
import RoomList from '@/components/Rooms/RoomList.vue';

export default {
  name: 'Rooms',
  components: { RoomList, RoomForm },
};
</script>

<style scoped>

</style>
