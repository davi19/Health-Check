import Vue from "vue";
import VueRouter from "vue-router";
import Alerts from "../views/Alerts.vue";
import Details from "../views/AlertDetails.vue";
import Create from "../views/CreateAlert.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "alerts",
    component: Alerts,
  },
  {
    path: "/alert/:id",
    name: "details",
    component: Details,
    props: true,
  },
  {
    path: "/alert/create",
    name: "create",
    component: Create,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
