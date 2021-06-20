import React from 'react'

const BioInput = ({ bioValue, setBio, className }) => {
  return (
    <div className={`${className}`} >
      <textarea
        type="text"
        className='input-login'
        placeholder='Bio'
        value={bioValue}
        rows='3'
        onChange={({ target }) => setBio(target.value)} />
    </div>
  )
}

export default BioInput