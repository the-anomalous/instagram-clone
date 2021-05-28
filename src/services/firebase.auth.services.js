import Firebase from 'firebase/app';
import { auth } from '../lib/firebase'
import routes from '../constants/routes'

const facebookProvider = new Firebase.auth.FacebookAuthProvider();
Firebase.auth().useDeviceLanguage();
facebookProvider.setCustomParameters({
  display: 'popup',
  prompt: 'select_account'
})

export const signInWithFacebook = async () => {
  try {
    await auth.signInWithPopup(facebookProvider)
    console.log('success');
  } catch ({ message }) {
    console.log(message);
  }
}

export const signInWithEmail = async (email, password, setError, history) => {
  try {
    await auth.signInWithEmailAndPassword(email, password)
    history.push(routes.DASHBOARD)
  } catch ({ code }) {
    switch (code) {
      case "auth/user-not-found":
        setError("This Instagram account does not exist");
        break;
      case "auth/wrong-password":
        setError("Password does not match")
        break;
      default:
        setError('Sorry, something went wrong. Try again after some time')
        break;
    }
    setTimeout(() => setError(null), 2000);
  }
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