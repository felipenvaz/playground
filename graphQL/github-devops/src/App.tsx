import * as React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Login from './pages/Login';
import Merge from './pages/Merge';
import routes from './constants/routes';


const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.merge} component={Merge} />
      <Route path={routes.login} component={Login} />
      <Redirect from={routes.home} to={routes.merge} />
    </Switch>
  </BrowserRouter>
);

export default App;
