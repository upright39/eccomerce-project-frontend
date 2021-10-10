import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './pages/Navbar'
import About from './pages/About'
import Basket from './pages/Basket'
import Home from './pages/Home'
import { useGlobalContext } from './context'

const App = () => {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App
