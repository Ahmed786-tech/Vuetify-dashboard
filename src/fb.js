import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA6st_xLrnmKz8-6sQLzEj7M3avpmS8Ah8",
    authDomain: "todo-ninja-4aeed.firebaseapp.com",
    databaseURL: "https://todo-ninja-4aeed.firebaseio.com",
    projectId: "todo-ninja-4aeed",
    storageBucket: "todo-ninja-4aeed.appspot.com",
    messagingSenderId: "428973432951",
    appId: "1:428973432951:web:4c2765bd3404c405ed6672",
    measurementId: "G-YM44B281DL"
  };
  // Initialize Firebase
         firebase.initializeApp(firebaseConfig);
       
  
const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

export default db;