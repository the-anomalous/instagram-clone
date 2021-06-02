import React from 'react'
import logo from '../../assets/logo.png'
import NavBar from './nav-bar.component'

const Header = () => {
  return (
    <article className='bg-white w-full h-14 mb-6 border-b flex justify-center border-gray-primary' >
      <section className='container max-w-5xl h-full flex justify-between z-50 '>
        <div className='h-full flex items-center justify-center my-1 mx-2'>
          <h1>
            <figure  >
              <img src={logo} width='103px' alt="instagram logo" />
            </figure>
          </h1>
        </div>

        <NavBar/>
      </section>
    </article>
  )
}

export default Header