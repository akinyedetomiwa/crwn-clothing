import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBnro7kHGcRlLqulaN8gFPM2wIjjz87AgU',
  authDomain: 'crwn-db-d3dd3.firebaseapp.com',
  projectId: 'crwn-db-d3dd3',
  storageBucket: 'crwn-db-d3dd3.appspot.com',
  messagingSenderId: '107426700551',
  appId: '1:107426700551:web:7bf821d3aeccd0755bb9a2',
  measurementId: 'G-Y43WDH9REL',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
