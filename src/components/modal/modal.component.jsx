import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import { ReactComponent as Success } from '../../assets/icons/success.svg'
import { ReactComponent as Failure } from '../../assets/icons/danger.svg'

const Modal = ({ children, isOpen, close, success, resend, setEmail, setError }) => {
  const [open, setOpen] = useState(true)
  
  return ReactDOM.createPortal(
    <>
      <div className='fixed top-0 bottom-0 left-0 right-0 bg-black-faded z-10 p-1 ' />
      <div style={{ transform: 'translate(-50%,-50%)' }} className={`rounded-md bg-white w-72 h-40 absolute top-2/4 left-2/4 z-50 flex flex-col justify-items-center justify-around items-center ${open ? 'animate-zoom-in' : 'animate-zoom-out'}`}>
        {
          success ? (
            <Success className=' w-11 mt-1 text-success '/>
          ): (
            <Failure className=' w-11 mt-1 text-failure '/>
          )
        }
        <p className=' mx-4 text-center text-gray-base ' >{children}</p>
        
        {
          success ? (
            <div className='flex flex-row items-center justify-around w-full mb-1' >
              <button
                onClick={() => {
                  setTimeout(() => close(), 300)
                  setEmail('')
                  setError(null)
                }}
                className=' font-semibold btn-reset '
              >Close</button>
              
              <button
                onClick={() => {
                  resend()
                  setOpen(false)
                  setTimeout(() => close(), 300)
                  setError(null)
                }}
                className=' font-semibold btn-reset text-blue-light '
              >Resend</button>
            </div>
          ) : (
            <button
                onClick={() => {
                  close()
                  setEmail('')
                  setError(null)
                }}
              className=' font-semibold btn-reset' 
            >
              Try Again    
            </button>
          )
        }
      </div>
    </>,
    document.getElementById('modal')
  )
}

export default Modal