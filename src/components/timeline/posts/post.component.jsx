import React, {useContext} from 'react'
import Actions from './actions.component'
import Header from './header.component'
import Image from './image.component'
import UserAuthContext from '../../../contexts/user-auth.context'

const Post = ({ photo }) => {
  const { username, profilePhoto, imageSrc, userLikedPhoto, likes, docId } = photo
  const { uid } = useContext(UserAuthContext)
  
  return (
    <div className='bg-white mb-10 rounded'>
      <Header username={username} profilePhoto={profilePhoto} />
      <Image src={imageSrc} />
      <Actions userLikedPhoto={userLikedPhoto} likes={likes} userId={uid} docId={docId} />
    </div>
  )
}

export default Post
