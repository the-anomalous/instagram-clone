import React, {useContext, useEffect} from 'react'
import Header from '../components/header/header.component'
import Loading from '../components/loading.component'
import Sidebar from '../components/sidebar/sidebar.component'
import Timeline from '../components/timeline/timeline.component'
import UserAuthContext from '../contexts/user-auth.context'

const Dashboard = () => {
  const user = useContext(UserAuthContext)

  useEffect(() => document.title = 'Instagram' , [])

  return (
    <div className='bg-gray-background' >
      <Header />
      {
        user ? (
          <section className='container grid grid-cols-3 gap-4 max-w-5xl mx-auto relative top-20 sm:grid-cols-1 mobile-sm:grid-cols-1 md:grid-cols-1 ' >
            <Timeline />
            <Sidebar/>
          </section>
        ) : (
          <Loading/>
        )
      }
    </div>
  )
}

export default Dashboard