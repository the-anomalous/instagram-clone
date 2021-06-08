import React, { useState } from 'react'
import { formatDistance } from 'date-fns'
import CommentsModal from '../../modal/comments-modal.components'
import { Link } from 'react-router-dom'

const Comments = ({ comments, dateCreated, username, profilePhoto, caption, docId }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className='relative' >
      <div className='text-sm ml-3 w-11/12 mt-2 ' >
        {
          comments.length <= 2 ? (
            comments.map((comment, index) => (
              <div key={index * 20} style={{ paddingBottom: '2px' }} >
                <Link to={`/profile/${comment.displayName}`} >
                  <span className='font-semibold  mr-1 ' >{comment.displayName}</span>
                </Link>
                <span>{comment.comment}</span>
              </div>
            ))
          ) : (
            <div>
              <span className='text-gray-base cursor-pointer' onClick={() => setIsOpen(true)}>{`View all ${comments.length} comments`}</span>
                <div style={{ paddingBottom: '2px' }} >
                <Link to={`/profile/${comments[comments.length - 1].displayName}`} >
                  <span className='font-semibold  mr-1 ' >{comments[comments.length - 1].displayName}</span>
                </Link>
                <span>{comments[comments.length - 1].comment}</span>
              </div>
                <div style={{ paddingBottom: '2px' }} >
                <Link to={`/profile/${comments[comments.length - 2].displayName}`}>
                  <span className='font-semibold  mr-1' >{comments[comments.length - 2].displayName}</span>
                </Link>
                <span>{comments[comments.length - 2].comment}</span>
              </div>
            </div>
          )
        }
      </div>

      <time className=' text-gray-base uppercase ml-3 mb-2 inline-block ' style={{ fontSize: '10px' }} >{formatDistance(dateCreated, new Date())} ago</time>
      { isOpen && <CommentsModal setClose={() => setIsOpen(false)} username={username} profilePhoto={profilePhoto} caption={caption} docId={docId} comments={comments} />}
    </div>
  )
}

export default Comments
