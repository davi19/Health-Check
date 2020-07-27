import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://health-check-api.herokuapp.com/api/v1/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
  },
});

export default {
  getAlerts() {
    return apiClient.get("/alerts");
  },
  postAlert(alert) {
    return apiClient.post("/alerts", {
      name: alert.name,
      starthour: alert.starthour,
      endhour: alert.endhour,
      interval: alert.interval,
    });
  },
};
