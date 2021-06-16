import React, {useRef} from 'react'
import useUser from '../../../hooks/use-user.hook'
import Actions from './actions.component'
import PostHeader from './post-header.component'
import Image from './image.component'
import Footer from './footer.component'
import Comments from './comments.component'

const Post = ({ photo, modal }) => {
  const { username, profilePhoto, imageSrc, likes, docId, caption, comments, dateCreated } = photo
  const user = useUser()
  const inputRef = useRef()

  if (!user) return null
  return ( 
    <div className={`bg-white rounded border border-gray-primary sm:w-11/12 mobile-sm:w-full ${!modal && 'mb-10 w-full'}`}>
      <PostHeader username={username} profilePhoto={profilePhoto} />
      <Image src={imageSrc} modal={modal} />
      <Actions inputRef={inputRef} likes={likes} userId={user.uid} docId={docId} modal={modal} />
      <Footer caption={caption} username={username} />
      <Comments commentsArray={comments} dateCreated={dateCreated} inputRef={inputRef} username={username} loggedInUsername={user.username} profilePhoto={profilePhoto} caption={caption} docId={docId} modal={modal} />
    </div>
  )
}

export default Post
