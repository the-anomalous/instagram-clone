import React from 'react'
import { ReactComponent as Cross } from '../../assets/icons/cross.svg'
import Profile from '../../assets/profile.jpg'
import { getProfilePhotoById } from '../../services/firestore.services'
import AddComment from '../timeline/posts/add-comment.component'

const CommentsModal = ({ setClose, username, profilePhoto, caption, docId, comments }) => {
  return (
    <>
      <div className='fixed top-0 bottom-0 bg-black-faded left-0 right-0 z-30 ' />
      <article className='absolute top-2/4 left-2/4 z-50 bg-white rounded border border-gray-primary' style={{ transform: 'translate(0,-50%)', height: '580px', width: '350px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} >
        <button
          onClick={setClose}
          className='btn-reset absolute -top-7 -right-7 '
        ><Cross /></button>

        <header className='p-4 border-b border-gray-primary flex flex-row flex-wrap fixed top-0 right-0 left-0 ' >
          <figure className='w-9 h-10' >
            <img src={profilePhoto ?? Profile} alt={`${username} profile avatar`} className='rounded-full' width='34px' height='34px' />
          </figure>
          <div className='flex flex-col text-sm ml-2' >
            <span className='font-semibold' >{username}</span>
            <span>{caption}</span>
          </div>
        </header>

        <section className='fixed bottom-11 overflow-auto ' style={{top:'72px'}} >
          <ul className='mt-3' >
            {
              comments.map(({ comment, displayName}, index) => (
                <li key={index * 100} style={{ paddingBottom: '2px' }} className='text-sm mb-3 mt-1 mx-2 flex flex-row' >
                  <figure>
                    <img src={profilePhoto ?? Profile} alt={`${username} profile avatar`} className='rounded-full w-8 h-8 '/>
                  </figure>
                  <div className='mx-2 mt-1 w-4/5 ' >
                    <span className='font-semibold mr-1 ' >{displayName}</span>
                    <span>{comment}</span>
                  </div>
                </li>
              ))
            }
          </ul>
        </section>
        <footer className='fixed bottom-0 right-0 left-0' >
          <AddComment docId={docId} username={username} />
        </footer>
      </article>
    </>
  )
}

export default CommentsModal