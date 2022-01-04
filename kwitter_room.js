
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyB0InWpiz53Do93554LDHdFRRu8l4DqPF8",
      authDomain: "classtest-b25a1.firebaseapp.com",
      projectId: "classtest-b25a1",
      storageBucket: "classtest-b25a1.appspot.com",
      messagingSenderId: "978831941691",
      appId: "1:978831941691:web:9922f5c503c988627b3c1e"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
