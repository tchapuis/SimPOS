import Vue from 'vue';
import App from './App.vue';
import './assets/css/main.css';
import './utils/firebase';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

store.dispatch('rooms/init');
store.dispatch('events/init');

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
