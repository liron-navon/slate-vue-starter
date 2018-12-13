import Vuex from 'vuex';
import Vue from 'vue';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage || {},
});

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    count: (state) => state.count,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  plugins: [vuexLocal.plugin],
});

export default store;
