import React from 'react'
import Header from '../components/header/header.component'

const NotFound = () => {
  return (
    <>
      <Header/>
      <section className='flex justify-center items-center h-screen ' >
        <figure className='flex flex-col justify-around items-center '>
          <img src="https://i.imgur.com/QIxIKBH.png" width='400px'  alt="not found ghost" />
          <figcaption className=' font-semibold text-2xl mt-8 ' >
            This Page is a Ghost
          </figcaption>
        </figure>
      </section>
    </>
  )
}

export default NotFound
