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
    methods: {
        cadastrar(){
            let medico= this.medicoObj
         this.listaMedicos.push(medico)
         localStorage.setItem("listaMedicos",JSON.stringify (this.listaMedicos))
        }

        }
    }
  )