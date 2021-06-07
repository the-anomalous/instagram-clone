import React from 'react'

const SubmitButton = ({isValid, children, className}) => {
  return (
    <button
      type="submit"
      disabled={!isValid && true}
      style={{top:'10px'}}
      className={`font-bold disabled:opacity-60 btn-reset ${className}`} >
      {children}</button>
  )
}

export default SubmitButton
