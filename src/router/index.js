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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import(/* webpackChunkName: "events" */ '../views/Events/Events.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/rooms',
    component: () => import(/* webpackChunkName: "rooms" */ '../views/Rooms/Rooms.vue'),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        name: 'Rooms',
        component: () => import(/* webpackChunkName: "roomsList" */ '../components/Rooms/RoomList'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'new',
        name: 'NewRooms',
        component: () => import(/* webpackChunkName: "roomsForm" */ '../components/Rooms/RoomForm'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'edit',
        name: 'EditRooms',
        component: () => import(/* webpackChunkName: "roomsForm" */ '../components/Rooms/RoomForm'),
        meta: {
          requiresAuth: true,
        },
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
