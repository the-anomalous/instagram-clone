import React from 'react'

const Image = ({src}) => {
  return (
    <figure className=' w-lg h-lg sm:w-full sm:h-full mobile-sm:w-full mobile-sm:h-full ' >
      <img src={src} alt="post" className='w-full h-full' />
    </figure>
  )
}

export default Image
