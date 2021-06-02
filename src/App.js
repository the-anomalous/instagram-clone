import { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from './constants/routes'
import UserAuthContext from './contexts/user-auth.context'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './lib/firebase'
import isLoadingContext from './contexts/is-loading.context'
import Loading from './components/loading.component'

const LoginPage = lazy(() => import('./pages/login.page'))
const SignUpPage = lazy(() => import('./pages/sign-up.page'))
const PasswordReset = lazy(() => import('./pages/password-reset.page'))
const NotFound = lazy(() => import('./pages/not-found.page'))
const Dashboard = lazy(() => import('./pages/dashboard.page'))

const App = () => {
  const [user, loading] = useAuthState(auth);
  
  return (
    <main>
      <isLoadingContext.Provider value={loading}>
        <UserAuthContext.Provider value={user}>
          <Suspense fallback={<Loading/>}>
            <Switch>
              <Route exact path={routes.LOGIN_PAGE} component={LoginPage}/>
              <Route exact path={routes.SIGN_UP} component={SignUpPage} />
              <Route exact path={routes.RESET_PASSWORD} component={PasswordReset} />
              <Route exact path={routes.NOT_FOUND} component={NotFound} />
              <Route exact path={routes.DASHBOARD} component={Dashboard} />
            </Switch>
          </Suspense>
        </UserAuthContext.Provider>
      </isLoadingContext.Provider>
    </main>
  );
}

export default App;