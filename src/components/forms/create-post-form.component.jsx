import React, { useState } from 'react'
import UploadPhotoInput from '../custom-inputs/upload-photo-input.component'
import CaptionInput from '../custom-inputs/caption-input.component'

const CreatePostForm = () => {
  const [photo, setPhoto] = useState(null)
  const [caption, setCaption] = useState('')

  console.log(photo);
  return (
    <form method="post" style={{minHeight: '250px'}} className='relative' >
      <UploadPhotoInput setPhoto={setPhoto} >
        Choose a photo
      </UploadPhotoInput>
      <CaptionInput className='fixed right-0 left-0 bottom-0' captionValue={caption} setCaption={setCaption} />
    </form>
  )
}

export default CreatePostForm
