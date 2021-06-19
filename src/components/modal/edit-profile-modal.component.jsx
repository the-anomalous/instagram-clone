import React from 'react'
import ReactDOM from 'react-dom';
import { ReactComponent as Success } from '../../assets/icons/success.svg'
import { useHistory } from 'react-router-dom'
import routes from '../../constants/routes'

const EditProfileModal = ({ updating }) => {
  const history = useHistory()
  if (!updating) {
    setTimeout(() => history.push(routes.DASHBOARD), 1000) 
  }
  return ReactDOM.createPortal(
    <>
      <div className='fixed top-0 bottom-0 left-0 right-0 bg-black-faded z-10 p-1 ' />
      <div style={{ transform: 'translate(-50%,-50%)' }}
        className={`rounded-md bg-white w-65 h-36 absolute top-2/4 left-2/4 z-50 flex flex-col justify-around items-center animate-zoom-in`}>
        <div className='w-full flex flex-col justify-center items-center'>
          {
            updating ? (
              <div className=' w-12 h-12 animate-spin rounded-full' style={{ border: '3px solid rgba(195, 195, 195, 0.6)', borderTopColor: '#636767' }} />
            ) : (
              <div onLoad={() => setTimeout(() => history.push(routes.DASHBOARD), 1000) } >
                <Success className=' w-11 mt-1 text-success '/>
              </div>
            )
          }
          <span className='font-semibold mt-4' >{updating ? 'Updating...' : 'Updated' }</span>
        </div>
      </div>
    </>,
    document.getElementById('modal')
  )
}

export default EditProfileModal
