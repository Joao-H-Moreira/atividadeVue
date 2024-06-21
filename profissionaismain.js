

var profissionaisVue = new Vue({
  el: "#profissionaisVue",
  data: () => {
      return {
          atendimentoPacienteObj:{
            consulta, avaliacao,
          }
          ,atendimentoPaciente:[]
      }
  },
  mounted() {
    if(localStorage.getItem("atendimentoPaciente")!=null ){ 
      this.atendimentoPaciente=JSON.parse(localStorage.getItem("atendimentoPaciente"))}
  },
  methods: {
    registrar(){
      this.atendimentoPaciente.push(this.atendimentoPacienteObj)
      localStorage.setItem("atendimentoPaciente",JSON.stringify (this.atendimentoPaciente))
     }
  }
})