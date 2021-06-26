import React from 'react'
import usePhotos from '../../hooks/use-photos.hook'
import Post from './posts/post.component'
import AccountSkeleton from '../react-skeleton/account-skeleton';
import BoxSkeleton from '../react-skeleton/box-skeleton.component';
import { useHistory } from 'react-router-dom'
import routes from '../../constants/routes'

const Timeline = () => {
  const { photos, loading, error } = usePhotos();
  const history = useHistory()

  return (
    <div className=' col-start-1 col-end-3 p-2 flex flex-col items-center justify-center '>
      {error && history.push(routes.NOT_FOUND)}
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
            [...Array(4)].map((_, index) => (
            <div key={index}>
              <div className='rounded border border-gray-primary mb-10 bg-white sm:hidden ' >
                <AccountSkeleton count={1} circleHeight={32} circleWidth={32} rowHeight={8} rowWidth={150} className='flex flex-row items-center mb-1 mt-2 ml-2 '/>
                <BoxSkeleton width={500} height={600} />
              </div>
              <div className='rounded border border-gray-primary mb-10 bg-white lg:hidden md:hidden ' >
                <AccountSkeleton count={1} circleHeight={32} circleWidth={32} rowHeight={8} rowWidth={150} className='flex flex-row items-center mb-1 mt-2 ml-2 '/>
                <BoxSkeleton width={300} height={400} />
              </div>
            </div>
          ))
        )
      }
    </div>
  )
}

export default Timeline
