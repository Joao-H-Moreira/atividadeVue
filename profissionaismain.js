// const formAtendimentoPaciente = document.getElementById('form-atendimento-paciente');

// formAtendimentoPaciente.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const consulta_id = document.getElementById('consulta').value;
//   const avaliacao = document.getElementById('avaliacao').value;

//   // Registrar atendimento no banco de dados

//   // Limpar o formulário
//   document.getElementById('consulta').value = '';
//   document.getElementById('avaliacao').value = '';
// });

var profissionaisVue = new Vue({
  el: "#profissionaisVue",
  data: () => {
      return {
          atendimentoPaciente:{
            consulta, avaliacao,
          }
      }
  },
  methods: {
      test() {
          return this.id;
      }
  }
})