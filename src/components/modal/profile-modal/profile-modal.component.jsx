import React, {useState, useEffect, useContext} from 'react'
import ReactDOM from 'react-dom';
import { ReactComponent as Cross } from '../../../assets/icons/cross.svg'
import { getUsernameAndProfile } from '../../../services/firestore.services'
import Skeleton from 'react-loading-skeleton';
import User from './user.component'
import ProfileContext from '../../../contexts/profile.context'

const ProfileModal = ({ setClose, following, followers, loggedInUser, setLoggedInUser }) => {
  const [open, setOpen] = useState(true)
  const [usernameAndPhoto, setUsernameAndPhoto] = useState(null)
  const [{ profile }] = useContext(ProfileContext)

  useEffect(() => {
    const getData = async () => {
      if (following) {
        const data = await getUsernameAndProfile(profile.following)
        setUsernameAndPhoto(data)
      } else {
        const data = await getUsernameAndProfile(profile.followers)
        setUsernameAndPhoto(data)
      }
    }
    getData()
  }, [following, followers, profile.following, profile.followers])

  return ReactDOM.createPortal(
    <>
      <div className='fixed top-0 bottom-0 bg-black-faded left-0 right-0 z-30 ' />
      <article className={`fixed top-2/4 left-2/4 z-50 bg-white rounded border border-gray-primary w-md h-md mobile-sm:w-sm mobile-sm:h-sm sm:h-sm md:h-sm transition ease-out duration-200 ${open ? 'animate-zoom-in' : 'animate-zoom-out'}`} style={{ transform: 'translate(-50%,-50%)' }} >
        <button
          onClick={() => {
            setOpen(false)
            setTimeout(() => setClose(), 300)
          }}
          className='btn-reset absolute -top-7 -right-7 mobile-sm:top-1 mobile-sm:right-2 z-50'
        ><Cross className='fill-white mobile-sm:fill-black w-6' /></button>

        <header className='border-b border-gray-primary fixed top-0 right-0 left-0 p-10px text-center text-lg font-semibold' >
          {following && 'Following'}
          {followers && 'Followers'}
        </header>

        <section className='fixed overflow-auto right-0 left-0 bottom-0 p-4' style={{top:'49px'}} >
          {
            usernameAndPhoto && loggedInUser ? (
              usernameAndPhoto.map(({ username, photoURL, docId, userId}) => (
                <User key={docId} isFollowing={following} setLoggedInUser={setLoggedInUser} username={username} photoUrl={photoURL} userId={userId} loggedInUser={loggedInUser} />
              ))
            ): (
              <Skeleton count={1}  />
            )
          }
        </section>
      </article>
    </>,
    document.getElementById('modal')
  )
}

export default ProfileModal