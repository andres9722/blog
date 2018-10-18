import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Error404 from '../Pages/Error404'
import Blog from '../Pages/Blog'
import Home from '../Pages/Home'
import PostDetail from '../Pages/PostDetail'

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
      (authed === false ? <Component {...props} /> : <Redirect to='/posts' />)}
  />
)

const Routes = ({ authed }) => {
  return (
    <Fragment>
      <Switch>
        <PublicRoute path='/' authed={authed} exact component={Home} />
        <PrivateRoute path='/posts' authed={authed} exact component={Blog} />
        <Route path='/post/:id' authed={authed} exact component={PostDetail} />
        <Route component={Error404} />
      </Switch>
    </Fragment>
  )
}

export default Routes
