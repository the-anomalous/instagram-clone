import React from 'react'

const UsernameInput = ({ usernameValue, setUsername }) => {
  return (
    <div>
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