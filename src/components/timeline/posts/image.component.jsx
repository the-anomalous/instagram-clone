import React from 'react'

const Image = ({src, modal}) => {
  return (
    <figure
      className={`sm:w-full sm:h-full mobile-sm:w-full mobile-sm:h-full ${modal ? 'w-full h-full' : 'w-lg h-lg '} `}
      style={modal && { minHeight: '430px'}}
    >
      <img src={src} alt="post" className='w-full h-full' />
    </figure>
  )
}

export default Image
