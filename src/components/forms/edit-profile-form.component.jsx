import React, { useState } from 'react'
import UploadPhotoInput from '../custom-inputs/upload-photo-input.component'
import UsernameInput from '../custom-inputs/username-input.component'
import FullNameInput from '../custom-inputs/fullName-component'
import BioInput from '../custom-inputs/bio-input.component'
import SubmitButton from '../buttons/submit-btn.component'
import { updateProfile } from '../../services/firestore.services';

const EditProfileForm = ({user}) => {
  const [photo, setPhoto] = useState(user.profilePhotoURL)
  const [username, setUsername] = useState(user.username)
  const [fullName, setFullName] = useState(user.displayName)
  const [bio, setBio] = useState(user.bio)
  
  const onSubmit = async event => {
    event.preventDefault()
    await updateProfile(photo, username, fullName, bio, user.uid)
    console.log('success');
  }

  return (
    <div className='mt-2 mb-6' >
      <form className='flex justify-center items-center flex-col' method='post' onSubmit={onSubmit} >
        <UploadPhotoInput
          setPhoto={setPhoto}
        />
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
    </div>
  )
}

export default EditProfileForm
