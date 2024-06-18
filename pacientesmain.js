var pacientesVue = new Vue({
  el: "#pacientesVue",
  data: () => {
      return {
        pacienteObj:{
           nome:"", dataNascimento:"", telefone:"", endereco:""
        }
        ,agendamentoObj:{
          data:"", horario:"", profissional:"", paciente:""
        }  
        ,listaPacientes:[]
        ,listaAgendamento:[]
      }
  },
  methods: {
      cadastrar(){
       this.listaPacientes.push(this.pacienteObj)
      }
      ,agendar(){
       this.listaAgendamento.push(this.agendamentoObj)
      }
      }
  }
)
