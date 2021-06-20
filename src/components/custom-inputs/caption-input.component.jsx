import React from 'react'

const CaptionInput = ({ captionValue, setCaption, className }) => {
  return (
    <div className={`${className}`} >
      <textarea
        type="text"
        className='outline-none border border-gray-primary bg-gray-background rounded-sm p-2 w-full border-b-0 relative resize-none'
        style={{top:'6px'}}
        placeholder='Caption'
        value={captionValue}
        rows='3'
        onChange={({ target }) => setCaption(target.value)} />
    </div>
  )
}

export default CaptionInput