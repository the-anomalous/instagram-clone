import React from 'react'
import { signInWithFacebook } from '../../services/firebase.auth.services'
import { ReactComponent as FacebookLogo } from '../../assets/icons/facebook.svg';
import { useHistory } from 'react-router-dom'
import routes from '../../constants/routes'

const FacebookLoginButton = ({ className }) => {
  const history = useHistory()
  
  const onClick = async () => {
    const success = await signInWithFacebook()
    success && history.push(routes.DASHBOARD)
  }

  return (
    <button
      className={`outline-none my-3 btn-reset ${className}`}
      onClick={onClick}
    >
      <div className='flex flex-row font-semibold' >
        <FacebookLogo className='w-4 mx-2' />
            Log in with Facebook
          </div>
    </button>
  )
}

export default FacebookLoginButton
