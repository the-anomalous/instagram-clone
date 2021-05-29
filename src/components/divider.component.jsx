import React from 'react'

const Divider = () => {
  return (
    <div className='flex flex-row justify-center items-center my-2'>
      <hr className='border-gray-primary w-24' />
      <span className=' inline-block mx-6 text-gray-base font-semibold'>OR</span>
      <hr className='border-gray-primary w-24' />
    </div>
  )
}

export default Divider