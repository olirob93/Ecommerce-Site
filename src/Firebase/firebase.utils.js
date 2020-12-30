import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB-W4iHwyb8NRd_FvzN-oOr1HH8dLXI-RU",
    authDomain: "ecom-db-5df90.firebaseapp.com",
    projectId: "ecom-db-5df90",
    storageBucket: "ecom-db-5df90.appspot.com",
    messagingSenderId: "613548131902",
    appId: "1:613548131902:web:013e7724af279a0a16f36f",
    measurementId: "G-CP9ZT39NQY"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;