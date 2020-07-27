import Vue from "vue";
import Vuex from "vuex";
import AlertServices from "../services/AlertService";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    alerts: [],
    sucesso: "",
    error: "",
  },
  mutations: {
    ADD_ALERT(state) {
      state.sucesso = "Cadastro realizado com sucesso!";
    },
    SET_ALERTS(state, alerts) {
      state.alerts = alerts;
    },
  },
  actions: {
    createAlert({ commit }, alert) {
      return AlertServices.postAlert(alert).then(() => {
        commit("ADD_ALERT");
      });
    },
    fetchAlerts({ commit }) {
      AlertServices.getAlerts()
        .then((response) => {
          commit("SET_ALERTS", response.data["data"]);
        })
        .catch((error) => console.log(error));
    },
  },
  modules: {},
  getters: {
    catLength: (state) => {
      return state.categories.length;
    },
  },
});
