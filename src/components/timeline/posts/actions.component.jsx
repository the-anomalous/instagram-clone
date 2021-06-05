import React, {useState} from 'react'
import { ReactComponent as Comment } from '../../../assets/icons/comment.svg'
import { ReactComponent as Like } from '../../../assets/icons/like.svg'
import { updateLikes } from '../../../services/firestore.services'

const Actions = ({ userLikedPhoto, likes, userId, docId}) => {
  const [liked, setLiked] = useState(userLikedPhoto)
  const [totalLikes, setTotalLikes] = useState(likes.length)

  const onClick = () => {
    setLiked((liked) => !liked)
    liked ? setTotalLikes(totalLikes => totalLikes - 1) : setTotalLikes(totalLikes => totalLikes + 1)
    console.log(totalLikes);
    updateLikes(userId, liked, docId)
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
        <button type='button' className='btn-reset'>
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
