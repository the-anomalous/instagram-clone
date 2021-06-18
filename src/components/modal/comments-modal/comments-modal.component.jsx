import React, {useState} from 'react'
import { ReactComponent as Cross } from '../../../assets/icons/cross.svg'
import Profile from '../../../assets/profile.jpg'
import AddComment from '../../timeline/posts/add-comment.component'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Comment from './comment.component'

const CommentsModal = ({ setClose, username, profilePhotoURL, docId, comments }) => {
  const [open, setOpen] = useState(true)
  return ReactDOM.createPortal(
    <>
      <div className='fixed top-0 bottom-0 bg-black-faded left-0 right-0 z-30 ' />
      <article className={`fixed top-2/4 left-2/4 z-50 bg-white rounded border border-gray-primary w-md h-md mobile-sm:w-sm mobile-sm:h-sm sm:h-sm md:h-sm transition ease-out duration-200 animate-zoom-in ${open ? 'animate-zoom-in' : 'animate-zoom-out'}`} style={{ transform: 'translate(-50%,-50%)'}} >
        <button
          onClick={() => {
            setOpen(false)
            setTimeout(() => setClose(), 300)
          }}
          className='btn-reset absolute -top-7 -right-7 mobile-sm:top-1 mobile-sm:right-2 z-50'
        ><Cross className='fill-white mobile-sm:fill-black w-6' /></button>

        <header className='p-4 border-b border-gray-primary flex flex-row flex-wrap fixed top-0 right-0 left-0 ' >
          <figure className='w-9 h-8 ' >
            <img src={profilePhotoURL ?? Profile} alt={`${username} profile avatar`} className='rounded-full w-9 h-9' />
          </figure> 
          <div className='flex flex-col text-sm ml-2 w-4/5  justify-center' >
            <Link to={`/profile/${username}`}>
              <span className='font-semibold' >{username}</span>
            </Link>
          </div>
        </header>

        <section className='fixed bottom-11 overflow-auto ' style={{top:'72px'}} >
          <ul className='mt-3' >
            {
              comments.map(({ comment, displayName}, index) => (
                <Comment key={index * 100} comment={comment} displayName={displayName} />
              ))
            }
          </ul>
        </section>
        <footer className='fixed bottom-0 right-0 left-0' >
          <AddComment docId={docId} username={username} />
        </footer>
      </article>
    </>,
  document.getElementById('modal')
  )
}

export default CommentsModal