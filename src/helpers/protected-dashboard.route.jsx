import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import routes from '../constants/routes'
import Loading from '../components/loading.component'

const ProtectedDashboardRoute = ({ pathName, user, children, loading, ...rest }) => {
  console.log(user);
  return (
  <Route
    {...rest}
    path={pathName}
    render={() => {
      if (loading) {
        return <Loading/>
      }

      if (user) {
        return children
      }

      if (!user) {
        return (
          <Redirect to={routes.LOGIN_PAGE} />
        )
      }
      return null
    }}
  />
)}

export default ProtectedDashboardRoute