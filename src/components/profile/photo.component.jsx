import React, {useState} from 'react'
import { ReactComponent as Like } from '../../assets/icons/like.svg'
import { ReactComponent as Comment } from '../../assets/icons/comment.svg'
import PostModal from '../../components/modal/post-modal.component'
import UpdatePhoto from '../../contexts/update-photo.context'

const Photo = ({ photo }) => {
  const [photoData, setPhotoData] = useState(photo)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='relative group cursor-pointer' >
      <figure className='h-72 w-72' >
        <img src={photoData.imageSrc} alt={photoData.caption} className='w-full h-full' />
      </figure>

      <div
        className='absolute bg-black-faded top-0 left-0 right-0 bottom-0 hidden group-hover:flex items-center justify-center flex-row'
        onClick={() => setIsOpen(true)}
      >
        <div className='flex flex-row mr-4' >
          <Like className='w-6 h-6 stroke-white fill-white mr-1' />
          <span className='text-white' >{photoData.likes.length}</span>
        </div>
        <div className='flex flex-row ml-4'>
          <Comment className='w-6 h-6 stroke-white fill-white mr-1' />
          <span className='text-white'>{photoData.comments.length}</span>
        </div>
      </div>
      {
        isOpen && (
          <UpdatePhoto.Provider
            value={{
              updatePhotoLikes: likes => setPhotoData(() => ({ ...photoData, likes })),
              updatePhotoComments: comments => setPhotoData(() => ({ ...photoData, comments}))
            }} >
            <PostModal setClose={() => setIsOpen(false)} photo={photoData} />
          </UpdatePhoto.Provider>
        )}
    </div>
  )
}

export default Photo