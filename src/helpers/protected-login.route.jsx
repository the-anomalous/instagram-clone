import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import routes from '../constants/routes'
import Loading from '../components/loading.component'

const ProtectedLoginRoute = ({ pathName, user, children, loading, ...rest }) => {
  return (
  <Route
    {...rest}
    path={pathName}
    render={() => {
      if (loading) {
        return <Loading />
      }

      if (!user) {
        return children
      }

      if (user) {
        return (
          <Redirect to={routes.DASHBOARD} />
        )
      }
      return null
    }}
  />
)}

export default ProtectedLoginRoute