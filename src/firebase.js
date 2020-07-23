
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyALuz-ScGWaTIJmvu-KtfBOu13wmVN_L9Q",
    authDomain: "todo-react-b488f.firebaseapp.com",
    databaseURL: "https://todo-react-b488f.firebaseio.com",
    projectId: "todo-react-b488f",
    storageBucket: "todo-react-b488f.appspot.com",
    messagingSenderId: "215206315916",
    appId: "1:215206315916:web:ecd685b679e7c9651db8a9",
    measurementId: "G-78NDQ18SS5"
});
const  db = firebaseApp.firestore();

export default db;