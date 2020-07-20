import Conexao from "../sql/conexao";

export default {
  postAlert(alert) {
    Conexao.postAlert();
  },
};
