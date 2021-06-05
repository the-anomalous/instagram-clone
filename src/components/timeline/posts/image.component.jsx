import React from 'react'

const Image = ({src}) => {
  return (
    <figure>
      <img src={src} alt="post" style={{width:'614px', height:'614px'}} />
    </figure>
  )
}

export default Image
