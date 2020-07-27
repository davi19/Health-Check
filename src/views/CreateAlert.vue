<template>
  <div>
    <div class="card">
      <div class="header-card">
        <h3 class="title-card">
          <i class="far fa-plus-square"></i> Cirar Alerta
        </h3>
      </div>
      <h4>{{ this.$store.state.error }}</h4>
      <h4>{{ this.$store.state.sucesso }}</h4>
      <form @submit.prevent="createAlert">
        <div class="body-card">
          <div class="field">
            <input type="text" v-model="alert.name" id="name" placeholder="Nome" />
            <label for="name">Nome</label>
          </div>
          <div class="field">
            <input
              type="text"
              v-model="alert.starthour"
              id="startHour"
              placeholder="Hora de Inicio"
            />
            <label for="startHour">Hora de inicio</label>
          </div>
          <div class="field">
            <input type="text" v-model="alert.endhour" id="endhour" placeholder="Hora de Fim" />
            <label for="endhour">Hora de Fim</label>
          </div>
          <div class="field">
            <input type="text" v-model="alert.interval" id="interval" placeholder="Intervalo" />
            <label for="interval">Intervalo</label>
          </div>
        </div>
        <div class="footer-card">
          <button type="submit" class="btn-primary">Cadastrar</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    createAlert() {
      this.$store
        .dispatch("createAlert", this.alert)
        .then(() => {
          this.alert = this.createFreshAlert();
        })
        .catch(() => {
          this.$store.state.error = "Erro ao cadastrar usuário";
        });
    },
    createFreshAlert() {
      return {
        starthour: "",
        endhour: "",
        name: "",
        interval: ""
      };
    }
  },
  data() {
    return {
      alert: this.createFreshAlert()
    };
  },
  computed: {}
};
</script>
<style scoped>
.field {
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 1em;
}
label,
input,
select {
  margin: 0 auto;
  transition: all 0.2s;
  touch-action: manipulation;
}

input {
  font-size: 1.2em;
  border: 0;
  border-bottom: 1px solid #42b983;
  color: #42b983;
  border-radius: 0;
  width: 300px;
  cursor: text;
}
select {
  color: #994ff3;
  text-align: center;
  font-size: 1.2em;
  border: 0;
  width: 300px;
}
option {
  color: #42b983;
}
option:checked {
  color: #994ff3;
}

input:focus {
  outline: 0;
  border-bottom: 1px solid #42b983;
}

label {
  color: #42b983;
  text-align: left;
  text-transform: uppercase;
  font-size: 1em;
}
input:placeholder-shown + label {
  cursor: text;
  max-width: 66.66%;
  white-spwhite-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform-origin: left bottom;
  transform: translate(0, 1.7rem) scale(1.5);
}
::-webkit-input-placeholder {
  opacity: 0;
  transition: inherit;
}

input:focus::-webkit-input-placeholder {
  opacity: 1;
}
input:not(:placeholder-shown) + label,
input:focus + label {
  transform: translate(0, 0) scale(1);
  cursor: pointer;
}
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
