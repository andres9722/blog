import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Error404 from '../Pages/Error404'
import Blog from '../Pages/Blog'
import Home from '../Pages/Home'

const PrivateRoute = ({ component: Component, authed, rest }) => (
  <Route
    {...rest}
    render={props =>
      (authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/', state: { from: props.location } }} />)}
  />
)

const PublicRoute = ({ component: Component, authed, rest }) => (
  <Route
    {...rest}
    render={props =>
      (authed === false ? <Component {...props} /> : <Redirect to='/blog' />)}
  />
)

const Routes = ({ authed }) => {
  return (
    <Switch>
      <PublicRoute path='/' authed={authed} exact component={Home} />
      <PrivateRoute path='/blog' authed={authed} exact component={Blog} />
      <Route component={Error404} />
    </Switch>
  )
}

export default Routes
