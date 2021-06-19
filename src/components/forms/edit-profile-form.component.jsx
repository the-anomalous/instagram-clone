import React, { useState } from 'react'
import UploadPhotoInput from '../custom-inputs/upload-photo-input.component'
import UsernameInput from '../custom-inputs/username-input.component'
import FullNameInput from '../custom-inputs/fullName-component'
import BioInput from '../custom-inputs/bio-input.component'
import SubmitButton from '../buttons/submit-btn.component'
import { doesUsernameExists, updateProfile } from '../../services/firestore.services';
import EditProfileModal from '../modal/edit-profile-modal.component'

const EditProfileForm = ({user}) => {
  const [photo, setPhoto] = useState(null)
  const [username, setUsername] = useState(user.username)
  const [fullName, setFullName] = useState(user.displayName)
  const [bio, setBio] = useState(user.bio)
  const [updating, setUpdating] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState('')
  
  const onSubmit = async event => {
    event.preventDefault()
    const usernameExists = await doesUsernameExists(username, setError)
    if (!fullName || !username) {
      if (!fullName) {
        setError('Full Name cannot be empty')   
      } else {
        setError('Username cannot be empty')   
      }
      setTimeout(() => setError(''), 2000)
    } else {
      if (usernameExists && username !== user.username) {
        setError('Username already exists')
        setTimeout(() => setError(''), 2000)
      }
      else {
        setUpdating(true)
        setIsOpen(true)
        await updateProfile(photo, username, fullName, bio, user.uid)
        setUpdating(false)
      }
    }
  }

  return (
    <div className='mt-2 mb-6' >
      <form className='flex justify-center items-center flex-col' method='post' onSubmit={onSubmit} >
        <UploadPhotoInput
          setPhoto={setPhoto}
        />
        {error && <p className='text-red-primary text-center mt-3 '>{error}</p> }
        <FullNameInput
          fullNameValue={fullName}
          setFullName={setFullName}
          className='mt-7 text-sm'
        />
        <UsernameInput
          usernameValue={username}
          setUsername={setUsername}
          className='text-sm'
        />
        <BioInput
          bioValue={bio}
          setBio={setBio}
          className='text-sm'
        />
        <SubmitButton className='my-3 w-65 bg-blue-light text-white px-2 py-5px rounded btn-reset mt-7' isValid>Update Profile</SubmitButton>
      </form>
      {isOpen && <EditProfileModal updating={updating} />}
    </div>
  )
}

export default EditProfileForm
