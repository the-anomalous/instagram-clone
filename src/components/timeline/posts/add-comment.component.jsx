import React, {useState, useContext} from 'react'
import { addComments } from '../../../services/firestore.services'
import SubmitButton from '../../buttons/submit-btn.component'
import UpdatePhoto from '../../../contexts/update-photo.context'

const AddComment = ({ inputRef, docId, loggedInUsername, updateComments, modal }) => {
  const [comment, setComment] = useState('')
  const isValid = comment.length > 0
  const updatePhoto = useContext(UpdatePhoto)
  
  const onSubmit = async event => {
    event.preventDefault()
    updateComments({ comment, displayName:loggedInUsername})
    const updatedComments = await addComments(comment, loggedInUsername, docId)
    modal && updatePhoto.updatePhotoComments(updatedComments)
    setComment('')
  }

  return (
    <form method='POST' onSubmit={onSubmit} className='mt-1' >
      <div className='relative'>
        <input
          type="text"
          ref={inputRef}
          value={comment}
          placeholder='Add a comment...'
          onChange={({ target }) => setComment(target.value)}
          className='border-t border-gray-primary w-full outline-none pl-4 pr-14 py-3 text-sm'
        />
        <SubmitButton className='pr-2 text-blue-light absolute h-full right-2' isValid={isValid}>Post</SubmitButton>
      </div>
    </form>
  )
}

export default AddComment
