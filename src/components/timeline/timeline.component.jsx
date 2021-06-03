import React from 'react'
import usePhotos from '../../hooks/use-photos.hook'

const Timeline = () => {
  const { photos } = usePhotos();
  console.log(photos);
  return (
    <div className=' col-start-1 col-end-3 p-2 '>
      I am Timeline
    </div>
  )
}

export default Timeline
