import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import { ReactComponent as Cross } from '../../assets/icons/cross.svg'
import { getUsernameAndProfile } from '../../services/firestore.services'
import Skeleton from 'react-loading-skeleton';
import Profile from '../../assets/profile.jpg'
import { Link } from 'react-router-dom'

const ProfileModal = ({ setClose, following, followers, loggedInUser }) => {
  const [open, setOpen] = useState(true)
  const [usernameAndPhoto, setUsernameAndPhoto] = useState(null)

  useEffect(() => {
    const getData = async () => {
      if (following) {
        const data = await getUsernameAndProfile(following)
        setUsernameAndPhoto(data)
      } else {
        const data = await getUsernameAndProfile(followers)
        setUsernameAndPhoto(data)
      }
    }
    getData()
  }, [following, followers])

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
                <div key={docId} className='grid grid-cols-5 self-center' style={{ marginBottom:'14px'}} >
                  <figure className='w-full flex justify-center col-start-1 col-end-2 content-center' >
                    <img src={photoURL || Profile} alt={`${username} profile`} className='rounded-full w-8 h-8' />
                  </figure>
                  <span className='text-sm font-semibold col-start-2 col-end-5 flex items-center' >
                    <Link to={`/profile/${username}`}>
                      {username}
                    </Link>
                  </span>
                  {
                    loggedInUser.uid !== userId && !loggedInUser.following.includes(userId) && (
                      <button className='col-start-5 col-end-6 text-sm text-blue-light font-semibold' >
                        Follow
                      </button>
                    )
                  }
                </div>
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
