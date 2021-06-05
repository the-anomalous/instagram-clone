import React, {useContext} from 'react'
import Header from '../components/header/header.component'
import Loading from '../components/loading.component'
import Sidebar from '../components/sidebar/sidebar.component'
import Timeline from '../components/timeline/timeline.component'
import UserAuthContext from '../contexts/user-auth.context'

const Dashboard = () => {
  const user = useContext(UserAuthContext)

  return (
    <div className='bg-gray-background' >
      <Header />
      {
        user ? (
          <section className='container grid grid-cols-3 gap-4 max-w-5xl mx-auto' >
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