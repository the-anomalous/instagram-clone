import { storage } from '../lib/firebase'
import imageCompression from 'browser-image-compression';

const profilePhotoOptions = {
  maxSizeMB: 0.2,
  maxWidthOrHeight: 250,
  useWebWorker: true
}

const PhotoOptions = {
  maxSizeMB: 0.5,
  maxWidthOrHeight: 1280,
  useWebWorker: true
}

export const getCompressedProfilePhoto = async (imageFile) => {
  const compressedImgFile = await imageCompression(imageFile, profilePhotoOptions)
  return compressedImgFile
}
 
export const addProfilePhoto = async (imageFile, userId) => {
  try {
    if (typeof imageFile === 'object') {
      const imageRef = storage.ref(`profilePhotos/${userId}`)
      await imageRef.put(imageFile)
      return imageRef.getDownloadURL()
    }
    return null
  } catch ({message}) {
    console.log(message);
  }
}

export const getCompressedImage = async (imageFile) => {
  try {
    const compressedImgFile = await imageCompression(imageFile, PhotoOptions)
    return compressedImgFile
  } catch ({ message }) {
    console.log(message);
  }
}

export const addPhotoToStorage = async imageFile => {
  const imageId = `${Date.now()}${Math.floor(Math.random() * 10 ** 6)}`

  try {
    const imageRef = storage.ref(`photos/${imageId}`)
    await imageRef.put(imageFile)
    return imageRef.getDownloadURL()
  } catch ({message}) {
    console.log(message);
  }
} 