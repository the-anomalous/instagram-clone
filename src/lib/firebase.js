import Firebase from 'firebase/app';
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyAUGshdI6x6OVsDR8Fw5z9a5SrfOYCdYMw",
  authDomain: "instagram-clone-4614b.firebaseapp.com",
  projectId: "instagram-clone-4614b",
  storageBucket: "instagram-clone-4614b.appspot.com",
  messagingSenderId: "435288795551",
  appId: "1:435288795551:web:879e6d90c14dc7377fb5aa",
  measurementId: "G-339SNCQT8W"
};

const firebase = Firebase.initializeApp(config);
Firebase.analytics();

export const auth = Firebase.auth()
export const firestore = Firebase.firestore()
export const { FieldValue } = firestore 

 
export default firebase