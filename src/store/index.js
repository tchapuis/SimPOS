import Vue from 'vue';
import Vuex from 'vuex';

import users from '@/store/modules/users';
import rooms from '@/store/modules/rooms';
import events from '@/store/modules/events';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    rooms,
    events,
  },
});
