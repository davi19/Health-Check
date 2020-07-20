import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "1", name: "Davi" },
    categories: ["Hábitos", "Lembretes", "Ações"],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    catLength: (state) => {
      return state.categories.length;
    },
  },
});
