import React from 'react'

const Spinner = () => {
  return (
    <div>
      <div className=' w-12 h-12 animate-spin rounded-full' style={{ border: '3px solid rgba(195, 195, 195, 0.6)', borderTopColor: '#636767' }} />
    </div>
  )
}

export default Spinner
