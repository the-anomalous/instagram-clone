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