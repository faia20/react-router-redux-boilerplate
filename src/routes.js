import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Home from './components/Home'
import Foo from './components/Foo'
import Test from './components/Test'
import Bar from './components/Bar'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route name='foo' path='foo' component={Foo} />
    <Route name='bar' path='bar' component={Bar} />
    <Route name='test' path='test' component={Test} />
  </Route>
)

export default routes
