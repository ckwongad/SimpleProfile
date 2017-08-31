var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyB_uZamOcTPYrBFT_Jv5ylyzLIoc1F9J3E",
  authDomain: "simpleprofile-3251e.firebaseapp.com",
  databaseURL: "https://simpleprofile-3251e.firebaseio.com",
  projectId: "simpleprofile-3251e",
  storageBucket: "simpleprofile-3251e.appspot.com",
  messagingSenderId: "450197976969"
};
var app = firebase.initializeApp(config);

function writeUserData(userId, name, email) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email
  });
}

function readUserData(userId) {
  return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    console.log(snapshot.val())
  });
}

writeUserData(1, 'test', 'test@gmail.com')
readUserData(1, 'test', 'test@gmail.com')