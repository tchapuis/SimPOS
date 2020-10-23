import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';

import { auth } from '@/utils/firebase';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // meta: {
    //   requiresAuth: true,
    // },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/rooms',
    component: () => import(/* webpackChunkName: "rooms" */ '../views/Rooms/Rooms.vue'),
    children: [
      {
        path: '',
        name: 'Rooms',
        component: () => import(/* webpackChunkName: "roomsList" */ '../components/Rooms/RoomList'),
      },
      {
        path: 'new',
        name: 'NewRooms',
        component: () => import(/* webpackChunkName: "roomsForm" */ '../components/Rooms/RoomForm'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

  if (requiresAuth && (!auth.currentUser || !store.state.users.user)) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
