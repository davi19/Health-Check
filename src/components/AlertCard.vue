<template>
  <div>
    <div class="card">
      <div class="header-card">
        <h3 class="title-card">
          <i class="far fa-bell"></i>
          {{ alert.name }}
        </h3>
      </div>
      <div class="body-card">{{ alert.starthour }}</div>
      <div class="footer-card">
        <router-link
          :to="{ name: 'details', params: { id: alert.id } }"
          class="btn-primary"
        >Detalhes</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    alert: Object
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
  padding-right: 350px;
  font-weight: bold;
  color: #4fc4cf;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
  border-radius: 5px;
  margin: 0 auto;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
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
