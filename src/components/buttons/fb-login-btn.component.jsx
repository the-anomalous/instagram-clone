import React from 'react'
import { signInWithFacebook } from '../../services/firebase.auth.services'
import { ReactComponent as FacebookLogo } from '../../assets/icons/facebook.svg';

const FacebookLoginButton = ({ className }) => {
  return (
    <button
      className={`outline-none my-3 btn-reset ${className}`}
      onClick={signInWithFacebook}
    >
      <div className='flex flex-row font-semibold' >
        <FacebookLogo className='w-4 mx-2' />
            Log in with Facebook
          </div>
    </button>
  )
}

export default FacebookLoginButton
