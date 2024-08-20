
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "xxxxxxxxx",
    authDomain: "xxxxxxx",
    databaseURL: "xxxxxx",
    projectId: "xxx",
    storageBucket: "xxxxx",
    messagingSenderId: "6xxxxxx",
    appId: "xxxxxx",
    measurementId: "xxxxxx"
  };
   // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var numberCV;
  function Ready(){
    numberCV=document.getElementById('idParticipant').value;
    console.log(numberCV);
  }
  function show(shown, hidden) {
    
    numberCV=document.getElementById('idParticipant').value;
    if(numberCV>0 && numberCV<100)
      {Ready();
        InsertData();
      document.getElementById(shown).style.display='block';
      document.getElementById(hidden).style.display='none';
      return false;
      }
    else alert("Hoțomane nu ai introdus un număr valid");
  }

   function InsertData(){
    firebase.database().ref('participant'+numberCV).once('value',
    function(snapshot){
        document.getElementById('namecv').value=snapshot.val().name;
        }
        );

    }
