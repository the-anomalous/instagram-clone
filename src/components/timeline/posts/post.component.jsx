import React, {useRef, useEffect, useState} from 'react'
import useUser from '../../../hooks/use-user.hook'
import Actions from './actions.component'
import PostHeader from './post-header.component'
import Image from './image.component'
import Footer from './footer.component'
import Comments from './comments.component'
import { getUserById } from '../../../services/firestore.services'

const Post = ({ photo, modal }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const { username, imageSrc, likes, docId, caption, userId, comments, dateCreated } = photo
  const loggedInUser = useUser()
  const inputRef = useRef()

  useEffect(() => {
    const getUserData = async () => {
      const user = await getUserById(userId)
      setCurrentUser(() => user)
    }
    getUserData()
  }, [userId])

  if (!loggedInUser || !currentUser) return null
  return ( 
    <div className={`bg-white rounded border border-gray-primary sm:w-full ${!modal && 'mb-10'}`}>
      <PostHeader username={username} profilePhotoURL={currentUser.profilePhotoURL} />
      <Image src={imageSrc} modal={modal} />
      <Actions inputRef={inputRef} likes={likes} userId={loggedInUser.uid} docId={docId} modal={modal} />
      <Footer caption={caption} username={username} />
      <Comments commentsArray={comments} dateCreated={dateCreated} inputRef={inputRef} username={username} loggedInUsername={loggedInUser.username} profilePhotoURL={currentUser.profilePhotoURL} caption={caption} docId={docId} modal={modal} />
    </div>
  )
}

export default Post