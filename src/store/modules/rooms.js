import { db } from '@/utils/firebase';

const collectionName = 'rooms';

const model = {
  id: null, name: '', description: '', size: 0, createdAt: null, user: null,
};

export default {
  namespaced: true,
  state: {
    rooms: [],
    editRoom: { ...model },
  },
  mutations: {
    set(state, rooms) {
      state.rooms = rooms;
    },
    setEdit(state, room) {
      state.editRoom = { ...room };
    },
    resetEdit(state) {
      state.editRoom = { ...model };
    },
  },
  actions: {
    init({ commit }) {
      db
        .collection(collectionName)
        .orderBy('createdAt', 'desc')
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
          name: payload.name,
          description: payload.description,
          size: payload.size,
          createdAt: Date.now(),
          user: rootState.users.user,
        });
    },
  },
};
