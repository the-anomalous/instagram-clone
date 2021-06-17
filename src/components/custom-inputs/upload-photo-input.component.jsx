import React from 'react'

const UploadPhotoInput = ({ setPhoto, className }) => {
  return (
    <div className={`${className}`} >
      <label htmlFor="upload-photo" >
        <span
          className='font-semibold text-blue-light cursor-pointer btn-reset'
        >Change Profile Photo</span>
      </label>
      <input
        type="image"
        alt='update profile'
        name="upload-photo"
        id="upload-photo"
        className='hidden'
        onChange={(event) => setPhoto(event.target.files[0]) }
      />
    </div>
  )
}

export default UploadPhotoInput