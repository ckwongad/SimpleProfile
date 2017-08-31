var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyB_uZamOcTPYrBFT_Jv5ylyzLIoc1F9J3E",
  authDomain: "simpleprofile-3251e.firebaseapp.com",
  databaseURL: "https://simpleprofile-3251e.firebaseio.com",
  projectId: "simpleprofile-3251e",
  storageBucket: "simpleprofile-3251e.appspot.com",
  messagingSenderId: "450197976969"
};

export default firebase.initializeApp(config);