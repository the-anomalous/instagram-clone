import React from 'react'
import { ReactComponent as Instagram } from '../assets/icons/instagram-loading.svg'

const Loading = () => {
  return (
    <div className='h-screen flex items-center justify-center absolute top-0 bottom-0 left-0 right-0 '>
      <figure>
        <Instagram className='w-14 h-14' />
      </figure>
    </div>
  )
}

export default Loading
