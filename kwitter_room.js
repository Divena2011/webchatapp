
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDk-DXfW89Y43PH7cEMzhm3ImY74dyodeQ",
      authDomain: "kwitter-b5035.firebaseapp.com",
      databaseURL: "https://kwitter-b5035-default-rtdb.firebaseio.com",
      projectId: "kwitter-b5035",
      storageBucket: "kwitter-b5035.appspot.com",
      messagingSenderId: "227915680857",
      appId: "1:227915680857:web:31f9d9eb166cfbd06c7548"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
