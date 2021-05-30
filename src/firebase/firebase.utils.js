import firebase from 'firebase/app';
// * Things we're using from firebase
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyAR8-omD3kWYEj_zQUU7MSsg8Bt0XDytNE",
    authDomain: "crwn-shopper-db.firebaseapp.com",
    projectId: "crwn-shopper-db",
    storageBucket: "crwn-shopper-db.appspot.com",
    messagingSenderId: "542912004800",
    appId: "1:542912004800:web:1ce106324fa5386ec42325",
    measurementId: "G-86SH85LLXD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// * Google auth utility
const provider = new firebase.auth.GoogleAuthProvider();

auth.useDeviceLanguage();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;