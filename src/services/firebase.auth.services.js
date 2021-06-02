import Firebase from 'firebase/app';
import { auth } from '../lib/firebase'
import {createUserDocument} from './firestore.services'

const facebookProvider = new Firebase.auth.FacebookAuthProvider();
Firebase.auth().useDeviceLanguage();
facebookProvider.setCustomParameters({
  display: 'popup',
  prompt: 'select_account'
})

export const signInWithFacebook = async () => {
  let success;
  try {
    const { user } = await auth.signInWithPopup(facebookProvider)
    await createUserDocument(user, `user${Math.floor(Math.random() * 10 ** 10)}`)
    success = true
  } catch ({ message }) {
    console.log(message);
  }
  return success
}

export const signInWithEmail = async (email, password, setError) => {
  let success;
  let error;
  try {
    await auth.signInWithEmailAndPassword(email, password)
    success = true
  } catch ({ code }) {
    switch (code) {
      case "auth/user-not-found":
        setError("This Instagram account does not exist");
        break;
      case "auth/wrong-password":
        setError("Password does not match")
        error = 'wrong-password'
        break;
      default:
        setError('Sorry, something went wrong. Try again after some time')
        break;
    }
    setTimeout(() => setError(null), 2000);
  }
  return {success, error}
}

export const resetPassword = (email, setIsOpen, setError) => {
  auth.sendPasswordResetEmail(email)
    .then(() => {
      setIsOpen(true)
    })
    .catch(({ code }) => {
      setIsOpen(true)
      switch (code) {
        case "auth/user-not-found":
          setError('Cannot find the user, check your email once')
          break;
        default:
          setError('Something went wrong, try again later')
          break;
      }
    })
}

export const signUpWithEmail = async (email, password, fullName, username, setError) => {
  let success = false;
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    await user.updateProfile({ displayName: fullName })
    await createUserDocument(user, username)
    success = true
  } catch ({ code }) {
    switch (code) {
      case "auth/email-already-in-use":
        setError('Email already in use')
        break;
      default:
        setError('Something went wrong, try again later')
        break;
    }
    setTimeout(() => setError(''), 2000);
  }
  return success
}

export const signOut = async () => {
  try {
    await auth.signOut()
  } catch (error) {
    console.log(error);
  }
}