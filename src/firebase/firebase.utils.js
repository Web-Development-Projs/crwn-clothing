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

export const createUserProfileDocument = async (userAuth=null, additionalData=null) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const docSnapshot = await userRef.get(); // * document data

    if(!docSnapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        }
        catch(err) {
            console.error(err.message);
        }
    }

    return userRef;
 }
 

export default firebase;