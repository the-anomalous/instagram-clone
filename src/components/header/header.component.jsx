import React from 'react'
import logo from '../../assets/logo.png'
import NavBar from './nav-bar.component'
import { Link } from 'react-router-dom'
import routes from '../../constants/routes'

const Header = () => {
  return (
    <article className='bg-white w-full h-14 mb-6 border-b flex justify-center border-gray-primary fixed z-10' >
      <section className='container max-w-5xl h-full flex justify-between z-10 '>
        <div className='h-full flex items-center justify-center my-1 mx-2'>
          <h1>
            <Link to={routes.DASHBOARD} >
              <figure>
                <img src={logo} width='103px' alt="instagram logo" />
              </figure>
            </Link>
          </h1>
        </div>

        <NavBar/>
      </section>
    </article>
  )
}

export default Header