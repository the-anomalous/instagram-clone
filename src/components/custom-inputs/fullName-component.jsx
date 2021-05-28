import React from 'react'

const FullNameInput = ({fullNameValue, setFullName}) => {
  return (
    <div>
      <input
        type="text"
        className='input-login'
        placeholder='Full Name'
        name='fullName'
        value={fullNameValue}
        onChange={({target}) => setFullName(target.value)} />
    </div>
  )
}

export default FullNameInput
