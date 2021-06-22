import React from 'react'
import usePhotos from '../../hooks/use-photos.hook'
import Post from './posts/post.component'
import AccountSkeleton from '../react-skeleton/account-skeleton';
import BoxSkeleton from '../react-skeleton/box-skeleton.component';

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
            [...Array(4)].map((_, index) =>
              <div className='rounded border border-gray-primary mb-10 bg-white' >
                <AccountSkeleton count={1} circleHeight={32} circleWidth={32} rowHeight={8} rowWidth={150} className='flex flex-row items-center mb-1 mt-2 ml-2 '/>
                <BoxSkeleton width={500} height={600} />
              </div>
            )
        )
      }
    </div>
  )
}

export default Timeline
