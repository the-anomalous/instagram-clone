import routes from './constants/routes'

import { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const LoginPage = lazy(() => import('./pages/login.page'))
const SignUpPage = lazy(() => import('./pages/sign-up.page'))
const PasswordReset = lazy(() => import('./pages/password-reset.page'))

const App = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={routes.LOGIN_PAGE} component={LoginPage}/>
          <Route exact path={routes.SIGN_UP} component={SignUpPage} />
          <Route exact path={routes.RESET_PASSWORD} component={PasswordReset} />
        </Switch>
      </Suspense>
    </main>
  );
}

export default App;