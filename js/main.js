 var config = 
 {
    apiKey: "AIzaSyCWlus6F27Ub3m_oFFKMEOM9SZ-cWmeCOs",
    authDomain: "persianas-dc9e4.firebaseapp.com",
    databaseURL: "https://persianas-dc9e4.firebaseio.com",
    projectId: "persianas-dc9e4",
    storageBucket: "persianas-dc9e4.appspot.com",
    messagingSenderId: "612527863660"
 };

  firebase.initializeApp(config);
  var db = firebase.database();
  var casa = 'persianas-dc9e4';




  estado.on("value", function(snapshot){
    var valor = snapshot.val(); 
    console.log(valor); 

    
  var foco1 = firebase.database().ref(casa).child('estado');
  
    if(valor != 'on'){
        $('#estado').prop('checked', false);
    }else{
        $('#estado').prop('checked', true);
    }
          
});