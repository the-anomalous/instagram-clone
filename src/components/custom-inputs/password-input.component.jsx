import React, { useState } from 'react'

const PasswordInput = ({ passwordValue, setPassword, className }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={`flex flex-row items-center relative ${className}`}>
      <input
        type={!showPassword ? "password" : undefined}
        className='input-login'
        name='password'
        id="password"
        value={passwordValue}
        placeholder='Password'
        onChange={({ target }) => setPassword(target.value)} />

      <div className={`absolute right-0 pr-1 pl-1 mr-1 h-9 flex items-center bg-gray-background ${!passwordValue.length > 0 && 'hidden'}`}>
        <button
          type='button'
          onClick={() => setShowPassword(true)}
          className={`capitalize text-xs font-semibold btn-reset ${showPassword && 'hidden'} `}>
          show</button>

        <button
          type='button'
          className={`capitalize text-xs font-semibold btn-reset ${!showPassword && 'hidden'}`}
          onClick={() => setShowPassword(false)}>
          hide</button>
      </div>
    </div>
  )
}

export default PasswordInput