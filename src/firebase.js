import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCnJ4ZvYTcatpI1oJT7Tmlj78OqzalVl3k",
    authDomain: "slack-clone-d41b8.firebaseapp.com",
    projectId: "slack-clone-d41b8",
    storageBucket: "slack-clone-d41b8.appspot.com",
    messagingSenderId: "583700113190",
    appId: "1:583700113190:web:81ad9a881a85668f8183e7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GithubAuthProvider();

export{
    auth,
    db,
    provider
};