import Routes from './constants/routes'

import { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const LoginPage = lazy(() => import('./pages/login-page/login-page.component'))

const App = () => {
  return (
    <Switch>
      <Suspense fallback={() => <div>Loading...</div>}>
        <Route exact path={Routes.LOGIN_PAGE} component={LoginPage}/>
      </Suspense>
    </Switch>
  );
}

export default App;