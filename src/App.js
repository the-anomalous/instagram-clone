import { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from './constants/routes'
import useAuthListener from './hooks/use-auth-listener.hook'
import UserContext from './contexts/user.context'

const LoginPage = lazy(() => import('./pages/login.page'))
const SignUpPage = lazy(() => import('./pages/sign-up.page'))
const PasswordReset = lazy(() => import('./pages/password-reset.page'))
const NotFound = lazy(() => import('./pages/not-found.page'))
const Dashboard = lazy(() => import('./pages/dashboard.page'))

const App = () => {
  const user = useAuthListener()
  
  return (
    <main>
      <UserContext.Provider value={user}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path={routes.LOGIN_PAGE} component={LoginPage}/>
            <Route exact path={routes.SIGN_UP} component={SignUpPage} />
            <Route exact path={routes.RESET_PASSWORD} component={PasswordReset} />
            <Route exact path={routes.NOT_FOUND} component={NotFound} />
            <Route exact path={routes.DASHBOARD} component={Dashboard} />
          </Switch>
        </Suspense>
      </UserContext.Provider>
    </main>
  );
}

export default App;