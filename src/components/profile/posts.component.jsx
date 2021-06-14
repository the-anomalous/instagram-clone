import React, {useContext} from 'react'
import ProfileContext from '../../contexts/profile.context'
import { ReactComponent as Grid } from '../../assets/icons/grid.svg'
import Photo from './photo.component'
import Skeleton from 'react-loading-skeleton';

const Posts = () => {
  const [{ photosCollection }] = useContext(ProfileContext)

  return (
    <section className='flex items-center flex-col mb-8'>
      <div className='border-t border-gray-primary w-full flex justify-center ' >
        <button className='flex flex-row p-4 border-t border-black-primary ' >
          <Grid className='w-4 mr-1 tracking-widest ' />
          <span className='font-semibold uppercase text-xs tracking-widest'>posts</span>
        </button>
      </div>

      <div className='grid grid-cols-3 gap-6 mt-3 mb-10 ' >
        {
          photosCollection?.length >= 1 ? (
            photosCollection.map(photo => (
              <Photo key={photo.id} photo={photo} />
            ))
          ): (
            <Skeleton height='320' count={1} />
          )
        }
      </div>
    </section>
  )
}

export default Posts