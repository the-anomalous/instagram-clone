import React from 'react'
import Header from '../components/header/header.component'
import useUser from '../hooks/use-user.hook'
import Profile from '../assets/profile.jpg'
import EditProfileForm from '../components/forms/edit-profile-form.component'

const EditProfilePage = () => {
  const user = useUser()

  return (
    <div className='bg-gray-background h-screen '>
      <Header />
      <section className='relative top-20 flex justify-center items-center' >
        {
          user && (
            <div className='bg-white border border-gray-primary rounded-sm w-96 flex justify-center items-center flex-col ' >
              <figure className='w-28 h-28 mt-6 mb-2'>
                <img src={user.profilePhotoURL || Profile} alt={`${user.username} profile`} className='w-full h-full rounded-full' />
              </figure>

              <EditProfileForm user={user}/>
            </div>
          )
        }
      </section>
    </div>
  )
}

export default EditProfilePage