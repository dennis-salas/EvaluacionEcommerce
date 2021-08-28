import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCims5-1qqUPunmX1RtZNIOcIyq3g8OOp0",
    authDomain: "ecommerce-9ed31.firebaseapp.com",
    projectId: "ecommerce-9ed31",
    storageBucket: "ecommerce-9ed31.appspot.com",
    messagingSenderId: "509987551214",
    appId: "1:509987551214:web:0d8371b8e9a471bdd440ff"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const google = new firebase.auth.GoogleAuthProvider();

export {
    db,
    google,
    firebase
}