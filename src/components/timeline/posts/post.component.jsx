import React, {useContext, useRef} from 'react'
import UserAuthContext from '../../../contexts/user-auth.context'
import Actions from './actions.component'
import Header from './header.component'
import Image from './image.component'
import Footer from './footer.component'
import Comments from './comments.component'
import AddComments from './add-comment.component'

const Post = ({ photo }) => {
  const { username, profilePhoto, imageSrc, userLikedPhoto, likes, docId, caption, comments, dateCreated } = photo
  const { uid } = useContext(UserAuthContext)
  const inputRef = useRef()
  
  return (
    <div className='bg-white mb-10 rounded border border-gray-primary'>
      <Header username={username} profilePhoto={profilePhoto} />
      <Image src={imageSrc} />
      <Actions userLikedPhoto={userLikedPhoto} inputRef={inputRef} likes={likes} userId={uid} docId={docId} />
      <Footer caption={caption} username={username} />
      <Comments comments={comments} dateCreated={dateCreated} inputRef={inputRef} username={username} profilePhoto={profilePhoto} caption={caption} docId={docId} />
      <AddComments inputRef={inputRef} docId={docId} username={username} />
    </div>
  )
}

export default Post
