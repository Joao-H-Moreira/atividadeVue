// const formCadastroPaciente = document.getElementById('form-cadastro-paciente');
// const formAgendamentoConsulta = document.getElementById('form-agendamento-consulta');
// formAgendamentoConsulta.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const paciente_id = document.getElementById('paciente').value;
//   const profissional_id = document.getElementById('profissional').value;
//   const data = document.getElementById('data').value;
//   const horario = document.getElementById('horario').value;

//   // Validar agendamento

//   // Agendar consulta no banco de dados

//   // Limpar o formulário
//   document.getElementById('paciente').value = '';
//   document.getElementById('profissional').value = '';
//   document.getElementById('data').value = '';
//   document.getElementById('horario').value = '';
// });

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