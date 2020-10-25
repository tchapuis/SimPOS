import { db } from '@/utils/firebase';

const collectionName = 'events';

export default {
  namespaced: true,
  state: {
    events: [],
  },
  mutations: {
    set(state, events) {
      state.events = events;
    },
  },
  actions: {
    init({ commit }) {
      db
        .collection(collectionName)
        .onSnapshot((querySnapshot) => {
          const datas = [];
          querySnapshot.forEach((doc) => {
            datas.push({ id: doc.id, ...doc.data() });
          });
          commit('set', datas);
        });
    },
    async add({ rootState }, payload) {
      await db
        .collection(collectionName)
        .add({
          title: payload.title,
          start: payload.start,
          end: payload.end,
          room: payload.room,
          color: payload.color,
          user: rootState.users.user,
        });
    },
    async edit({ rootState }, payload) {
      await db
        .collection(collectionName)
        .doc(payload.id)
        .update({
          title: payload.title,
          start: payload.start,
          end: payload.end,
          room: payload.room,
          user: rootState.users.user,
        });
    },
    async delete(state, id) {
      await db
        .collection(collectionName)
        .doc(id)
        .delete();
    },
  },
};
