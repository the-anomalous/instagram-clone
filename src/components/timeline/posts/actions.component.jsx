import React, {useState, useContext} from 'react'
import { ReactComponent as Comment } from '../../../assets/icons/comment.svg'
import { ReactComponent as Like } from '../../../assets/icons/like.svg'
import { updateLikes } from '../../../services/firestore.services'
import UpdatePhoto from '../../../contexts/update-photo.context'

const Actions = ({ likes, userId, docId, inputRef, modal }) => {
  const [liked, setLiked] = useState(likes?.includes(userId))
  const [totalLikes, setTotalLikes] = useState(likes.length)
  const updatePhoto = useContext(UpdatePhoto)
  

  const onClick = async () => {
    setLiked((liked) => !liked)
    liked ? setTotalLikes(totalLikes => totalLikes - 1) : setTotalLikes(totalLikes => totalLikes + 1)
    const updatedLikes = await updateLikes(userId, liked, docId)
    modal && updatePhoto.updatePhotoLikes(updatedLikes);
  }

  return (
    <div className='mt-1 mx-4' >
      <div>
        <button
          type='button'
          className='btn-reset'
          onClick={onClick}
        >
          <Like className={`w-8 h-8 m-2 mb-0 -ml-2 ${liked && 'fill-red'}`} stroke={liked ? '#ed4956' : 'currentColor'}/>
        </button>
        <button
          type='button'
          onClick={() => inputRef.current.focus()}
          className='btn-reset'
        >
          <Comment className=' w-8 h-8 m-2 mb-0' />
        </button>
      </div>
      
      <div className='-ml-1' >
        <span className='font-semibold' >
          {
            totalLikes > 0 ? (
              totalLikes === 1 ? '1 like' : `${totalLikes} likes`
            ) : null
          }
        </span>
      </div>
    </div>
  )
}

export default Actions
