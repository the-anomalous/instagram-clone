import React, {useContext} from 'react'
import ProfileContext from '../../contexts/profile.context'
import { ReactComponent as Grid } from '../../assets/icons/grid.svg'
import Photo from './photo.component'

const PostGrid = () => {
  const [{ photosCollection, profile }] = useContext(ProfileContext)

  return (
    <section className='flex flex-col mb-8'>
      <div className='border-t border-gray-primary w-full flex justify-center ' >
        <button className='flex flex-row p-4 border-t border-black-primary focus:outline-none' >
          <Grid className='w-4 mr-1 tracking-widest' />
          <span className='font-semibold uppercase text-xs tracking-widest'>posts</span>
        </button>
      </div>

      <div className='grid grid-cols-3 gap-6 mt-3 mb-10 sm:gap-1 sm:mt-2 ' >
        {
          photosCollection && (
            photosCollection.length >= 1 ? (
              photosCollection.map(photo => (
                <Photo key={photo.docId} photo={{ ...photo, username: profile.username }} />
              ))
            ) : (
              <h3 className='col-start-1 col-end-4 font-semibold text-xl' >No Post Yet</h3>
            )
          )
        }
      </div>
    </section>
  )
}

export default PostGrid