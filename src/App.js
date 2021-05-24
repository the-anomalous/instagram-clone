import Routes from './constants/routes'

import { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const LoginPage = lazy(() => import('./pages/login.page'))
const SignUpPage = lazy(() => import('./pages/sign-up.page'))

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path={Routes.LOGIN_PAGE} component={LoginPage}/>
        <Route exact path={Routes.SIGN_UP} component={SignUpPage} />
      </Switch>
    </Suspense>
  );
}

export default App;