import React from 'react'

const Image = ({src}) => {
  return (
    <figure style={{ width: '614px', height: '614px' }} >
      <img src={src} alt="post" className='w-full h-full' />
    </figure>
  )
}

export default Image
