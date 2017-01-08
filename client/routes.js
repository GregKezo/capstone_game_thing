import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import App from './containers/App';
import Admin from './components/Admin';
import AuthenticatedRoutes from './components/AuthenticatedRoutes';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import NoMatch from './components/NoMatch';
import Asteroids from './components/Asteroids';
import Tetris from './components/Tetris';
import Jeopardy from './components/Jeopardy';

const AdminAccess = UserAuthWrapper({
  authSelector: state => state.user,
  predicate: user => { return user.role === 'admin' },
  redirectAction: () => browserHistory.push("/"),
  wrapperDisplayName: 'UserIsAdmin'
})

const AdminRoutes = AdminAccess( (props) => props.children )

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="signup" component={SignUp} />
      <Route path="signin" component={SignIn} />
      <Route component={AuthenticatedRoutes}>
        <Route path="dashboard" component={Dashboard} />
        <Route path="asteroids" component={Asteroids} />
        <Route path="tetris" component={Tetris} />
        <Route path="jeopardy" component={Jeopardy} />
        <Route component={AdminRoutes}>
          <Route path="/admin" component={Admin} />
          {/* PROTECTED BY ADMIN ACCESS */}
        </Route>
      </Route>
      <Route path="*" status={404} component={NoMatch}/>
    </Route>
  </Route>
)
