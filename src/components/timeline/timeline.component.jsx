import React from 'react'
import usePhotos from '../../hooks/use-photos.hook'
import Post from './posts/post.component'
import Skeleton from 'react-loading-skeleton';

const Timeline = () => {
  const { photos, loading } = usePhotos();
  
  return (
    <div className=' col-start-1 col-end-3 p-2 flex flex-col items-center justify-center '>
      {
        !loading ? (
          photos.length > 0 ? (
            photos.map((photo) => (
              <Post key={photo.docId} photo={photo} />
            ))
          ) : (
            <span className='font-semibold text-xl' >Follow your friends to see their posts</span> 
          )
        ) : (
            [...Array(4)].map((_, index) => <Skeleton count={1} key={index * 10} height='500px' width='600px' className='mb-10' />)
        )
      }
    </div>
  )
}

export default Timeline
