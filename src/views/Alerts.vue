<template>
  <div>
    <h1>Lista de Alertas</h1>
    <AlertCard v-for="alert in alerts" :key="alert.id" :alert="alert" />
    <div v-if="alerts.length == 0">
      <h4>Nenhum Alerta Cadastrado 🥺</h4>
    </div>
  </div>
</template>

<script>
import AlertCard from "@/components/AlertCard.vue";
import { mapState } from "vuex";
export default {
  components: {
    AlertCard
  },
  created() {
    this.$store.dispatch("fetchAlerts");
  },
  computed: mapState(["alerts"])
};
</script>
