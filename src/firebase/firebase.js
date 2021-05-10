import firebase from 'firebase/app';
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyA6H033lx8EkpbOwzpjRH_FGGAa60sXhhE",
    authDomain: "utn-parcial.firebaseapp.com",
    databaseURL: "https://utn-parcial.firebaseio.com",
    projectId: "utn-parcial",
    storageBucket: "utn-parcial.appspot.com",
    messagingSenderId: "916622488349",
    appId: "1:916622488349:web:958d1b1412390324c3a7f4",
    measurementId: "G-C68SRXG8LZ"
}


firebase.initializeApp(firebaseConfig)

export default firebase;
