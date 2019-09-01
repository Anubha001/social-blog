
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var Config = {
    apiKey: "AIzaSyCruJZEMNx5GyzpUb1DQQFtGCvXg3isMy8",
    authDomain: "anubhaplan.firebaseapp.com",
    databaseURL: "https://anubhaplan.firebaseio.com",
    projectId: "anubhaplan",
    storageBucket: "anubhaplan.appspot.com",
    messagingSenderId: "197100887563"
  };
  firebase.initializeApp(Config);
  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase;



  