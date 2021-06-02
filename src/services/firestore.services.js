import { firestore } from '../lib/firebase'

export const doesUsernameExists = async (username, setError) => {
  try {
    var snapShot = await firestore.collection('users').where("username", "==", username).get()
  } catch (error) {
    setError('Something went wrong, try again later')
  }
  const usernames = snapShot.docs.map(doc => doc.data().username)
  return Boolean(usernames.length)
}  

export const createUserDocument = async (userAuth, username) => {
  const {uid, displayName, email} = userAuth
  const docRef = firestore.doc(`users/${uid}`)
  
  if (!docRef.exists) {
    try {
      await docRef.set({
        createdAt: Date.now(),
        followers: [],
        following: [],
        username,
        displayName,
        email,
        uid
      })
      
    } catch (error) {
      console.log(error);
    }
  }
}

export const getUserById = async (uid) => {
  const docRef = firestore.doc(`users/${uid}`)
  const userData = await docRef.get()
  return {...userData.data(), ...userData.id }
}

export const getSuggestedUsers = async (userAuth) => {
  const snapshot = await firestore.collection('users').limit('10').get()
  const suggestedUsers = snapshot
    .docs
    .map(doc => ({ ...doc.data()}))
    .filter((user, index) => index <= 5 && user.uid !== userAuth.uid && !user.following.includes(userAuth.uid))
  
  return suggestedUsers
}