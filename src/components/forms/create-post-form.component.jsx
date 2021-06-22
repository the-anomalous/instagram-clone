import React, { useState, useEffect, useRef } from 'react'
import UploadPhotoInput from '../custom-inputs/upload-photo-input.component'
import CaptionInput from '../custom-inputs/caption-input.component'
import SubmitButton from '../buttons/submit-btn.component'
import { getCompressedImage } from '../../services/storage.services'
import { addPost } from '../../services/firestore.services'
import Spinner from '../spinner.component'
import { useHistory } from 'react-router-dom'
import routes from '../../constants/routes'

const CreatePostForm = ({ setOpenFalse, setClose, user}) => {
  const [photo, setPhoto] = useState(null)
  const [compressedPhotoUrl, setCompressedPhotoUrl] = useState(null)
  const [caption, setCaption] = useState('')
  const [loading, setLoading] = useState(false)
  const compressedPhotoRef = useRef(null)
  const history = useHistory()

  useEffect(() => {
    const getPhoto = async () => {
      setLoading(true)
      const compressedImage = await getCompressedImage(photo)
      compressedPhotoRef.current = compressedImage
      setCompressedPhotoUrl(URL.createObjectURL(compressedImage))
      setLoading(false)
    }
    if (photo) {
      getPhoto()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photo])

  const onSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    await addPost(compressedPhotoRef.current, caption, user.uid)
    setLoading(false)
    history.push(routes.DASHBOARD)
  }

  return (
    <>
      {
        loading && (
          <div className='fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center' style={{ backgroundColor:'#0000000d'}}>
            <Spinner/>
          </div>
        )
      }
      <form method="post" style={{ minHeight: '250px' }} className='relative' onSubmit={onSubmit} >
        <div className='flex justify-center items-center' style={{ minHeight: '120px' }} >
          {
            compressedPhotoUrl ? (
              <figure className='m-2 rounded' >
                <img src={compressedPhotoUrl} onLoad={() => URL.revokeObjectURL(compressedPhotoUrl)} alt="" className='w-full h-full' />
              </figure>
            ) : (
              <UploadPhotoInput setPhoto={setPhoto} >
                Choose a photo
              </UploadPhotoInput>
            )
          }
        </div>

        <div className='w-full' >
          {
            compressedPhotoUrl && (
              <div className='float-left ml-2' >
                <UploadPhotoInput setPhoto={setPhoto} >
                  Change photo
                </UploadPhotoInput>
              </div>
            )    
          }
          <div className='float-right' >
            <button
              type='button'
              className=' font-semibold focus:outline-none bg-blue-light text-white px-2 py-5px rounded upper mr-2 text-sm'
              onClick={() => {
                setOpenFalse()
                setTimeout(() => setClose(), 300)
              }}>Cancel</button>
            
            <SubmitButton
              isValid={Boolean(photo)}
              className='bg-blue-light text-white px-2 py-5px rounded mr-2 text-sm'
            >Post</SubmitButton>
          </div>
        </div>

        <CaptionInput captionValue={caption} setCaption={setCaption} />
      </form>
    </>
  )
}

export default CreatePostForm
