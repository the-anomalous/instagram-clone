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

export const getSuggestedUsers = async loggedInUser => {
  try {
    const snapshot = await firestore.collection('users').limit('10').get()
    const suggestedUsers = snapshot
      .docs
      .map(doc => ({ ...doc.data()}))
      .filter((user, index) => index <= 5 && user.uid !== loggedInUser.uid && !loggedInUser.following.includes(user.uid))
      return suggestedUsers
  } catch (error) {
    console.log(error);
  }
}

export const increaseFollowing = async (loggedInUserId, updateFollowingUserId) => {
  try {
    const docRef = firestore.doc(`users/${loggedInUserId}`)
    docRef.update({
      following: FieldValue.arrayUnion(updateFollowingUserId)
    })
    firestore.doc(`users/${updateFollowingUserId}`).update({
      followers: FieldValue.arrayUnion(loggedInUserId)
    })
    const { following, followers } = (await docRef.get()).data()
    return {following, followers}
  } catch (error) {
    console.log(error);
  }
}

export const decreaseFollowing = async (loggedInUserId, updateFollowingUserId) => {
  try {
    const docRef = firestore.doc(`users/${loggedInUserId}`)
    await docRef.update({
      following: FieldValue.arrayRemove(updateFollowingUserId)
    })
    await firestore.doc(`users/${updateFollowingUserId}`).update({
      followers: FieldValue.arrayRemove(loggedInUserId)
    })
    const { following, followers } = (await docRef.get()).data()
    return {following, followers}
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
    
    if (!followedUsersPhotos.empty) {
      const photosArray = followedUsersPhotos.docs.map(photo => ({ ...photo.data(), docId:photo.id }))
      
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
    }

    return {photos: []}
  } catch ({message}) {
    console.log(message);
  }
}

export const updateLikes = async (userId, liked, docId) => {
  const docRef = firestore.doc(`photos/${docId}`)

  try {
    docRef.update({
      likes: liked ? FieldValue.arrayRemove(userId) : FieldValue.arrayUnion(userId)
    })
  } catch ({message}) {
    console.log(message);
  }
}

export const addComments = async (comment, displayName, docId) => {
  const docRef = firestore.doc(`photos/${docId}`)
  
  try {
    docRef.update({
      comments: FieldValue.arrayUnion({comment, displayName})
    })
  } catch ({message}) {
    console.log(message);
  }
}

export const getProfilePhotoById = async id => {
  const user = await getUserById(id)
  return user.profilePhoto
}

export const getUserByUsername = async username => {
  try {
    const snapshot = await firestore
      .collection('users')
      .where('username', '==', username)
      .get()
    
    const userData = snapshot.docs.map(user => ({...user.data()}))
    
    return userData
  } catch ({message}) {
    console.log(message);
  }
}

export const getPhotosById = async userId => {
  try {
    if (userId) {
      const snapshot = await firestore
        .collection('photos')
        .where('userId', '==', userId)
        .get()
      
      const photos = snapshot.docs.map(photo => ({ id:photo.id,  ...photo.data()}))
      return photos
    }
    return null
  } catch ({message}) {
    console.log(message);
  }
}

export const getUsernameAndProfile = async (userArray) => {
  try {
    const snapshot = await firestore
    .collection('users')
    .where('uid', 'in', userArray)
    .get()
    
    const data = snapshot.docs.map(doc => {
      const { username, photoURL, uid } = doc.data()
      return {username, photoURL, docId:doc.id, userId:uid}
    })
    return data
  } catch ({message}) {
    console.log(message);
  }
}