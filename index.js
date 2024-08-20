
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCUbBJlSVxul-V4t42D95TLdq5jGSW95yg",
    authDomain: "mts22-8adac.firebaseapp.com",
    databaseURL: "https://mts22-8adac-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mts22-8adac",
    storageBucket: "mts22-8adac.appspot.com",
    messagingSenderId: "625634894660",
    appId: "1:625634894660:web:87641e46fcbea303f6ad11",
    measurementId: "G-QZT4VY9YHP"
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
