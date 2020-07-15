<template>
  <div>
    <div class="card">
      <div class="header-card">
        <h3 class="title-card">{{ alerts.title }}</h3>
      </div>
      <div class="body-card">{{ alerts.description }}</div>
      <div class="footer-card">
        <router-link :to="{ name: 'details', params: { id: '1' } }" class="btn-primary">Detalhes</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alerts: {
        title: "beber agua",
        description: "se hidratar"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.header-card {
  border-bottom: 1px solid #ebebeb;
}
.footer-card {
  padding-right: 15px;
  padding-bottom: 10px;
  padding-top: 10px;
  text-align: right;
  background-color: #f2eef5;
  border-top: 1px solid #ebebeb;
}
.body-card {
  padding: 10px 5px 10px 5px;
}
.title-card {
  text-transform: uppercase;
  padding-top: 15px;
  padding-right: 150px;
  font-weight: bold;
  color: #4fc4cf;
}
div.card {
  text-align: center;
  height: 100px;
  width: 400px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
}
.btn-primary {
  text-transform: uppercase;
  background-color: #994ff3;
  border-radius: 5px;
  border: none;
  color: #f2eef5;
  padding: 12px 30px;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
