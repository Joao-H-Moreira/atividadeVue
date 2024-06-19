var medicosVue = new Vue({
    el: "#medicosVue",
    data: () => {
        return {
          medicoObj:{
             nome:"", CRM:""
          }
        
          ,listaMedicos:[]
        }
    },
    mounted() {
      if(localStorage.getItem("listaMedicos")!=null ){ 
        this.listaMedicos=JSON.parse(localStorage.getItem("listaMedicos"))}
      },  
    methods: {
        cadastrar(){
          
         this.listaMedicos.push(this.listaMedicos)
         localStorage.setItem("listaMedicos",JSON.stringify (this.listaMedicos))
        }

        }
    }
  )