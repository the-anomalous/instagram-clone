import React from 'react'

const SubmitButton = ({isValid, children}) => {
  return (
    <button
      type="submit"
      disabled={!isValid && true}
      className='my-3 w-65 bg-blue-light text-white px-2 py-5px rounded font-bold btn-reset disabled:opacity-60 '>
      {children}</button>
  )
}

export default SubmitButton
