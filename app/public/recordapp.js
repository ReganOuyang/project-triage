var recordApp = new Vue({

  el:'#patientRecordApp',
  data:{


    patients:[],
    formPatient:{}
  },
  methods: {
    fetchPatients()
    {
      fetch("Json.php")
      .then(response => response.json())  //return json
      .then(json => {recordApp.patients = json}) //#no return value


      //Means the same as this
      //fetch('http://randomuser.me.api/')
      //.then(function(response) {return response.json()})
      //.then(function(json) {waitingApp.people = json});
    },
    handleCreateRecord(event){
      this.patients.push(this.formPatient);
      this.handleReset();

    },

    handleReset(){
      this.formPatient={
        firstName:'',
        lastName:'',
        dob:'',
        SexAtBirth:'',
      }


    }
  },

  created(){
    this.handleReset();
    this.fetchPatients();
  }

});
