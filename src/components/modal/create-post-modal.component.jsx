import React, {useState} from 'react'
import { ReactComponent as Cross } from '../../assets/icons/cross.svg'
import CreatePostForm from '../forms/create-post-form.component'

const CreatePostModal = ({ setClose }) => {
  const [open, setOpen] = useState(true)

  return (
    <>
      <div className='fixed top-0 bottom-0 bg-black-faded left-0 right-0 z-30 ' />
      <article className={`fixed top-2/4 left-2/4 z-50 bg-white rounded w-md mobile-sm:w-sm mobile-sm:h-sm sm:h-sm md:h-sm no-scrollbar overflow-auto transition ease-out duration-200 animate-zoom-in ${open ? 'animate-zoom-in' : 'animate-zoom-out'}`} style={{ transform: 'translate(-50%,-50%)', minHeight: '250px' }} >
        <button
          onClick={() => {
            setOpen(false)
            setTimeout(() => setClose(), 300)
          }}
          className='btn-reset absolute top-3 right-2 z-50'
        ><Cross className='fill-white mobile-sm:fill-black w-6' /></button>
        <CreatePostForm/>
      </article>
    </>
  )
}

export default CreatePostModal
