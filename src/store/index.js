import Vue from "vue";
import Vuex from "vuex";
import AlertServices from "../services/AlertService";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "1", name: "Davi" },
    name: "",
    description: "",
    frequency: ["Diário", "Semanal", "Mensal"],
    categories: ["Hábitos", "Lembretes", "Ações"],
  },
  mutations: {
    ADD_ALERT(state, alert) {
      state.alert.push(alert);
    },
  },
  actions: {
    createAlert({ commit }, alert) {
      AlertServices.postAlert(alert);
      commit("ADD_ALERT", alert);
    },
  },
  modules: {},
  getters: {
    catLength: (state) => {
      return state.categories.length;
    },
  },
});
