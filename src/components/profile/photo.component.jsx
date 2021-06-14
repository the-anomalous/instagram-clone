import React from 'react'
import { ReactComponent as Like } from '../../assets/icons/like.svg'
import { ReactComponent as Comment } from '../../assets/icons/comment.svg'

const Photo = ({ photo }) => {
  const { caption, imageSrc, likes, comments } = photo

  return (
    <div className='relative group cursor-pointer' >
      <figure className='h-72 w-72' >
        <img src={imageSrc} alt={caption} className='w-full h-full' />
      </figure>

      <div className='absolute bg-black-faded top-0 left-0 right-0 bottom-0 hidden group-hover:flex items-center justify-center flex-row' >
        <div className='flex flex-row mr-4' >
          <Like className='w-6 h-6 stroke-white fill-white mr-1' />
          <span className='text-white' >{likes.length}</span>
        </div>
        <div className='flex flex-row ml-4'>
          <Comment className='w-6 h-6 stroke-white fill-white mr-1' />
          <span className='text-white'>{comments.length}</span>
        </div>
      </div>
    </div>
  )
}

export default Photo