import React from 'react'

const UploadPhotoInput = ({ setPhoto, className, children }) => {
  return (
    <div className='text-center' >
      <label htmlFor="upload-photo" >
        <span
          className={`font-semibold cursor-pointer ${className} `}
        >{children}</span>
      </label>
      <input
        type="file"
        name="upload-photo"
        id="upload-photo"
        accept='.jpg, .jpeg, .png'
        className='hidden'
        onChange={(event) => setPhoto(event.target.files[0]) }
      />
    </div>
  )
}

export default UploadPhotoInput