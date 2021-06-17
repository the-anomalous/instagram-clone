import React from 'react'

const UsernameInput = ({ usernameValue, setUsername, className }) => {
  return (
    <div className={`${className}`} >
      <input
        type="text"
        className='input-login'
        placeholder='Username'
        name='username'
        value={usernameValue}
        onChange={({target}) => setUsername(target.value)} />    
    </div>
  )
}

export default UsernameInput