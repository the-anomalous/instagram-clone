import { storage } from '../lib/firebase'
import imageCompression from 'browser-image-compression';

const profilePhotoOptions = {
  maxSizeMB: 0.2,
  maxWidthOrHeight: 280,
  useWebWorker: true
}
 
export const addProfilePhoto = async (imageFile, userId) => {
  try {
    if (imageFile) {
      const compressedImgFile = await imageCompression(imageFile, profilePhotoOptions)
      const imageRef = storage.ref(`profilePhotos/${userId}`)
      await imageRef.put(compressedImgFile)
      const downloadURL = imageRef.getDownloadURL()
      return downloadURL
    }
    return null
  } catch ({message}) {
    console.log(message);
  }
}