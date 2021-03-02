import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components'

import {
  Home,
  Cart,
  Checkout,
  Error,
  Products,
  PrivateRoute,
  AuthWrapper,
} from './pages'

// dbg2 - main front end

// dbg2 - wrap around router

function App() {
  return (
    <AuthWrapper>
      
      <Router>
        <Navbar />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route exact path='/products'>
            <Products />
          </Route>

          <PrivateRoute exact path='/checkout'>
            <Checkout />
          </PrivateRoute>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        
      </Router>
    </AuthWrapper>
  )
}

export default App
