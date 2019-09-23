var waitingApp = new Vue({

  el:'#patientWaitingApp',
  data:{


    patients:[]
  },
  methods: {
    fetchPatients()
    {
      fetch("Json.php")
      .then(response => response.json())  //return json
      .then(json => {waitingApp.patients = json}); //#no return value


      //Means the same as this
      //fetch('http://randomuser.me.api/')
      //.then(function(response) {return response.json()})
      //.then(function(json) {waitingApp.people = json});
    }
  },
  created()
  {
    this.fetchPatients();
  }
});
