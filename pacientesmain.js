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
  mounted() {
    if(localStorage.getItem("listaPacientes")!=null ){ 
      this.listaPacientes=JSON.parse(localStorage.getItem("listaPacientes"))}
   
  },
  methods: {
      cadastrar(){
       this.listaPacientes.push(this.pacienteObj)
       localStorage.setItem("listaPacientes",JSON.stringify (this.listaPacientes))
      }
      ,agendar(){
       this.listaAgendamento.push(this.agendamentoObj)
      }
      }
  }
)