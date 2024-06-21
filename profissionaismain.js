var profissionaisVue = new Vue({
  el: "#profissionaisVue",
  data: () => {
    return {
      atendimentoPacienteObj: {
        consulta: "",
        avaliacao: "",
      },
      selecionado:{} ,
      indice:0,
      faltou: false,
      compareceu: false,
      atendimentoPaciente: [],
      listaPacientes: [],
      listaAgendamento: [],
    };
  },
  mounted() {
    if (localStorage.getItem("atendimentoPaciente") != null) {
      this.atendimentoPaciente = JSON.parse(
        localStorage.getItem("atendimentoPaciente")
      );
    }

    if (localStorage.getItem("listaPacientes") != null) {
      this.listaPacientes = JSON.parse(localStorage.getItem("listaPacientes"));
    }
    if (localStorage.getItem("listaAgendamento") != null) {
      this.listaAgendamento = JSON.parse(
        localStorage.getItem("listaAgendamento")
      );
    }
  },
  methods: {
    registrar() {
      this.atendimentoPaciente.push(this.atendimentoPacienteObj);
      localStorage.setItem(
        "atendimentoPaciente",
        JSON.stringify(this.atendimentoPaciente)
      );
    },
    confirmar() {
      for (let i = 0; i < this.listaAgendamento.length; i++) {  
        if (this.listaAgendamento[i].id.toString()==this.selecionado.split(", ")[3]) {
          this.listaAgendamento[i].compareceu=this.compareceu;
          this.listaAgendamento[i].faltou=this.faltou;
        }
        
      }
      localStorage.setItem("listaAgendamento",JSON.stringify(this.listaAgendamento));
    },
  },
});
