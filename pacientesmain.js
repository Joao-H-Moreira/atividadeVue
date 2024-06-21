var pacientesVue = new Vue({
  el: "#pacientesVue",
  data: () => {
    return {
      pacienteObj: {
        nome: "",
        dataNascimento: "",
        telefone: "",
        endereco: "",
      },
      agendamentoObj: {
        data: "",
        horario: "",
        profissional: "",
        paciente: "",
        compareceu:false,
        faltou:false,
        id:0,
      },
      listaPacientes: [],
      listaAgendamento: [],
      listaMedicos:[],
    };
  },
  mounted() {
    if (localStorage.getItem("listaPacientes") != null) {
      this.listaPacientes = JSON.parse(localStorage.getItem("listaPacientes"));
    }
    if (localStorage.getItem("listaMedicos") != null) {
      this.listaMedicos = JSON.parse(localStorage.getItem("listaMedicos"));
    }
    if (localStorage.getItem("listaAgendamento") != null) {
      this.listaAgendamento = JSON.parse(localStorage.getItem("listaAgendamento"));
    }
  },

  methods: {
    cadastrar() {
      this.listaPacientes.push(this.pacienteObj);
      localStorage.setItem(
        "listaPacientes",
        JSON.stringify(this.listaPacientes)
      );
    },
    agendar() {
      this.agendamentoObj.id= Date.now()
      this.listaAgendamento.push(this.agendamentoObj);
      localStorage.setItem(
        "listaAgendamento",
        JSON.stringify(this.listaAgendamento)
      );
    },
  },
});
