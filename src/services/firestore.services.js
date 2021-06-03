import { firestore, FieldValue } from '../lib/firebase'

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
  const snapshot = await docRef.get()

  if (!snapshot.exists) {
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

export const getUserById = async uid => {
  try {
    const docRef = firestore.doc(`users/${uid}`)
    const userData = await docRef.get()
    return {...userData.data() }
  } catch (error) {
    console.log(error);
  }
}

export const getSuggestedUsers = async userAuth => {
  try {
    const snapshot = await firestore.collection('users').limit('10').get()
    const suggestedUsers = snapshot
      .docs
      .map(doc => ({ ...doc.data()}))
      .filter((user, index) => index <= 5 && user.uid !== userAuth.uid && !user.followers.includes(userAuth.uid))
      return suggestedUsers
  } catch (error) {
    console.log(error);
  }
}

export const increaseFollowers = async (loggedInUserId, updateFollowersUserId) => {
  try {
    firestore.doc(`users/${updateFollowersUserId}`).update({
      followers: FieldValue.arrayUnion(loggedInUserId)
    })
  } catch (error) {
    console.log(error);
  }
}

export const increaseFollowing = async (loggedInUserId, updateFollowingUserId) => {
  try {
    firestore.doc(`users/${loggedInUserId}`).update({
      following: FieldValue.arrayUnion(updateFollowingUserId)
    })
  } catch (error) {
    console.log(error);
  }
}

export const getPhotos = async (following, uid) => {
  try {
    const followedUsersPhotos = await firestore
      .collection('photos')
      .where('userId', 'in', following)
      .get()
    const photosArray = followedUsersPhotos.docs.map(photo => ({ ...photo.data() }))
    
    const userPhotoData = await Promise.all(
      photosArray.map(async photo => {
        let userLikedPhoto = false;
        if (photo.likes.includes(uid)) {
          userLikedPhoto = true
        }
        
        const snapshot = await firestore.doc(`users/${photo.userId}`).get()
        const { username } = snapshot.data()
        
        return {...photo, username, userLikedPhoto}
      })
      )
      return {photos: userPhotoData}
  } catch ({message}) {
    console.log(message);
  }
}